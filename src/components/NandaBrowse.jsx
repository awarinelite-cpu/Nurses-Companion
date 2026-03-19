import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { NANDA_DOMAINS } from '../data/nandaDomains';

export default function NandaBrowse() {
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState('');
  const navigate = useNavigate();
  const ref = useRef();

  useEffect(() => {
    function handler(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  function select(dx) {
    setOpen(false);
    setFilter('');
    navigate(`/plan/${encodeURIComponent(dx)}`);
  }

  const filtered = NANDA_DOMAINS.map(d => ({
    ...d,
    diagnoses: d.diagnoses.filter(dx =>
      !filter || dx.toLowerCase().includes(filter.toLowerCase())
    ),
  })).filter(d => d.diagnoses.length > 0);

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
          transition: 'all 0.2s',
        }}
      >
        📋 Browse NANDA-I Diagnoses
        <span style={{ display: 'inline-block', transition: 'transform 0.25s', transform: open ? 'rotate(180deg)' : 'none', fontSize: 11 }}>▾</span>
      </button>

      {open && (
        <div style={{
          position: 'absolute', top: 'calc(100% + 8px)', left: 0, right: 0,
          background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(24px)',
          border: '1px solid rgba(255,255,255,0.6)', borderRadius: 18, zIndex: 60,
          boxShadow: '0 24px 64px rgba(0,0,0,0.22)',
          maxHeight: 420, overflow: 'hidden', display: 'flex', flexDirection: 'column',
          animation: 'fadeUp 0.2s ease both',
        }}>
          <div style={{ padding: '10px 14px', borderBottom: '1px solid rgba(74,155,168,0.15)' }}>
            <input
              autoFocus
              placeholder="Search diagnoses…"
              value={filter}
              onChange={e => setFilter(e.target.value)}
              style={{
                width: '100%', padding: '9px 14px', borderRadius: 10,
                border: '1.5px solid rgba(74,155,168,0.3)',
                background: 'rgba(247,243,238,0.9)', color: '#1e2d2f',
                fontSize: 13, fontFamily: "'Times New Roman', serif", fontWeight: 700,
                outline: 'none', boxSizing: 'border-box',
              }}
            />
          </div>
          <div style={{ overflowY: 'auto', flex: 1 }}>
            {filtered.length === 0 ? (
              <div style={{ padding: 24, textAlign: 'center', color: '#7a9ea4', fontSize: 13 }}>No matches found</div>
            ) : filtered.map(domain => (
              <div key={domain.domain}>
                <div style={{
                  padding: '8px 18px 4px',
                  fontSize: 9, letterSpacing: '2.5px', textTransform: 'uppercase',
                  color: '#7a9ea4', fontFamily: "'Fira Code', monospace",
                  borderBottom: '1px solid rgba(74,155,168,0.1)',
                }}>
                  {domain.domain}
                </div>
                {domain.diagnoses.map(dx => (
                  <button
                    key={dx}
                    onClick={() => select(dx)}
                    style={{
                      display: 'block', width: '100%', textAlign: 'left',
                      background: 'transparent', border: 'none',
                      borderBottom: '1px solid rgba(74,155,168,0.07)',
                      color: '#3d5a5f', padding: '10px 20px',
                      fontSize: 13, fontFamily: "'Times New Roman', serif", fontWeight: 700,
                      cursor: 'pointer',
                    }}
                    onMouseEnter={e => e.target.style.background = 'rgba(74,155,168,0.08)'}
                    onMouseLeave={e => e.target.style.background = 'transparent'}
                  >
                    <span style={{ color: '#4a9ba8', marginRight: 8 }}>●</span>
                    {dx}
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
