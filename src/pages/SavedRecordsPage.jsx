import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase'; // adjust to your firebase init path
import { collection, query, orderBy, limit, getDocs } from 'firebase/firestore';

// ─── Tab config ───────────────────────────────────────────────
const TABS = [
  { key: 'carePlans',   label: 'Care Plans',     icon: '📋', color: '#4a9ba8' },
  { key: 'drugProfiles', label: 'Drug Profiles',  icon: '💊', color: '#8b6347' },
  { key: 'drugSearches', label: 'Drug Searches',  icon: '🔍', color: '#5a7ea8' },
];

// ─── Fetch last N records from Firestore collection ───────────
async function fetchRecords(collectionName, maxDocs = 40) {
  try {
    const q = query(
      collection(db, collectionName),
      orderBy('timestamp', 'desc'),
      limit(maxDocs)
    );
    const snap = await getDocs(q);
    return snap.docs.map(d => ({ _docId: d.id, ...d.data() }));
  } catch (e) {
    console.error('[SavedRecords fetch]', e);
    return [];
  }
}

// ─── Format relative time ─────────────────────────────────────
function timeAgo(isoStr) {
  if (!isoStr) return '—';
  const diff = (Date.now() - new Date(isoStr).getTime()) / 1000;
  if (diff < 60) return `${Math.round(diff)}s ago`;
  if (diff < 3600) return `${Math.round(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.round(diff / 3600)}h ago`;
  return `${Math.round(diff / 86400)}d ago`;
}

// ─── Care Plan Card ───────────────────────────────────────────
function CarePlanCard({ record, onExpand, expanded }) {
  return (
    <div style={{
      background: 'rgba(255,255,255,0.88)', borderRadius: 16,
      border: '1px solid rgba(255,255,255,0.6)',
      borderLeft: '4px solid #4a9ba8',
      padding: '18px 20px', marginBottom: 12,
      boxShadow: '0 2px 16px rgba(0,0,0,0.07)',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 8 }}>
        <div>
          <div style={{ fontFamily: "'Times New Roman', serif", fontWeight: 700, fontSize: 16, color: '#1e2d2f' }}>
            {record.diagnosis}
          </div>
          <div style={{ fontSize: 12, color: '#7a9ea4', marginTop: 3 }}>
            {record.patient && <span>👤 {record.patient}</span>}
            {record.ward && <span style={{ marginLeft: 10 }}>🏥 {record.ward}</span>}
            {record.age && <span style={{ marginLeft: 10 }}>🎂 {record.age}</span>}
          </div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: 11, color: '#4a9ba8', fontFamily: "'Fira Code', monospace" }}>
            {timeAgo(record.timestamp)}
          </div>
          {record.elapsedSecs > 0 && (
            <div style={{ fontSize: 10, color: '#bbb', marginTop: 2 }}>⚡ {record.elapsedSecs}s</div>
          )}
        </div>
      </div>

      {record.allergies && (
        <div style={{ marginTop: 8, fontSize: 12, color: '#e05a5a', fontFamily: "'Fira Code', monospace" }}>
          ⚠ Allergies: {record.allergies}
        </div>
      )}

      <button
        onClick={() => onExpand(record._docId)}
        style={{
          marginTop: 12, background: 'none',
          border: '1px solid rgba(74,155,168,0.3)', borderRadius: 10,
          color: '#4a9ba8', fontSize: 12, cursor: 'pointer',
          padding: '5px 14px', fontFamily: "'Fira Code', monospace",
        }}
      >
        {expanded ? '▲ Hide plan' : '▼ View plan'}
      </button>

      {expanded && record.content && (
        <div style={{
          marginTop: 14, padding: '14px 16px',
          background: 'rgba(74,155,168,0.05)',
          borderRadius: 10, fontSize: 13,
          fontFamily: "'Times New Roman', serif", lineHeight: 1.7,
          color: '#1e2d2f', whiteSpace: 'pre-wrap',
          maxHeight: 420, overflowY: 'auto',
        }}>
          {record.content}
        </div>
      )}
    </div>
  );
}

