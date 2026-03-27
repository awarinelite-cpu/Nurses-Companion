import { useState, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { autosaveCarePlan } from '../services/autosave';

const NANDA_DIAGNOSES = [
  'Acute Pain', 'Chronic Pain', 'Risk for Infection', 'Anxiety',
  'Impaired Physical Mobility', 'Deficient Knowledge', 'Excess Fluid Volume',
  'Deficient Fluid Volume', 'Fatigue', 'Ineffective Airway Clearance',
  'Impaired Gas Exchange', 'Ineffective Breathing Pattern',
  'Decreased Cardiac Output', 'Activity Intolerance',
  'Imbalanced Nutrition: Less Than Body Requirements',
  'Imbalanced Nutrition: More Than Body Requirements',
  'Constipation', 'Diarrhea', 'Urinary Retention', 'Impaired Urinary Elimination',
  'Impaired Skin Integrity', 'Risk for Impaired Skin Integrity',
  'Impaired Tissue Integrity', 'Risk for Falls', 'Risk for Aspiration',
  'Ineffective Thermoregulation', 'Hyperthermia', 'Hypothermia',
  'Acute Confusion', 'Chronic Confusion', 'Impaired Memory',
  'Disturbed Sleep Pattern', 'Insomnia', 'Social Isolation',
  'Ineffective Coping', 'Compromised Family Coping', 'Grieving',
  'Risk for Suicide', 'Risk for Self-Harm', 'Hopelessness', 'Powerlessness',
  'Disturbed Body Image', 'Low Self-Esteem',
  'Ineffective Self-Health Management', 'Nausea', 'Impaired Swallowing',
  'Risk for Bleeding', 'Risk for Shock', 'Risk for Pressure Ulcer',
  'Ineffective Peripheral Tissue Perfusion', 'Risk for Deep Vein Thrombosis',
  'Caregiver Role Strain', 'Spiritual Distress', 'Risk for Electrolyte Imbalance',
];

const QUICK_CHIPS = [
  'Acute Pain', 'Risk for Infection', 'Anxiety',
  'Impaired Physical Mobility', 'Deficient Knowledge',
  'Excess Fluid Volume', 'Fatigue', 'Ineffective Airway Clearance',
];

async function streamCarePlan(diagnosis, onChunk, onDone, onError) {
  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1200,
        stream: true,
        system: `You are an expert clinical nurse educator generating structured NANDA-I nursing care plans.
Use EXACTLY these section headers in order:
## Nursing Diagnosis
## Goals / Expected Outcomes
## Nursing Interventions
## Rationale
## Evaluation Criteria
## Patient Education
Keep each section to 3-5 bullet points. Use • for bullets. Be specific and clinically accurate.
Do NOT include disclaimers or preambles — go straight into the care plan.`,
        messages: [{ role: 'user', content: `Generate a comprehensive nursing care plan for: "${diagnosis}"` }],
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
          if (evt.type === 'content_block_delta' && evt.delta?.text) onChunk(evt.delta.text);
        } catch (_) {}
      }
    }
    onDone();
  } catch (err) {
    onError(err.message);
  }
}

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
        <div key={key++} style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 22, marginBottom: 8 }}>
          <div style={{ width: 4, height: 18, borderRadius: 2, background: color, flexShrink: 0 }} />
          <h3 style={{ fontFamily: "'Times New Roman', serif", fontSize: 12, fontWeight: 700, color, textTransform: 'uppercase', letterSpacing: 2, margin: 0 }}>
            {sectionTitle}
          </h3>
        </div>
      );
    } else if (trimmed.startsWith('• ') || trimmed.startsWith('- ')) {
      const color = SECTION_COLORS[currentSection] || '#4a9ba8';
      elements.push(
        <div key={key++} style={{ display: 'flex', gap: 10, marginBottom: 6, paddingLeft: 14, alignItems: 'flex-start' }}>
          <span style={{ color, fontSize: 14, marginTop: 1, flexShrink: 0 }}>•</span>
          <span style={{ fontSize: 13.5, color: '#1e2d2f', lineHeight: 1.6, fontFamily: "'Times New Roman', serif" }}>
            {trimmed.slice(2)}
          </span>
        </div>
      );
    } else {
      elements.push(
        <p key={key++} style={{ fontSize: 13.5, color: '#3d5a5f', lineHeight: 1.6, margin: '4px 0 4px 14px', fontFamily: "'Times New Roman', serif" }}>
          {trimmed}
        </p>
      );
    }
  }
  return elements;
}

