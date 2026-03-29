// ============================================================
// server.js  —  Lightweight Express proxy for Anthropic API
// Place in project ROOT (same level as package.json)
//
// Why this exists:
//   Browsers cannot call api.anthropic.com directly (CORS).
//   This proxy runs on the same Render service as the frontend,
//   forwards streaming requests to Anthropic, and keeps the
//   API key safely on the server side (never in the browser).
//
// Setup:
//   1. Add ANTHROPIC_API_KEY to Render environment variables
//   2. Update package.json scripts (see bottom of this file)
//   3. Update DrugDetailView.jsx to call /api/drug-profile
// ============================================================

const express = require('express');
const https = require('https');
const path = require('path');

const app = express();
app.use(express.json());

// ─── Serve the built React app ───────────────────────────────
// Vite builds to 'dist/', Create React App builds to 'build/'
// Adjust the folder name to match your setup
const STATIC_DIR = process.env.STATIC_DIR || 'dist';
app.use(express.static(path.join(__dirname, STATIC_DIR)));

// ─── API proxy endpoint ──────────────────────────────────────
app.post('/api/drug-profile', (req, res) => {
  const apiKey = process.env.ANTHROPIC_API_KEY;

  if (!apiKey) {
    return res.status(500).json({
      error: 'ANTHROPIC_API_KEY environment variable is not set on the server.',
    });
  }

  const { drugName } = req.body;

  if (!drugName || typeof drugName !== 'string' || !drugName.trim()) {
    return res.status(400).json({ error: 'drugName is required.' });
  }

  // Build the Anthropic request payload
  const payload = JSON.stringify({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 1024,
    stream: true,
    system: `You are a clinical pharmacology reference for nurses and doctors in Nigeria and West Africa.
Respond ONLY with a concise, structured drug profile using these EXACT section headers (no extra text before or after):

## Overview
## Indications
## Dosage & Route
## Mechanism
## Side Effects
## Nursing Points
## Contraindications

Rules:
- Use • for bullet points
- Keep each section to 3-5 bullets
- Be clinical, precise, and practical
- Include Nigerian brand names or NAFDAC context where relevant
- Dosage should include both adult and paediatric where applicable
- Nursing Points must highlight the most critical safety actions`,
    messages: [
      {
        role: 'user',
        content: `Provide a full clinical drug profile for: ${drugName.trim()}`,
      },
    ],
  });

  // Forward request to Anthropic with streaming
  const options = {
    hostname: 'api.anthropic.com',
    path: '/v1/messages',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(payload),
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
    },
  };

  // Set SSE headers so the browser can read the stream
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.setHeader('X-Accel-Buffering', 'no'); // Disable nginx buffering on Render

  const proxyReq = https.request(options, (proxyRes) => {
    // If Anthropic returns an error status, relay it
    if (proxyRes.statusCode !== 200) {
      let errBody = '';
      proxyRes.on('data', (chunk) => { errBody += chunk; });
      proxyRes.on('end', () => {
        try {
          const parsed = JSON.parse(errBody);
          res.write(`data: ${JSON.stringify({ type: 'error', error: parsed?.error?.message || 'Anthropic API error' })}\n\n`);
        } catch {
          res.write(`data: ${JSON.stringify({ type: 'error', error: `API returned status ${proxyRes.statusCode}` })}\n\n`);
        }
        res.end();
      });
      return;
    }

    // Pipe Anthropic's SSE stream directly to the browser
    proxyRes.on('data', (chunk) => {
      res.write(chunk);
    });

    proxyRes.on('end', () => {
      res.end();
    });

    proxyRes.on('error', (err) => {
      res.write(`data: ${JSON.stringify({ type: 'error', error: err.message })}\n\n`);
      res.end();
    });
  });

  proxyReq.on('error', (err) => {
    res.write(`data: ${JSON.stringify({ type: 'error', error: err.message })}\n\n`);
    res.end();
  });

  // Handle client disconnect
  req.on('close', () => {
    proxyReq.destroy();
  });

  proxyReq.write(payload);
  proxyReq.end();
});

// ─── Catch-all: send React app for client-side routing ───────
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, STATIC_DIR, 'index.html'));
});

// ─── Start server ─────────────────────────────────────────────
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`✅ Proxy server running on port ${PORT}`);
  console.log(`   Serving static files from: ${STATIC_DIR}/`);
  console.log(`   API key configured: ${process.env.ANTHROPIC_API_KEY ? 'YES' : 'NO ⚠️'}`);
});
