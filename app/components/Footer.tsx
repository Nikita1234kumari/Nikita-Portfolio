'use client';
import { motion } from 'framer-motion';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer style={{
      background: 'var(--surface)',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      padding: '40px 0',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
        width: '400px', height: '1px',
        background: 'linear-gradient(90deg, transparent, #ff6b9d, transparent)',
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: '16px',
        }}>
          <div>
            <div style={{
              fontWeight: 800, fontSize: '18px', letterSpacing: '-0.5px',
              background: 'linear-gradient(135deg, #ff6b9d, #c084fc)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              marginBottom: '4px',
            }}>Nikita Kumari</div>
            <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
              CS Engineer · Building the future, one commit at a time ✨
            </div>
          </div>

          <div style={{ fontSize: '13px', color: 'var(--text-muted)', textAlign: 'center' }}>
            <span style={{ color: '#ff6b9d' }}>♥</span> Designed & Built by Nikita Kumari
            <br />
            <span style={{ fontSize: '11px', opacity: 0.6 }}>
              Try Konami code for a surprise 🎮
            </span>
          </div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -4, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            style={{
              background: 'linear-gradient(135deg, #ff6b9d, #c084fc)',
              border: 'none', color: 'white',
              width: '44px', height: '44px',
              borderRadius: '12px',
              cursor: 'pointer', fontSize: '18px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 0 20px rgba(255,107,157,0.3)',
            }}
          >↑</motion.button>
        </div>
      </div>
    </footer>
  );
}
