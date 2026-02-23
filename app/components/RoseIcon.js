"use client";

export default function RoseIcon({ className = "", size = 64 }) {
  const cx = 32;
  const cy = 32;
  const rayCount = 24;
  const rays = Array.from({ length: rayCount }, (_, i) => {
    const angle = (i / rayCount) * 360 - 90;
    const rad = (angle * Math.PI) / 180;
    const innerR = 19;
    const outerR = 27;
    return {
      x1: cx + Math.cos(rad) * innerR,
      y1: cy + Math.sin(rad) * innerR,
      x2: cx + Math.cos(rad) * outerR,
      y2: cy + Math.sin(rad) * outerR,
    };
  });

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      {/* Radiating sunburst lines */}
      <g stroke="currentColor" strokeWidth="1.25" strokeLinecap="round">
        {rays.map((r, i) => (
          <line key={i} x1={r.x1} y1={r.y1} x2={r.x2} y2={r.y2} />
        ))}
      </g>
      {/* Rose - top-down spiral petals */}
      <g fill="currentColor">
        {/* Outer ring - 5 petals */}
        <path d="M32 8c-5 2-12 6-10 14 2 6 8 8 10 8 2 0 8-2 10-8 2-8-5-12-10-16z" />
        <path d="M32 8c3 5 8 10 14 10 6 0 8-6 6-12-2-4-8-6-14-4-6 2-8 4-2 6z" />
        <path d="M32 8c5 2 12 6 10 14-2 6-8 8-10 8-2 0-8-2-10-8-2-8 5-12 10-16z" />
        <path d="M32 8c-3 5-8 10-14 10-6 0-8-6-6-12 2-4 8-6 14-4 6 2 8 4 2 6z" />
        <path d="M32 8c0 6 4 12 10 14 6 2 10-2 10-8 0-6-4-10-10-12-6-2-10 2-10 6z" />
        {/* Middle ring */}
        <path d="M32 14c-6 0-10 4-10 8 0 4 4 8 10 8 6 0 10-4 10-8 0-4-4-8-10-8z" />
        <path d="M24 20c0 4 4 6 8 6 4 0 6-4 4-8-2-4-6-4-12 2z" />
        <path d="M40 20c0 4-4 6-8 6-4 0-6-4-4-8 2-4 6-4 12 2z" />
        <path d="M32 16c-4 2-6 4-6 6 0 2 2 4 6 4 4 0 6-2 6-4 0-2-2-4-6-6z" />
        {/* Inner heart */}
        <path d="M32 20c-4 0-6 2-6 6 0 4 2 6 6 6 4 0 6-2 6-6 0-4-2-6-6-6z" />
        <path d="M32 22c-2 0-4 2-4 4 0 2 2 4 4 4 2 0 4-2 4-4 0-2-2-4-4-4z" />
      </g>
    </svg>
  );
}
