import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase/config';
import { useAuth } from '../hooks/useAuth';
import { ALL_DRUGS } from '../data/drugClasses';

export default function DrugDetailView({ showToast, onLoginNeeded }) {
  const { drugName } = useParams();
  const name = decodeURIComponent(drugName);
  const { user } = useAuth();
  const navigate = useNavigate();
  const [drug, setDrug] = useState(null);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchDrug();
  }, [name]);

  async function fetchDrug() {
    setLoading(true);
    setError('');
    setDrug(null);

    // 1. Check global Firestore cache
    try {
      const q = query(collection(db, 'drugCache'), where('name', '==', name));
      const snap = await getDocs(q);
      if (!snap.empty) {
        setDrug(snap.docs[0].data());
        setLoading(false);
        return;
      }
    } catch { /* continue */ }

    // 2. Find class context
    const found = ALL_DRUGS.find(d => d.name.toLowerCase() === name.toLowerCase());

    // 3. Generate with AI
    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 1800,
          messages: [{ role: 'user', content: buildDrugPrompt(name, found?.class) }],
        }),
      });
      const data = await res.json();
      const text = data.content?.find(b => b.type === 'text')?.text || '';
      const jsonMatch = text.match(/\{[\s\S]*\}/);
      if (!jsonMatch) throw new Error('Invalid AI response');
      const parsed = JSON.parse(jsonMatch[0]);
      const drugData = { ...parsed, name, class: found?.class || parsed.drugClass, savedAt: new Date().toISOString() };
      setDrug(drugData);

      // Cache globally
      try {
        await addDoc(collection(db, 'drugCache'), drugData);
      } catch { /* non-fatal */ }

    } catch (e) {
      setError('Could not load drug information. Please check your API configuration and try again.');
      console.error(e);
    }
    setLoading(false);
  }

  async function saveDrug() {
    if (!user) { onLoginNeeded(); return; }
    setSaving(true);
    try {
      await addDoc(collection(db, 'users', user.uid, 'drugs'), {
        name,
        drugClass: drug?.drugClass || drug?.class || '',
        savedAt: new Date().toISOString(),
      });
      showToast('💚 Drug saved to your library!');
    } catch {
      showToast('❌ Save failed');
    }
    setSaving(false);
  }

  return (
    <div style={{ position: 'relative', zIndex: 10, maxWidth: 960, margin: '0 auto', padding: '24px 24px 100px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 28 }}>
        <button onClick={() => navigate(-1)} style={backBtn}>← Back</button>
        <h2 style={{ fontFamily: "'Times New Roman', serif", fontWeight: 700, fontSize: 'clamp(18px, 3vw, 26px)', color: '#1e2d2f', flex: 1 }}>
          {name}
        </h2>
        {drug && (
          <button onClick={saveDrug} disabled={saving} style={saveBtn}>
            {saving ? '⏳ Saving…' : '💚 Save Drug'}
          </button>
        )}
      </div>

      {loading && (
        <div style={{ textAlign: 'center', padding: '80px 0' }}>
          <div style={{ width: 44, height: 44, border: '3px solid rgba(255,255,255,0.2)', borderTopColor: '#8b6347', borderRadius: '50%', animation: 'spin 0.75s linear infinite', margin: '0 auto 16px' }} />
          <p style={{ color: '#1e2d2f', fontSize: 14, fontWeight: 700 }}>Loading drug reference…</p>
        </div>
      )}

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

function DrugDisplay({ drug: d }) {
  return (
    <div style={{ animation: 'fadeUp 0.4s ease both' }}>
      {/* Banner */}
      <div style={{ ...glass(), borderLeft: '4px solid #8b6347', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 16, marginBottom: 20 }}>
        <div>
          <div style={{ fontSize: 10, fontFamily: "'Fira Code', monospace", color: '#8b6347', letterSpacing: 2.5, textTransform: 'uppercase', marginBottom: 6 }}>💊 Drug Reference</div>
          <div style={{ fontFamily: "'Times New Roman', serif", fontWeight: 700, fontSize: 'clamp(22px, 4vw, 32px)', color: '#1e2d2f', marginBottom: 4 }}>{d.name}</div>
          {d.genericName && <div style={{ color: '#7a9ea4', fontSize: 14, fontStyle: 'italic' }}>Generic: {d.genericName}</div>}
        </div>
        {(d.drugClass || d.class) && (
          <div style={{ background: 'rgba(139,99,71,0.1)', color: '#6b4a32', border: '1px solid rgba(139,99,71,0.3)', borderRadius: 8, padding: '6px 14px', fontSize: 10, fontWeight: 700, letterSpacing: 2, fontFamily: "'Fira Code', monospace', textTransform: 'uppercase", whiteSpace: 'nowrap', alignSelf: 'flex-start' }}>
            {d.drugClass || d.class}
          </div>
        )}
      </div>

      {/* Dose + MOA */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 14, marginBottom: 14 }}>
        {(d.dose || d.dosage || d.route) && (
          <div style={glass()}>
            <CardHead icon="⚖️" title="Dose & Dosage" />
            <div style={{ background: 'rgba(139,99,71,0.06)', border: '1px solid rgba(139,99,71,0.2)', borderRadius: 10, padding: 14 }}>
              {[['Dose', d.dose], ['Schedule', d.dosage], ['Route', d.route]].filter(([, v]) => v).map(([k, v]) => (
                <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '7px 0', borderBottom: '1px solid rgba(139,99,71,0.1)' }}>
                  <span style={{ fontSize: 11, fontFamily: "'Fira Code', monospace", textTransform: 'uppercase', letterSpacing: 1, color: '#7a9ea4' }}>{k}</span>
                  <span style={{ fontSize: 14, fontWeight: 700, color: '#1e2d2f', textAlign: 'right', maxWidth: '60%' }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {d.modeOfAction && (
          <div style={{ ...glass(), borderLeft: '3px solid #4a9ba8' }}>
            <CardHead icon="⚙️" title="How It Works" />
            <p style={{ color: '#3d5a5f', fontSize: 14, lineHeight: 1.7 }}>{d.modeOfAction}</p>
          </div>
        )}
      </div>

      {/* Indications + Side Effects */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 14, marginBottom: 14 }}>
        <InfoCard icon="✅" title="Indications / Uses" items={d.indications} dotColor="#4a8c5a" />
        <InfoCard icon="⚠️" title="Side Effects" items={d.sideEffects} dotColor="#d4912a" border="3px solid #d4912a" />
      </div>

      {/* Contraindications + Adverse Effects */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 14, marginBottom: 14 }}>
        <InfoCard icon="🚫" title="Contraindications" items={d.contraindications} dotColor="#c0544b" border="3px solid #c0544b" />
        <InfoCard icon="🆘" title="Adverse Effects" items={d.adverseEffects} dotColor="#c0544b" border="3px solid #c0544b" />
      </div>

      {/* Nursing considerations - full width */}
      {d.nursingConsiderations && (
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

      <p style={{ textAlign: 'center', marginTop: 32, color: '#7a9ea4', fontSize: 12, fontFamily: "'Fira Code', monospace" }}>
        Always verify with current formulary, BNF, or pharmacy before administration · Clinical judgment required
      </p>
    </div>
  );
}

function InfoCard({ icon, title, items = [], dotColor, border }) {
  return (
    <div style={{ ...glass(), ...(border ? { borderLeft: border } : {}) }}>
      <CardHead icon={icon} title={title} />
      <ul style={{ listStyle: 'none' }}>
        {items.map((item, i) => (
          <li key={i} style={{ display: 'flex', gap: 8, color: '#3d5a5f', fontSize: 14, padding: '6px 0', borderBottom: '1px solid rgba(74,155,168,0.07)', lineHeight: 1.5 }}>
            <span style={{ color: dotColor, flexShrink: 0, marginTop: 2, fontSize: 11 }}>▸</span>
            <span style={{ color: '#3d5a5f', fontSize: 14, lineHeight: 1.55 }}>{item}</span>
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
  return `Generate a detailed nursing drug reference for: "${name}"${drugClass ? ` (${drugClass})` : ''}

Respond ONLY with valid JSON (no markdown) in exactly this structure:
{
  "genericName": "generic name if brand given, or same if already generic",
  "drugClass": "pharmacological class",
  "dose": "typical adult dose",
  "dosage": "dosing frequency (e.g. once daily, BD, TDS)",
  "route": "routes of administration",
  "modeOfAction": "clear explanation of mechanism of action in 2-3 sentences",
  "indications": ["indication 1", "indication 2", "indication 3", "indication 4"],
  "sideEffects": ["side effect 1", "side effect 2", "side effect 3", "side effect 4"],
  "contraindications": ["contraindication 1", "contraindication 2", "contraindication 3"],
  "adverseEffects": ["serious adverse effect 1", "serious adverse effect 2", "serious adverse effect 3"],
  "nursingConsiderations": ["consideration 1", "consideration 2", "consideration 3", "consideration 4", "consideration 5"]
}`;
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
