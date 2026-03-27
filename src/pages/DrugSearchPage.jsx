import { useState, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ALL_DRUGS, UNIQUE_DRUGS, searchByBrand } from '../data/drugClasses';
import DrugClassBrowse from '../components/DrugClassBrowse';
import { autosaveDrugSearch } from '../services/autosave';

// ─── Quick launch drugs (matches screenshot) ───────────────────
const QUICK_DRUGS = [
  'Paracetamol (Acetaminophen)', 'Metformin',
  'Atorvastatin', 'Furosemide (Frusemide)',
  'Amoxicillin', 'Omeprazole', 'Morphine',
  'Salbutamol (Albuterol)', 'Ciprofloxacin',
  'Prednisolone', 'Metronidazole', 'Diazepam',
];

const CONDITION_CHIPS = [
  'malaria', 'pain', 'diabetes', 'hypertension', 'infection',
  'asthma', 'HIV', 'tuberculosis', 'heart failure', 'seizure',
  'anaemia', 'depression', 'nausea', 'cancer', 'fungal', 'worms',
  'typhoid', 'liver', 'kidney', 'pregnancy',
];

const INDICATION_MAP = [
  { keywords: ['pain', 'analgesic', 'headache', 'fever', 'pyrexia', 'antipyretic', 'ache'], drugs: ['Paracetamol (Acetaminophen)', 'Ibuprofen', 'Aspirin', 'Morphine', 'Codeine', 'Tramadol', 'Naproxen', 'Diclofenac'] },
  { keywords: ['anxiety', 'panic', 'agitation'], drugs: ['Diazepam', 'Lorazepam', 'Alprazolam', 'Midazolam', 'Sertraline', 'Escitalopram', 'Clonazepam'] },
  { keywords: ['depression', 'antidepressant', 'ssri', 'low mood'], drugs: ['Sertraline', 'Fluoxetine', 'Escitalopram', 'Citalopram', 'Venlafaxine', 'Amitriptyline', 'Mirtazapine'] },
  { keywords: ['seizure', 'epilepsy', 'convulsion', 'fits'], drugs: ['Phenytoin', 'Carbamazepine', 'Sodium Valproate', 'Levetiracetam', 'Lamotrigine', 'Diazepam', 'Lorazepam'] },
  { keywords: ['hypertension', 'high blood pressure', 'bp', 'blood pressure'], drugs: ['Amlodipine', 'Lisinopril', 'Ramipril', 'Losartan', 'Atenolol', 'Metoprolol', 'Furosemide (Frusemide)', 'Nifedipine', 'Methyldopa'] },
  { keywords: ['heart failure', 'oedema', 'edema', 'fluid overload', 'diuretic'], drugs: ['Furosemide (Frusemide)', 'Spironolactone', 'Enalapril', 'Carvedilol', 'Bisoprolol', 'Digoxin'] },
  { keywords: ['cholesterol', 'lipid', 'statin', 'triglyceride'], drugs: ['Atorvastatin', 'Rosuvastatin', 'Simvastatin', 'Fenofibrate', 'Ezetimibe'] },
  { keywords: ['diabetes', 'diabetic', 'blood sugar', 'glucose', 'insulin'], drugs: ['Metformin', 'Insulin Regular (Actrapid)', 'Insulin Glargine (Lantus)', 'Glibenclamide (Glyburide)', 'Glimepiride', 'Empagliflozin', 'Sitagliptin'] },
  { keywords: ['ulcer', 'gastric', 'heartburn', 'gerd', 'reflux', 'ppi', 'peptic'], drugs: ['Omeprazole', 'Pantoprazole', 'Lansoprazole', 'Esomeprazole', 'Ranitidine'] },
  { keywords: ['nausea', 'vomiting', 'antiemetic'], drugs: ['Metoclopramide', 'Ondansetron', 'Promethazine', 'Domperidone', 'Cyclizine'] },
  { keywords: ['asthma', 'bronchospasm', 'wheeze', 'copd', 'inhaler'], drugs: ['Salbutamol (Albuterol)', 'Beclometasone', 'Budesonide', 'Fluticasone', 'Tiotropium (LAMA)', 'Montelukast', 'Theophylline'] },
  { keywords: ['infection', 'antibiotic', 'bacterial', 'sepsis'], drugs: ['Amoxicillin', 'Co-Amoxiclav', 'Ciprofloxacin', 'Metronidazole', 'Ceftriaxone (3rd Gen)', 'Gentamicin', 'Vancomycin', 'Azithromycin', 'Doxycycline'] },
  { keywords: ['malaria', 'antimalarial', 'plasmodium', 'falciparum', 'mosquito'], drugs: ['Artemether-Lumefantrine (Coartem)', 'Artesunate (IV/IM)', 'Chloroquine', 'Quinine (IV)', 'Mefloquine', 'Primaquine'] },
  { keywords: ['hiv', 'aids', 'antiretroviral', 'arv', 'cd4'], drugs: ['Tenofovir (TDF)', 'Lamivudine (3TC)', 'Efavirenz (EFV)', 'Dolutegravir (DTG)', 'Nevirapine (NVP)', 'Zidovudine (AZT)'] },
  { keywords: ['tuberculosis', 'tb', 'mycobacterium', 'rifampicin', 'isoniazid'], drugs: ['Isoniazid (INH)', 'Rifampicin', 'Pyrazinamide', 'Ethambutol', 'Streptomycin'] },
  { keywords: ['fungal', 'antifungal', 'candida', 'thrush', 'tinea', 'ringworm'], drugs: ['Fluconazole', 'Itraconazole', 'Nystatin', 'Clotrimazole Cream', 'Amphotericin B (deoxycholate)'] },
  { keywords: ['worm', 'helminth', 'deworming', 'roundworm', 'hookworm', 'anthelmintic', 'parasite'], drugs: ['Albendazole', 'Mebendazole', 'Praziquantel', 'Ivermectin', 'Pyrantel'] },
  { keywords: ['anaemia', 'anemia', 'iron deficiency', 'iron', 'haemoglobin', 'low hb'], drugs: ['Ferrous Sulphate', 'Ferric Carboxymaltose', 'Erythropoietin (EPO)', 'Folic Acid', 'Cyanocobalamin (B12)'] },
  { keywords: ['allergy', 'allergic', 'antihistamine', 'hay fever', 'rhinitis', 'urticaria', 'hives'], drugs: ['Loratadine', 'Cetirizine', 'Fexofenadine', 'Chlorphenamine (Chlorpheniramine)', 'Promethazine'] },
];

