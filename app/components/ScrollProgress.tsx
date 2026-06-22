'use client';
import { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop || document.body.scrollTop;
      const scrollHeight = doc.scrollHeight - doc.clientHeight;
      setProgress(scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, height: '3px', zIndex: 1000,
    }}>
      <div style={{
        height: '100%',
        width: `${progress}%`,
        background: 'linear-gradient(90deg, #ff6b9d, #c084fc, #67e8f9)',
        transition: 'width 0.05s linear',
        boxShadow: '0 0 10px rgba(255,107,157,0.8)',
      }} />
    </div>
  );
}
