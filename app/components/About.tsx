'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  };

  const facts = [
    { emoji: '🎓', title: 'Education', text: 'B.Tech CSE at Quantum University, Roorkee (2023–2027)' },
    { emoji: '📍', title: 'Location', text: 'Roorkee, Uttarakhand, India' },
    { emoji: '📚', title: 'Research', text: 'IEEE SeFet 2025 presenter & IJSCI journal author' },
    { emoji: '🎯', title: 'Focus', text: 'Full-stack development' },
  ];

  return (
    <section id="about" style={{ padding: '120px 0', background: 'var(--bg)', position: 'relative', overflow: 'hidden' }}>
      {/* Background accent */}
      <div style={{
        position: 'absolute', top: '50%', left: '-200px', transform: 'translateY(-50%)',
        width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(192,132,252,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem' }}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <span style={{
            fontSize: '12px', letterSpacing: '3px', textTransform: 'uppercase',
            color: 'var(--rose)', fontWeight: 600,
          }}>Get to know me</span>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800,
            marginTop: '12px', letterSpacing: '-1px',
          }}>
            <span style={{ color: 'var(--text)' }}>About </span>
            <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '64px',
            alignItems: 'center',
          }}
          className="about-grid"
        >
          {/* Left — text */}
          <div>
            <motion.h3 variants={itemVariants} style={{
              fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)', fontWeight: 700,
              marginBottom: '20px', lineHeight: 1.3,
              color: 'var(--text)',
            }}>
              A passionate developer who turns{' '}
              <span className="gradient-text">ideas into reality</span>
            </motion.h3>

            <motion.p variants={itemVariants} style={{
              fontSize: '15px', lineHeight: 1.9,
              color: 'var(--text-muted)', marginBottom: '20px',
            }}>
              I&apos;m Nikita Kumari, a Computer Science Engineering student with a love for 
              building things that live on the internet. From React frontends to Node.js backends 
              and even deep learning models — I enjoy the full spectrum of tech.
            </motion.p>

            <motion.p variants={itemVariants} style={{
              fontSize: '15px', lineHeight: 1.9,
              color: 'var(--text-muted)', marginBottom: '32px',
            }}>
              My journey led me to present research at an IEEE international conference 
              and publish in an international journal — all while being a 2nd-year undergrad. 
              I believe in learning by building, and building things that matter.
            </motion.p>

            <motion.div variants={itemVariants} style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {['HTML','CSS','JavaScript', 'React', 'Next.js', 'Node.js', 'Express','MongoDB',  'Java', 'Git','GitHub'].map(tag => (
                <span key={tag} style={{
                  background: 'rgba(255,107,157,0.08)',
                  border: '1px solid rgba(255,107,157,0.2)',
                  color: 'var(--rose)',
                  padding: '5px 14px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: 500,
                }}>{tag}</span>
              ))}
            </motion.div>
          </div>

          {/* Right — fact cards */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            {facts.map((fact, i) => (
              <motion.div
                key={fact.title}
                variants={itemVariants}
                whileHover={{ y: -6, scale: 1.02 }}
                style={{
                  background: 'var(--surface)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '16px',
                  padding: '20px',
                  cursor: 'default',
                  transition: 'border-color 0.2s ease',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,107,157,0.3)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.06)';
                }}
              >
                {/* Shimmer on hover */}
                <div className="shimmer" style={{
                  position: 'absolute', inset: 0, opacity: 0, borderRadius: '16px',
                  transition: 'opacity 0.3s',
                }} />
                <div style={{ fontSize: '28px', marginBottom: '12px' }}>{fact.emoji}</div>
                <div style={{ fontSize: '12px', color: 'var(--rose)', fontWeight: 600, letterSpacing: '0.5px', marginBottom: '6px' }}>{fact.title}</div>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.5 }}>{fact.text}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Fun facts strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{
            marginTop: '64px',
            padding: '28px 36px',
            background: 'var(--surface)',
            borderRadius: '20px',
            border: '1px solid rgba(192,132,252,0.15)',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px',
          }}
          className="fun-strip"
        >
          {[
            { value: '93.8%', label: 'Class XII Score', icon: '🏆' },
            { value: 'IEEE', label: 'Conference Speaker', icon: '🎤' },
            { value: '2025', label: 'Year Published', icon: '📄' },
            { value: '∞', label: 'Cups of Coffee', icon: '☕' },
          ].map(item => (
            <div key={item.label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '24px', marginBottom: '8px' }}>{item.icon}</div>
              <div style={{
                fontSize: '1.6rem', fontWeight: 800,
                background: 'linear-gradient(135deg, #ff6b9d, #c084fc)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                marginBottom: '4px',
              }}>{item.value}</div>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{item.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .fun-strip { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
