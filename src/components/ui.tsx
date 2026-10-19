import { useRef, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { gsap, useGSAP } from '../motion/gsap';

export function Logo({ light = false, className = '' }: { light?: boolean; className?: string }) {
  // Official marks: the horizontal lockup on light grounds, the white lockup on dark.
  return light ? (
    <img src="/img/brand/LegacyTrustLogo-white.png" width={485} height={87} alt="Legacy Trust" className={`h-auto ${className}`} />
  ) : (
    <img src="/img/brand/LegacyTrust-horizontal.png" width={812} height={82} alt="Legacy Trust Wealth Management" className={`h-auto ${className}`} />
  );
}

type ArrowLinkProps = { to: string; children: ReactNode; className?: string; external?: boolean; download?: boolean };

/** Contextual CTA: text plus a circled arrow. Internal links use the router. */
export function ArrowLink({ to, children, className = '', external }: ArrowLinkProps) {
  const inner = (
    <>
      <span className="link-line">{children}</span>
      <span className="arrow-dot" aria-hidden>
        {external ? <ArrowUpRight size={16} strokeWidth={1.6} /> : <ArrowRight size={16} strokeWidth={1.6} />}
      </span>
    </>
  );
  if (external || /^(https?:|mailto:|tel:)/.test(to)) {
    const isWeb = to.startsWith('http');
    return (
      <a href={to} className={`arrow-link ${className}`} {...(isWeb ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
        {inner}
        {isWeb && <span className="visually-hidden"> (opens in a new tab)</span>}
      </a>
    );
  }
  return (
    <Link to={to} className={`arrow-link ${className}`}>
      {inner}
    </Link>
  );
}

/** Subtle magnetic pull for primary actions (fine pointers, motion allowed). */
export function Magnetic({ children, strength = 0.28, className = '' }: { children: ReactNode; strength?: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  useGSAP(
    () => {
      const el = ref.current!;
      const mm = gsap.matchMedia();
      mm.add('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)', () => {
        const x = gsap.quickTo(el, 'x', { duration: 0.6, ease: 'power3.out' });
        const y = gsap.quickTo(el, 'y', { duration: 0.6, ease: 'power3.out' });
        const move = (e: PointerEvent) => {
          const r = el.getBoundingClientRect();
          x((e.clientX - (r.left + r.width / 2)) * strength);
          y((e.clientY - (r.top + r.height / 2)) * strength);
        };
        const leave = () => {
          x(0);
          y(0);
        };
        el.addEventListener('pointermove', move);
        el.addEventListener('pointerleave', leave);
        return () => {
          el.removeEventListener('pointermove', move);
          el.removeEventListener('pointerleave', leave);
        };
      });
    },
    { scope: ref },
  );
  return (
    <span ref={ref} className={`inline-flex max-w-full ${className}`}>
      {children}
    </span>
  );
}

export function ButtonLink({ to, children, variant = '', className = '' }: { to: string; children: ReactNode; variant?: string; className?: string }) {
  const cls = `btn ${variant} ${className}`;
  if (/^(https?:|mailto:|tel:)/.test(to)) {
    const isWeb = to.startsWith('http');
    return (
      <a href={to} className={cls} {...(isWeb ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
        {children}
      </a>
    );
  }
  return (
    <Link to={to} className={cls}>
      {children}
    </Link>
  );
}

/** Chapter marker: "02 / 07" with a label. */
export function Chapter({ n, label, light = false }: { n: string; label: string; light?: boolean }) {
  return (
    <p className={`t-kicker kicker-row ${light ? 'text-champagne' : 'text-taupe-ink'}`}>
      <span className="t-num text-[0.95rem] tracking-normal normal-case">{n}</span>
      <span>{label}</span>
    </p>
  );
}

export function Kicker({ children, light = false, className = '' }: { children: ReactNode; light?: boolean; className?: string }) {
  return <p className={`t-kicker kicker-row ${light ? 'text-champagne' : 'text-taupe-ink'} ${className}`}>{children}</p>;
}
