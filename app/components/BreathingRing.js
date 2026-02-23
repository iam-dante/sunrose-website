"use client";

export default function BreathingRing() {
  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center z-0">
      <div className="pulse-ring h-[60vh] w-[60vw] max-w-3xl rounded-full" />
    </div>
  );
}
