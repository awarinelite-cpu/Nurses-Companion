import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { DRUG_CLASSES } from '../data/drugClasses';

export default function DrugClassBrowse() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(null);
  const navigate = useNavigate();
  const ref = useRef();

  useEffect(() => {
    function handler(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  function selectDrug(drugName) {
    setOpen(false);
    navigate(`/drug/${encodeURIComponent(drugName)}`);
  }

  return (
    <div ref={ref} style={{ position: 'relative', maxWidth: 600, margin: '14px auto 0' }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          width: '100%',
          background: 'rgba(255,255,255,0.45)', backdropFilter: 'blur(10px)',
          border: '1.5px dashed rgba(255,255,255,0.45)', borderRadius: 14,
          color: '#1e2d2f', padding: '11px 20px', fontSize: 13,
          fontFamily: "'Times New Roman', serif", fontWeight: 700,
          cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
        }}
      >
        💊 Browse Drug Classes
        <span style={{ display: 'inline-block', transition: 'transform 0.25s', transform: open ? 'rotate(180deg)' : 'none', fontSize: 11 }}>▾</span>
      </button>

      {open && (
        <div style={{
          position: 'absolute', top: 'calc(100% + 8px)', left: 0, right: 0,
          background: 'rgba(255,255,255,0.97)', backdropFilter: 'blur(24px)',
          border: '1px solid rgba(255,255,255,0.6)', borderRadius: 18, zIndex: 60,
          boxShadow: '0 24px 64px rgba(0,0,0,0.22)',
          maxHeight: 400, overflowY: 'auto',
          animation: 'fadeUp 0.2s ease both',
        }}>
          {DRUG_CLASSES.map(cls => (
            <div key={cls.id}>
              <button
                onClick={() => setExpanded(expanded === cls.id ? null : cls.id)}
                style={{
                  display: 'flex', width: '100%', textAlign: 'left',
                  alignItems: 'center', gap: 10,
                  background: 'transparent', border: 'none',
                  borderBottom: '1px solid rgba(139,99,71,0.1)',
                  color: '#1e2d2f', padding: '12px 18px',
                  fontSize: 14, fontFamily: "'Times New Roman', serif", fontWeight: 700,
                  cursor: 'pointer',
                }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(139,99,71,0.06)'}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
              >
                <span>{cls.icon}</span>
                <span style={{ flex: 1 }}>{cls.name}</span>
                <span style={{ fontSize: 10, color: '#7a9ea4', fontFamily: "'Fira Code', monospace" }}>{cls.desc}</span>
                <span style={{ fontSize: 11, transition: 'transform 0.2s', transform: expanded === cls.id ? 'rotate(180deg)' : 'none' }}>▾</span>
              </button>

              {expanded === cls.id && cls.subclasses.map(sub => (
                <div key={sub.name} style={{ background: 'rgba(139,99,71,0.03)' }}>
                  <div style={{
                    padding: '6px 28px',
                    fontSize: 10, letterSpacing: '1.5px', textTransform: 'uppercase',
                    color: '#8b6347', fontFamily: "'Fira Code', monospace",
                  }}>{sub.name}</div>
                  {sub.drugs.map(drug => (
                    <button
                      key={drug}
                      onClick={() => selectDrug(drug)}
                      style={{
                        display: 'block', width: '100%', textAlign: 'left',
                        background: 'transparent', border: 'none',
                        borderBottom: '1px solid rgba(139,99,71,0.06)',
                        color: '#3d5a5f', padding: '9px 36px',
                        fontSize: 13, fontFamily: "'Times New Roman', serif", fontWeight: 700,
                        cursor: 'pointer',
                      }}
                      onMouseEnter={e => e.target.style.background = 'rgba(139,99,71,0.08)'}
                      onMouseLeave={e => e.target.style.background = 'transparent'}
                    >
                      <span style={{ color: '#8b6347', marginRight: 8, fontSize: 11 }}>▸</span>
                      {drug}
                    </button>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
