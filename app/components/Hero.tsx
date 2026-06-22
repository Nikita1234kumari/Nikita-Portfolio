'use client';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useState, useEffect, useRef } from "react";

const ROLES = [
  'Full Stack Developer',
  'React Enthusiast',
  'UI/UX Tinkerer',
  'Problem Solver',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
const [particleData, setParticleData] = useState<any[]>([]);

useEffect(() => {
  setParticleData(
    Array.from({ length: 60 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 10 + 8,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.6 + 0.1,
    }))
  );
}, []);

  const heroRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  const rotateX = useTransform(springY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-8, 8]);

  // Typewriter
  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;
    if (!isDeleting && displayText.length < current.length) {
      timeout = setTimeout(() => setDisplayText(current.slice(0, displayText.length + 1)), 80);
    } else if (!isDeleting && displayText.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => setDisplayText(current.slice(0, displayText.length - 1)), 40);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <section
      id="home"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center',
        position: 'relative', overflow: 'hidden',
        background: 'var(--bg)',
      }}
    >
      {/* Grid */}
      <div className="grid-bg" style={{ position: 'absolute', inset: 0, opacity: 0.5 }} />

      {/* Ambient blobs */}
      <div style={{
        position: 'absolute', top: '10%', left: '5%',
        width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(255,107,157,0.12) 0%, transparent 70%)',
        filter: 'blur(60px)',
        pointerEvents: 'none',
      }} className="blob pulse-glow" />
      <div style={{
        position: 'absolute', bottom: '10%', right: '5%',
        width: '400px', height: '400px',
        background: 'radial-gradient(circle, rgba(192,132,252,0.12) 0%, transparent 70%)',
        filter: 'blur(60px)',
        pointerEvents: 'none',
      }} className="blob pulse-glow" />

      {/* Floating particles */}
      {particleData.map(p => (
        <motion.div
          key={p.id}
          style={{
            position: 'absolute',
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            borderRadius: '50%',
            background: p.id % 3 === 0 ? 'var(--rose)' : p.id % 3 === 1 ? 'var(--violet)' : 'var(--cyan)',
            opacity: p.opacity,
            pointerEvents: 'none',
          }}
          animate={{ y: [0, -30, 0], opacity: [p.opacity, p.opacity * 0.3, p.opacity] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      {/* Content */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', width: '100%', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}
          className="hero-grid">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                background: 'rgba(255,107,157,0.1)', border: '1px solid rgba(255,107,157,0.2)',
                padding: '6px 16px', borderRadius: '20px', marginBottom: '24px',
              }}
            >
              
            
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <h1 style={{
                fontSize: 'clamp(2.8rem, 5vw, 4.5rem)',
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: '-2px',
                marginBottom: '8px',
                marginTop: '10px',
                color: 'var(--text)',
              }}>
                Hi, I&apos;m
              </h1>
              <h1 style={{
                fontSize: 'clamp(2.8rem, 5vw, 4.5rem)',
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: '-2px',
                marginBottom: '24px',
              }} className="gradient-text text-glow-rose">
                Nikita Kumari
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              style={{ marginBottom: '28px', height: '40px' }}
            >
              <span style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', fontWeight: 500, color: 'var(--violet)' }}>
                {displayText}
                <span className="cursor-blink" style={{ color: '#ff6b9d' }}>|</span>
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              style={{
                fontSize: '15px', lineHeight: 1.8,
                color: 'var(--text-muted)', maxWidth: '480px', marginBottom: '40px',
              }}
            >
              B.Tech CSE student at Quantum University, Roorkee. Building beautiful 
              web experiences and ML models that actually work. Published researcher 
              & IEEE conference speaker. ✨
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}
            >
              <motion.a
                href="#projects"
                onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  background: 'linear-gradient(135deg, #ff6b9d, #c084fc)',
                  color: 'white', padding: '14px 32px',
                  borderRadius: '12px', fontWeight: 600,
                  fontSize: '15px', textDecoration: 'none',
                  boxShadow: '0 0 30px rgba(255,107,157,0.4)',
                  display: 'flex', alignItems: 'center', gap: '8px',
                }}
              >
                View My Work <span>→</span>
              </motion.a>
              <motion.a
                href="#contact"
                onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                whileHover={{ scale: 1.05, y: -3, borderColor: '#ff6b9d' }}
                whileTap={{ scale: 0.95 }}
                style={{
                  background: 'transparent',
                  color: 'var(--text)', padding: '14px 32px',
                  borderRadius: '12px', fontWeight: 600,
                  fontSize: '15px', textDecoration: 'none',
                  border: '1px solid rgba(255,107,157,0.3)',
                  transition: 'border-color 0.2s ease',
                }}
              >
                Say Hello 👋
              </motion.a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              style={{
                display: 'flex', gap: '32px', marginTop: '48px',
                paddingTop: '32px',
                borderTop: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              {[
                { num: '4+', label: 'Projects Built' },
                { num: '2', label: 'Papers Published' },
                { num: '99.7%', label: 'Model Accuracy' },
              ].map(stat => (
                <div key={stat.label}>
                  <div style={{ fontSize: '1.8rem', fontWeight: 800, lineHeight: 1 }}
                    className="gradient-text">{stat.num}</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px' }}>{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — 3D card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            style={{ display: 'flex', justifyContent: 'center' }}
            className="hero-right"
          >
            <motion.div
              style={{
                rotateX, rotateY,
                width: '320px', height: '450px',
                background: 'linear-gradient(135deg, rgba(255,107,157,0.08) 0%, rgba(192,132,252,0.08) 100%)',
                borderRadius: '24px',
                border: '1px solid rgba(255,107,157,0.2)',
                padding: '32px',
                backdropFilter: 'blur(20px)',
                position: 'relative',
                overflow: 'hidden',
              }}
              className="float glow-rose"
            >
              {/* Inner decoration */}
              <div style={{
                position: 'absolute', top: '-50px', right: '-50px',
                width: '200px', height: '200px',
                background: 'radial-gradient(circle, rgba(255,107,157,0.2) 0%, transparent 70%)',
                borderRadius: '50%',
              }} />
              <div style={{
                position: 'absolute', bottom: '-30px', left: '-30px',
                width: '160px', height: '160px',
                background: 'radial-gradient(circle, rgba(192,132,252,0.15) 0%, transparent 70%)',
                borderRadius: '50%',
              }} />

              {/* Avatar */}
              <div style={{
                width: '90px', height: '90px',
                background: 'linear-gradient(135deg, #ff6b9d, #c084fc)',
                borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '36px', marginBottom: '24px',
                boxShadow: '0 0 30px rgba(255,107,157,0.5)',
                position: 'relative', zIndex: 1,
              }}>💻</div>

              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text)', marginBottom: '4px' }}>
                  Nikita Kumari
                </div>
                <div style={{ fontSize: '13px', color: 'var(--rose)', marginBottom: '20px' }}>
                  CS Engineer · Roorkee, India
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {[
                    { icon: '⚡', text: 'React & Next.js' },
                    { icon: '🛠️', text: 'Node.js & MongoDB' },
                    { icon: '📝', text: 'IEEE Published Author' },
                  ].map(item => (
                    <div key={item.text} style={{
                      display: 'flex', alignItems: 'center', gap: '10px',
                      background: 'rgba(255,255,255,0.04)',
                      padding: '8px 12px', borderRadius: '8px',
                      border: '1px solid rgba(255,255,255,0.06)',
                      fontSize: '13px', color: 'var(--text-muted)',
                    }}>
                      <span>{item.icon}</span>{item.text}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{
          position: 'absolute', bottom: '32px', left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
        }}
      >
        <span style={{ fontSize: '11px', color: 'var(--text-muted)', letterSpacing: '2px', textTransform: 'uppercase' }}>Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{
            width: '24px', height: '40px',
            border: '1.5px solid rgba(255,107,157,0.4)',
            borderRadius: '12px',
            display: 'flex', justifyContent: 'center', paddingTop: '8px',
          }}
        >
          <div style={{
            width: '4px', height: '8px',
            background: '#ff6b9d', borderRadius: '2px',
          }} />
        </motion.div>
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-right { display: none !important; }
        }
      `}</style>
    </section>
  );
}
