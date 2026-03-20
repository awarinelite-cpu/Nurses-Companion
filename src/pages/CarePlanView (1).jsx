import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase/config';
import { useAuth } from '../hooks/useAuth';

// In-memory session cache — instant on repeat views
const sessionCache = {};

export default function CarePlanView({ showToast, onLoginNeeded }) {
  const { diagnosis } = useParams();
  const dx = decodeURIComponent(diagnosis);
  const { user } = useAuth();
  const navigate = useNavigate();
  const [plan, setPlan] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingMsg, setLoadingMsg] = useState('');
  const [error, setError] = useState('');
  const [autoSaved, setAutoSaved] = useState(false);
  const autoSaveRan = useRef(false);

  useEffect(() => {
    autoSaveRan.current = false;
    setAutoSaved(false);
    generatePlan();
  }, [dx]);

  useEffect(() => {
    if (plan && user && !autoSaveRan.current) {
      autoSaveRan.current = true;
      saveToLibrary();
    }
  }, [plan, user]);

  async function generatePlan() {
    setLoading(true);
    setError('');
    setPlan(null);

    // 1. Session memory cache — instant
    if (sessionCache[dx]) {
      setPlan(sessionCache[dx]);
      setLoading(false);
      return;
    }

    // 2. Firestore cache
    setLoadingMsg('Checking cache…');
    try {
      const q = query(collection(db, 'carePlanCache'), where('diagnosis', '==', dx));
      const snap = await getDocs(q);
      if (!snap.empty) {
        const cached = snap.docs[0].data().plan;
        sessionCache[dx] = cached;
        setPlan(cached);
        setLoading(false);
        return;
      }
    } catch {}

    // 3. AI generation — fast prompt
    setLoadingMsg('Generating care plan…');
    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-haiku-4-5-20251001',
          max_tokens: 900,
          messages: [{ role: 'user', content: buildPrompt(dx) }],
        }),
      });
      const data = await res.json();
      const text = data.content?.find(b => b.type === 'text')?.text || '';
      const jsonMatch = text.match(/\{[\s\S]*\}/);
      if (!jsonMatch) throw new Error('Invalid response');
      const parsed = JSON.parse(jsonMatch[0]);

      sessionCache[dx] = parsed;
      setPlan(parsed);

      // Cache in Firestore background
      addDoc(collection(db, 'carePlanCache'), {
        diagnosis: dx, plan: parsed, createdAt: new Date().toISOString(),
      }).catch(() => {});

    } catch (e) {
      setError('Could not generate care plan. Please try again.');
      console.error(e);
    }
    setLoading(false);
  }

  async function saveToLibrary() {
    if (!user) return;
    try {
      const q = query(collection(db, 'users', user.uid, 'plans'), where('diagnosis', '==', dx));
      const existing = await getDocs(q);
      if (!existing.empty) return;
      await addDoc(collection(db, 'users', user.uid, 'plans'), {
        diagnosis: dx, savedAt: new Date().toISOString(),
      });
      setAutoSaved(true);
      showToast('📄 Care plan auto-saved to your library');
    } catch {}
  }

  return (
    <div style={{ position: 'relative', zIndex: 10, maxWidth: 960, margin: '0 auto', padding: '24px 24px 100px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 28, animation: 'fadeUp 0.4s ease both' }}>
        <button onClick={() => navigate('/')} style={backBtn}>← Back</button>
        <h2 style={{ fontFamily: "'Times New Roman', serif", fontWeight: 700, fontSize: 'clamp(18px, 3vw, 26px)', color: '#1e2d2f', flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          {dx}
        </h2>
        {autoSaved && (
          <span style={{ fontSize: 11, fontFamily: "'Fira Code', monospace", color: '#4a8c5a', background: 'rgba(74,140,90,0.1)', border: '1px solid rgba(74,140,90,0.3)', borderRadius: 20, padding: '5px 12px', whiteSpace: 'nowrap' }}>
            ✅ Saved to library
          </span>
        )}
        {plan && !user && (
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
          <button onClick={generatePlan} style={{ ...backBtn, marginTop: 16, color: '#c0544b', borderColor: 'rgba(192,84,75,0.3)' }}>Try Again</button>
        </div>
      )}

      {plan && <PlanDisplay plan={plan} diagnosis={dx} />}
    </div>
  );
}

function LoadingCard({ message }) {
  const steps = ['Checking cache…', 'Generating care plan…'];
  return (
    <div style={{ background: 'rgba(255,255,255,0.82)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.6)', borderRadius: 16, padding: 40, textAlign: 'center', boxShadow: '0 2px 20px rgba(0,0,0,0.08)' }}>
      <div style={{ width: 44, height: 44, border: '3px solid rgba(74,155,168,0.2)', borderTopColor: '#2d7a87', borderRadius: '50%', animation: 'spin 0.75s linear infinite', margin: '0 auto 20px' }} />
      <div style={{ fontSize: 14, fontWeight: 700, color: '#1e2d2f', marginBottom: 16 }}>{message || 'Loading…'}</div>
      <div style={{ display: 'flex', gap: 8, justifyContent: 'center' }}>
        {steps.map((step, i) => (
          <div key={i} style={{
            fontSize: 11, fontFamily: "'Fira Code', monospace",
            padding: '4px 12px', borderRadius: 20,
            background: message === step ? 'rgba(74,155,168,0.15)' : 'rgba(74,155,168,0.05)',
            color: message === step ? '#2d7a87' : '#7a9ea4',
            border: `1px solid ${message === step ? 'rgba(74,155,168,0.4)' : 'rgba(74,155,168,0.1)'}`,
            transition: 'all 0.3s',
          }}>{step}</div>
        ))}
      </div>
    </div>
  );
}

function PlanDisplay({ plan, diagnosis }) {
  const p = plan;
  const priorityColor = { high: '#c0544b', medium: '#d4912a', low: '#4a8c5a' };
  const pcolor = priorityColor[p.priority?.toLowerCase()] || '#4a8c5a';

  return (
    <div style={{ animation: 'fadeUp 0.4s ease both' }}>
      <div style={glassCard({ borderLeft: '4px solid #4a9ba8', marginBottom: 20 })}>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 10, fontFamily: "'Fira Code', monospace", color: '#4a9ba8', letterSpacing: 2.5, textTransform: 'uppercase', marginBottom: 8 }}>Nursing Diagnosis</div>
          <div style={{ fontFamily: "'Times New Roman', serif", fontWeight: 700, fontSize: 'clamp(22px, 4vw, 32px)', color: '#1e2d2f', marginBottom: 6 }}>{diagnosis}</div>
          {p.relatedTo && <div style={{ color: '#7a9ea4', fontSize: 14 }}>Related to: <span style={{ color: '#3d5a5f' }}>{p.relatedTo}</span></div>}
        </div>
        <div style={{
          background: `rgba(${pcolor === '#c0544b' ? '192,84,75' : pcolor === '#d4912a' ? '212,145,42' : '74,140,90'},0.1)`,
          color: pcolor, border: `1px solid ${pcolor}44`,
          borderRadius: 8, padding: '6px 14px',
          fontSize: 10, fontWeight: 700, letterSpacing: 2, fontFamily: "'Fira Code', monospace",
          whiteSpace: 'nowrap', alignSelf: 'flex-start',
        }}>{(p.priority || 'MEDIUM').toUpperCase()} PRIORITY</div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 16, marginBottom: 16 }}>
        <Section icon="🔍" title="Defining Characteristics / Evidence">
          <ul style={{ listStyle: 'none' }}>
            {(p.definingCharacteristics || p.evidence || []).map((item, i) => (
              <li key={i} style={{ display: 'flex', gap: 8, color: '#3d5a5f', fontSize: 14, padding: '7px 0', borderBottom: '1px solid rgba(74,155,168,0.08)', lineHeight: 1.5 }}>
                <span style={{ color: '#4a9ba8', flexShrink: 0, marginTop: 2, fontSize: 11 }}>▸</span>{item}
              </li>
            ))}
          </ul>
        </Section>

        <Section icon="🎯" title="Expected Outcomes / Goals">
          {(p.goals || []).map((g, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, padding: '8px 0', borderBottom: '1px solid rgba(74,155,168,0.08)' }}>
              <div style={{ width: 24, height: 24, borderRadius: '50%', background: 'rgba(74,140,90,0.15)', color: '#4a8c5a', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700, flexShrink: 0, fontFamily: "'Fira Code', monospace" }}>{i + 1}</div>
              <div style={{ color: '#3d5a5f', fontSize: 14, lineHeight: 1.55 }}>{g}</div>
            </div>
          ))}
        </Section>
      </div>

      <div style={{ ...glassCard(), marginBottom: 16 }}>
        <SectionHeader icon="🩺" title="Nursing Interventions" />
        <div style={{ display: 'grid', gap: 12 }}>
          {(p.interventions || []).map((inv, i) => (
            <div key={i} style={{ background: 'rgba(247,243,238,0.6)', border: '1px solid rgba(74,155,168,0.15)', borderRadius: 12, padding: 16, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <div>
                <div style={{ fontSize: 10, fontFamily: "'Fira Code', monospace", color: '#2d7a87', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 7 }}>Action</div>
                <div style={{ color: '#1e2d2f', fontSize: 14, lineHeight: 1.55 }}>{inv.action || inv}</div>
              </div>
              {inv.rationale && (
                <div style={{ borderLeft: '1px solid rgba(74,155,168,0.18)', paddingLeft: 16 }}>
                  <div style={{ fontSize: 10, fontFamily: "'Fira Code', monospace", color: '#d4912a', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 7 }}>Rationale</div>
                  <div style={{ color: '#7a9ea4', fontSize: 13, lineHeight: 1.55, fontStyle: 'italic' }}>{inv.rationale}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {p.evaluation && (
        <div style={{ ...glassCard({ borderLeft: '3px solid #6b8f71' }), marginBottom: 16 }}>
          <SectionHeader icon="📊" title="Evaluation Criteria" />
          <div style={{ background: 'rgba(107,143,113,0.08)', border: '1px solid rgba(107,143,113,0.2)', borderRadius: 10, padding: 18 }}>
            <p style={{ color: '#3d5a5f', fontSize: 15, lineHeight: 1.65 }}>{p.evaluation}</p>
          </div>
        </div>
      )}

      <p style={{ textAlign: 'center', marginTop: 32, color: '#7a9ea4', fontSize: 12, fontFamily: "'Fira Code', monospace" }}>
        AI-generated · Always verify with current clinical guidelines · Clinical judgment required
      </p>
    </div>
  );
}

function Section({ icon, title, children }) {
  return (
    <div style={glassCard()}>
      <SectionHeader icon={icon} title={title} />
      {children}
    </div>
  );
}

function SectionHeader({ icon, title }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 18, paddingBottom: 14, borderBottom: '1px solid rgba(74,155,168,0.15)' }}>
      <span style={{ fontSize: 18 }}>{icon}</span>
      <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: 2.5, textTransform: 'uppercase', color: '#7a9ea4', fontFamily: "'Fira Code', monospace" }}>{title}</span>
    </div>
  );
}