function getDrugMeta(name) {
  const found = ALL_DRUGS.find(d => d.name === name);
  if (found) return { class: found.class, subclass: found.subclass, icon: found.icon };
  return { class: '', subclass: '', icon: '💊' };
}

function searchDrugsLocal(term) {
  if (!term || term.trim().length < 1) return [];
  const t = term.toLowerCase().trim();
  const brandMatches = searchByBrand(t);
  const nameMatches = UNIQUE_DRUGS.filter(d =>
    d.name.toLowerCase().includes(t) ||
    d.subclass.toLowerCase().includes(t) ||
    d.class.toLowerCase().includes(t)
  ).map(d => d.name);
  const indicationMatches = [];
  for (const entry of INDICATION_MAP) {
    if (entry.keywords.some(kw => kw.includes(t) || t.includes(kw))) {
      indicationMatches.push(...entry.drugs);
    }
  }
  const seen = new Set();
  const merged = [];
  for (const name of [...brandMatches, ...nameMatches, ...indicationMatches]) {
    if (!seen.has(name)) { seen.add(name); merged.push(name); }
  }
  return merged.slice(0, 60);
}

async function aiSearchDrugs(term, onResult, onError) {
  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 600,
        system: `You are an expert clinical pharmacology database. Given ANY input (brand name, generic name, drug class, condition, indication), return the matching GENERIC drug names as a JSON array only. No preamble, no markdown, no explanation.`,
        messages: [{ role: 'user', content: `Find drugs for: "${term}". Return ONLY a JSON array.` }],
      }),
    });
    const data = await response.json();
    const raw = data?.content?.[0]?.text || '[]';
    const clean = raw.replace(/```json|```/g, '').trim();
    const names = JSON.parse(clean);
    if (Array.isArray(names)) onResult(names);
    else onResult([]);
  } catch (err) {
    onError(err.message);
  }
}

