'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const vibes = [
  { emoji: '🎵', label: 'Lo-fi Chill', bpm: 72 },
  { emoji: '🎸', label: 'Indie Rock', bpm: 128 },
  { emoji: '🎹', label: 'Study Jazz', bpm: 88 },
  { emoji: '🌊', label: 'Synthwave', bpm: 110 },
];

export default function MusicVibe() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(false);

  return (
    <div style={{ position: 'fixed', bottom: '32px', right: '32px', zIndex: 50 }}>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            style={{
              position: 'absolute', bottom: '60px', right: 0,
              background: 'var(--surface)',
              border: '1px solid rgba(255,107,157,0.2)',
              borderRadius: '16px', padding: '16px',
              width: '220px',
              boxShadow: '0 0 40px rgba(255,107,157,0.15)',
            }}
          >
            <div style={{ fontSize: '11px', color: 'var(--rose)', fontWeight: 600, letterSpacing: '1px', marginBottom: '12px' }}>
              VIBE CHECK 🎶
            </div>
            {vibes.map((v, i) => (
              <motion.button
                key={v.label}
                whileHover={{ x: 4 }}
                onClick={() => { setCurrent(i); setPlaying(true); }}
                style={{
                  display: 'flex', alignItems: 'center', gap: '10px',
                  width: '100%', background: current === i ? 'rgba(255,107,157,0.1)' : 'transparent',
                  border: current === i ? '1px solid rgba(255,107,157,0.3)' : '1px solid transparent',
                  borderRadius: '8px', padding: '8px 10px',
                  color: current === i ? '#ff6b9d' : 'var(--text-muted)',
                  fontSize: '13px', cursor: 'pointer',
                  marginBottom: '4px',
                }}
              >
                <span>{v.emoji}</span>
                <span style={{ flex: 1, textAlign: 'left' }}>{v.label}</span>
                {current === i && playing && (
                  <motion.div style={{ display: 'flex', gap: '2px', alignItems: 'flex-end', height: '14px' }}>
                    {[1, 2, 3].map(bar => (
                      <motion.div
                        key={bar}
                        animate={{ height: [`${4 + bar * 2}px`, `${10 + bar * 2}px`, `${4 + bar * 2}px`] }}
                        transition={{ duration: 0.6 + bar * 0.1, repeat: Infinity }}
                        style={{ width: '3px', background: '#ff6b9d', borderRadius: '2px' }}
                      />
                    ))}
                  </motion.div>
                )}
              </motion.button>
            ))}
            <div style={{
              marginTop: '10px', paddingTop: '10px',
              borderTop: '1px solid rgba(255,255,255,0.06)',
              fontSize: '11px', color: 'rgba(255,255,255,0.2)',
              textAlign: 'center',
            }}>
              (Imaginary player — no sound!) 🔇
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setOpen(!open)}
        style={{
          width: '44px', height: '44px',
          background: open
            ? 'linear-gradient(135deg, #ff6b9d, #c084fc)'
            : 'rgba(255,107,157,0.12)',
          border: '1px solid rgba(255,107,157,0.3)',
          borderRadius: '12px', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '18px',
          boxShadow: open ? '0 0 20px rgba(255,107,157,0.4)' : 'none',
        }}
        title="Vibe Check 🎶"
      >
        {open ? '✕' : '🎵'}
      </motion.button>
    </div>
  );
}
