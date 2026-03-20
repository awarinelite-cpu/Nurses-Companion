import { useState, useRef, useCallback } from 'react';

// ─── Streaming helper ────────────────────────────────────────────────────────
async function streamCarePlan(formData, onChunk, onDone, onError) {
  const { patient, diagnosis, age, ward, allergies, vitals, notes } = formData;

  const prompt = `Generate a nursing care plan for:
Patient: ${patient || 'Unknown'}
Age: ${age || 'Not specified'}
Ward: ${ward || 'General'}
Diagnosis: ${diagnosis}
Allergies: ${allergies || 'NKDA'}
Vitals: ${vitals || 'Not provided'}
Additional notes: ${notes || 'None'}`;

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        stream: true,
        system: `You are an expert clinical nurse educator generating structured nursing care plans.
Use EXACTLY these section headers in order:
## Nursing Diagnosis
## Goals / Expected Outcomes
## Nursing Interventions
## Rationale
## Evaluation Criteria
## Patient Education
Keep each section to 3-5 bullet points. Use • for bullets. Be specific and clinically accurate.
Do NOT include disclaimers or preambles — go straight into the care plan.`,
        messages: [{ role: 'user', content: prompt }],
      }),
    });

    if (!response.ok) {
      const err = await response.json();
      throw new Error(err?.error?.message || 'API error');
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let buffer = '';

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split('\n');
      buffer = lines.pop();

      for (const line of lines) {
        if (!line.startsWith('data: ')) continue;
        const raw = line.slice(6).trim();
        if (raw === '[DONE]') continue;
        try {
          const evt = JSON.parse(raw);
          if (evt.type === 'content_block_delta' && evt.delta?.text) {
            onChunk(evt.delta.text);
          }
        } catch (_) {}
      }
    }
    onDone();
  } catch (err) {
    onError(err.message);
  }
}

// ─── Markdown renderer ───────────────────────────────────────────────────────
const SECTION_COLORS = {
  'NURSING DIAGNOSIS': '#e05a5a',
  'GOALS / EXPECTED OUTCOMES': '#4a9ba8',
  'NURSING INTERVENTIONS': '#8b6347',
  'RATIONALE': '#5a7ea8',
  'EVALUATION CRITERIA': '#6b8b47',
  'PATIENT EDUCATION': '#9b6347',
};

function renderCarePlan(text) {
  const lines = text.split('\n');
  const elements = [];
  let key = 0;
  let currentSection = '';

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) {
      elements.push(<div key={key++} style={{ height: 8 }} />);
    } else if (trimmed.startsWith('## ')) {
      const sectionTitle = trimmed.slice(3).toUpperCase();
      currentSection = sectionTitle;
      const color = SECTION_COLORS[sectionTitle] || '#4a9ba8';
      elements.push(
        <div key={key++} style={{
          display: 'flex', alignItems: 'center', gap: 10,
          marginTop: 22, marginBottom: 8,
        }}>
          <div style={{
            width: 4, height: 18, borderRadius: 2,
            background: color, flexShrink: 0,
          }} />
          <h3 style={{
            fontFamily: "'Times New Roman', serif",
            fontSize: 12, fontWeight: 700,
            color: color,
            textTransform: 'uppercase', letterSpacing: 2,
            margin: 0,
          }}>
            {sectionTitle}
          </h3>
        </div>
      );
    } else if (trimmed.startsWith('• ') || trimmed.startsWith('- ')) {
      const sectionTitle = currentSection;
      const color = SECTION_COLORS[sectionTitle] || '#4a9ba8';
      elements.push(
        <div key={key++} style={{
          display: 'flex', gap: 10, marginBottom: 6,
          paddingLeft: 14, alignItems: 'flex-start',
        }}>
          <span style={{ color, fontSize: 14, marginTop: 1, flexShrink: 0 }}>•</span>
          <span style={{
            fontSize: 13.5, color: '#1e2d2f', lineHeight: 1.6,
            fontFamily: "'Times New Roman', serif",
          }}>
            {trimmed.slice(2)}
          </span>
        </div>
      );
    } else {
      elements.push(
        <p key={key++} style={{
          fontSize: 13.5, color: '#3d5a5f', lineHeight: 1.6,
          margin: '4px 0 4px 14px',
          fontFamily: "'Times New Roman', serif",
        }}>
          {trimmed}
        </p>
      );
    }
  }
  return elements;
}

