'use client';
import { useEffect, useRef } from 'react';

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    let animId: number;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = mouseX - 4 + 'px';
        dotRef.current.style.top = mouseY - 4 + 'px';
      }
    };

    const animate = () => {
      ringX += (mouseX - ringX - 18) * 0.12;
      ringY += (mouseY - ringY - 18) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = ringX + 'px';
        ringRef.current.style.top = ringY + 'px';
      }
      animId = requestAnimationFrame(animate);
    };

    const onEnterLink = () => {
      if (dotRef.current) dotRef.current.style.transform = 'scale(3)';
      if (ringRef.current) {
        ringRef.current.style.transform = 'scale(1.8)';
        ringRef.current.style.borderColor = 'var(--rose)';
        ringRef.current.style.background = 'rgba(255,107,157,0.08)';
      }
    };
    const onLeaveLink = () => {
      if (dotRef.current) dotRef.current.style.transform = 'scale(1)';
      if (ringRef.current) {
        ringRef.current.style.transform = 'scale(1)';
        ringRef.current.style.borderColor = 'var(--violet)';
        ringRef.current.style.background = 'transparent';
      }
    };

    document.addEventListener('mousemove', onMove);
    animId = requestAnimationFrame(animate);

    const addHoverListeners = () => {
      document.querySelectorAll('a, button, [data-cursor-hover]').forEach(el => {
        el.addEventListener('mouseenter', onEnterLink);
        el.addEventListener('mouseleave', onLeaveLink);
      });
    };
    addHoverListeners();
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(animId);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}
