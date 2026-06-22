'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const links = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('Home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setActive(id);
    setOpen(false);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: scrolled ? 'rgba(10,10,15,0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,107,157,0.1)' : 'none',
          transition: 'all 0.4s ease',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '70px' }}>
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              onClick={() => scrollTo('Home')}
              style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px' }}
            >
              <div style={{
                width: '36px', height: '36px',
                background: 'linear-gradient(135deg, #ff6b9d, #c084fc)',
                borderRadius: '10px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontWeight: 800, fontSize: '16px', color: 'white',
                boxShadow: '0 0 20px rgba(255,107,157,0.4)',
              }}>N</div>
              <span style={{
                fontSize: '18px', fontWeight: 700, letterSpacing: '-0.5px',
                background: 'linear-gradient(135deg, #ff6b9d, #c084fc)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>Nikita.dev</span>
            </motion.div>

            {/* Desktop links */}
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }} className="hidden-mobile">
              {links.map(link => (
                <motion.button
                  key={link}
                  onClick={() => scrollTo(link)}
                  whileHover={{ y: -2 }}
                  style={{
                    background: active === link ? 'rgba(255,107,157,0.12)' : 'transparent',
                    border: active === link ? '1px solid rgba(255,107,157,0.3)' : '1px solid transparent',
                    color: active === link ? '#ff6b9d' : '#9b8ec4',
                    padding: '6px 16px',
                    borderRadius: '8px',
                    fontSize: '13px',
                    fontWeight: 500,
                    cursor: 'pointer',
                    letterSpacing: '0.3px',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {link}
                </motion.button>
              ))}
              <motion.a
                href="mailto:nikitatiwary05@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  marginLeft: '8px',
                  background: 'linear-gradient(135deg, #ff6b9d, #c084fc)',
                  color: 'white', padding: '8px 20px',
                  borderRadius: '8px', fontSize: '13px',
                  fontWeight: 600, textDecoration: 'none',
                  boxShadow: '0 0 20px rgba(255,107,157,0.3)',
                }}
              >Hire Me ✨</motion.a>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setOpen(!open)}
              className="show-mobile"
              style={{
                background: 'none', border: 'none',
                cursor: 'pointer', padding: '8px',
                display: 'flex', flexDirection: 'column', gap: '5px',
              }}
            >
              {[0,1,2].map(i => (
                <motion.span key={i} animate={{
                  rotate: open && i === 0 ? 45 : open && i === 2 ? -45 : 0,
                  y: open && i === 0 ? 9 : open && i === 2 ? -9 : 0,
                  opacity: open && i === 1 ? 0 : 1,
                }} style={{
                  width: '22px', height: '2px',
                  background: '#ff6b9d', borderRadius: '2px', display: 'block',
                }} />
              ))}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'fixed', top: '70px', left: 0, right: 0,
              background: 'rgba(10,10,15,0.97)', backdropFilter: 'blur(20px)',
              zIndex: 49, padding: '20px 2rem',
              borderBottom: '1px solid rgba(255,107,157,0.1)',
            }}
          >
            {links.map((link, i) => (
              <motion.button
                key={link}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0, transition: { delay: i * 0.05 } }}
                onClick={() => scrollTo(link)}
                style={{
                  display: 'block', width: '100%', textAlign: 'left',
                  background: 'none', border: 'none',
                  color: '#f0e6ff', padding: '14px 0',
                  fontSize: '16px', fontWeight: 500, cursor: 'pointer',
                  borderBottom: '1px solid rgba(255,255,255,0.05)',
                }}
              >{link}</motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 768px) { .show-mobile { display: none !important; } }
        @media (max-width: 767px) { .hidden-mobile { display: none !important; } }
      `}</style>
    </>
  );
}