// ─── Form field component ─────────────────────────────────────────────────────
function Field({ label, value, onChange, placeholder, required, multiline }) {
  const inputStyle = {
    width: '100%', boxSizing: 'border-box',
    background: 'rgba(255,255,255,0.7)',
    border: '1.5px solid rgba(74,155,168,0.25)',
    borderRadius: 10, padding: '10px 14px',
    fontSize: 13.5, color: '#1e2d2f',
    fontFamily: "'Times New Roman', serif",
    outline: 'none', resize: 'vertical',
    transition: 'border-color 0.2s',
  };

  return (
    <div style={{ marginBottom: 14 }}>
      <label style={{
        display: 'block', fontSize: 11,
        fontFamily: "'Fira Code', monospace",
        color: '#4a9ba8', letterSpacing: 1.5,
        textTransform: 'uppercase', marginBottom: 5,
      }}>
        {label}{required && <span style={{ color: '#e05a5a', marginLeft: 3 }}>*</span>}
      </label>
      {multiline ? (
        <textarea
          value={value}
          onChange={e => onChange(e.target.value)}
          placeholder={placeholder}
          rows={3}
          style={inputStyle}
          onFocus={e => e.target.style.borderColor = 'rgba(74,155,168,0.6)'}
          onBlur={e => e.target.style.borderColor = 'rgba(74,155,168,0.25)'}
        />
      ) : (
        <input
          type="text"
          value={value}
          onChange={e => onChange(e.target.value)}
          placeholder={placeholder}
          style={{ ...inputStyle, resize: undefined }}
          onFocus={e => e.target.style.borderColor = 'rgba(74,155,168,0.6)'}
          onBlur={e => e.target.style.borderColor = 'rgba(74,155,168,0.25)'}
        />
      )}
    </div>
  );
}

// ─── Print care plan ──────────────────────────────────────────────────────────
function printCarePlan(patientName, diagnosis, content) {
  const win = window.open('', '_blank');
  win.document.write(`
    <html><head><title>Care Plan - ${patientName}</title>
    <style>
      body { font-family: 'Times New Roman', serif; max-width: 720px; margin: 40px auto; color: #111; }
      h1 { font-size: 22px; margin-bottom: 4px; }
      .meta { font-size: 12px; color: #666; margin-bottom: 24px; }
      h3 { font-size: 12px; text-transform: uppercase; letter-spacing: 2px; color: #4a9ba8; border-bottom: 1px solid #ddd; padding-bottom: 4px; margin-top: 20px; }
      p, li { font-size: 13px; line-height: 1.6; }
      @media print { body { margin: 20px; } }
    </style></head><body>
    <h1>Nursing Care Plan: ${diagnosis}</h1>
    <div class="meta">Patient: ${patientName} &nbsp;|&nbsp; Generated: ${new Date().toLocaleString()}</div>
    <pre style="white-space:pre-wrap;font-family:inherit;font-size:13px">${content}</pre>
    <script>window.print();<\/script>
    </body></html>
  `);
  win.document.close();
}

// ─── Main component ──────────────────────────────────────────────────────────
const INITIAL_FORM = {
  patient: '', diagnosis: '', age: '', ward: '',
  allergies: '', vitals: '', notes: '',
};

