import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { LABS } from '../data/labsData';

const CATEGORIES = ['All', ...Array.from(new Set(LABS.map(l => l.cat)))];

const CAT_COLORS = {
  Hematology: { bg: 'rgba(180,60,20,.08)', c: '#8a2a08', b: 'rgba(180,60,20,.25)' },
  'WBC Differential': { bg: 'rgba(20,100,140,.08)', c: '#0d5878', b: 'rgba(20,100,140,.25)' },
  Chemistry: { bg: 'rgba(10,110,110,.08)', c: '#0a5a5a', b: 'rgba(10,110,110,.25)' },
  Electrolytes: { bg: 'rgba(40,80,140,.08)', c: '#283c78', b: 'rgba(40,80,140,.25)' },
  Coagulation: { bg: 'rgba(140,30,30,.08)', c: '#6a1010', b: 'rgba(140,30,30,.25)' },
  ABG: { bg: 'rgba(60,40,120,.08)', c: '#301878', b: 'rgba(60,40,120,.25)' },
  Thyroid: { bg: 'rgba(140,60,100,.08)', c: '#6a2050', b: 'rgba(140,60,100,.25)' },
  Liver: { bg: 'rgba(160,80,10,.08)', c: '#7a4008', b: 'rgba(160,80,10,.25)' },
  'Lipid Panel': { bg: 'rgba(20,100,60,.08)', c: '#0a5830', b: 'rgba(20,100,60,.25)' },
  Urinalysis: { bg: 'rgba(140,120,10,.08)', c: '#6a5808', b: 'rgba(140,120,10,.25)' },
  Cardiac: { bg: 'rgba(160,20,30,.08)', c: '#780818', b: 'rgba(160,20,30,.25)' },
  Serology: { bg: 'rgba(80,20,140,.08)', c: '#400878', b: 'rgba(80,20,140,.25)' },
  Hormonal: { bg: 'rgba(140,40,100,.08)', c: '#701850', b: 'rgba(140,40,100,.25)' },
  Microbiology: { bg: 'rgba(20,120,80,.08)', c: '#0a6040', b: 'rgba(20,120,80,.25)' },
  default: { bg: 'rgba(10,110,110,.08)', c: '#0a5a5a', b: 'rgba(10,110,110,.25)' },
};

