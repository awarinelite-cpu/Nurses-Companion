import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';

const FRIENDLY = {
  'auth/email-already-in-use': 'This email is already registered. Try signing in.',
  'auth/invalid-email': 'Please enter a valid email address.',
  'auth/weak-password': 'Password must be at least 6 characters.',
  'auth/user-not-found': 'No account found with this email.',
  'auth/wrong-password': 'Incorrect password. Please try again.',
  'auth/invalid-credential': 'Incorrect email or password.',
  'auth/too-many-requests': 'Too many attempts. Please wait a moment.',
};

export default function AuthModal({ onClose, showToast }) {
  const { signIn, signUp, signInGoogle } = useAuth();
  const [mode, setMode] = useState('signin'); // signin | signup
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      if (mode === 'signin') {
        await signIn(email, password);
        showToast('✅ Welcome back!');
      } else {
        await signUp(email, password, name);
        showToast('🎉 Account created!');
      }
      onClose();
    } catch (err) {
      setError(FRIENDLY[err.code] || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  async function handleGoogle() {
    setError('');
    setLoading(true);
    try {
      await signInGoogle();
      showToast('✅ Signed in with Google!');
      onClose();
    } catch (err) {
      setError(FRIENDLY[err.code] || 'Google sign-in failed.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 1000,
      background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(6px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: 16,
    }} onClick={e => e.target === e.currentTarget && onClose()}>
      <div style={{
        background: 'rgba(255,255,255,0.96)', backdropFilter: 'blur(20px)',
        borderRadius: 20, padding: 36, width: '100%', maxWidth: 420,
        boxShadow: '0 24px 64px rgba(0,0,0,0.25)',
        border: '1px solid rgba(255,255,255,0.8)',
        animation: 'fadeUp 0.3s ease both',
      }}>
        <div style={{ textAlign: 'center', marginBottom: 28 }}>
          <div style={{ fontSize: 32, marginBottom: 8 }}>🩺</div>
          <h2 style={{ fontFamily: "'Times New Roman', serif", fontSize: 24, color: '#1e2d2f', marginBottom: 4 }}>
            {mode === 'signin' ? 'Welcome Back' : 'Create Account'}
          </h2>
          <p style={{ color: '#7a9ea4', fontSize: 13, fontFamily: "'Fira Code', monospace" }}>
            {mode === 'signin' ? 'Sign in to access your library' : 'Join NurseCare AI today'}
          </p>
        </div>

        {/* Google */}
        <button onClick={handleGoogle} disabled={loading} style={{
          width: '100%', padding: '12px', borderRadius: 12,
          border: '1.5px solid rgba(74,155,168,0.3)',
          background: 'rgba(74,155,168,0.06)', color: '#1e2d2f',
          fontSize: 14, fontFamily: "'Times New Roman', serif", fontWeight: 700,
          cursor: 'pointer', marginBottom: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
        }}>
          <span style={{ fontSize: 18 }}>🌐</span> Continue with Google
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
          <div style={{ flex: 1, height: 1, background: 'rgba(74,155,168,0.2)' }} />
          <span style={{ color: '#7a9ea4', fontSize: 12, fontFamily: "'Fira Code', monospace" }}>or</span>
          <div style={{ flex: 1, height: 1, background: 'rgba(74,155,168,0.2)' }} />
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {mode === 'signup' && (
            <input
              type="text" placeholder="Full name" value={name}
              onChange={e => setName(e.target.value)}
              style={inputStyle}
            />
          )}
          <input
            type="email" placeholder="Email address" value={email}
            onChange={e => setEmail(e.target.value)} required
            style={inputStyle}
          />
          <input
            type="password" placeholder="Password" value={password}
            onChange={e => setPassword(e.target.value)} required
            style={inputStyle}
          />

          {error && (
            <div style={{ background: 'rgba(192,84,75,0.08)', border: '1px solid rgba(192,84,75,0.25)', borderRadius: 8, padding: '10px 14px', color: '#c0544b', fontSize: 13 }}>
              {error}
            </div>
          )}

          <button type="submit" disabled={loading} style={{
            background: 'linear-gradient(135deg, #4a9ba8, #2d7a87)',
            color: '#fff', border: 'none', borderRadius: 12,
            padding: '13px', fontSize: 15, fontFamily: "'Times New Roman', serif",
            fontWeight: 700, cursor: loading ? 'not-allowed' : 'pointer',
            opacity: loading ? 0.7 : 1,
          }}>
            {loading ? '⏳ Please wait…' : mode === 'signin' ? 'Sign In' : 'Create Account'}
          </button>
        </form>

        <p style={{ textAlign: 'center', marginTop: 18, fontSize: 13, color: '#7a9ea4' }}>
          {mode === 'signin' ? "Don't have an account? " : 'Already have an account? '}
          <button
            onClick={() => { setMode(mode === 'signin' ? 'signup' : 'signin'); setError(''); }}
            style={{ background: 'none', border: 'none', color: '#2d7a87', cursor: 'pointer', fontWeight: 700, fontSize: 13 }}
          >
            {mode === 'signin' ? 'Sign up' : 'Sign in'}
          </button>
        </p>

        <button onClick={onClose} style={{
          position: 'absolute', top: 16, right: 16,
          background: 'none', border: 'none', fontSize: 20,
          cursor: 'pointer', color: '#7a9ea4',
        }}>✕</button>
      </div>
    </div>
  );
}

const inputStyle = {
  width: '100%', padding: '12px 16px', borderRadius: 10,
  border: '1.5px solid rgba(74,155,168,0.3)',
  background: 'rgba(247,243,238,0.8)', color: '#1e2d2f',
  fontSize: 14, fontFamily: "'Times New Roman', serif", fontWeight: 700,
  outline: 'none', boxSizing: 'border-box',
};
