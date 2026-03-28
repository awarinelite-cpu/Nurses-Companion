import { useState, useEffect, useRef, useCallback } from 'react';
import { autosaveDrugProfile } from '../services/autosave';
import { useParams, useNavigate } from 'react-router-dom';
import { getOfflineProfile, hasOfflineProfile } from '../data/drugProfiles';

// ─── Streaming helper (AI fallback) ──────────────────────────
async function streamDrugProfile(drugName, onChunk, onDone, onError) {
  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        stream: true,
        system: `You are a clinical pharmacology reference for nurses and doctors. 
Respond ONLY with a concise, structured drug profile using these exact section headers:
## Overview
## Indications
## Dosage & Route
## Mechanism
## Side Effects
## Nursing Points
## Contraindications
Keep each section brief (2-4 bullet points). Use • for bullets. Be clinical and precise.`,
        messages: [
          {
            role: 'user',
            content: `Provide a clinical drug profile for: ${drugName}`,
          },
        ],
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

// ─── Markdown-lite renderer (for AI content) ─────────────────
function renderMarkdown(text) {
  const lines = text.split('\n');
  const elements = [];
  let key = 0;

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) {
      elements.push(<div key={key++} style={{ height: 6 }} />);
    } else if (trimmed.startsWith('## ')) {
      elements.push(
        <h3 key={key++} style={{
          fontFamily: "'Times New Roman', serif",
          fontSize: 13,
          fontWeight: 700,
          color: '#4a9ba8',
          textTransform: 'uppercase',
          letterSpacing: 2,
          marginTop: 20,
          marginBottom: 6,
          borderBottom: '1px solid rgba(74,155,168,0.2)',
          paddingBottom: 4,
        }}>
          {trimmed.slice(3)}
        </h3>
      );
    } else if (trimmed.startsWith('• ') || trimmed.startsWith('- ')) {
      elements.push(
        <div key={key++} style={{
          display: 'flex', gap: 8, marginBottom: 5, alignItems: 'flex-start',
        }}>
          <span style={{ color: '#8b6347', fontSize: 14, marginTop: 1, flexShrink: 0 }}>•</span>
          <span style={{ fontSize: 13.5, color: '#1e2d2f', lineHeight: 1.55,
            fontFamily: "'Times New Roman', serif" }}>
            {trimmed.slice(2)}
          </span>
        </div>
      );
    } else {
      elements.push(
        <p key={key++} style={{
          fontSize: 13.5, color: '#1e2d2f', lineHeight: 1.55, margin: '4px 0',
          fontFamily: "'Times New Roman', serif",
        }}>
          {trimmed}
        </p>
      );
    }
  }
  return elements;
}

// ─── Offline section renderer ────────────────────────────────
function OfflineSection({ title, children }) {
  return (
    <div style={{ marginTop: 20 }}>
      <h3 style={{
        fontFamily: "'Times New Roman', serif",
        fontSize: 13,
        fontWeight: 700,
        color: '#4a9ba8',
        textTransform: 'uppercase',
        letterSpacing: 2,
        marginBottom: 6,
        borderBottom: '1px solid rgba(74,155,168,0.2)',
        paddingBottom: 4,
      }}>
        {title}
      </h3>
      {children}
    </div>
  );
}

function OfflineBullet({ text }) {
  return (
    <div style={{ display: 'flex', gap: 8, marginBottom: 5, alignItems: 'flex-start' }}>
      <span style={{ color: '#8b6347', fontSize: 14, marginTop: 1, flexShrink: 0 }}>•</span>
      <span style={{ fontSize: 13.5, color: '#1e2d2f', lineHeight: 1.55, fontFamily: "'Times New Roman', serif" }}>
        {text}
      </span>
    </div>
  );
}

