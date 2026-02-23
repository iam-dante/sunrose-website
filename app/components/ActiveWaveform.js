"use client";

export default function ActiveWaveform() {
  return (
    <div className="flex items-center justify-center gap-0.5 py-2" aria-hidden>
      {[...Array(12)].map((_, i) => (
        <span
          key={i}
          className="waveform-bar w-0.5 rounded-full bg-[#F5A623] opacity-80"
          style={{ animationDelay: `${i * 0.05}s` }}
        />
      ))}
    </div>
  );
}
