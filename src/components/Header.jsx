import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export default function Header({ onLoginClick, onLibraryClick, showToast }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  async function handleLogout() {
    await logout();
    showToast('👋 Signed out');
    navigate('/');
  }

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 100,
      background: 'rgba(255,255,255,0.92)',
      backdropFilter: 'blur(20px) saturate(1.4)',
      borderBottom: '1px solid rgba(255,255,255,0.6)',
      boxShadow: '0 2px 24px rgba(0,0,0,0.08)',
    }}>
      {/* Top bar — logo + auth */}
      <div style={{
        padding: '12px 24px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        borderBottom: '1px solid rgba(74,155,168,0.1)',
      }}>
        {/* Logo */}
        <div
          onClick={() => navigate('/')}
          style={{ display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer' }}
        >
          <div style={{
            width: 40, height: 40, borderRadius: 12,
            background: 'linear-gradient(135deg, #4a9ba8, #2d7a87)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 18, boxShadow: '0 4px 16px rgba(74,155,168,0.35)',
          }}>🩺</div>
          <div>
            <div style={{ fontFamily: "'Times New Roman', serif", fontWeight: 700, fontSize: 20, color: '#1e2d2f', letterSpacing: -0.3 }}>
              NurseCare AI
            </div>
            <div style={{ fontSize: 9, letterSpacing: '2.5px', textTransform: 'uppercase', color: '#7a9ea4', fontFamily: "'Fira Code', monospace" }}>
              NANDA-I · Evidence-Based
            </div>
          </div>
        </div>

        {/* Auth area */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{
            background: 'rgba(74,140,90,0.1)', color: '#4a8c5a',
            border: '1px solid rgba(74,140,90,0.25)',
            borderRadius: 20, padding: '4px 12px',
            fontSize: 11, fontFamily: "'Fira Code', monospace",
          }}>AI-Powered</span>

          {user ? (
            <>
              <button onClick={() => onLibraryClick('plans')} style={ghostBtn}>📚 Library</button>
              <span style={{ fontSize: 12, color: '#3d5a5f', fontFamily: "'Fira Code', monospace" }}>
                {user.displayName || user.email?.split('@')[0]}
              </span>
              <button onClick={handleLogout} style={ghostBtn}>Sign out</button>
            </>
          ) : (
            <button onClick={onLoginClick} style={{
              background: 'linear-gradient(135deg, #4a9ba8, #2d7a87)',
              color: '#fff', border: 'none', borderRadius: 8,
              padding: '7px 18px', fontSize: 12,
              fontFamily: "'Fira Code', monospace", cursor: 'pointer',
              fontWeight: 700,
            }}>Sign in</button>
          )}
        </div>
      </div>

      {/* Navigation tab bar */}
      <div style={{
        display: 'flex', alignItems: 'center',
        padding: '0 24px',
        gap: 4,
        overflowX: 'auto',
      }}>
        <NavTab
          icon="💊"
          label="Drug Search"
          active={isActive('/')}
          onClick={() => navigate('/')}
          color="#4a9ba8"
        />
        <NavTab
          icon="📋"
          label="Care Plan"
          active={isActive('/care-plan') || isActive('/plan/')}
          onClick={() => navigate('/care-plan')}
          color="#8b6347"
        />
        <NavTab
          icon="🔬"
          label="Lab Guide"
          active={isActive('/labs')}
          onClick={() => navigate('/labs')}
          color="#5a7ea8"
        />
        <NavTab
          icon="💾"
          label="Saved Records"
          active={isActive('/saved')}
          onClick={() => navigate('/saved')}
          color="#6b8b47"
        />
      </div>
    </header>
  );
}

function NavTab({ icon, label, active, onClick, color }) {
  return (
    <button
      onClick={onClick}
      style={{
        display: 'flex', alignItems: 'center', gap: 7,
        padding: '11px 20px',
        background: 'none',
        border: 'none',
        borderBottom: active ? `3px solid ${color}` : '3px solid transparent',
        color: active ? color : '#7a9ea4',
        fontSize: 13,
        fontFamily: "'Times New Roman', serif",
        fontWeight: active ? 700 : 400,
        cursor: 'pointer',
        transition: 'all 0.15s',
        whiteSpace: 'nowrap',
        marginBottom: -1,
      }}
      onMouseEnter={e => {
        if (!active) e.currentTarget.style.color = color;
      }}
      onMouseLeave={e => {
        if (!active) e.currentTarget.style.color = '#7a9ea4';
      }}
    >
      <span style={{ fontSize: 15 }}>{icon}</span>
      {label}
    </button>
  );
}

const ghostBtn = {
  background: 'rgba(74,155,168,0.08)', color: '#2d7a87',
  border: '1px solid rgba(74,155,168,0.25)',
  borderRadius: 8, padding: '5px 12px',
  fontSize: 12, fontFamily: "'Fira Code', monospace",
  cursor: 'pointer',
};