function printCarePlan(diagnosis, content) {
  const win = window.open('', '_blank');
  win.document.write(`<html><head><title>Care Plan - ${diagnosis}</title>
    <style>body{font-family:'Times New Roman',serif;max-width:720px;margin:40px auto;color:#111}
    h1{font-size:22px;margin-bottom:4px}.meta{font-size:12px;color:#666;margin-bottom:24px}
    h3{font-size:12px;text-transform:uppercase;letter-spacing:2px;color:#4a9ba8;border-bottom:1px solid #ddd;padding-bottom:4px;margin-top:20px}
    p,li{font-size:13px;line-height:1.6}@media print{body{margin:20px}}</style>
    </head><body><h1>Nursing Care Plan: ${diagnosis}</h1>
    <div class="meta">Generated: ${new Date().toLocaleString()}</div>
    <pre style="white-space:pre-wrap;font-family:inherit;font-size:13px">${content}</pre>
    <script>window.print();<\/script></body></html>`);
  win.document.close();
}

export default function CarePlanView({ showToast, onLoginNeeded }) {
  const navigate = useNavigate();
  const [diagnosis, setDiagnosis] = useState('');
  const [showNanda, setShowNanda] = useState(false);
  const [nandaSearch, setNandaSearch] = useState('');
  const [content, setContent] = useState('');
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');
  const [elapsed, setElapsed] = useState(0);
  const startRef = useRef(Date.now());
  const timerRef = useRef(null);
  const resultRef = useRef(null);

  const filteredNanda = NANDA_DIAGNOSES.filter(d =>
    d.toLowerCase().includes(nandaSearch.toLowerCase())
  );

  const generate = useCallback((dx) => {
    const term = (dx || diagnosis).trim();
    if (!term) return;
    if (dx) setDiagnosis(dx);
    setShowNanda(false);
    setNandaSearch('');
    setContent('');
    setStatus('loading');
    setError('');
    startRef.current = Date.now();
    timerRef.current = setInterval(() => {
      setElapsed(((Date.now() - startRef.current) / 1000).toFixed(1));
    }, 100);
    streamCarePlan(
      term,
      (chunk) => {
        setStatus('streaming');
        setContent(prev => {
          if (!prev) setTimeout(() => resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
          return prev + chunk;
        });
      },
      () => {
        clearInterval(timerRef.current);
        const secs = ((Date.now() - startRef.current) / 1000).toFixed(1);
        setElapsed(secs);
        setStatus('done');
        setContent(finalContent => {
          autosaveCarePlan({ formData: { diagnosis: term }, content: finalContent, elapsedSecs: parseFloat(secs) });
          return finalContent;
        });
      },
      (msg) => {
        clearInterval(timerRef.current);
        setError(msg);
        setStatus('error');
      }
    );
  }, [diagnosis]);

  const reset = () => {
    clearInterval(timerRef.current);
    setContent('');
    setStatus('idle');
    setError('');
    setElapsed(0);
    setDiagnosis('');
  };

  const isRunning = status === 'loading' || status === 'streaming';
  const isDone = status === 'done';

  return (
    <div style={{ minHeight: '100vh', animation: 'fadeUp 0.3s ease both' }}>
      <style>{`
        @keyframes fadeUp { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:translateY(0)} }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes shimmer { 0%{background-position:-400px 0} 100%{background-position:400px 0} }
        .sk { background:linear-gradient(90deg,rgba(74,155,168,0.08) 25%,rgba(74,155,168,0.18) 50%,rgba(74,155,168,0.08) 75%); background-size:400px 100%; animation:shimmer 1.4s infinite; border-radius:6px; margin-bottom:10px; }
        .chip-btn:hover { background:rgba(255,255,255,0.3) !important; }
        .nanda-item:hover { background:rgba(74,155,168,0.1) !important; color:#1e6a72 !important; }
        .nav-btn-inactive:hover { background:rgba(255,255,255,0.25) !important; }
      `}</style>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <div style={{ textAlign: 'center', padding: '48px 20px 36px' }}>

        {/* Badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center',
          background: 'rgba(255,255,255,0.16)', backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255,255,255,0.32)', borderRadius: 30,
          padding: '9px 24px', marginBottom: 30,
        }}>
          {['EVIDENCE-BASED', 'NANDA-I COMPLIANT', 'AI-POWERED'].map((t, i) => (
            <span key={t} style={{ display: 'flex', alignItems: 'center' }}>
              {i > 0 && <span style={{ color: 'rgba(255,255,255,0.35)', margin: '0 12px', fontSize: 10 }}>·</span>}
              <span style={{ fontSize: 10, letterSpacing: 2.5, fontFamily: "'Fira Code', monospace", color: 'rgba(255,255,255,0.82)', textTransform: 'uppercase' }}>{t}</span>
            </span>
          ))}
        </div>

        {/* Title */}
        <h1 style={{
          fontFamily: "'Times New Roman', serif", fontStyle: 'italic',
          fontSize: 'clamp(44px, 7vw, 74px)', fontWeight: 700,
          color: '#fff', margin: '0 0 14px', letterSpacing: -1,
          textShadow: '0 2px 24px rgba(0,0,0,0.18)',
        }}>
          NurseCare AI
        </h1>

        {/* Subtitle */}
        <p style={{ fontFamily: "'Times New Roman', serif", fontSize: 16, color: 'rgba(255,255,255,0.68)', margin: '0 0 38px' }}>
          Generate evidence-based nursing care plans · Drug reference · Clinical lab guide
        </p>

        {/* Nav pills — Care Plans active */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginBottom: 42, flexWrap: 'wrap' }}>
          {/* ACTIVE */}
          <button style={{
            background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255,255,255,0.5)', borderRadius: 30,
            padding: '12px 30px', fontSize: 14,
            fontFamily: "'Times New Roman', serif", fontWeight: 700,
            color: '#1e6a72', cursor: 'default',
            boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
          }}>📋 Care Plans</button>

          <button
            onClick={() => navigate('/drugs')}
            className="nav-btn-inactive"
            style={{
              background: 'rgba(255,255,255,0.14)', backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.32)', borderRadius: 30,
              padding: '12px 30px', fontSize: 14,
              fontFamily: "'Times New Roman', serif", fontWeight: 700,
              color: '#fff', cursor: 'pointer', transition: 'all 0.2s',
            }}
          >💊 Drug Reference</button>

          <button
            onClick={() => navigate('/labs')}
            className="nav-btn-inactive"
            style={{
              background: 'rgba(255,255,255,0.14)', backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.32)', borderRadius: 30,
              padding: '12px 30px', fontSize: 14,
              fontFamily: "'Times New Roman', serif", fontWeight: 700,
              color: '#fff', cursor: 'pointer', transition: 'all 0.2s',
            }}
          >🔬 Lab Guide</button>
        </div>

        {/* ── Search input + NANDA dropdown ─────────────────── */}
        <div style={{ maxWidth: 640, margin: '0 auto', position: 'relative' }}>

          {/* Search bar */}
          <div style={{
            display: 'flex', alignItems: 'center',
            background: 'rgba(255,255,255,0.96)', backdropFilter: 'blur(20px)',
            border: '1.5px solid rgba(255,255,255,0.8)',
            borderRadius: 16, padding: '5px 6px 5px 18px',
            boxShadow: '0 8px 40px rgba(0,0,0,0.16)', marginBottom: 12,
          }}>
            <span style={{ fontSize: 18, marginRight: 10, opacity: 0.4 }}>⊕</span>
            <input
              value={diagnosis}
              onChange={e => setDiagnosis(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && !isRunning && generate()}
              placeholder="Enter nursing diagnosis (e.g. Acute Pain)"
              style={{
                flex: 1, background: 'transparent', border: 'none',
                fontSize: 15, fontFamily: "'Times New Roman', serif", fontWeight: 700,
                color: '#1e2d2f', outline: 'none', padding: '12px 0',
              }}
            />
            {diagnosis && !isRunning && (
              <button onClick={reset} style={{ background: 'none', border: 'none', fontSize: 17, cursor: 'pointer', color: '#bbb', padding: '0 6px' }}>✕</button>
            )}
            <button
              onClick={() => generate()}
              disabled={isRunning || !diagnosis.trim()}
              style={{
                background: diagnosis.trim() && !isRunning ? 'linear-gradient(135deg,#4a9ba8,#2d7a87)' : 'rgba(74,155,168,0.3)',
                color: '#fff', border: 'none', borderRadius: 12,
                padding: '12px 22px', fontSize: 14,
                fontFamily: "'Times New Roman', serif", fontWeight: 700,
                cursor: diagnosis.trim() && !isRunning ? 'pointer' : 'not-allowed',
                transition: 'all 0.2s', whiteSpace: 'nowrap',
                display: 'flex', alignItems: 'center', gap: 8,
              }}
            >
              {isRunning
                ? <><span style={{ width: 8, height: 8, borderRadius: '50%', background: '#fff', animation: 'pulse 0.8s infinite', display: 'inline-block' }} />{elapsed}s</>
                : isDone ? '↻ Regenerate' : '⚡ Generate'}
            </button>
          </div>

          {/* NANDA Browse dropdown */}
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => setShowNanda(v => !v)}
              style={{
                width: '100%',
                background: 'rgba(255,255,255,0.14)', backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.28)', borderRadius: 14,
                padding: '14px 20px', fontSize: 14,
                fontFamily: "'Times New Roman', serif", fontWeight: 700,
                color: '#fff', cursor: 'pointer', transition: 'background 0.2s',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
              }}
            >
              📋 Browse NANDA-I Diagnoses
              <span style={{ fontSize: 12, opacity: 0.65, display: 'inline-block', transition: 'transform 0.2s', transform: showNanda ? 'rotate(180deg)' : 'none' }}>▾</span>
            </button>

            {showNanda && (
              <div style={{
                position: 'absolute', top: 'calc(100% + 8px)', left: 0, right: 0, zIndex: 300,
                background: 'rgba(255,255,255,0.98)', backdropFilter: 'blur(24px)',
                border: '1px solid rgba(74,155,168,0.2)', borderRadius: 16,
                boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
                overflow: 'hidden', display: 'flex', flexDirection: 'column',
              }}>
                <div style={{ padding: '12px 14px', borderBottom: '1px solid rgba(74,155,168,0.1)', flexShrink: 0 }}>
                  <input
                    autoFocus
                    value={nandaSearch}
                    onChange={e => setNandaSearch(e.target.value)}
                    placeholder="Search diagnoses…"
                    style={{
                      width: '100%', boxSizing: 'border-box',
                      background: 'rgba(74,155,168,0.07)',
                      border: '1px solid rgba(74,155,168,0.18)',
                      borderRadius: 10, padding: '9px 14px',
                      fontSize: 13, fontFamily: "'Times New Roman', serif",
                      color: '#1e2d2f', outline: 'none',
                    }}
                  />
                </div>
                <div style={{ overflowY: 'auto', maxHeight: 280 }}>
                  {filteredNanda.map(dx => (
                    <div
                      key={dx}
                      className="nanda-item"
                      onClick={() => generate(dx)}
                      style={{
                        padding: '12px 20px', cursor: 'pointer',
                        fontSize: 14, fontFamily: "'Times New Roman', serif",
                        color: '#1e2d2f', borderBottom: '1px solid rgba(74,155,168,0.06)',
                        transition: 'all 0.15s', textAlign: 'left',
                      }}
                    >
                      {dx}
                    </div>
                  ))}
                  {filteredNanda.length === 0 && (
                    <div style={{ padding: 28, textAlign: 'center', color: '#bbb', fontSize: 13, fontFamily: "'Fira Code', monospace" }}>
                      No diagnoses found
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Quick chips */}
        {status === 'idle' && (
          <div style={{ maxWidth: 700, margin: '22px auto 0', display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center' }}>
            {QUICK_CHIPS.map(chip => (
              <button
                key={chip}
                onClick={() => generate(chip)}
                className="chip-btn"
                style={{
                  background: 'rgba(255,255,255,0.17)', backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.32)', borderRadius: 30,
                  padding: '9px 20px', fontSize: 13,
                  fontFamily: "'Times New Roman', serif", fontWeight: 700,
                  color: '#fff', cursor: 'pointer', transition: 'all 0.2s',
                }}
              >
                {chip}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* ── Results ───────────────────────────────────────────── */}
      {status !== 'idle' && (
        <div ref={resultRef} style={{ maxWidth: 760, margin: '0 auto 60px', padding: '0 16px' }}>
          <div style={{
            background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.6)',
            borderLeft: '4px solid #4a9ba8',
            borderRadius: 20, padding: '24px 28px',
            boxShadow: '0 4px 32px rgba(0,0,0,0.10)',
            animation: 'fadeUp 0.25s ease both',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20, flexWrap: 'wrap', gap: 8 }}>
              <div style={{ fontFamily: "'Times New Roman', serif", fontWeight: 700, color: '#1e2d2f', fontSize: 17 }}>
                {diagnosis || 'Care Plan'}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
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
                {isDone && (
                  <>
                    <button onClick={() => printCarePlan(diagnosis, content)} style={{ background: 'none', border: '1px solid rgba(74,155,168,0.3)', borderRadius: 10, color: '#4a9ba8', fontSize: 11, cursor: 'pointer', padding: '4px 12px', fontFamily: "'Fira Code', monospace" }}>🖨 Print</button>
                    <button onClick={reset} style={{ background: 'none', border: '1px solid rgba(139,99,71,0.3)', borderRadius: 10, color: '#8b6347', fontSize: 11, cursor: 'pointer', padding: '4px 12px', fontFamily: "'Fira Code', monospace" }}>✕ Clear</button>
                  </>
                )}
              </div>
            </div>

            {status === 'loading' && (
              <div>
                {[['38%',13],['100%',10],['90%',10],['75%',10],['42%',13],['100%',10],['85%',10],['35%',13],['100%',10],['88%',10],['65%',10]].map(([w,h],i) => (
                  <div key={i} className="sk" style={{ width: w, height: h }} />
                ))}
              </div>
            )}

            {content && (
              <div>
                {renderCarePlan(content)}
                {status === 'streaming' && (
                  <span style={{ display: 'inline-block', width: 2, height: 15, background: '#4a9ba8', marginLeft: 2, verticalAlign: 'middle', animation: 'blink 0.7s infinite' }} />
                )}
              </div>
            )}

            {status === 'error' && (
              <div style={{ textAlign: 'center', padding: '32px 0' }}>
                <div style={{ fontSize: 32, marginBottom: 10 }}>⚠️</div>
                <div style={{ fontFamily: "'Times New Roman', serif", fontWeight: 700, color: '#1e2d2f', marginBottom: 6 }}>Generation failed</div>
                <div style={{ fontSize: 12, color: '#7a9ea4', marginBottom: 18 }}>{error}</div>
                <button onClick={() => generate()} style={{ background: '#4a9ba8', color: '#fff', border: 'none', borderRadius: 12, padding: '10px 24px', fontSize: 13, cursor: 'pointer', fontFamily: "'Times New Roman', serif", fontWeight: 700 }}>Try Again</button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
