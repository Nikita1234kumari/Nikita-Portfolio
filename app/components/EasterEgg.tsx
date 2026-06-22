'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const KONAMI = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];

export default function EasterEgg() {
  const [seq, setSeq] = useState<string[]>([]);
  const [show, setShow] = useState(false);
  const [clicks, setClicks] = useState(0);
  const [showClickSecret, setShowClickSecret] = useState(false);

  // Konami code
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      setSeq(prev => {
        const next = [...prev, e.key].slice(-KONAMI.length);
        if (next.join(',') === KONAMI.join(',')) setShow(true);
        return next;
      });
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  // Secret: click the N in the logo 5 times
  useEffect(() => {
    const handleLogoClick = () => {
      setClicks(c => {
        const next = c + 1;
        if (next >= 5) { setShowClickSecret(true); return 0; }
        return next;
      });
    };
    // Attach to logo button
    const interval = setInterval(() => {
      const logo = document.querySelector('[data-logo-secret]') as HTMLElement | null;
      if (logo) {
        logo.addEventListener('click', handleLogoClick);
        clearInterval(interval);
      }
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Konami Easter egg */}
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShow(false)}
            style={{
              position: 'fixed', inset: 0, zIndex: 200,
              background: 'rgba(0,0,0,0.95)',
              backdropFilter: 'blur(20px)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            <motion.div
              initial={{ scale: 0, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
              onClick={e => e.stopPropagation()}
              style={{
                background: 'var(--surface)',
                border: '1px solid rgba(255,107,157,0.3)',
                borderRadius: '24px', padding: '48px',
                textAlign: 'center', maxWidth: '460px',
                boxShadow: '0 0 80px rgba(255,107,157,0.3)',
              }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                style={{ fontSize: '56px', marginBottom: '20px', display: 'inline-block' }}
              >🌸</motion.div>
              <h2 style={{
                fontSize: '22px', fontWeight: 800,
                background: 'linear-gradient(135deg, #ff6b9d, #c084fc)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                marginBottom: '12px',
              }}>You found the secret! 🎉</h2>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '16px' }}>
                Konami code activated! You&apos;re officially a legend. Nikita built this entire portfolio 
                from scratch as a 2nd-year student — and if you found this easter egg, you both clearly 
                have great taste. 🚀
              </p>
              <p style={{ fontSize: '13px', color: '#ff6b9d', fontStyle: 'italic' }}>
                &quot;The best code is the code you write for love of it.&quot; — Nikita Kumari, probably
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => setShow(false)}
                style={{
                  marginTop: '24px',
                  background: 'linear-gradient(135deg, #ff6b9d, #c084fc)',
                  color: 'white', border: 'none',
                  padding: '12px 28px', borderRadius: '10px',
                  fontSize: '14px', fontWeight: 700, cursor: 'pointer',
                }}
              >Awesome! ✨</motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Click secret */}
      <AnimatePresence>
        {showClickSecret && (
          <motion.div
            initial={{ opacity: 0, y: 40, x: '-50%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            style={{
              position: 'fixed', bottom: '32px', left: '50%',
              zIndex: 200,
              background: 'var(--surface)',
              border: '1px solid rgba(192,132,252,0.3)',
              borderRadius: '16px', padding: '20px 28px',
              textAlign: 'center',
              boxShadow: '0 0 40px rgba(192,132,252,0.2)',
              maxWidth: '380px', width: 'calc(100vw - 40px)',
            }}
          >
            <div style={{ fontSize: '32px', marginBottom: '10px' }}>🔮</div>
            <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--violet)', marginBottom: '6px' }}>
              Secret unlocked!
            </div>
            <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
              You clicked the logo 5 times. Fun fact: Nikita wrote this easter egg at 2AM 🌙
            </div>
            <button
              onClick={() => setShowClickSecret(false)}
              style={{
                marginTop: '12px', background: 'none',
                border: '1px solid rgba(192,132,252,0.3)',
                color: 'var(--violet)', padding: '6px 16px',
                borderRadius: '8px', fontSize: '12px', cursor: 'pointer',
              }}
            >Nice!</button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