export default function DrugSearchPage({ showToast, onLoginNeeded }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [searched, setSearched] = useState(false);
  const [aiLoading, setAiLoading] = useState(false);
  const [aiUsed, setAiUsed] = useState(false);
  const navigate = useNavigate();
  const inputRef = useRef();

  const handleSearch = useCallback((val) => {
    setQuery(val);
    setAiUsed(false);
    if (!val.trim()) { setResults([]); setSearched(false); return; }
    const local = searchDrugsLocal(val);
    setResults(local);
    setSearched(true);
    if (local.length > 0) autosaveDrugSearch({ query: val, results: local, aiUsed: false });
    if (local.length < 3 && val.trim().length >= 3) {
      setAiLoading(true);
      aiSearchDrugs(val, (aiNames) => {
        setAiLoading(false);
        setAiUsed(true);
        const combined = [...new Set([...aiNames, ...local])];
        setResults(combined.slice(0, 48));
        autosaveDrugSearch({ query: val, results: combined, aiUsed: true });
      }, () => setAiLoading(false));
    }
  }, []);

  function handleQuick(name) {
    setQuery(name);
    const local = searchDrugsLocal(name);
    setResults(local);
    setSearched(true);
    setAiUsed(false);
  }

  function goToDrug(name) {
    navigate(`/drug/${encodeURIComponent(name)}`);
  }

  return (
    <div style={{ minHeight: '100vh', animation: 'fadeUp 0.3s ease both' }}>
      <style>{`
        @keyframes fadeUp { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:translateY(0)} }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
        @keyframes shimmer { 0%{background-position:-400px 0} 100%{background-position:400px 0} }
        .ai-shimmer {
          background: linear-gradient(90deg,rgba(74,155,168,0.06) 25%,rgba(74,155,168,0.15) 50%,rgba(74,155,168,0.06) 75%);
          background-size: 400px 100%; animation: shimmer 1.2s infinite;
        }
        .nav-btn-inactive:hover { background:rgba(255,255,255,0.25) !important; }
        .chip-btn:hover { background:rgba(255,255,255,0.3) !important; }
      `}</style>

      {/* ── Hero section — identical structure to CarePlanView ── */}
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

        {/* Nav pills — Drug Reference active */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginBottom: 42, flexWrap: 'wrap' }}>
          <button
            onClick={() => navigate('/')}
            className="nav-btn-inactive"
            style={{
              background: 'rgba(255,255,255,0.14)', backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.32)', borderRadius: 30,
              padding: '12px 30px', fontSize: 14,
              fontFamily: "'Times New Roman', serif", fontWeight: 700,
              color: '#fff', cursor: 'pointer', transition: 'all 0.2s',
            }}
          >📋 Care Plans</button>

          {/* ACTIVE */}
          <button style={{
            background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255,255,255,0.5)', borderRadius: 30,
            padding: '12px 30px', fontSize: 14,
            fontFamily: "'Times New Roman', serif", fontWeight: 700,
            color: '#1e6a72', cursor: 'default',
            boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
          }}>💊 Drug Reference</button>

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

        {/* Search input */}
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <div style={{
            display: 'flex', alignItems: 'center',
            background: 'rgba(255,255,255,0.88)',
            border: '1.5px solid rgba(255,255,255,0.6)',
            borderRadius: 18, padding: '5px 5px 5px 20px',
            boxShadow: '0 8px 40px rgba(0,0,0,0.18)', backdropFilter: 'blur(20px)',
            marginBottom: 8,
          }}>
            <span style={{ fontSize: 16, opacity: 0.5, marginRight: 10 }}>💊</span>
            <input
              ref={inputRef}
              value={query}
              onChange={e => handleSearch(e.target.value)}
              placeholder="Search by name, class, or use (e.g. malaria)"
              style={{
                flex: 1, background: 'transparent', border: 'none', color: '#1e2d2f',
                fontSize: 15, fontFamily: "'Times New Roman', serif", fontWeight: 700,
                padding: '13px 0', outline: 'none',
              }}
            />
            {aiLoading && (
              <div style={{
                display: 'flex', alignItems: 'center', gap: 6,
                background: 'rgba(74,155,168,0.1)', borderRadius: 20,
                padding: '4px 12px', marginRight: 6,
              }}>
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#4a9ba8', display: 'inline-block', animation: 'pulse 0.8s infinite' }} />
                <span style={{ fontSize: 11, color: '#4a9ba8', fontFamily: "'Fira Code', monospace", letterSpacing: 1 }}>AI</span>
              </div>
            )}
            {query && (
              <button onClick={() => { setQuery(''); setResults([]); setSearched(false); setAiUsed(false); inputRef.current?.focus(); }}
                style={{ background: 'none', border: 'none', fontSize: 18, cursor: 'pointer', color: '#7a9ea4', padding: '0 10px' }}>✕</button>
            )}
          </div>

          <div style={{ textAlign: 'center', fontSize: 11, color: 'rgba(255,255,255,0.5)', fontFamily: "'Fira Code', monospace", letterSpacing: 1, marginBottom: 12 }}>
            Search by drug name · class · indication · condition · use
          </div>

          {/* Browse Drug Classes button — rendered by DrugClassBrowse component */}
          <DrugClassBrowse />
        </div>
      </div>

      {/* ── Below-hero content ────────────────────────────────── */}
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '0 16px 60px' }}>

        {/* Quick chips + condition chips (idle state) */}
        {!searched && (
          <div style={{ marginTop: 12 }}>
            <div style={{ textAlign: 'center', fontSize: 11, color: 'rgba(255,255,255,0.5)', fontFamily: "'Fira Code', monospace", letterSpacing: 2, textTransform: 'uppercase', marginBottom: 10 }}>
              Quick Search
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center' }}>
              {QUICK_DRUGS.map(d => (
                <button key={d} onClick={() => handleQuick(d)} className="chip-btn" style={chipStyle}>{d}</button>
              ))}
            </div>

            <div style={{ textAlign: 'center', fontSize: 11, color: 'rgba(255,255,255,0.5)', fontFamily: "'Fira Code', monospace", letterSpacing: 2, textTransform: 'uppercase', marginTop: 22, marginBottom: 10 }}>
              Search By Condition
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center' }}>
              {CONDITION_CHIPS.map(c => (
                <button key={c} onClick={() => handleSearch(c)} className="chip-btn" style={{ ...chipStyle, background: 'rgba(74,155,168,0.15)', borderColor: 'rgba(74,155,168,0.4)', color: '#1e3a3f' }}>{c}</button>
              ))}
            </div>
          </div>
        )}

        {/* Results count */}
        {searched && (
          <div style={{ textAlign: 'center', marginTop: 4, marginBottom: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, flexWrap: 'wrap' }}>
            <span style={{ fontSize: 11, fontFamily: "'Fira Code', monospace", color: 'rgba(255,255,255,0.6)', letterSpacing: 2, textTransform: 'uppercase' }}>
              {results.length} drug{results.length !== 1 ? 's' : ''} found for "{query}"
            </span>
            {aiUsed && (
              <span style={{ fontSize: 10, background: 'rgba(74,155,168,0.15)', color: '#4a9ba8', border: '1px solid rgba(74,155,168,0.3)', borderRadius: 20, padding: '2px 10px', fontFamily: "'Fira Code', monospace" }}>
                ✨ AI-enhanced
              </span>
            )}
            {aiLoading && (
              <span className="ai-shimmer" style={{ fontSize: 10, color: '#4a9ba8', border: '1px solid rgba(74,155,168,0.2)', borderRadius: 20, padding: '2px 14px', fontFamily: "'Fira Code', monospace" }}>
                AI searching…
              </span>
            )}
          </div>
        )}

        {/* Drug result cards */}
        {searched && results.length > 0 && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 14 }}>
            {results.map((name, idx) => {
              const meta = getDrugMeta(name);
              return (
                <button
                  key={name}
                  onClick={() => goToDrug(name)}
                  style={{
                    background: 'rgba(255,255,255,0.82)', backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255,255,255,0.6)',
                    borderTop: `3px solid ${meta.icon === '💊' ? '#4a9ba8' : '#8b6347'}`,
                    borderRadius: 16, padding: 20,
                    cursor: 'pointer', textAlign: 'left',
                    boxShadow: '0 2px 16px rgba(0,0,0,0.08)',
                    transition: 'all 0.2s',
                    animation: `fadeUp 0.3s ease ${idx * 0.02}s both`,
                  }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(0,0,0,0.14)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 2px 16px rgba(0,0,0,0.08)'; }}
                >
                  <div style={{ fontSize: 22, marginBottom: 8 }}>{meta.icon}</div>
                  <div style={{ fontFamily: "'Times New Roman', serif", fontWeight: 700, fontSize: 16, color: '#1e2d2f', marginBottom: 6, lineHeight: 1.3 }}>
                    {name}
                  </div>
                  {meta.subclass && (
                    <div style={{
                      display: 'inline-block', background: 'rgba(139,99,71,0.1)', color: '#6b4a32',
                      border: '1px solid rgba(139,99,71,0.25)', borderRadius: 20,
                      padding: '3px 10px', fontSize: 10, fontFamily: "'Fira Code', monospace",
                      letterSpacing: 1, textTransform: 'uppercase', marginBottom: 8,
                    }}>{meta.subclass}</div>
                  )}
                  {meta.class && (
                    <div style={{ fontSize: 12, color: '#7a9ea4', lineHeight: 1.4 }}>{meta.class}</div>
                  )}
                  <div style={{ marginTop: 12, fontSize: 11, color: '#4a9ba8', fontFamily: "'Fira Code', monospace" }}>
                    Tap for full profile →
                  </div>
                </button>
              );
            })}
          </div>
        )}

        {/* No results */}
        {searched && results.length === 0 && !aiLoading && (
          <div style={{ textAlign: 'center', padding: '48px 16px' }}>
            <div style={{ fontSize: 40, marginBottom: 12 }}>💊</div>
            <div style={{ fontSize: 15, fontFamily: "'Times New Roman', serif", fontWeight: 700, color: '#fff' }}>
              No drugs found for "{query}"
            </div>
            <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', marginTop: 8 }}>
              Try a different name, condition, or browse by class above
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const chipStyle = {
  background: 'rgba(255,255,255,0.45)', backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255,255,255,0.35)', borderRadius: 20, color: '#1e2d2f',
  padding: '7px 16px', fontSize: 12, fontWeight: 700,
  cursor: 'pointer', transition: 'all 0.2s',
  fontFamily: "'Times New Roman', serif",
};
