"use client";

export function WaveformIcon() {
  return (
    <div className="flex h-12 items-end justify-center gap-0.5">
      {[...Array(8)].map((_, i) => (
        <span
          key={i}
          className="waveform-bar w-1 rounded-full bg-[#F5A623]"
          style={{ animationDelay: `${i * 0.08}s` }}
        />
      ))}
    </div>
  );
}

export function EyeIcon() {
  return (
    <svg viewBox="0 0 48 24" className="h-12 w-12 text-[#F5A623]" fill="none" stroke="currentColor" strokeWidth="1.5">
      <ellipse cx="24" cy="12" rx="20" ry="8" className="opacity-50" />
      <circle cx="24" cy="12" r="4" className="iris-pulse" stroke="currentColor" fill="none" />
      <circle cx="24" cy="12" r="1.5" fill="currentColor" />
    </svg>
  );
}

export function MonitorIcon() {
  return (
    <svg viewBox="0 0 48 32" className="h-12 w-12 text-[#F5A623]" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="4" y="2" width="40" height="24" rx="2" className="opacity-60" />
      <line x1="4" y1="26" x2="44" y2="26" />
      <line x1="18" y1="26" x2="18" y2="30" />
      <line x1="30" y1="26" x2="30" y2="30" />
      <line x1="24" y1="26" x2="24" y2="30" />
      <rect x="6" y="4" width="36" height="20" className="scanline" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 6" />
    </svg>
  );
}