export default function LabGuide() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [activeCat, setActiveCat] = useState('All');
  const [expanded, setExpanded] = useState({});
  const [detailOpen, setDetailOpen] = useState({});
  const [childOpen, setChildOpen] = useState({});

  const filtered = useMemo(() => {
    const term = search.toLowerCase();
    return LABS.filter(lab => {
      if (activeCat !== 'All' && lab.cat !== activeCat) return false;
      if (!term) return true;
      const inParent = lab.name.toLowerCase().includes(term) || lab.abbr.toLowerCase().includes(term) ||
        [...lab.lowCauses, ...lab.highCauses, ...lab.solutionLow, ...lab.solutionHigh].some(s => s.toLowerCase().includes(term));
      if (inParent) return true;
      if (lab.children) return lab.children.some(c =>
        c.name.toLowerCase().includes(term) || c.abbr.toLowerCase().includes(term) ||
        [...c.lowCauses, ...c.highCauses, ...c.solutionLow, ...c.solutionHigh].some(s => s.toLowerCase().includes(term))
      );
      return false;
    });
  }, [search, activeCat]);

  function togglePanel(key) { setExpanded(e => ({ ...e, [key]: !e[key] })); }
  function toggleDetail(key) { setDetailOpen(e => ({ ...e, [key]: !e[key] })); }
  function toggleChild(key) { setChildOpen(e => ({ ...e, [key]: !e[key] })); }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--teal-bg, #0a6e6e)', position: 'relative' }}>
      {/* Background texture */}
      <div style={{ position: 'fixed', inset: 0, background: 'radial-gradient(ellipse 80% 60% at 20% 30%, rgba(0,100,100,.35) 0%,transparent 60%), radial-gradient(ellipse 60% 80% at 80% 70%, rgba(0,80,80,.25) 0%,transparent 60%), linear-gradient(160deg, #085858 0%, #0a6e6e 40%, #0d7a7a 70%, #085a5a 100%)', zIndex: 0, pointerEvents: 'none' }} />

      {/* Header */}
      <div style={{ position: 'relative', zIndex: 1, padding: '32px 24px 20px', borderBottom: '1px solid rgba(255,255,255,.15)', textAlign: 'center', background: 'linear-gradient(180deg,rgba(0,40,40,.3) 0%,transparent 100%)' }}>
        <button onClick={() => navigate('/')} style={{ position: 'absolute', left: 24, top: 32, background: 'rgba(255,255,255,.12)', border: '1px solid rgba(255,255,255,.25)', color: '#fff', borderRadius: 8, padding: '7px 14px', fontSize: 12, fontFamily: "'Fira Code', monospace", cursor: 'pointer' }}>← Back</button>
        <div style={{ fontSize: 10, letterSpacing: 4, textTransform: 'uppercase', color: 'rgba(255,255,255,.55)', fontFamily: "'Fira Code', monospace", marginBottom: 6 }}>🔬 NurseCare AI</div>
        <h1 style={{ fontFamily: "'Times New Roman', serif", fontWeight: 700, fontSize: 'clamp(28px, 4.5vw, 52px)', color: '#fff', letterSpacing: 3, textTransform: 'uppercase', marginBottom: 8 }}>
          Clinical Lab Reference
        </h1>
        <p style={{ color: 'rgba(255,255,255,.6)', fontSize: 12, fontFamily: "'Fira Code', monospace", letterSpacing: 2 }}>
          {LABS.length} Panels · {LABS.reduce((s, l) => s + 1 + (l.children?.length || 0), 0)} Total Parameters
        </p>
      </div>

      {/* Controls - sticky */}
      <div style={{
        position: 'sticky', top: 0, zIndex: 100,
        background: 'rgba(8,88,88,.94)', backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(255,255,255,.12)',
        padding: '12px 24px', display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center',
        boxShadow: '0 4px 24px rgba(0,0,0,.25)',
      }}>
        {/* Search */}
        <div style={{ position: 'relative', flex: 1, minWidth: 200, maxWidth: 340 }}>
          <span style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'rgba(255,255,255,.6)', fontSize: 14 }}>🔍</span>
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search labs, causes, solutions…"
            style={{
              width: '100%', padding: '10px 14px 10px 34px',
              background: 'rgba(255,255,255,.12)', border: '1px solid rgba(255,255,255,.25)',
              borderRadius: 30, color: '#fff', fontSize: 13,
              fontFamily: "'Times New Roman', serif", fontWeight: 700, outline: 'none',
              boxSizing: 'border-box',
            }}
          />
        </div>

        {/* Category filters */}
        <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap' }}>
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCat(cat)}
              style={{
                padding: '6px 13px', borderRadius: 30,
                border: '1px solid rgba(255,255,255,.25)',
                background: activeCat === cat ? 'rgba(247,240,230,.95)' : 'rgba(255,255,255,.08)',
                color: activeCat === cat ? '#1e2d2f' : 'rgba(255,255,255,.7)',
                fontSize: 10, cursor: 'pointer', letterSpacing: 1,
                textTransform: 'uppercase', fontFamily: "'Times New Roman', serif",
                fontWeight: 700, whiteSpace: 'nowrap', transition: 'all .2s',
              }}
            >{cat}</button>
          ))}
        </div>
      </div>

      {/* Count bar */}
      <div style={{ position: 'relative', zIndex: 1, padding: '8px 28px', fontSize: 11, color: 'rgba(255,255,255,.5)', letterSpacing: 2, textTransform: 'uppercase', fontFamily: "'Fira Code', monospace", borderBottom: '1px solid rgba(255,255,255,.1)' }}>
        Showing <span style={{ color: '#c9a84c' }}>{filtered.length}</span> panels
      </div>

      {/* Grid */}
      <div style={{ position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(460px, 1fr))', gap: 16, padding: 20 }}>
        {filtered.length === 0 ? (
          <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: 60, color: 'rgba(255,255,255,.5)', fontFamily: "'Fira Code', monospace", fontSize: 14 }}>
            No lab panels match your search.
          </div>
        ) : filtered.map(lab => {
          const key = lab.name;
          const isOpen = !!expanded[key];
          const isDetail = !!detailOpen[key];
          const cc = CAT_COLORS[lab.cat] || CAT_COLORS.default;

          return (
            <div key={key} style={{
              background: '#f5f0e6', borderRadius: 16,
              border: '1.5px solid #c9a84c',
              boxShadow: '0 4px 20px rgba(0,0,0,.15)',
              overflow: 'hidden', transition: 'all .2s',
            }}>
              {/* Panel header */}
              <div
                onClick={() => togglePanel(key)}
                style={{ padding: '16px 18px 10px', display: 'flex', alignItems: 'flex-start', gap: 12, cursor: 'pointer', borderBottom: '1px solid rgba(201,168,76,.2)' }}
              >
                <span style={{ fontSize: 20, flexShrink: 0, marginTop: 2 }}>{lab.icon || '🔬'}</span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontFamily: "'Times New Roman', serif", fontWeight: 700, fontSize: 17, color: '#0d3a3a' }}>{lab.name}</div>
                  <div style={{ fontSize: 10, color: '#b8832a', marginTop: 3, letterSpacing: .5, fontStyle: 'italic' }}>{lab.abbr}</div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 6, flexShrink: 0 }}>
                  <div style={{ fontSize: 9, padding: '3px 10px', borderRadius: 20, letterSpacing: 1.5, textTransform: 'uppercase', background: cc.bg, color: cc.c, border: `1px solid ${cc.b}` }}>{lab.cat}</div>
                  {lab.children && <div style={{ fontSize: 9, padding: '2px 8px', borderRadius: 20, background: 'rgba(10,110,110,.08)', color: '#0a5a5a', border: '1px solid rgba(10,110,110,.2)' }}>{lab.children.length} components</div>}
                  <span style={{ fontSize: 14, transition: 'transform .2s', transform: isOpen ? 'rotate(180deg)' : 'none', display: 'inline-block' }}>▾</span>
                </div>
              </div>

              {/* Normal range */}
              <div style={{ padding: '10px 18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(201,168,76,.15)' }}>
                <div>
                  <div style={{ fontSize: 9, textTransform: 'uppercase', letterSpacing: 2, color: '#5a8080', fontFamily: "'Fira Code', monospace" }}>Normal Range</div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: '#0d3a3a', fontFamily: "'Times New Roman', serif" }}>{lab.normal}</div>
                </div>
                {lab.unit && <div style={{ fontSize: 12, color: '#b8832a', fontFamily: "'Fira Code', monospace" }}>{lab.unit}</div>}
              </div>

              {/* Expand toggle */}
              <button
                onClick={() => toggleDetail(key)}
                style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center', padding: '8px 18px', background: 'rgba(10,110,110,.04)', border: 'none', borderBottom: '1px solid rgba(201,168,76,.12)', cursor: 'pointer', color: '#2a6868', fontSize: 12, fontFamily: "'Fira Code', monospace" }}
              >
                <span>{lab.children ? 'Panel overview details →' : 'Tap for full profile →'}</span>
                <span style={{ transition: 'transform .2s', display: 'inline-block', transform: isDetail ? 'rotate(180deg)' : 'none' }}>▾</span>
              </button>

              {/* Detail sections */}
              {isDetail && <DetailSections lab={lab} />}

              {/* Children */}
              {isOpen && lab.children && (
                <div style={{ padding: '12px 14px', background: 'rgba(10,110,110,.03)' }}>
                  <div style={{ fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', color: '#1a5050', fontFamily: "'Fira Code', monospace", marginBottom: 10 }}>
                    Sub-Components ({lab.children.length})
                  </div>
                  {lab.children.map(child => {
                    const ck = `${key}:${child.name}`;
                    return (
                      <div key={child.name} style={{ background: '#ede8db', border: '1px solid #c9a84c', borderRadius: 12, marginBottom: 10, overflow: 'hidden' }}>
                        <div onClick={() => toggleChild(ck)} style={{ padding: '12px 14px', cursor: 'pointer' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div style={{ fontFamily: "'Times New Roman', serif", fontWeight: 700, fontSize: 15, color: '#0d3a3a' }}>{child.name}</div>
                            <span style={{ fontSize: 14, transition: 'transform .2s', display: 'inline-block', transform: childOpen[ck] ? 'rotate(180deg)' : 'none' }}>▾</span>
                          </div>
                          <div style={{ fontSize: 10, color: '#b8832a', fontStyle: 'italic' }}>{child.abbr}</div>
                          <div style={{ marginTop: 8, display: 'flex', justifyContent: 'space-between' }}>
                            <div>
                              <div style={{ fontSize: 9, textTransform: 'uppercase', letterSpacing: 2, color: '#5a8080', fontFamily: "'Fira Code', monospace" }}>Normal</div>
                              <div style={{ fontSize: 14, fontWeight: 700, color: '#0d3a3a' }}>{child.normal}</div>
                            </div>
                            {child.unit && <div style={{ fontSize: 12, color: '#b8832a', fontFamily: "'Fira Code', monospace" }}>{child.unit}</div>}
                          </div>
                        </div>
                        {childOpen[ck] && <DetailSections lab={child} compact />}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function DetailSections({ lab, compact }) {
  const sections = [
    { icon: '🔵', color: '#1a6080', bg: 'rgba(26,96,128,.08)', b: 'rgba(26,96,128,.2)', title: 'Low — Causes & Indications', items: lab.lowCauses },
    { icon: '🟢', color: '#1a7040', bg: 'rgba(26,112,64,.07)', b: 'rgba(26,112,64,.2)', title: 'Solutions For Low', items: lab.solutionLow },
    { icon: '🔴', color: '#8a2020', bg: 'rgba(138,32,32,.07)', b: 'rgba(138,32,32,.2)', title: 'High — Causes & Indications', items: lab.highCauses },
    { icon: '🟡', color: '#7a5010', bg: 'rgba(122,80,16,.07)', b: 'rgba(122,80,16,.2)', title: 'Solutions For High', items: lab.solutionHigh },
  ];

  return (
    <div style={{ padding: compact ? '10px 14px' : '12px 18px', display: 'grid', gap: 10, gridTemplateColumns: compact ? '1fr' : 'repeat(auto-fit, minmax(200px, 1fr))' }}>
      {sections.map(sec => (
        <div key={sec.title} style={{ background: sec.bg, border: `1px solid ${sec.b}`, borderRadius: 10, padding: '10px 12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
            <span style={{ fontSize: 12 }}>{sec.icon}</span>
            <span style={{ fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1.5, color: sec.color, fontFamily: "'Fira Code', monospace" }}>{sec.title}</span>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
            {(sec.items || []).map((item, i) => (
              <span key={i} style={{ fontSize: 11, padding: '3px 8px', borderRadius: 20, background: `${sec.bg}`, border: `1px solid ${sec.b}`, color: sec.color, fontFamily: "'Times New Roman', serif", fontWeight: 700 }}>
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