function OfflineNursingBullet({ text }) {
  // Highlight nursing warnings
  const isWarning = /^(STOP|NEVER|ALWAYS|MANDATORY|CONTRAINDICATED|HOLD|HIGH ALERT|WARN|CHECK|DO NOT|MUST|ABORT|FATAL|LETHAL|EMERGENCY)/.test(text.toUpperCase());
  return (
    <div style={{ display: 'flex', gap: 8, marginBottom: 6, alignItems: 'flex-start' }}>
      <span style={{ color: isWarning ? '#c0392b' : '#8b6347', fontSize: 14, marginTop: 1, flexShrink: 0 }}>
        {isWarning ? '⚠' : '•'}
      </span>
      <span style={{
        fontSize: 13.5, color: isWarning ? '#c0392b' : '#1e2d2f',
        lineHeight: 1.55, fontFamily: "'Times New Roman', serif",
        fontWeight: isWarning ? 600 : 400,
      }}>
        {text}
      </span>
    </div>
  );
}

function OfflineProfile({ profile, drug }) {
  return (
    <div>
      {/* Classification badges */}
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 16 }}>
        {profile.class && (
          <span style={{
            background: 'rgba(74,155,168,0.1)', color: '#4a9ba8',
            border: '1px solid rgba(74,155,168,0.3)', borderRadius: 20,
            padding: '4px 12px', fontSize: 11, fontFamily: "'Fira Code', monospace",
            letterSpacing: 1,
          }}>
            {profile.class}
          </span>
        )}
        {profile.subclass && (
          <span style={{
            background: 'rgba(139,99,71,0.1)', color: '#6b4a32',
            border: '1px solid rgba(139,99,71,0.3)', borderRadius: 20,
            padding: '4px 12px', fontSize: 11, fontFamily: "'Fira Code', monospace",
            letterSpacing: 1,
          }}>
            {profile.subclass}
          </span>
        )}
      </div>

      {/* Overview */}
      {profile.overview && (
        <OfflineSection title="Overview">
          <p style={{ fontSize: 13.5, color: '#1e2d2f', lineHeight: 1.6, fontFamily: "'Times New Roman', serif", margin: 0 }}>
            {profile.overview}
          </p>
        </OfflineSection>
      )}

      {/* Indications */}
      {profile.indications?.length > 0 && (
        <OfflineSection title="Indications">
          {profile.indications.map((item, i) => <OfflineBullet key={i} text={item} />)}
        </OfflineSection>
      )}

      {/* Dosage */}
      {profile.dosage && (
        <OfflineSection title="Dosage & Route">
          <div style={{
            background: 'rgba(74,155,168,0.06)', border: '1px solid rgba(74,155,168,0.15)',
            borderRadius: 10, padding: '10px 14px',
          }}>
            <p style={{ fontSize: 13.5, color: '#1e2d2f', lineHeight: 1.6, fontFamily: "'Times New Roman', serif", margin: 0 }}>
              {profile.dosage}
            </p>
          </div>
        </OfflineSection>
      )}

      {/* Mechanism */}
      {profile.mechanism && (
        <OfflineSection title="Mechanism">
          <p style={{ fontSize: 13.5, color: '#1e2d2f', lineHeight: 1.6, fontFamily: "'Times New Roman', serif", margin: 0 }}>
            {profile.mechanism}
          </p>
        </OfflineSection>
      )}

      {/* Side Effects */}
      {profile.sideEffects?.length > 0 && (
        <OfflineSection title="Side Effects">
          {profile.sideEffects.map((item, i) => <OfflineBullet key={i} text={item} />)}
        </OfflineSection>
      )}

      {/* Nursing Points — with warning highlights */}
      {profile.nursing?.length > 0 && (
        <OfflineSection title="Nursing Points">
          {profile.nursing.map((item, i) => <OfflineNursingBullet key={i} text={item} />)}
        </OfflineSection>
      )}

      {/* Contraindications */}
      {profile.contraindications?.length > 0 && (
        <OfflineSection title="Contraindications">
          <div style={{
            background: 'rgba(192,57,43,0.04)', border: '1px solid rgba(192,57,43,0.15)',
            borderRadius: 10, padding: '10px 14px',
          }}>
            {profile.contraindications.map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 8, marginBottom: 5, alignItems: 'flex-start' }}>
                <span style={{ color: '#c0392b', fontSize: 12, marginTop: 2, flexShrink: 0 }}>✕</span>
                <span style={{ fontSize: 13.5, color: '#c0392b', lineHeight: 1.55, fontFamily: "'Times New Roman', serif" }}>
                  {item}
                </span>
              </div>
            ))}
          </div>
        </OfflineSection>
      )}
    </div>
  );
}