export default function CarePlanPage() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [content, setContent] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | streaming | done | error
  const [error, setError] = useState('');
  const [elapsed, setElapsed] = useState(0);
  const startRef = useRef(Date.now());
  const timerRef = useRef(null);
  const resultRef = useRef(null);

  const setField = useCallback((field) => (val) => {
    setForm(prev => ({ ...prev, [field]: val }));
  }, []);

  const generate = useCallback(() => {
    if (!form.diagnosis.trim()) return;

    setContent('');
    setStatus('loading');
    setError('');
    startRef.current = Date.now();

    timerRef.current = setInterval(() => {
      setElapsed(((Date.now() - startRef.current) / 1000).toFixed(1));
    }, 100);

    streamCarePlan(
      form,
      (chunk) => {
        setStatus('streaming');
        setContent(prev => prev + chunk);
        // Auto-scroll to results on first chunk
        if (!content) {
          setTimeout(() => resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
        }
      },
      () => {
        clearInterval(timerRef.current);
        setElapsed(((Date.now() - startRef.current) / 1000).toFixed(1));
        setStatus('done');
      },
      (msg) => {
        clearInterval(timerRef.current);
        setError(msg);
        setStatus('error');
      }
    );
  }, [form, content]);

  const reset = () => {
    clearInterval(timerRef.current);
    setContent('');
    setStatus('idle');
    setError('');
    setElapsed(0);
  };

  const isRunning = status === 'loading' || status === 'streaming';
  const isDone = status === 'done';

  return (
    <div style={{ maxWidth: 760, margin: '0 auto', padding: '0 16px 48px', animation: 'fadeUp 0.3s ease both' }}>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes shimmer {
          0%{background-position:-400px 0} 100%{background-position:400px 0}
        }
        .sk {
          background: linear-gradient(90deg,rgba(74,155,168,0.08) 25%,rgba(74,155,168,0.18) 50%,rgba(74,155,168,0.08) 75%);
          background-size: 400px 100%; animation: shimmer 1.4s infinite;
          border-radius: 6px; margin-bottom: 10px;
        }
      `}</style>

      {/* Page header */}
      <div style={{ marginBottom: 24 }}>
        <div style={{ fontSize: 11, fontFamily: "'Fira Code', monospace", color: '#4a9ba8', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 6 }}>
          AI-Assisted
        </div>
        <h1 style={{ fontFamily: "'Times New Roman', serif", fontSize: 28, fontWeight: 700, color: '#1e2d2f', margin: 0 }}>
          Nursing Care Plan Generator
        </h1>
        <p style={{ fontFamily: "'Times New Roman', serif", color: '#3d5a5f', fontSize: 14, marginTop: 6 }}>
          Fill in the patient details below. Your care plan will appear within seconds.
        </p>
      </div>

      {/* Form card */}
      <div style={{
        background: 'rgba(255,255,255,0.88)', backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255,255,255,0.6)',
        borderTop: '4px solid #4a9ba8',
        borderRadius: 20, padding: '24px 28px',
        boxShadow: '0 4px 32px rgba(0,0,0,0.10)',
        marginBottom: 20,
      }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 20px' }}>
          <Field label="Patient Name" value={form.patient} onChange={setField('patient')} placeholder="e.g. Mrs. Adaeze Okafor" />
          <Field label="Age" value={form.age} onChange={setField('age')} placeholder="e.g. 58 years" />
          <Field label="Diagnosis / Condition" required value={form.diagnosis} onChange={setField('diagnosis')} placeholder="e.g. Type 2 Diabetes Mellitus with hyperglycaemia" />
          <Field label="Ward / Unit" value={form.ward} onChange={setField('ward')} placeholder="e.g. Medical Ward, ICU, Maternity" />
          <Field label="Known Allergies" value={form.allergies} onChange={setField('allergies')} placeholder="e.g. Penicillin — rash; NKDA" />
          <Field label="Current Vitals" value={form.vitals} onChange={setField('vitals')} placeholder="e.g. BP 160/95, RBS 18.2, SpO2 96%" />
        </div>
        <Field label="Additional Clinical Notes" value={form.notes} onChange={setField('notes')} placeholder="e.g. Patient is on Metformin 500mg BD; complains of polyuria and fatigue" multiline />

        <div style={{ display: 'flex', gap: 12, marginTop: 4, flexWrap: 'wrap' }}>
          <button
            onClick={generate}
            disabled={isRunning || !form.diagnosis.trim()}
            style={{
              background: form.diagnosis.trim() && !isRunning ? '#4a9ba8' : 'rgba(74,155,168,0.35)',
              color: '#fff', border: 'none', borderRadius: 12,
              padding: '12px 32px', fontSize: 14,
              fontFamily: "'Times New Roman', serif", fontWeight: 700,
              cursor: form.diagnosis.trim() && !isRunning ? 'pointer' : 'not-allowed',
              transition: 'all 0.2s',
              display: 'flex', alignItems: 'center', gap: 8,
            }}
          >
            {isRunning ? (
              <>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#fff', animation: 'pulse 0.8s infinite', display: 'inline-block' }} />
                Generating… {elapsed}s
              </>
            ) : isDone ? '↻ Regenerate' : '⚡ Generate Care Plan'}
          </button>

          {(content || status !== 'idle') && (
            <button onClick={reset} style={{
              background: 'none', border: '1.5px solid rgba(139,99,71,0.3)',
              borderRadius: 12, color: '#8b6347',
              padding: '12px 24px', fontSize: 13,
              fontFamily: "'Times New Roman', serif", fontWeight: 700, cursor: 'pointer',
            }}>
              ✕ Clear
            </button>
          )}

          {isDone && content && (
            <button onClick={() => printCarePlan(form.patient || 'Patient', form.diagnosis, content)} style={{
              background: 'none', border: '1.5px solid rgba(74,155,168,0.3)',
              borderRadius: 12, color: '#4a9ba8',
              padding: '12px 24px', fontSize: 13,
              fontFamily: "'Times New Roman', serif", fontWeight: 700, cursor: 'pointer',
            }}>
              🖨 Print / Save PDF
            </button>
          )}
        </div>
      </div>

      {/* Results */}
      {(status !== 'idle') && (
        <div ref={resultRef} style={{
          background: 'rgba(255,255,255,0.88)', backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.6)',
          borderLeft: '4px solid #4a9ba8',
          borderRadius: 20, padding: '24px 28px',
          boxShadow: '0 4px 32px rgba(0,0,0,0.10)',
          animation: 'fadeUp 0.25s ease both',
        }}>
          {/* Result header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20, flexWrap: 'wrap', gap: 8 }}>
            <div style={{ fontFamily: "'Times New Roman', serif", fontWeight: 700, color: '#1e2d2f', fontSize: 16 }}>
              {form.diagnosis || 'Care Plan'}
              {form.patient && (
                <span style={{ fontSize: 12, color: '#7a9ea4', fontWeight: 400, marginLeft: 10 }}>
                  — {form.patient}
                </span>
              )}
            </div>
            <div style={{
              fontSize: 11, fontFamily: "'Fira Code', monospace",
              color: isDone ? '#4a9ba8' : '#8b6347',
              background: isDone ? 'rgba(74,155,168,0.08)' : 'rgba(139,99,71,0.08)',
              border: `1px solid ${isDone ? 'rgba(74,155,168,0.2)' : 'rgba(139,99,71,0.2)'}`,
              borderRadius: 20, padding: '4px 12px',
              display: 'flex', alignItems: 'center', gap: 6,
            }}>
              {!isDone && <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#8b6347', display: 'inline-block', animation: 'pulse 0.8s infinite' }} />}
              {isDone ? `✓ Done in ${elapsed}s` : `Generating… ${elapsed}s`}
            </div>
          </div>

          {/* Skeleton before first chunk */}
          {status === 'loading' && (
            <div>
              {[['38%', 13], ['100%', 10], ['90%', 10], ['75%', 10],
                ['42%', 13], ['100%', 10], ['85%', 10],
                ['35%', 13], ['100%', 10], ['88%', 10], ['65%', 10],
              ].map(([w, h], i) => (
                <div key={i} className="sk" style={{ width: w, height: h }} />
              ))}
            </div>
          )}

          {/* Streamed content */}
          {content && (
            <div>
              {renderCarePlan(content)}
              {status === 'streaming' && (
                <span style={{
                  display: 'inline-block', width: 2, height: 15,
                  background: '#4a9ba8', marginLeft: 2, verticalAlign: 'middle',
                  animation: 'blink 0.7s infinite',
                }} />
              )}
            </div>
          )}

          {/* Error */}
          {status === 'error' && (
            <div style={{ textAlign: 'center', padding: '32px 0' }}>
              <div style={{ fontSize: 32, marginBottom: 10 }}>⚠️</div>
              <div style={{ fontFamily: "'Times New Roman', serif", fontWeight: 700, color: '#1e2d2f', marginBottom: 6 }}>
                Generation failed
              </div>
              <div style={{ fontSize: 12, color: '#7a9ea4', marginBottom: 18 }}>{error}</div>
              <button onClick={generate} style={{
                background: '#4a9ba8', color: '#fff', border: 'none', borderRadius: 12,
                padding: '10px 24px', fontSize: 13, cursor: 'pointer',
                fontFamily: "'Times New Roman', serif", fontWeight: 700,
              }}>
                Try Again
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
