import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  collection, query, orderBy, getDocs, deleteDoc, doc
} from 'firebase/firestore';
import { db } from '../firebase/config';
import { useAuth } from '../hooks/useAuth';

export default function LibraryPanel({ defaultTab, onClose, showToast }) {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [tab, setTab] = useState(defaultTab || 'plans');
  const [plans, setPlans] = useState(null);
  const [drugs, setDrugs] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!user) return;
    if (tab === 'plans' && plans === null) loadPlans();
    if (tab === 'drugs' && drugs === null) loadDrugs();
  }, [tab, user]);

  async function loadPlans() {
    setLoading(true);
    try {
      const q = query(collection(db, 'users', user.uid, 'plans'), orderBy('savedAt', 'desc'));
      const snap = await getDocs(q);
      setPlans(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    } catch { setPlans([]); }
    setLoading(false);
  }

  async function loadDrugs() {
    setLoading(true);
    try {
      const q = query(collection(db, 'users', user.uid, 'drugs'), orderBy('savedAt', 'desc'));
      const snap = await getDocs(q);
      setDrugs(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    } catch { setDrugs([]); }
    setLoading(false);
  }

  async function deletePlan(id) {
    await deleteDoc(doc(db, 'users', user.uid, 'plans', id));
    setPlans(p => p.filter(x => x.id !== id));
    showToast('🗑 Plan deleted');
  }

  async function deleteDrug(id) {
    await deleteDoc(doc(db, 'users', user.uid, 'drugs', id));
    setDrugs(d => d.filter(x => x.id !== id));
    showToast('🗑 Drug removed');
  }

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 500, display: 'flex', justifyContent: 'flex-end' }}>
      {/* backdrop */}
      <div onClick={onClose} style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.4)' }} />

      {/* panel */}
      <div style={{
        position: 'relative', zIndex: 1,
        width: '100%', maxWidth: 400,
        background: 'rgba(255,255,255,0.97)', backdropFilter: 'blur(24px)',
        boxShadow: '-8px 0 48px rgba(0,0,0,0.18)',
        display: 'flex', flexDirection: 'column',
        animation: 'fadeIn 0.25s ease',
      }}>
        {/* header */}
        <div style={{
          padding: '20px 24px', borderBottom: '1px solid rgba(74,155,168,0.15)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <div>
            <div style={{ fontFamily: "'Times New Roman', serif", fontWeight: 700, fontSize: 20, color: '#1e2d2f' }}>My Library</div>
            <div style={{ fontSize: 11, color: '#7a9ea4', fontFamily: "'Fira Code', monospace", letterSpacing: 1.5 }}>
              {user ? user.email : ''}
            </div>
          </div>
          <button onClick={onClose} style={{ background: 'none', border: 'none', fontSize: 22, cursor: 'pointer', color: '#7a9ea4' }}>✕</button>
        </div>

        {/* tabs */}
        <div style={{ display: 'flex', borderBottom: '1px solid rgba(74,155,168,0.15)', padding: '0 24px' }}>
          {[['plans', '📄 Care Plans'], ['drugs', '💊 Saved Drugs']].map(([key, label]) => (
            <button
              key={key}
              onClick={() => setTab(key)}
              style={{
                flex: 1, padding: '12px 0', background: 'none', border: 'none',
                borderBottom: tab === key ? '2px solid #4a9ba8' : '2px solid transparent',
                color: tab === key ? '#2d7a87' : '#7a9ea4',
                fontSize: 13, fontFamily: "'Times New Roman', serif", fontWeight: 700,
                cursor: 'pointer', transition: 'all 0.2s',
              }}
            >{label}</button>
          ))}
        </div>

        {/* content */}
        <div style={{ flex: 1, overflowY: 'auto', padding: 24 }}>
          {!user ? (
            <Empty emoji="🔐" msg="Sign in to see your library" />
          ) : loading ? (
            <div style={{ textAlign: 'center', color: '#7a9ea4', padding: 40 }}>Loading…</div>
          ) : tab === 'plans' ? (
            <>
              {(plans || []).length === 0 ? (
                <Empty emoji="📄" msg="No saved plans yet. Generate a care plan and hit 💾 Save." />
              ) : (plans || []).map(p => (
                <div key={p.id} style={itemStyle}>
                  <button
                    onClick={() => { onClose(); navigate(`/plan/${encodeURIComponent(p.diagnosis)}`); }}
                    style={{ background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', flex: 1 }}
                  >
                    <div style={{ fontFamily: "'Times New Roman', serif", fontWeight: 700, color: '#1e2d2f', fontSize: 14, marginBottom: 3 }}>{p.diagnosis}</div>
                    <div style={{ fontSize: 11, color: '#7a9ea4', fontFamily: "'Fira Code', monospace" }}>
                      Saved {new Date(p.savedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </div>
                  </button>
                  <button onClick={() => deletePlan(p.id)} style={delBtn} title="Delete">🗑</button>
                </div>
              ))}
            </>
          ) : (
            <>
              {(drugs || []).length === 0 ? (
                <Empty emoji="💊" msg="No saved drugs yet. Look up a drug and hit 💚 Save." />
              ) : (drugs || []).map(d => (
                <div key={d.id} style={itemStyle}>
                  <button
                    onClick={() => { onClose(); navigate(`/drug/${encodeURIComponent(d.name)}`); }}
                    style={{ background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', flex: 1 }}
                  >
                    <div style={{ fontFamily: "'Times New Roman', serif", fontWeight: 700, color: '#1e2d2f', fontSize: 14, marginBottom: 3 }}>{d.name}</div>
                    <div style={{ fontSize: 11, color: '#7a9ea4', fontFamily: "'Fira Code', monospace" }}>
                      {d.drugClass || d.class} · Saved {new Date(d.savedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </div>
                  </button>
                  <button onClick={() => deleteDrug(d.id)} style={delBtn} title="Delete">🗑</button>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function Empty({ emoji, msg }) {
  return (
    <div style={{ textAlign: 'center', padding: '48px 16px', color: '#7a9ea4' }}>
      <div style={{ fontSize: 40, marginBottom: 12 }}>{emoji}</div>
      <div style={{ fontSize: 14, fontFamily: "'Times New Roman', serif", fontWeight: 700 }}>{msg}</div>
    </div>
  );
}

const itemStyle = {
  display: 'flex', alignItems: 'center', gap: 10,
  padding: '14px 16px', borderRadius: 12,
  border: '1px solid rgba(74,155,168,0.15)',
  marginBottom: 10, background: 'rgba(247,243,238,0.6)',
};

const delBtn = {
  background: 'none', border: 'none', cursor: 'pointer',
  fontSize: 16, padding: 4, opacity: 0.6, flexShrink: 0,
};
