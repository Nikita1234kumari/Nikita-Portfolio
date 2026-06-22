'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skillCategories = [
  {
    id: 'frontend',
    label: '🎨 Frontend',
    skills: [
      { name: 'React.js', level: 85, color: '#61dafb' },
      { name: 'Next.js', level: 75, color: '#ffffff' },
      { name: 'Tailwind CSS', level: 88, color: '#38bdf8' },
      { name: 'HTML & CSS', level: 92, color: '#ff6b9d' },
      { name: 'JavaScript', level: 80, color: '#f7df1e' },
    ],
  },
  {
    id: 'backend',
    label: '⚙️ Backend',
    skills: [
      { name: 'Node.js', level: 75, color: '#68a063' },
      { name: 'Express.js', level: 72, color: '#c084fc' },
      { name: 'MongoDB', level: 70, color: '#4db33d' },
      { name: 'SQL', level: 65, color: '#ff6b9d' },
      { name: 'REST APIs', level: 78, color: '#67e8f9' },
    ],
  },
  
  {
    id: 'tools',
    label: '🛠️ Tools',
    skills: [
      { name: 'Git & GitHub', level: 83, color: '#f05032' },
      { name: 'Java', level: 80, color: '#f89820' },
      { name: 'VS Code', level: 92, color: '#007acc' },
      { name: 'Figma (basic)', level: 55, color: '#ff7262' },
      { name: 'Linux CLI', level: 65, color: '#c084fc' },
    ],
  },
];

function SkillBar({ name, level, color, inView }: { name: string; level: number; color: string; inView: boolean }) {
  return (
    <div style={{ marginBottom: '18px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
        <span style={{ fontSize: '14px', color: 'var(--text)', fontWeight: 500 }}>{name}</span>
        <span style={{ fontSize: '13px', color, fontWeight: 600 }}>{level}%</span>
      </div>
      <div style={{
        height: '6px', background: 'rgba(255,255,255,0.06)',
        borderRadius: '10px', overflow: 'hidden',
      }}>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: inView ? `${level}%` : 0 }}
          transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1], delay: 0.1 }}
          style={{
            height: '100%',
            background: `linear-gradient(90deg, ${color}99, ${color})`,
            borderRadius: '10px',
            boxShadow: `0 0 10px ${color}66`,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div className="shimmer" style={{ position: 'absolute', inset: 0 }} />
        </motion.div>
      </div>
    </div>
  );
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState('frontend');
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  const active = skillCategories.find(c => c.id === activeTab)!;

  return (
    <section id="skills" style={{
      padding: '120px 0',
      background: 'var(--surface)',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', top: '20%', right: '-100px',
        width: '400px', height: '400px',
        background: 'radial-gradient(circle, rgba(255,107,157,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '56px' }}
        >
          <span style={{ fontSize: '12px', letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--rose)', fontWeight: 600 }}>
            What I work with
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, marginTop: '12px', letterSpacing: '-1px' }}>
            <span style={{ color: 'var(--text)' }}>My </span>
            <span className="gradient-text">Tech Stack</span>
          </h2>
          <p style={{ fontSize: '15px', color: 'var(--text-muted)', marginTop: '12px', maxWidth: '480px', margin: '12px auto 0' }}>
            Tools and technologies I&apos;ve been working with as a budding developer
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            display: 'flex', gap: '10px',
            justifyContent: 'center', flexWrap: 'wrap',
            marginBottom: '48px',
          }}
        >
          {skillCategories.map(cat => (
            <motion.button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.96 }}
              style={{
                background: activeTab === cat.id
                  ? 'linear-gradient(135deg, #ff6b9d, #c084fc)'
                  : 'rgba(255,255,255,0.04)',
                color: activeTab === cat.id ? 'white' : 'var(--text-muted)',
                border: activeTab === cat.id ? 'none' : '1px solid rgba(255,255,255,0.08)',
                padding: '10px 22px',
                borderRadius: '10px',
                fontSize: '13px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: activeTab === cat.id ? '0 0 20px rgba(255,107,157,0.3)' : 'none',
              }}
            >
              {cat.label}
            </motion.button>
          ))}
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'start' }}
          className="skills-grid" ref={ref}>
          {/* Skill bars */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4 }}
            >
              {active.skills.map(skill => (
                <SkillBar key={skill.name} {...skill} inView={inView} />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Visual blob / ring */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
              display: 'flex', flexDirection: 'column', gap: '16px',
            }}
          >
            {/* Circular skill visual */}
            <div style={{
              position: 'relative', width: '260px', height: '260px',
              margin: '0 auto 24px',
            }}>
              {/* Rings */}
              {[220, 180, 140, 100].map((size, i) => (
                <div key={size} style={{
                  position: 'absolute',
                  top: '50%', left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: `${size}px`, height: `${size}px`,
                  border: `1px solid rgba(${i % 2 === 0 ? '255,107,157' : '192,132,252'},${0.12 + i * 0.04})`,
                  borderRadius: '50%',
                  animation: `rotate-slow ${15 + i * 5}s linear infinite ${i % 2 === 0 ? '' : 'reverse'}`,
                }} />
              ))}
              <div style={{
                position: 'absolute', top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '80px', height: '80px',
                background: 'linear-gradient(135deg, #ff6b9d, #c084fc)',
                borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '28px',
                boxShadow: '0 0 40px rgba(255,107,157,0.5)',
              }}>
                {active.label.split(' ')[0]}
              </div>
              {/* Orbiting dots */}
              {active.skills.map((skill, i) => {
                const angle = (i / active.skills.length) * 2 * Math.PI - Math.PI / 2;
                const r = 100;
                const x = Math.cos(angle) * r + 130 - 6;
                const y = Math.sin(angle) * r + 130 - 6;
                return (
                  <motion.div
                    key={skill.name}
                    title={skill.name}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    style={{
                      position: 'absolute',
                      left: `${x}px`, top: `${y}px`,
                      width: '12px', height: '12px',
                      borderRadius: '50%',
                      background: skill.color,
                      boxShadow: `0 0 10px ${skill.color}`,
                    }}
                  />
                );
              })}
            </div>

            {/* Extra tags */}
            <div style={{
              background: 'var(--bg)',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: '16px', padding: '20px',
            }}>
              <div style={{ fontSize: '13px', color: 'var(--rose)', fontWeight: 600, marginBottom: '12px' }}>
                Always Learning 📚
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {['TypeScript', 'Docker', 'GraphQL', 'Prisma', 'Redis', 'AWS Basics'].map(t => (
                  <span key={t} style={{
                    background: 'rgba(192,132,252,0.08)',
                    border: '1px solid rgba(192,132,252,0.2)',
                    color: 'var(--violet)',
                    padding: '4px 12px', borderRadius: '20px',
                    fontSize: '11px', fontWeight: 500,
                  }}>{t}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .skills-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
