export default function Toast({ message }) {
  return (
    <div style={{
      position: 'fixed', bottom: 28, left: '50%', transform: 'translateX(-50%)',
      background: '#1e2d2f', color: '#fff',
      padding: '10px 22px', borderRadius: 30,
      fontSize: 13, fontFamily: "'Fira Code', monospace",
      boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
      zIndex: 9999, animation: 'fadeIn 0.3s ease',
      whiteSpace: 'nowrap',
    }}>
      {message}
    </div>
  );
}
