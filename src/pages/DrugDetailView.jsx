import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase/config';
import { useAuth } from '../hooks/useAuth';
import { ALL_DRUGS } from '../data/drugClasses';

// In-memory session cache
const sessionCache = {};

export default function DrugDetailView({ showToast, onLoginNeeded }) {
  const { drugName } = useParams();
  const name = decodeURIComponent(drugName);
  const { user } = useAuth();
  const navigate = useNavigate();
  const [drug, setDrug] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingMsg, setLoadingMsg] = useState('');
  const [error, setError] = useState('');
  const [autoSaved, setAutoSaved] = useState(false);
  const autoSaveRan = useRef(false);

  useEffect(() => {
    autoSaveRan.current = false;
    setAutoSaved(false);
    fetchDrug();
  }, [name]);

  useEffect(() => {
    if (drug && user && !autoSaveRan.current) {
      autoSaveRan.current = true;
      saveToLibrary();
    }
  }, [drug, user]);

  async function fetchDrug() {
    setLoading(true); setError(''); setDrug(null);

    // 1. Session memory cache — instant
    if (sessionCache[name]) {
      setDrug(sessionCache[name]);
      setLoading(false);
      return;
    }

    // 2. Firestore cache
    setLoadingMsg('Checking cache…');
    try {
      const q = query(collection(db, 'drugCache'), where('name', '==', name));
      const snap = await getDocs(q);
      if (!snap.empty) {
        const cached = snap.docs[0].data();
        sessionCache[name] = cached;
        setDrug(cached);
        setLoading(false);
        return;
      }
    } catch {}

    // 3. AI generation — fast model + tight prompt
    setLoadingMsg('Loading drug reference…');
    const found = ALL_DRUGS.find(d => d.name.toLowerCase() === name.toLowerCase());
    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-haiku-4-5-20251001',
          max_tokens: 1200,
          messages: [{ role: 'user', content: buildDrugPrompt(name, found?.class) }],
        }),
      });
      const data = await res.json();
      const text = data.content?.find(b => b.type === 'text')?.text || '';
      const jsonMatch = text.match(/\{[\s\S]*\}/);
      if (!jsonMatch) throw new Error('Invalid response');
      const parsed = JSON.parse(jsonMatch[0]);
      const drugData = { ...parsed, name, class: found?.class || parsed.drugClass, savedAt: new Date().toISOString() };

      sessionCache[name] = drugData;
      setDrug(drugData);

      // Cache globally in background
      addDoc(collection(db, 'drugCache'), drugData).catch(() => {});

    } catch (e) {
      setError('Could not load drug information. Please try again.');
      console.error(e);
    }
    setLoading(false);
  }

  async function saveToLibrary() {
    if (!user) return;
    try {
      const q = query(collection(db, 'users', user.uid, 'drugs'), where('name', '==', name));
      const existing = await getDocs(q);
      if (!existing.empty) return;
      await addDoc(collection(db, 'users', user.uid, 'drugs'), {
        name, drugClass: drug?.drugClass || drug?.class || '', savedAt: new Date().toISOString(),
      });
      setAutoSaved(true);
      showToast('💊 Drug auto-saved to your library');
    } catch {}
  }

  return (
    <div style={{ position: 'relative', zIndex: 10, maxWidth: 960, margin: '0 auto', padding: '24px 24px 100px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 28 }}>
        <button onClick={() => navigate(-1)} style={backBtn}>← Back</button>
        <h2 style={{ fontFamily: "'Times New Roman', serif", fontWeight: 700, fontSize: 'clamp(18px, 3vw, 26px)', color: '#1e2d2f', flex: 1 }}>{name}</h2>
        {autoSaved && (
          <span style={{ fontSize: 11, fontFamily: "'Fira Code', monospace", color: '#4a8c5a', background: 'rgba(74,140,90,0.1)', border: '1px solid rgba(74,140,90,0.3)', borderRadius: 20, padding: '5px 12px', whiteSpace: 'nowrap' }}>
            ✅ Saved to library
          </span>
        )}
        {drug && !user && (
          <button onClick={onLoginNeeded} style={{ ...saveBtn, background: 'rgba(74,155,168,0.12)', color: '#2d7a87', borderColor: 'rgba(74,155,168,0.3)' }}>
            🔐 Sign in to save
          </button>
        )}
      </div>

      {loading && <LoadingCard message={loadingMsg} />}

      {error && (
        <div style={{ background: 'rgba(192,84,75,0.1)', border: '1px solid rgba(192,84,75,0.3)', borderRadius: 14, padding: 24, color: '#c0544b', textAlign: 'center' }}>
          <div style={{ fontSize: 24, marginBottom: 8 }}>⚠️</div>
          <p>{error}</p>
          <button onClick={fetchDrug} style={{ ...backBtn, marginTop: 16 }}>Try Again</button>
        </div>
      )}

      {drug && <DrugDisplay drug={drug} />}
    </div>
  );
}

function LoadingCard({ message }) {
  const steps = ['Checking cache…', 'Loading drug reference…'];
  return (
    <div style={{ background: 'rgba(255,255,255,0.82)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.6)', borderRadius: 16, padding: 40, textAlign: 'center', boxShadow: '0 2px 20px rgba(0,0,0,0.08)' }}>
      <div style={{ width: 44, height: 44, border: '3px solid rgba(139,99,71,0.2)', borderTopColor: '#8b6347', borderRadius: '50%', animation: 'spin 0.75s linear infinite', margin: '0 auto 20px' }} />
      <div style={{ fontSize: 14, fontWeight: 700, color: '#1e2d2f', marginBottom: 16 }}>{message || 'Loading…'}</div>
      <div style={{ display: 'flex', gap: 8, justifyContent: 'center' }}>
        {steps.map((step, i) => (
          <div key={i} style={{
            fontSize: 11, fontFamily: "'Fira Code', monospace",
            padding: '4px 12px', borderRadius: 20,
            background: message === step ? 'rgba(139,99,71,0.12)' : 'rgba(139,99,71,0.04)',
            color: message === step ? '#6b4a32' : '#7a9ea4',
            border: `1px solid ${message === step ? 'rgba(139,99,71,0.35)' : 'rgba(139,99,71,0.1)'}`,
            transition: 'all 0.3s',
          }}>{step}</div>
        ))}
      </div>
    </div>
  );
}

function DrugDisplay({ drug: d }) {
  const [activeTab, setActiveTab] = useState(0);
  const routes = d.routeDosages || [];

  return (
    <div style={{ animation: 'fadeUp 0.4s ease both' }}>
      <div style={{ ...glass(), borderLeft: '4px solid #8b6347', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 16, marginBottom: 20 }}>
        <div>
          <div style={{ fontSize: 10, fontFamily: "'Fira Code', monospace", color: '#8b6347', letterSpacing: 2.5, textTransform: 'uppercase', marginBottom: 6 }}>💊 Drug Reference</div>
          <div style={{ fontFamily: "'Times New Roman', serif", fontWeight: 700, fontSize: 'clamp(22px, 4vw, 32px)', color: '#1e2d2f', marginBottom: 4 }}>{d.name}</div>
          {d.genericName && d.genericName !== d.name && <div style={{ color: '#7a9ea4', fontSize: 14, fontStyle: 'italic', marginBottom: 4 }}>Generic: {d.genericName}</div>}
          {d.pronunciation && <div style={{ color: '#7a9ea4', fontSize: 12, fontFamily: "'Fira Code', monospace" }}>/{d.pronunciation}/</div>}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'flex-end' }}>
          {(d.drugClass || d.class) && (
            <div style={{ background: 'rgba(139,99,71,0.1)', color: '#6b4a32', border: '1px solid rgba(139,99,71,0.3)', borderRadius: 8, padding: '6px 14px', fontSize: 10, fontWeight: 700, letterSpacing: 2, fontFamily: "'Fira Code', monospace", textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
              {d.drugClass || d.class}
            </div>
          )}
          {d.controlled && (
            <div style={{ background: 'rgba(192,84,75,0.1)', color: '#c0544b', border: '1px solid rgba(192,84,75,0.3)', borderRadius: 8, padding: '4px 12px', fontSize: 10, fontFamily: "'Fira Code', monospace" }}>
              ⚠️ {d.controlled}
            </div>
          )}
        </div>
      </div>

      {d.modeOfAction && (
        <div style={{ ...glass(), borderLeft: '3px solid #4a9ba8', marginBottom: 14 }}>
          <CardHead icon="⚙️" title="Mechanism of Action" />
          <p style={{ color: '#3d5a5f', fontSize: 14, lineHeight: 1.7 }}>{d.modeOfAction}</p>
        </div>
      )}

      {routes.length > 0 && (
        <div style={{ ...glass(), marginBottom: 14 }}>
          <CardHead icon="⚖️" title="Dosage by Route of Administration" />
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 16 }}>
            {routes.map((r, i) => (
              <button key={i} onClick={() => setActiveTab(i)} style={{
                padding: '8px 18px', borderRadius: 20,
                border: '1.5px solid rgba(139,99,71,0.35)',
                background: activeTab === i ? 'rgba(139,99,71,0.15)' : 'transparent',
                color: activeTab === i ? '#6b4a32' : '#7a9ea4',
                fontSize: 12, fontFamily: "'Fira Code', monospace",
                fontWeight: activeTab === i ? 700 : 400,
                cursor: 'pointer', transition: 'all 0.2s',
              }}>{r.route}</button>
            ))}
          </div>
          {routes[activeTab] && (() => {
            const r = routes[activeTab];
            return (
              <div style={{ background: 'rgba(139,99,71,0.04)', border: '1px solid rgba(139,99,71,0.15)', borderRadius: 12, padding: 16 }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: 12 }}>
                  {r.adultDose && <DoseBlock label="👨 Adult Dose" value={r.adultDose} color="#2d7a87" />}
                  {r.paediatricDose && <DoseBlock label="👶 Paediatric Dose" value={r.paediatricDose} color="#8b6347" />}
                  {r.frequency && <DoseBlock label="🕐 Frequency" value={r.frequency} color="#4a8c5a" />}
                  {r.maxDose && <DoseBlock label="⚠️ Max Dose / Day" value={r.maxDose} color="#c0544b" />}
                  {r.notes && (
                    <div style={{ gridColumn: '1 / -1', background: 'rgba(74,155,168,0.06)', border: '1px solid rgba(74,155,168,0.2)', borderRadius: 8, padding: '10px 14px' }}>
                      <div style={{ fontSize: 10, fontFamily: "'Fira Code', monospace", color: '#7a9ea4', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 5 }}>📝 Special Instructions</div>
                      <div style={{ fontSize: 13, color: '#3d5a5f', lineHeight: 1.6, fontStyle: 'italic' }}>{r.notes}</div>
                    </div>
                  )}
                </div>
              </div>
            );
          })()}
        </div>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 14, marginBottom: 14 }}>
        <InfoCard icon="✅" title="Indications / Uses" items={d.indications} dotColor="#4a8c5a" />
        <InfoCard icon="⚠️" title="Side Effects" items={d.sideEffects} dotColor="#d4912a" border="3px solid #d4912a" />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 14, marginBottom: 14 }}>
        <InfoCard icon="🚫" title="Contraindications" items={d.contraindications} dotColor="#c0544b" border="3px solid #c0544b" />
        <InfoCard icon="🆘" title="Adverse Effects" items={d.adverseEffects} dotColor="#c0544b" border="3px solid #c0544b" />
      </div>

      {d.interactions?.length > 0 && (
        <div style={{ ...glass(), borderLeft: '3px solid #d4912a', marginBottom: 14 }}>
          <CardHead icon="🔄" title="Drug Interactions" />
          <ul style={{ listStyle: 'none' }}>
            {d.interactions.map((item, i) => (
              <li key={i} style={{ display: 'flex', gap: 8, color: '#3d5a5f', fontSize: 14, padding: '6px 0', borderBottom: '1px solid rgba(74,155,168,0.07)', lineHeight: 1.5 }}>
                <span style={{ color: '#d4912a', flexShrink: 0, marginTop: 2, fontSize: 11 }}>▸</span>{item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {d.nursingConsiderations?.length > 0 && (
        <div style={{ ...glass(), borderLeft: '3px solid #6b8f71', marginBottom: 14 }}>
          <CardHead icon="🩺" title="Nursing Considerations" />
          <ul style={{ listStyle: 'none' }}>
            {d.nursingConsiderations.map((n, i) => (
              <li key={i} style={{ display: 'flex', gap: 8, color: '#3d5a5f', fontSize: 14, padding: '6px 0', borderBottom: '1px solid rgba(74,155,168,0.07)', lineHeight: 1.5 }}>
                <span style={{ color: '#4a9ba8', flexShrink: 0, marginTop: 2, fontSize: 11 }}>▸</span>{n}
              </li>
            ))}
          </ul>
        </div>
      )}

      {d.monitoring?.length > 0 && (
        <div style={{ ...glass(), borderLeft: '3px solid #4a9ba8', marginBottom: 14 }}>
          <CardHead icon="📊" title="Monitoring Parameters" />
          <ul style={{ listStyle: 'none' }}>
            {d.monitoring.map((m, i) => (
              <li key={i} style={{ display: 'flex', gap: 8, color: '#3d5a5f', fontSize: 14, padding: '6px 0', borderBottom: '1px solid rgba(74,155,168,0.07)', lineHeight: 1.5 }}>
                <span style={{ color: '#4a9ba8', flexShrink: 0, marginTop: 2, fontSize: 11 }}>▸</span>{m}
              </li>
            ))}
          </ul>
        </div>
      )}

      <p style={{ textAlign: 'center', marginTop: 32, color: '#7a9ea4', fontSize: 12, fontFamily: "'Fira Code', monospace" }}>
        Always verify with current formulary, BNF, or pharmacy before administration · Clinical judgment required
      </p>
    </div>
  );
}

function DoseBlock({ label, value, color }) {
  if (!value) return null;
  return (
    <div style={{ background: 'rgba(255,255,255,0.7)', borderRadius: 10, padding: '12px 14px', border: `1px solid ${color}33` }}>
      <div style={{ fontSize: 10, fontFamily: "'Fira Code', monospace", color, letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 6 }}>{label}</div>
      <div style={{ fontSize: 14, fontWeight: 700, color: '#1e2d2f', lineHeight: 1.5 }}>{value}</div>
    </div>
  );
}

function InfoCard({ icon, title, items = [], dotColor, border }) {
  return (
    <div style={{ ...glass(), ...(border ? { borderLeft: border } : {}) }}>
      <CardHead icon={icon} title={title} />
      <ul style={{ listStyle: 'none' }}>
        {(items || []).map((item, i) => (
          <li key={i} style={{ display: 'flex', gap: 8, color: '#3d5a5f', fontSize: 14, padding: '6px 0', borderBottom: '1px solid rgba(74,155,168,0.07)', lineHeight: 1.5 }}>
            <span style={{ color: dotColor, flexShrink: 0, marginTop: 2, fontSize: 11 }}>▸</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function CardHead({ icon, title }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 14, paddingBottom: 12, borderBottom: '1px solid rgba(74,155,168,0.15)' }}>
      <span style={{ fontSize: 18 }}>{icon}</span>
      <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: 2.5, textTransform: 'uppercase', color: '#7a9ea4', fontFamily: "'Fira Code', monospace" }}>{title}</span>
    </div>
  );
}

function glass(extra = {}) {
  return {
    background: 'rgba(255,255,255,0.82)', backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255,255,255,0.6)', borderRadius: 16, padding: 20,
    boxShadow: '0 2px 20px rgba(0,0,0,0.07)', ...extra,
  };
}

function buildDrugPrompt(name, drugClass) {
  return `Drug reference for: "${name}"${drugClass ? ` (${drugClass})` : ''}. Reply with ONLY this JSON, no extra text:
{"genericName":"name","drugClass":"class","controlled":null,"pronunciation":null,"modeOfAction":"2-3 sentence MOA","routeDosages":[{"route":"PO (Oral)","adultDose":"dose","paediatricDose":"mg/kg dose","frequency":"BD/TDS/etc","maxDose":"max/day","notes":"instructions"},{"route":"IV (Intravenous)","adultDose":"dose","paediatricDose":"mg/kg","frequency":"freq","maxDose":"max","notes":"dilution, rate, time"}],"indications":["i1","i2","i3","i4","i5"],"sideEffects":["s1","s2","s3","s4","s5"],"contraindications":["c1","c2","c3","c4"],"adverseEffects":["a1","a2","a3","a4"],"interactions":["d1","d2","d3","d4"],"nursingConsiderations":["n1","n2","n3","n4","n5"],"monitoring":["m1","m2","m3"]}
Rules: only include routes that exist for this drug. Paediatric doses must be mg/kg with age ranges.`;
}

const backBtn = {
  background: 'rgba(255,255,255,0.82)', backdropFilter: 'blur(16px)',
  border: '1.5px solid rgba(255,255,255,0.6)', borderRadius: 12, padding: '9px 18px',
  fontSize: 13, fontWeight: 700, fontFamily: "'Fira Code', monospace",
  color: '#2d7a87', cursor: 'pointer', flexShrink: 0,
  boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
};

const saveBtn = {
  background: 'rgba(74,140,90,0.12)', color: '#4a8c5a',
  border: '1px solid rgba(74,140,90,0.3)', borderRadius: 8,
  padding: '7px 16px', fontSize: 12, fontFamily: "'Fira Code', monospace",
  cursor: 'pointer', flexShrink: 0,
};