// ─── Skeleton loader ─────────────────────────────────────────
function Skeleton() {
  return (
    <div style={{ padding: '8px 0' }}>
      <style>{`
        @keyframes shimmer {
          0% { background-position: -400px 0; }
          100% { background-position: 400px 0; }
        }
        .sk { 
          background: linear-gradient(90deg, rgba(74,155,168,0.08) 25%, rgba(74,155,168,0.18) 50%, rgba(74,155,168,0.08) 75%);
          background-size: 400px 100%;
          animation: shimmer 1.4s infinite;
          border-radius: 6px;
          margin-bottom: 10px;
        }
      `}</style>
      {[['40%', 14], ['100%', 10], ['88%', 10], ['94%', 10],
        ['35%', 14], ['100%', 10], ['78%', 10],
        ['38%', 14], ['100%', 10], ['85%', 10], ['60%', 10],
      ].map(([w, h], i) => (
        <div key={i} className="sk" style={{ width: w, height: h }} />
      ))}
    </div>
  );
}

// ─── Main component ──────────────────────────────────────────
export default function DrugDetailView({ showToast, onLoginNeeded }) {
  const { drugName: rawDrug } = useParams();
  const navigate = useNavigate();
  const drug = decodeURIComponent(rawDrug || '');

  // Offline profile check (instant)
  const offlineProfile = getOfflineProfile(drug);
  const isOffline = !!offlineProfile;

  // AI streaming state (only used when no offline profile)
  const [content, setContent] = useState('');
  const [status, setStatus] = useState(isOffline ? 'offline' : 'loading');
  const [error, setError] = useState('');
  const [elapsed, setElapsed] = useState(0);
  const startRef = useRef(Date.now());
  const timerRef = useRef(null);

  const load = useCallback(() => {
    if (isOffline) return; // no AI call needed
    setContent('');
    setStatus('loading');
    setError('');
    startRef.current = Date.now();

    timerRef.current = setInterval(() => {
      setElapsed(((Date.now() - startRef.current) / 1000).toFixed(1));
    }, 100);

    streamDrugProfile(
      drug,
      (chunk) => {
        setStatus('streaming');
        setContent(prev => prev + chunk);
      },
      () => {
        clearInterval(timerRef.current);
        const secs = ((Date.now() - startRef.current) / 1000).toFixed(1);
        setElapsed(secs);
        setStatus('done');
        setContent(finalContent => {
          autosaveDrugProfile({ drugName: drug, content: finalContent, elapsedSecs: parseFloat(secs) });
          return finalContent;
        });
      },
      (msg) => {
        clearInterval(timerRef.current);
        setError(msg);
        setStatus('error');
      }
    );
  }, [drug, isOffline]);

  useEffect(() => {
    if (!isOffline) load();
    return () => clearInterval(timerRef.current);
  }, [load, isOffline]);

  const isLoading = status === 'loading';
  const isDone = status === 'done' || status === 'offline';

  // Status badge label and colour
  const badgeLabel = (() => {
    if (status === 'offline') return '⚡ available offline';
    if (isDone) return `✓ loaded in ${elapsed}s`;
    return `loading… ${elapsed}s`;
  })();

  const badgeBg = status === 'offline'
    ? 'rgba(46,160,67,0.1)'
    : isDone ? 'rgba(74,155,168,0.1)' : 'rgba(139,99,71,0.08)';

  const badgeBorder = status === 'offline'
    ? 'rgba(46,160,67,0.3)'
    : isDone ? 'rgba(74,155,168,0.3)' : 'rgba(139,99,71,0.2)';

  const badgeColor = status === 'offline'
    ? '#2ea043'
    : isDone ? '#4a9ba8' : '#8b6347';

  return (
    <div style={{
      maxWidth: 680, margin: '0 auto', padding: '0 16px 40px',
      animation: 'fadeUp 0.3s ease both',
    }}>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; } 50% { opacity: 0.4; }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; } 50% { opacity: 0; }
        }
      `}</style>

      {/* Back button */}
      <button
        onClick={() => navigate(-1)}
        style={{
          background: 'none', border: 'none', cursor: 'pointer',
          color: '#4a9ba8', fontSize: 13, fontFamily: "'Fira Code', monospace",
          letterSpacing: 1, padding: '16px 0', display: 'flex', alignItems: 'center', gap: 6,
        }}
      >
        ← BACK TO SEARCH
      </button>

      {/* Drug name header */}
      <div style={{
        background: 'rgba(255,255,255,0.88)', backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255,255,255,0.6)',
        borderTop: '4px solid #4a9ba8',
        borderRadius: 20, padding: '24px 28px',
        boxShadow: '0 4px 32px rgba(0,0,0,0.10)',
        marginBottom: 16,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <div>
            <div style={{ fontSize: 11, fontFamily: "'Fira Code', monospace", color: '#4a9ba8', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 6 }}>
              Drug Profile
            </div>
            <h1 style={{
              fontFamily: "'Times New Roman', serif", fontSize: 26,
              fontWeight: 700, color: '#1e2d2f', margin: 0, lineHeight: 1.2,
            }}>
              {drug}
            </h1>
          </div>

          {/* Status badge */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: 8,
            background: badgeBg,
            border: `1px solid ${badgeBorder}`,
            borderRadius: 20, padding: '6px 14px',
          }}>
            {status === 'loading' || status === 'streaming' ? (
              <span style={{
                width: 7, height: 7, borderRadius: '50%',
                background: '#8b6347', display: 'inline-block',
                animation: 'pulse 1s infinite',
              }} />
            ) : null}
            <span style={{
              fontSize: 11, fontFamily: "'Fira Code', monospace",
              color: badgeColor, letterSpacing: 1,
            }}>
              {badgeLabel}
            </span>
          </div>
        </div>
      </div>

      {/* Content card */}
      <div style={{
        background: 'rgba(255,255,255,0.88)', backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255,255,255,0.6)',
        borderRadius: 20, padding: '24px 28px',
        boxShadow: '0 4px 32px rgba(0,0,0,0.10)',
        minHeight: 300,
      }}>

        {/* ── OFFLINE PROFILE (instant render) ── */}
        {isOffline && (
          <OfflineProfile profile={offlineProfile} drug={drug} />
        )}

        {/* ── AI FALLBACK STATES ── */}
        {!isOffline && (
          <>
            {/* Error state */}
            {status === 'error' && (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ fontSize: 36, marginBottom: 12 }}>⚠️</div>
                <div style={{ fontFamily: "'Times New Roman', serif", fontWeight: 700, color: '#1e2d2f', marginBottom: 8 }}>
                  Failed to load profile
                </div>
                <div style={{ fontSize: 12, color: '#7a9ea4', marginBottom: 20 }}>{error}</div>
                <button onClick={load} style={{
                  background: '#4a9ba8', color: '#fff', border: 'none', borderRadius: 12,
                  padding: '10px 24px', fontSize: 13, cursor: 'pointer',
                  fontFamily: "'Times New Roman', serif", fontWeight: 700,
                }}>
                  Try Again
                </button>
              </div>
            )}

            {isLoading && <Skeleton />}

            {content && (
              <div>
                {renderMarkdown(content)}
                {status === 'streaming' && (
                  <span style={{
                    display: 'inline-block', width: 2, height: 15,
                    background: '#4a9ba8', marginLeft: 2, verticalAlign: 'middle',
                    animation: 'blink 0.7s infinite',
                  }} />
                )}
              </div>
            )}
          </>
        )}
      </div>

      {/* Offline source note */}
      {isOffline && (
        <div style={{
          textAlign: 'center', marginTop: 12,
          fontSize: 11, fontFamily: "'Fira Code', monospace",
          color: 'rgba(255,255,255,0.4)', letterSpacing: 1,
        }}>
          EMDEX 2023–2024 · Available without internet
        </div>
      )}

      {/* Reload / Regenerate buttons */}
      {status === 'done' && (
        <div style={{ textAlign: 'center', marginTop: 16 }}>
          <button onClick={load} style={{
            background: 'none', border: '1px solid rgba(74,155,168,0.3)',
            borderRadius: 12, color: '#4a9ba8', padding: '8px 20px',
            fontSize: 12, cursor: 'pointer', fontFamily: "'Fira Code', monospace", letterSpacing: 1,
          }}>
            ↻ REGENERATE
          </button>
        </div>
      )}
    </div>
  );
}
