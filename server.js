// ============================================================
// server.js  —  ESM version (required because package.json
//               has "type": "module")
//
// Place in project ROOT alongside package.json
// ============================================================

import express from 'express';
import https from 'https';
import path from 'path';
import { fileURLToPath } from 'url';

// __dirname is not available in ESM — recreate it
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());

// ─── Serve the Vite build output ─────────────────────────────
const STATIC_DIR = process.env.STATIC_DIR || 'dist';
app.use(express.static(path.join(__dirname, STATIC_DIR)));

// ─── API proxy endpoint ───────────────────────────────────────
app.post('/api/drug-profile', (req, res) => {
  const apiKey = process.env.ANTHROPIC_API_KEY;

  if (!apiKey) {
    return res.status(500).json({
      error: 'ANTHROPIC_API_KEY is not set in the server environment variables.',
    });
  }

  const { drugName } = req.body;

  if (!drugName || typeof drugName !== 'string' || !drugName.trim()) {
    return res.status(400).json({ error: 'drugName is required.' });
  }

  const payload = JSON.stringify({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 1024,
    stream: true,
    system: `You are a clinical pharmacology reference for nurses and doctors in Nigeria and West Africa.
Respond ONLY with a concise, structured drug profile using these EXACT section headers:

## Overview
## Indications
## Dosage & Route
## Mechanism
## Side Effects
## Nursing Points
## Contraindications

Rules:
- Use • for bullet points
- 3–5 bullets per section
- Be clinical, precise, and practical
- Include Nigerian/West African brand names or NAFDAC context where relevant
- Dosage must include adult and paediatric doses where applicable
- Nursing Points must highlight the most critical safety actions first`,
    messages: [
      {
        role: 'user',
        content: `Provide a full clinical drug profile for: ${drugName.trim()}`,
      },
    ],
  });

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

  // SSE headers so the browser can read the stream in real time
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.setHeader('X-Accel-Buffering', 'no'); // Prevents Render/nginx from buffering

  const proxyReq = https.request(options, (proxyRes) => {
    // Non-200 from Anthropic → parse and relay the error
    if (proxyRes.statusCode !== 200) {
      let errBody = '';
      proxyRes.on('data', (chunk) => { errBody += chunk; });
      proxyRes.on('end', () => {
        try {
          const parsed = JSON.parse(errBody);
          res.write(
            `data: ${JSON.stringify({ type: 'error', error: parsed?.error?.message || 'Anthropic API error' })}\n\n`
          );
        } catch {
          res.write(
            `data: ${JSON.stringify({ type: 'error', error: `API returned status ${proxyRes.statusCode}` })}\n\n`
          );
        }
        res.end();
      });
      return;
    }

    // Pipe Anthropic's SSE stream directly to the browser response
    proxyRes.on('data', (chunk) => res.write(chunk));
    proxyRes.on('end', () => res.end());
    proxyRes.on('error', (err) => {
      res.write(`data: ${JSON.stringify({ type: 'error', error: err.message })}\n\n`);
      res.end();
    });
  });

  proxyReq.on('error', (err) => {
    res.write(`data: ${JSON.stringify({ type: 'error', error: err.message })}\n\n`);
    res.end();
  });

  // Clean up if the browser disconnects mid-stream
  req.on('close', () => proxyReq.destroy());

  proxyReq.write(payload);
  proxyReq.end();
});

// ─── Catch-all: let React Router handle client-side routes ────
app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, STATIC_DIR, 'index.html'));
});

// ─── Start ────────────────────────────────────────────────────
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`✅  NurseCare AI server running on port ${PORT}`);
  console.log(`    Static files : ${STATIC_DIR}/`);
  console.log(`    API key set  : ${process.env.ANTHROPIC_API_KEY ? 'YES ✓' : 'NO ✗  — set ANTHROPIC_API_KEY in Render'}`);
});
