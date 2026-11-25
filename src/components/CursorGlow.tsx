import { useEffect, useRef } from 'react';

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let rafId = 0;
    let targetX = -500;
    let targetY = -500;

    const updateGlow = () => {
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${targetX - 240}px, ${targetY - 240}px, 0)`;
        glowRef.current.style.opacity = '1';
      }
      rafId = 0;
    };

    const handleMove = (e: PointerEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!rafId) {
        rafId = window.requestAnimationFrame(updateGlow);
      }
    };

    const handleLeave = () => {
      if (glowRef.current) {
        glowRef.current.style.opacity = '0';
      }
    };

    window.addEventListener('pointermove', handleMove, { passive: true });
    document.addEventListener('mouseleave', handleLeave);

    return () => {
      window.removeEventListener('pointermove', handleMove);
      document.removeEventListener('mouseleave', handleLeave);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-20 overflow-hidden hidden md:block"
    >
      <div
        ref={glowRef}
        style={{
          opacity: 0,
          transition: 'opacity 0.25s ease',
          willChange: 'transform',
        }}
        className="w-[480px] h-[480px] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.10)_0%,rgba(139,92,246,0.06)_40%,transparent_70%)] dark:bg-[radial-gradient(circle,rgba(59,130,246,0.16)_0%,rgba(168,85,247,0.10)_42%,transparent_72%)]"
      />
    </div>
  );
}
