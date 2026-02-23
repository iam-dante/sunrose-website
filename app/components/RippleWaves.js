"use client";

export default function RippleWaves() {
  const ripples = [0, 1, 2, 3, 4].map((i) => ({
    delay: `${i * 2.5}s`,
    duration: "8s",
  }));

  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
      {ripples.map((r, i) => (
        <div
          key={i}
          className="absolute rounded-full border-2 border-black/30 ripple-wave w-32 h-32"
          style={{
            animation: `ripple-expand ${r.duration} ease-out infinite`,
            animationDelay: r.delay,
          }}
        />
      ))}
    </div>
  );
}