function glassCard(extra = {}) {
  return {
    background: 'rgba(255,255,255,0.82)', backdropFilter: 'blur(20px) saturate(1.2)',
    border: '1px solid rgba(255,255,255,0.6)', borderRadius: 16, padding: 22,
    boxShadow: '0 2px 20px rgba(0,0,0,0.08)', display: 'flex', flexDirection: 'column', ...extra,
  };
}

function buildPrompt(dx) {
  return `NANDA-I nursing care plan for: "${dx}". Reply with ONLY this JSON, no extra text:
{"priority":"high"|"medium"|"low","relatedTo":"etiology","definingCharacteristics":["s1","s2","s3","s4"],"goals":["SMART goal 1","SMART goal 2","SMART goal 3"],"interventions":[{"action":"action 1","rationale":"rationale 1"},{"action":"action 2","rationale":"rationale 2"},{"action":"action 3","rationale":"rationale 3"},{"action":"action 4","rationale":"rationale 4"},{"action":"action 5","rationale":"rationale 5"}],"evaluation":"evaluation criteria"}`;
}

const backBtn = {
  background: 'rgba(255,255,255,0.82)', backdropFilter: 'blur(16px)',
  border: '1.5px solid rgba(255,255,255,0.6)', borderRadius: 12, padding: '9px 18px',
  fontSize: 13, fontWeight: 700, fontFamily: "'Fira Code', monospace",
  color: '#2d7a87', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 7,
  boxShadow: '0 2px 12px rgba(0,0,0,0.08)', flexShrink: 0,
};

const saveBtn = {
  background: 'rgba(74,140,90,0.12)', color: '#4a8c5a',
  border: '1px solid rgba(74,140,90,0.3)', borderRadius: 8,
  padding: '7px 16px', fontSize: 12, fontFamily: "'Fira Code', monospace",
  cursor: 'pointer', flexShrink: 0,
};
