"use client";

import { useState, useEffect } from "react";

const WORD = "SUNROSE";

export default function TypewriterHero() {
  const [display, setDisplay] = useState("");
  const [showUnderline, setShowUnderline] = useState(false);

  useEffect(() => {
    if (display.length >= WORD.length) {
      const t = setTimeout(() => setShowUnderline(true), 200);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setDisplay(WORD.slice(0, display.length + 1));
    }, 120);
    return () => clearTimeout(t);
  }, [display]);

  return (
    <h1 className="relative inline-block m-0 leading-[0.8] tracking-tighter">
      <span className="font-display text-[12vw] md:text-[10vw] font-bold text-black uppercase">
        {display}
      </span>
      {display.length < WORD.length && <span className="typewriter-cursor text-[6vw] md:text-[5vw]" />}
      <span className="underline-draw block mt-2">
        {showUnderline && <span className="underline-draw-line" />}
      </span>
    </h1>
  );
}
