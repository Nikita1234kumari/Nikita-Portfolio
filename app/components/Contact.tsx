'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Animate success
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', email: '', message: '' });
  };

  const inputStyle = (field: string) => ({
    width: '100%',
    background: focused === field ? 'rgba(255,107,157,0.05)' : 'rgba(255,255,255,0.03)',
    border: `1px solid ${focused === field ? 'rgba(255,107,157,0.4)' : 'rgba(255,255,255,0.08)'}`,
    borderRadius: '10px',
    padding: '14px 16px',
    color: 'var(--text)',
    fontSize: '14px',
    outline: 'none',
    transition: 'all 0.2s ease',
    boxShadow: focused === field ? '0 0 20px rgba(255,107,157,0.1)' : 'none',
  } as React.CSSProperties);

  const socials = [
    { icon: '💼', label: 'LinkedIn', url: 'https://linkedin.com/in/nikita-kumari-3710a8287', color: '#0a66c2' },
    { icon: '🐙', label: 'GitHub', url: 'https://github.com/Nikita1234kumari?tab=repositories', color: '#6e40c9' },
    { icon: '📧', label: 'Email', url: 'mailto:nikitatiwary05@gmail.com', color: '#ff6b9d' },
    { icon: '📱', label: 'Phone', url: 'tel:+917628857706', color: '#34d399' },
  ];

  return (
    <section id="contact" style={{
      padding: '120px 0',
      background: 'var(--bg)',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Background */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '800px', height: '400px',
        background: 'radial-gradient(ellipse, rgba(255,107,157,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <span style={{ fontSize: '12px', letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--rose)', fontWeight: 600 }}>
            Let&apos;s connect
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, marginTop: '12px', letterSpacing: '-1px' }}>
            <span style={{ color: 'var(--text)' }}>Get In </span>
            <span className="gradient-text">Touch</span>
          </h2>
          <p style={{ fontSize: '15px', color: 'var(--text-muted)', marginTop: '12px', maxWidth: '440px', margin: '12px auto 0' }}>
            Open for internships, collaborations, and cool projects. Let&apos;s build something awesome together!
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '48px', alignItems: 'start' }}
          className="contact-grid">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div style={{
              background: 'var(--surface)',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: '20px', padding: '32px',
              marginBottom: '24px',
            }}>
              <div style={{ fontSize: '32px', marginBottom: '16px' }}>👋</div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text)', marginBottom: '10px' }}>
                Let&apos;s work together
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.7 }}>
                I&apos;m actively looking for internship opportunities and freelance projects. 
                Whether you have a full-stack app, ML project, or just want to chat about tech — 
                my inbox is always open!
              </p>
            </div>

            {/* Socials */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {socials.map((s, i) => (
                <motion.a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ x: 6, scale: 1.02 }}
                  style={{
                    display: 'flex', gap: '14px', alignItems: 'center',
                    background: 'var(--surface)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: '12px', padding: '14px 18px',
                    textDecoration: 'none', color: 'var(--text)',
                    transition: 'border-color 0.2s ease',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = `${s.color}40`;
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.06)';
                  }}
                >
                  <span style={{
                    width: '36px', height: '36px',
                    background: `${s.color}18`, border: `1px solid ${s.color}30`,
                    borderRadius: '8px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '18px', flexShrink: 0,
                  }}>{s.icon}</span>
                  <span style={{ fontSize: '14px', fontWeight: 500 }}>{s.label}</span>
                  <span style={{ marginLeft: 'auto', color: 'rgba(255,255,255,0.2)', fontSize: '14px' }}>↗</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div style={{
              background: 'var(--surface)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: '20px', padding: '36px',
              position: 'relative', overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute', top: '-60px', right: '-60px',
                width: '200px', height: '200px',
                background: 'radial-gradient(circle, rgba(255,107,157,0.1) 0%, transparent 70%)',
                pointerEvents: 'none',
              }} />

              {sent ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  style={{
                    textAlign: 'center', padding: '40px 0',
                  }}
                >
                  <div style={{ fontSize: '56px', marginBottom: '16px' }}>🎉</div>
                  <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text)', marginBottom: '8px' }}>
                    Message Sent!
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>
                    Thanks for reaching out, Nikita will get back to you soon!
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text)', marginBottom: '24px' }}>
                    Send a Message ✉️
                  </h3>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}
                    className="form-row">
                    <div>
                      <label style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: 500, display: 'block', marginBottom: '8px' }}>
                        Your Name
                      </label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        onFocus={() => setFocused('name')}
                        onBlur={() => setFocused(null)}
                        placeholder="Jane Doe"
                        required
                        style={inputStyle('name')}
                      />
                    </div>
                    <div>
                      <label style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: 500, display: 'block', marginBottom: '8px' }}>
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                        onFocus={() => setFocused('email')}
                        onBlur={() => setFocused(null)}
                        placeholder="jane@example.com"
                        required
                        style={inputStyle('email')}
                      />
                    </div>
                  </div>
                  <div style={{ marginBottom: '24px' }}>
                    <label style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: 500, display: 'block', marginBottom: '8px' }}>
                      Message
                    </label>
                    <textarea
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      onFocus={() => setFocused('message')}
                      onBlur={() => setFocused(null)}
                      placeholder="Tell me about your project or just say hi!"
                      required
                      rows={5}
                      style={{ ...inputStyle('message'), resize: 'vertical', minHeight: '120px', fontFamily: 'inherit' }}
                    />
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    style={{
                      width: '100%',
                      background: 'linear-gradient(135deg, #ff6b9d, #c084fc)',
                      color: 'white', border: 'none',
                      padding: '15px', borderRadius: '10px',
                      fontSize: '15px', fontWeight: 700,
                      cursor: 'pointer',
                      boxShadow: '0 0 30px rgba(255,107,157,0.3)',
                    }}
                  >
                    Send Message ✨
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
