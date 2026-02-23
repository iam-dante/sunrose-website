"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;
    setShowCursor(true);

    const handleMove = (e) => setPos({ x: e.clientX, y: e.clientY });

    const handleMouseOver = (e) => {
      const target = e.target.closest("a, button, [data-hover]");
      setIsHovering(!!target);
    };

    document.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  if (!showCursor) return null;

  return (
    <div
      className="pointer-events-none fixed left-0 top-0 z-[9999] mix-blend-difference"
      style={{
        transform: `translate(${pos.x}px, ${pos.y}px) translate(-50%, -50%)`,
      }}
    >
      <div
        className={`rounded-full bg-white transition-all duration-200 ease-out ${
          isHovering ? "h-10 w-10 scale-100 opacity-80" : "h-4 w-4 scale-100 opacity-60"
        }`}
      />
    </div>
  );
}