// ─── Drug Profile Card ────────────────────────────────────────
function DrugProfileCard({ record, onExpand, expanded, navigate }) {
  return (
    <div style={{
      background: 'rgba(255,255,255,0.88)', borderRadius: 16,
      border: '1px solid rgba(255,255,255,0.6)',
      borderLeft: '4px solid #8b6347',
      padding: '18px 20px', marginBottom: 12,
      boxShadow: '0 2px 16px rgba(0,0,0,0.07)',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
        <div style={{ fontFamily: "'Times New Roman', serif", fontWeight: 700, fontSize: 16, color: '#1e2d2f' }}>
          💊 {record.drugName}
        </div>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <span style={{ fontSize: 11, color: '#8b6347', fontFamily: "'Fira Code', monospace" }}>
            {timeAgo(record.timestamp)}
          </span>
          <button
            onClick={() => navigate(`/drug/${encodeURIComponent(record.drugName)}`)}
            style={{
              background: '#8b6347', color: '#fff', border: 'none',
              borderRadius: 10, fontSize: 11, cursor: 'pointer',
              padding: '4px 12px', fontFamily: "'Fira Code', monospace",
            }}
          >
            Open →
          </button>
        </div>
      </div>

      <button
        onClick={() => onExpand(record._docId)}
        style={{
          marginTop: 10, background: 'none',
          border: '1px solid rgba(139,99,71,0.3)', borderRadius: 10,
          color: '#8b6347', fontSize: 12, cursor: 'pointer',
          padding: '5px 14px', fontFamily: "'Fira Code', monospace",
        }}
      >
        {expanded ? '▲ Hide profile' : '▼ View cached profile'}
      </button>

      {expanded && record.content && (
        <div style={{
          marginTop: 14, padding: '14px 16px',
          background: 'rgba(139,99,71,0.04)',
          borderRadius: 10, fontSize: 13,
          fontFamily: "'Times New Roman', serif", lineHeight: 1.7,
          color: '#1e2d2f', whiteSpace: 'pre-wrap',
          maxHeight: 380, overflowY: 'auto',
        }}>
          {record.content}
        </div>
      )}
    </div>
  );
}

// ─── Drug Search Card ─────────────────────────────────────────
function DrugSearchCard({ record, navigate }) {
  return (
    <div style={{
      background: 'rgba(255,255,255,0.88)', borderRadius: 16,
      border: '1px solid rgba(255,255,255,0.6)',
      borderLeft: '4px solid #5a7ea8',
      padding: '16px 20px', marginBottom: 10,
      boxShadow: '0 2px 16px rgba(0,0,0,0.07)',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
        <div>
          <span style={{ fontSize: 13, fontFamily: "'Fira Code', monospace", color: '#5a7ea8', marginRight: 6 }}>🔍</span>
          <span style={{ fontFamily: "'Times New Roman', serif", fontWeight: 700, fontSize: 15, color: '#1e2d2f' }}>
            "{record.query}"
          </span>
          {record.aiUsed && (
            <span style={{
              marginLeft: 8, fontSize: 10,
              background: 'rgba(74,155,168,0.12)', color: '#4a9ba8',
              border: '1px solid rgba(74,155,168,0.25)',
              borderRadius: 20, padding: '2px 8px',
              fontFamily: "'Fira Code', monospace",
            }}>✨ AI</span>
          )}
        </div>
        <div style={{ fontSize: 11, color: '#7a9ea4', fontFamily: "'Fira Code', monospace" }}>
          {record.resultCount} results · {timeAgo(record.timestamp)}
        </div>
      </div>

      {record.results?.length > 0 && (
        <div style={{ marginTop: 10, display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {record.results.slice(0, 8).map(name => (
            <button
              key={name}
              onClick={() => navigate(`/drug/${encodeURIComponent(name)}`)}
              style={{
                background: 'rgba(90,126,168,0.08)',
                border: '1px solid rgba(90,126,168,0.2)',
                borderRadius: 20, color: '#3d5a5f',
                fontSize: 11, padding: '3px 10px',
                cursor: 'pointer', fontFamily: "'Times New Roman', serif",
              }}
            >
              {name}
            </button>
          ))}
          {record.results.length > 8 && (
            <span style={{ fontSize: 11, color: '#aaa', alignSelf: 'center' }}>
              +{record.results.length - 8} more
            </span>
          )}
        </div>
      )}
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────
export default function SavedRecordsPage() {
  const [activeTab, setActiveTab] = useState('carePlans');
  const [records, setRecords] = useState({});
  const [loading, setLoading] = useState({});
  const [expanded, setExpanded] = useState({});
  const navigate = useNavigate();

  // Load records when tab changes
  useEffect(() => {
    if (records[activeTab]) return; // already loaded
    setLoading(l => ({ ...l, [activeTab]: true }));
    fetchRecords(activeTab, 50).then(data => {
      setRecords(r => ({ ...r, [activeTab]: data }));
      setLoading(l => ({ ...l, [activeTab]: false }));
    });
  }, [activeTab]);

  function toggleExpand(docId) {
    setExpanded(e => ({ ...e, [docId]: !e[docId] }));
  }

  const tab = TABS.find(t => t.key === activeTab);
  const list = records[activeTab] || [];
  const isLoading = loading[activeTab];

  return (
    <div style={{ maxWidth: 780, margin: '0 auto', padding: '0 16px 48px', animation: 'fadeUp 0.3s ease both' }}>
      <style>{`
        @keyframes fadeUp { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:translateY(0)} }
        @keyframes shimmer {
          0%{background-position:-400px 0} 100%{background-position:400px 0}
        }
        .sk {
          background: linear-gradient(90deg,rgba(74,155,168,0.08) 25%,rgba(74,155,168,0.18) 50%,rgba(74,155,168,0.08) 75%);
          background-size:400px 100%; animation:shimmer 1.4s infinite;
          border-radius:6px; margin-bottom:10px;
        }
      `}</style>

      {/* Header */}
      <div style={{ marginBottom: 24 }}>
        <div style={{ fontSize: 11, fontFamily: "'Fira Code', monospace", color: '#4a9ba8', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 6 }}>
          Autosaved History
        </div>
        <h1 style={{ fontFamily: "'Times New Roman', serif", fontSize: 26, fontWeight: 700, color: '#1e2d2f', margin: 0 }}>
          Saved Records
        </h1>
        <p style={{ fontFamily: "'Times New Roman', serif", color: '#3d5a5f', fontSize: 13, marginTop: 6 }}>
          All drug searches, profiles, and care plans are automatically saved as they are generated.
        </p>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
        {TABS.map(t => (
          <button
            key={t.key}
            onClick={() => setActiveTab(t.key)}
            style={{
              background: activeTab === t.key ? t.color : 'rgba(255,255,255,0.6)',
              color: activeTab === t.key ? '#fff' : '#3d5a5f',
              border: `1.5px solid ${activeTab === t.key ? t.color : 'rgba(255,255,255,0.5)'}`,
              borderRadius: 12, padding: '9px 20px',
              fontSize: 13, fontFamily: "'Times New Roman', serif",
              fontWeight: 700, cursor: 'pointer',
              transition: 'all 0.18s',
            }}
          >
            {t.icon} {t.label}
            {records[t.key] && (
              <span style={{
                marginLeft: 8, fontSize: 11,
                background: activeTab === t.key ? 'rgba(255,255,255,0.25)' : 'rgba(0,0,0,0.08)',
                borderRadius: 20, padding: '1px 8px',
              }}>
                {records[t.key].length}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Refresh button */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 12 }}>
        <button
          onClick={() => {
            setRecords(r => { const n = { ...r }; delete n[activeTab]; return n; });
          }}
          style={{
            background: 'none', border: '1px solid rgba(74,155,168,0.3)',
            borderRadius: 10, color: '#4a9ba8', fontSize: 12,
            cursor: 'pointer', padding: '5px 14px',
            fontFamily: "'Fira Code', monospace", letterSpacing: 1,
          }}
        >
          ↻ Refresh
        </button>
      </div>

      {/* Loading skeleton */}
      {isLoading && (
        <div>
          {[...Array(5)].map((_, i) => (
            <div key={i} style={{ marginBottom: 14 }}>
              <div className="sk" style={{ height: 80 }} />
            </div>
          ))}
        </div>
      )}

      {/* Empty state */}
      {!isLoading && list.length === 0 && (
        <div style={{ textAlign: 'center', padding: '60px 20px' }}>
          <div style={{ fontSize: 40, marginBottom: 12 }}>{tab?.icon}</div>
          <div style={{ fontFamily: "'Times New Roman', serif", fontWeight: 700, fontSize: 16, color: '#1e2d2f' }}>
            No {tab?.label.toLowerCase()} saved yet
          </div>
          <div style={{ fontSize: 13, color: '#7a9ea4', marginTop: 6 }}>
            Records appear here automatically as soon as they are generated.
          </div>
        </div>
      )}

      {/* Record list */}
      {!isLoading && list.length > 0 && (
        <div style={{ animation: 'fadeUp 0.25s ease both' }}>
          {activeTab === 'carePlans' && list.map(r => (
            <CarePlanCard
              key={r._docId}
              record={r}
              onExpand={toggleExpand}
              expanded={!!expanded[r._docId]}
            />
          ))}
          {activeTab === 'drugProfiles' && list.map(r => (
            <DrugProfileCard
              key={r._docId}
              record={r}
              onExpand={toggleExpand}
              expanded={!!expanded[r._docId]}
              navigate={navigate}
            />
          ))}
          {activeTab === 'drugSearches' && list.map(r => (
            <DrugSearchCard
              key={r._docId}
              record={r}
              navigate={navigate}
            />
          ))}
        </div>
      )}
    </div>
  );
}
