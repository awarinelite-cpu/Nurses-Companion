import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export default function Header({ onLoginClick, onLibraryClick, showToast }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    await logout();
    showToast('👋 Signed out');
    navigate('/');
  }

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 100,
      background: 'rgba(255,255,255,0.82)',
      backdropFilter: 'blur(20px) saturate(1.4)',
      borderBottom: '1px solid rgba(255,255,255,0.6)',
      padding: '14px 24px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      boxShadow: '0 2px 24px rgba(0,0,0,0.08)',
      flexWrap: 'wrap', gap: 10,
    }}>

      {/* Logo */}
      <div
        onClick={() => navigate('/')}
        style={{ display: 'flex', alignItems: 'center', gap: 14, cursor: 'pointer' }}
      >
        <div style={{
          width: 42, height: 42, borderRadius: 12,
          background: 'linear-gradient(135deg, #4a9ba8, #2d7a87)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 20, boxShadow: '0 4px 16px rgba(74,155,168,0.35)',
        }}>🩺</div>
        <div>
          <div style={{ fontFamily: "'Times New Roman', serif", fontWeight: 700, fontSize: 21, color: '#1e2d2f', letterSpacing: -0.3 }}>
            NurseCare AI
          </div>
          <div style={{ fontSize: 10, letterSpacing: '2.5px', textTransform: 'uppercase', color: '#7a9ea4', fontFamily: "'Fira Code', monospace" }}>
            NANDA-I · Evidence-Based
          </div>
        </div>
      </div>

      {/* Right side */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>

        {/* AI badge */}
        <span style={{
          background: 'rgba(74,140,90,0.1)', color: '#4a8c5a',
          border: '1px solid rgba(74,140,90,0.25)',
          borderRadius: 20, padding: '5px 13px',
          fontSize: 11, fontFamily: "'Fira Code', monospace",
        }}>AI-Powered</span>

        {/* Care Plan */}
        <button
          onClick={() => navigate('/care-plan')}
          style={outlineBtn}
        >📋 Care Plan</button>

        {/* Lab Guide */}
        <button
          onClick={() => navigate('/labs')}
          style={outlineBtn}
        >🔬 Lab Guide</button>

        {/* Saved Records */}
        <button
          onClick={() => navigate('/saved')}
          style={outlineBtn}
        >💾 Saved</button>

        {user ? (
          <>
            <button onClick={() => onLibraryClick('plans')} style={outlineBtn}>
              📚 My Library
            </button>
            <span style={{ fontSize: 13, color: '#3d5a5f', fontFamily: "'Fira Code', monospace" }}>
              {user.displayName || user.email?.split('@')[0]}
            </span>
            <button onClick={handleLogout} style={outlineBtn}>Sign out</button>
          </>
        ) : (
          <button onClick={onLoginClick} style={{
            background: 'linear-gradient(135deg, #4a9ba8, #2d7a87)',
            color: '#fff', border: 'none', borderRadius: 8,
            padding: '7px 16px', fontSize: 12,
            fontFamily: "'Fira Code', monospace", cursor: 'pointer',
          }}>Sign in</button>
        )}
      </div>
    </header>
  );
}

const outlineBtn = {
  background: 'rgba(74,155,168,0.12)', color: '#2d7a87',
  border: '1px solid rgba(74,155,168,0.3)',
  borderRadius: 8, padding: '6px 14px',
  fontSize: 12, fontFamily: "'Fira Code', monospace",
  cursor: 'pointer',
};
