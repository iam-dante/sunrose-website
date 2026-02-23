"use client";

export default function FloatingOrbs() {
  const orbs = [
    { size: "w-64 h-64", delay: "0s", duration: "12s", x: "10%", y: "20%" },
    { size: "w-48 h-48", delay: "2s", duration: "14s", x: "70%", y: "60%" },
    { size: "w-80 h-80", delay: "4s", duration: "10s", x: "50%", y: "80%" },
    { size: "w-40 h-40", delay: "1s", duration: "16s", x: "85%", y: "15%" },
    { size: "w-56 h-56", delay: "3s", duration: "11s", x: "15%", y: "70%" },
  ];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {orbs.map((orb, i) => (
        <div
          key={i}
          className={`absolute rounded-full border-2 border-black/25 floating-orb ${orb.size}`}
          style={{
            left: orb.x,
            top: orb.y,
            transform: "translate(-50%, -50%)",
            animation: `float-orb ${orb.duration} ease-in-out infinite`,
            animationDelay: orb.delay,
          }}
        />
      ))}
    </div>
  );
}
