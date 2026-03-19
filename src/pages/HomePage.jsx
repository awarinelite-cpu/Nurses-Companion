import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ALL_DIAGNOSES } from '../data/nandaDomains';
import { ALL_DRUGS } from '../data/drugClasses';
import NandaBrowse from '../components/NandaBrowse';
import DrugClassBrowse from '../components/DrugClassBrowse';

const QUICK_DIAGNOSES = [
  'Acute Pain', 'Risk for Infection', 'Anxiety',
  'Impaired Physical Mobility', 'Deficient Knowledge',
  'Excess Fluid Volume', 'Fatigue', 'Ineffective Airway Clearance',
];

const QUICK_DRUGS = [
  'Paracetamol (Acetaminophen)', 'Metformin', 'Atorvastatin',
  'Furosemide (Frusemide)', 'Amoxicillin', 'Omeprazole',
  'Morphine', 'Salbutamol (Albuterol)',
];

export default function HomePage({ showToast, onLoginNeeded }) {
  const [tab, setTab] = useState('care');
  const [diagInput, setDiagInput] = useState('');
  const [diagSuggestions, setDiagSuggestions] = useState([]);
  const [drugInput, setDrugInput] = useState('');
  const [drugSuggestions, setDrugSuggestions] = useState([]);
  const navigate = useNavigate();
  const diagRef = useRef();
  const drugRef = useRef();

  // Close dropdowns on outside click
  useEffect(() => {
    function handler(e) {
      if (diagRef.current && !diagRef.current.contains(e.target)) setDiagSuggestions([]);
      if (drugRef.current && !drugRef.current.contains(e.target)) setDrugSuggestions([]);
    }
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  function handleDiagInput(val) {
    setDiagInput(val);
    if (val.length < 2) { setDiagSuggestions([]); return; }
    const results = ALL_DIAGNOSES.filter(d => d.toLowerCase().includes(val.toLowerCase())).slice(0, 8);
    setDiagSuggestions(results);
  }

  function handleDrugInput(val) {
    setDrugInput(val);
    if (val.length < 2) { setDrugSuggestions([]); return; }
    const results = ALL_DRUGS.filter(d => d.name.toLowerCase().includes(val.toLowerCase())).slice(0, 8);
    setDrugSuggestions(results);
  }

  function goDiag(dx) {
    setDiagSuggestions([]);
    setDiagInput(dx);
    navigate(`/plan/${encodeURIComponent(dx)}`);
  }

  function goDrug(name) {
    setDrugSuggestions([]);
    setDrugInput(name);
    navigate(`/drug/${encodeURIComponent(name)}`);
  }

  return (
    <main style={{ position: 'relative', zIndex: 10, maxWidth: 960, margin: '0 auto', padding: '60px 24px 100px' }}>
      {/* Hero */}
      <div style={{ textAlign: 'center', marginBottom: 40, animation: 'fadeUp 0.7s ease both' }}>
        <div style={{
          display: 'inline-block',
          fontFamily: "'Fira Code', monospace", fontSize: 11, letterSpacing: 3, textTransform: 'uppercase',
          color: '#2d7a87', background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(10px)',
          border: '1px solid rgba(74,155,168,0.3)', borderRadius: 20, padding: '5px 16px', marginBottom: 18,
        }}>
          Evidence-Based · NANDA-I Compliant · AI-Powered
        </div>
        <h1 style={{
          fontFamily: "'Times New Roman', serif", fontWeight: 700, fontStyle: 'italic',
          fontSize: 'clamp(34px, 6vw, 60px)', color: '#1e2d2f',
          letterSpacing: -1, marginBottom: 12, lineHeight: 1.1,
        }}>
          NurseCare AI
        </h1>
        <p style={{ color: '#1e2d2f', fontSize: 15, fontWeight: 700, marginBottom: 32 }}>
          Generate evidence-based nursing care plans · Drug reference · Clinical lab guide
        </p>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: 6, justifyContent: 'center', marginBottom: 28 }}>
          {[['care', '📋 Care Plans'], ['drug', '💊 Drug Reference'], ['lab', '🔬 Lab Guide']].map(([key, label]) => (
            <button
              key={key}
              onClick={() => key === 'lab' ? navigate('/labs') : setTab(key)}
              style={{
                background: tab === key ? 'rgba(255,255,255,0.82)' : 'rgba(255,255,255,0.45)',
                backdropFilter: 'blur(12px)',
                border: '1.5px solid rgba(74,155,168,0.4)',
                borderRadius: 30, color: tab === key ? '#2d7a87' : '#1e2d2f',
                padding: '10px 26px', fontSize: 13, fontWeight: 700,
                fontFamily: "'Times New Roman', serif", cursor: 'pointer', transition: 'all 0.2s',
              }}
            >{label}</button>
          ))}
        </div>

        {/* Care Plan tab */}
        {tab === 'care' && (
          <div style={{ animation: 'fadeUp 0.3s ease both' }}>
            {/* Search box */}
            <div ref={diagRef} style={{ position: 'relative', maxWidth: 600, margin: '0 auto' }}>
              <div style={{
                display: 'flex', alignItems: 'center',
                background: 'rgba(255,255,255,0.82)', border: '1.5px solid rgba(255,255,255,0.6)',
                borderRadius: 18, padding: '5px 5px 5px 20px',
                boxShadow: '0 8px 40px rgba(0,0,0,0.18)',
                backdropFilter: 'blur(20px)',
              }}>
                <span style={{ fontSize: 16, opacity: 0.5, marginRight: 10 }}>⊕</span>
                <input
                  value={diagInput}
                  onChange={e => handleDiagInput(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && diagInput.trim() && goDiag(diagInput.trim())}
                  placeholder="Enter nursing diagnosis (e.g. Acute Pain)"
                  style={{
                    flex: 1, background: 'transparent', border: 'none', color: '#1e2d2f',
                    fontSize: 15, fontFamily: "'Times New Roman', serif", fontWeight: 700,
                    padding: '13px 0', outline: 'none',
                  }}
                />
                {diagInput.trim() && (
                  <button
                    onClick={() => goDiag(diagInput.trim())}
                    style={{
                      background: 'linear-gradient(135deg, #4a9ba8, #2d7a87)',
                      border: 'none', borderRadius: 13, color: '#fff',
                      padding: '12px 22px', fontSize: 14, fontWeight: 700,
                      fontFamily: "'Times New Roman', serif", cursor: 'pointer',
                      boxShadow: '0 4px 16px rgba(74,155,168,0.4)',
                    }}
                  >Generate →</button>
                )}
              </div>

              {/* Suggestions dropdown */}
              {diagSuggestions.length > 0 && (
                <div style={{
                  position: 'absolute', top: 'calc(100% + 8px)', left: 0, right: 0,
                  background: 'rgba(255,255,255,0.97)', backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.6)', borderRadius: 14,
                  overflow: 'hidden', zIndex: 50,
                  boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
                }}>
                  {diagSuggestions.map(d => (
                    <button
                      key={d}
                      onClick={() => goDiag(d)}
                      style={{
                        display: 'block', width: '100%', textAlign: 'left',
                        background: 'transparent', border: 'none',
                        borderBottom: '1px solid rgba(74,155,168,0.1)',
                        color: '#3d5a5f', padding: '12px 20px',
                        fontSize: 14, fontFamily: "'Times New Roman', serif", fontWeight: 700,
                        cursor: 'pointer',
                      }}
                      onMouseEnter={e => e.target.style.background = 'rgba(74,155,168,0.08)'}
                      onMouseLeave={e => e.target.style.background = 'transparent'}
                    >
                      <span style={{ color: '#4a9ba8', marginRight: 8 }}>⊕</span>{d}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* NANDA Browse */}
            <NandaBrowse />

            {/* Quick chips */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center', marginTop: 18 }}>
              {QUICK_DIAGNOSES.map(d => (
                <button key={d} onClick={() => goDiag(d)} style={chipStyle}>{d}</button>
              ))}
            </div>
          </div>
        )}

        {/* Drug tab */}
        {tab === 'drug' && (
          <div style={{ animation: 'fadeUp 0.3s ease both' }}>
            <div ref={drugRef} style={{ position: 'relative', maxWidth: 600, margin: '0 auto' }}>
              <div style={{
                display: 'flex', alignItems: 'center',
                background: 'rgba(255,255,255,0.82)', border: '1.5px solid rgba(255,255,255,0.6)',
                borderRadius: 18, padding: '5px 5px 5px 20px',
                boxShadow: '0 8px 40px rgba(0,0,0,0.18)', backdropFilter: 'blur(20px)',
              }}>
                <span style={{ fontSize: 16, opacity: 0.5, marginRight: 10 }}>💊</span>
                <input
                  value={drugInput}
                  onChange={e => handleDrugInput(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && drugInput.trim() && goDrug(drugInput.trim())}
                  placeholder="Search drug by name (e.g. Metformin)"
                  style={{
                    flex: 1, background: 'transparent', border: 'none', color: '#1e2d2f',
                    fontSize: 15, fontFamily: "'Times New Roman', serif", fontWeight: 700,
                    padding: '13px 0', outline: 'none',
                  }}
                />
                {drugInput.trim() && (
                  <button
                    onClick={() => goDrug(drugInput.trim())}
                    style={{
                      background: 'linear-gradient(135deg, #8b6347, #6b4a32)',
                      border: 'none', borderRadius: 13, color: '#fff',
                      padding: '12px 22px', fontSize: 14, fontWeight: 700,
                      fontFamily: "'Times New Roman', serif", cursor: 'pointer',
                      boxShadow: '0 4px 16px rgba(139,99,71,0.4)',
                    }}
                  >Search →</button>
                )}
              </div>

              {drugSuggestions.length > 0 && (
                <div style={{
                  position: 'absolute', top: 'calc(100% + 8px)', left: 0, right: 0,
                  background: 'rgba(255,255,255,0.97)', backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.6)', borderRadius: 14,
                  overflow: 'hidden', zIndex: 50,
                  boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
                }}>
                  {drugSuggestions.map(d => (
                    <button
                      key={d.name}
                      onClick={() => goDrug(d.name)}
                      style={{
                        display: 'flex', alignItems: 'center', width: '100%', textAlign: 'left',
                        background: 'transparent', border: 'none',
                        borderBottom: '1px solid rgba(139,99,71,0.1)',
                        color: '#3d5a5f', padding: '11px 20px',
                        fontSize: 14, fontFamily: "'Times New Roman', serif", fontWeight: 700,
                        cursor: 'pointer', gap: 10,
                      }}
                      onMouseEnter={e => e.currentTarget.style.background = 'rgba(139,99,71,0.06)'}
                      onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                    >
                      <span style={{ flex: 1 }}>{d.name}</span>
                      <span style={{ fontSize: 10, color: '#7a9ea4', fontFamily: "'Fira Code', monospace", textTransform: 'uppercase', letterSpacing: 1 }}>{d.subclass}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <DrugClassBrowse />

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center', marginTop: 18 }}>
              {QUICK_DRUGS.map(d => (
                <button key={d} onClick={() => goDrug(d)} style={{ ...chipStyle, borderColor: 'rgba(139,99,71,0.35)' }}>{d}</button>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

const chipStyle = {
  background: 'rgba(255,255,255,0.45)', backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255,255,255,0.35)', borderRadius: 20, color: '#1e2d2f',
  padding: '7px 16px', fontSize: 12, fontWeight: 700,
  cursor: 'pointer', transition: 'all 0.2s',
  fontFamily: "'Times New Roman', serif",
};
