import { useEffect, useRef, useState } from 'react';

// Aurora background — subtle emerald animated gradient blobs
export function Aurora() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div
        className="absolute top-[-15%] left-[-10%] w-[55%] h-[55%] rounded-full
        bg-emerald/[0.07] blur-[120px] animate-aurora-1"
      />
      <div
        className="absolute top-[30%] right-[-15%] w-[50%] h-[50%] rounded-full
        bg-emerald-light/[0.05] blur-[120px] animate-aurora-2"
      />
      <div
        className="absolute bottom-[-15%] left-[20%] w-[45%] h-[45%] rounded-full
        bg-emerald-dark/[0.05] blur-[120px] animate-aurora-3"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-base-950/30 via-transparent to-base-950/60" />
    </div>
  );
}

// BlurText — name fades in with blur effect on mount
export function BlurText({
  text,
  className = '',
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <span
      className={`inline-block transition-all duration-1000 ease-out ${
        visible ? 'opacity-100 blur-0 translate-y-0' : 'opacity-0 blur-xl translate-y-4'
      } ${className}`}
    >
      {text}
    </span>
  );
}

// SplitText — animates each word sequentially on mount
export function SplitText({
  text,
  className = '',
  delay = 0,
  highlightWords = [],
}: {
  text: string;
  className?: string;
  delay?: number;
  highlightWords?: string[];
}) {
  const [visible, setVisible] = useState(false);
  const words = text.split(' ');

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <span className={className}>
      {words.map((word, i) => {
        const isHighlight = highlightWords.some((hw) =>
          word.toLowerCase().includes(hw.toLowerCase()),
        );
        return (
          <span
            key={i}
            className={`inline-block transition-all duration-700 ease-out ${
              visible ? 'opacity-100 blur-0 translate-y-0' : 'opacity-0 blur-md translate-y-3'
            } ${isHighlight ? 'text-gradient' : ''}`}
            style={{ transitionDelay: `${delay + i * 50}ms` }}
          >
            {word}
            {i < words.length - 1 ? '\u00A0' : ''}
          </span>
        );
      })}
    </span>
  );
}

// GradientText — emerald gradient text
export function GradientText({
  text,
  className = '',
  animate = true,
}: {
  text: string;
  className?: string;
  animate?: boolean;
}) {
  return (
    <span className={`${animate ? 'text-shimmer' : 'text-gradient'} ${className}`}>
      {text}
    </span>
  );
}

// ShinyText — small highlighted text with emerald shimmer sweep
export function ShinyText({
  text,
  className = '',
}: {
  text: string;
  className?: string;
}) {
  return (
    <span
      className={`relative inline-block font-mono text-sm ${className}`}
      style={{
        background:
          'linear-gradient(110deg, #4a5450 0%, #00D6A3 30%, #63F5C5 50%, #00D6A3 70%, #4a5450 100%)',
        backgroundSize: '200% auto',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        animation: 'shimmer 4s linear infinite',
      }}
    >
      {text}
    </span>
  );
}

// ScrollReveal — reveals children when scrolled into view
export function ScrollReveal({
  children,
  className = '',
  delay = 0,
  y = 24,
  once = true,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : `translateY(${y}px)`,
        transition: `opacity 0.7s ease-out ${delay}ms, transform 0.7s ease-out ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// FadeContent — fade in children when in view
export function FadeContent({
  children,
  className = '',
  delay = 0,
  once = true,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transition: `opacity 0.8s ease-in ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// CountUp — animates number from 0 to target when in view
export function CountUp({
  end,
  decimals = 0,
  suffix = '',
  duration = 2000,
  className = '',
}: {
  end: number;
  decimals?: number;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let raf: number;
    const startTime = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(end * eased);
      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setCount(end);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, end, duration]);

  return (
    <span ref={ref} className={className}>
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
}

// MagneticButton — magnetic hover effect wrapper
export function MagneticButton({
  children,
  className = '',
  strength = 0.3,
}: {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  };

  const handleMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = 'translate(0, 0)';
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`inline-block transition-transform duration-300 ease-out ${className}`}
    >
      {children}
    </div>
  );
}

// SpotlightCard — spotlight follows cursor on hover, emerald glow
export function SpotlightCard({
  children,
  className = '',
  glowColor = 'rgba(0,214,163,0.10)',
}: {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: -200, y: -200 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseLeave = () => {
    setPos({ x: -200, y: -200 });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`group relative overflow-hidden rounded-2xl border border-base-700 bg-base-800
        transition-all duration-500 hover:border-emerald/25 ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(400px circle at ${pos.x}px ${pos.y}px, ${glowColor}, transparent 50%)`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

// TiltedCard — subtle 3D tilt on mouse move
export function TiltedCard({
  children,
  className = '',
  maxTilt = 6,
}: {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rx = ((e.clientY - rect.top - cy) / cy) * -maxTilt;
    const ry = ((e.clientX - rect.left - cx) / cx) * maxTilt;
    el.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) scale3d(1.02,1.02,1.02)`;
  };

  const handleMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)';
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`transition-transform duration-300 ease-out will-change-transform ${className}`}
    >
      {children}
    </div>
  );
}

// useActiveSection — hook to track which section is in view
export function useActiveSection(sectionIds: string[]) {
  const [active, setActive] = useState(sectionIds[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: '-20% 0px -60% 0px' },
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return active;
}
