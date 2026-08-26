import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface LanternaProps {
  id: string;
  top: number;
  left: number;
  ideograma?: string;
  respondida?: boolean;
  onTocar?: (id: string) => void;
}

function LanternaSvg({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 140"
      role="img"
      aria-hidden="true"
      focusable="false"
    >
      <line x1="50" y1="0" x2="50" y2="14" stroke="#D4AF37" strokeWidth="1.5" />
      <rect x="38" y="12" width="24" height="8" rx="2" fill="#D4AF37" />

      <path
        d="M50 20
           C20 20, 12 55, 12 70
           C12 95, 25 118, 50 118
           C75 118, 88 95, 88 70
           C88 55, 80 20, 50 20 Z"
        fill="currentColor"
      />

      <g stroke="#8A0C20" strokeWidth="1" opacity="0.5" fill="none">
        <path d="M50 20 C34 30, 28 55, 28 70 C28 90, 36 110, 50 118" />
        <path d="M50 20 C42 30, 38 55, 38 70 C38 90, 42 110, 50 118" />
        <path d="M50 20 C58 30, 62 55, 62 70 C62 90, 58 110, 50 118" />
        <path d="M50 20 C66 30, 72 55, 72 70 C72 90, 64 110, 50 118" />
      </g>

      <ellipse cx="50" cy="65" rx="18" ry="30" fill="#FFB347" opacity="0.25" />

      <rect x="38" y="116" width="24" height="8" rx="2" fill="#D4AF37" />

      <line x1="50" y1="124" x2="50" y2="134" stroke="#D4AF37" strokeWidth="1.5" />
      <g stroke="#D4AF37" strokeWidth="1" strokeLinecap="round">
        <line x1="46" y1="134" x2="45" y2="140" />
        <line x1="50" y1="134" x2="50" y2="140" />
        <line x1="54" y1="134" x2="55" y2="140" />
      </g>
    </svg>
  );
}

export function Lanterna({ id, top, left, ideograma, respondida = false, onTocar }: LanternaProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const flutuandoRef = useRef(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const faseX = Math.random() * Math.PI * 2;
    const faseY = Math.random() * Math.PI * 2;
    const amplitudeX = 8 + Math.random() * 6;
    const amplitudeY = 14 + Math.random() * 8;
    const velocidade = 0.4 + Math.random() * 0.3;

    const prefereReduzirMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefereReduzirMovimento) {
      gsap.set(el, { y: -6 });
      return;
    }

    const tick = (tempo: number) => {
      if (!flutuandoRef.current) return;
      const t = tempo * velocidade;
      gsap.set(el, {
        x: Math.sin(t + faseX) * amplitudeX,
        y: Math.sin(t * 1.3 + faseY) * amplitudeY,
        rotation: Math.sin(t + faseX) * 2.5,
      });
    };

    gsap.ticker.add(tick);
    return () => {
      gsap.ticker.remove(tick);
    };
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el || !respondida) return;

    flutuandoRef.current = false;

    gsap.to(el, {
      y: '-=60',
      scale: 0.6,
      opacity: 0,
      duration: 1.8,
      ease: 'power2.in',
    });
  }, [respondida]);

  return (
    <button
      ref={ref}
      className="lanterna"
      style={{ top: `${top}%`, left: `${left}%` }}
      onClick={() => !respondida && onTocar?.(id)}
      disabled={respondida}
      aria-label="Abrir lanterna com uma pergunta"
    >
      <LanternaSvg className="lanterna__svg" />
      {ideograma && (
        <span className="lanterna__ideograma" aria-hidden="true">
          {ideograma}
        </span>
      )}
    </button>
  );
}