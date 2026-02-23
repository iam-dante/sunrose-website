"use client";
import { useEffect, useState, useRef } from "react";

export default function EyeTracker() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;

      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;

      // Calculate distance relative to center, constrained to a max radius
      const dx = (e.clientX - centerX) / window.innerWidth;
      const dy = (e.clientY - centerY) / window.innerHeight;

      setPosition({ x: dx * 20, y: dy * 20 });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="flex h-32 w-full items-center justify-center">
      <svg viewBox="0 0 100 50" className="h-16 w-32 overflow-visible">
        {/* Eye Outline */}
        <path
          d="M 10 25 Q 50 -5 90 25 Q 50 55 10 25 Z"
          fill="none"
          stroke="#fff"
          strokeWidth="2"
        />
        {/* Pupil bounding box for clipping if needed, but simple group transform works better here */}
        <g style={{ transform: `translate(${position.x}px, ${position.y}px)`, transition: 'transform 0.1s ease-out' }}>
          <circle cx="50" cy="25" r="8" fill="#fff" />
        </g>
      </svg>
    </div>
  );
}
