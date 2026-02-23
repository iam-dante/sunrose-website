"use client";

const particles = [
  { x: "15%", y: "25%", size: 2, duration: "15s", delay: "0s" },
  { x: "82%", y: "40%", size: 1, duration: "20s", delay: "2s" },
  { x: "45%", y: "15%", size: 3, duration: "12s", delay: "1s" },
  { x: "70%", y: "75%", size: 2, duration: "18s", delay: "3s" },
  { x: "25%", y: "60%", size: 1, duration: "22s", delay: "0.5s" },
  { x: "90%", y: "20%", size: 2, duration: "14s", delay: "4s" },
  { x: "55%", y: "85%", size: 1, duration: "19s", delay: "1.5s" },
  { x: "10%", y: "80%", size: 3, duration: "16s", delay: "2.5s" },
  { x: "65%", y: "35%", size: 2, duration: "21s", delay: "0.2s" },
  { x: "35%", y: "90%", size: 1, duration: "13s", delay: "3.5s" },
  { x: "95%", y: "55%", size: 2, duration: "17s", delay: "1.2s" },
  { x: "5%", y: "45%", size: 2, duration: "23s", delay: "2.8s" },
];

export default function DriftingParticles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-black/55 drift-particle"
          style={{
            left: p.x,
            top: p.y,
            width: p.size * 8,
            height: p.size * 8,
            animation: `drift-particle ${p.duration} ease-in-out infinite`,
            animationDelay: p.delay,
          }}
        />
      ))}
    </div>
  );
}
