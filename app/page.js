"use client";

import { useState } from "react";
import Image from "next/image";
import TypewriterHero from "./components/TypewriterHero";
import BreathingRing from "./components/BreathingRing";
import WipeButton from "./components/WipeButton";
import AboutModal from "./components/AboutModal";

export default function Home() {
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <main className="relative flex flex-col h-screen w-full bg-[#f8f6f3] text-black selection:bg-black selection:text-white overflow-hidden">
      <AboutModal isOpen={aboutOpen} onClose={() => setAboutOpen(false)} />

      {/* Background motions */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-motion opacity-30" />
        <div className="absolute inset-0 flex items-center justify-center opacity-15">
          <BreathingRing />
        </div>
      </div>

      {/* Hero Section - Single Screen */}
      <section className="relative flex flex-1 w-full flex-col justify-center items-center px-4 max-w-7xl mx-auto">
        <div className="relative z-10 flex flex-col items-center mb-6">
          <Image
            src="/HMgz701.svg"
            alt="Surose"
            width={64}
            height={64}
            className="mb-3 w-12 h-12 md:w-16 md:h-16 object-contain"
          />
          <TypewriterHero />
        </div>

        <p className="font-display text-lg md:text-xl italic tracking-tight text-black mb-10 text-center">
          Record your screen. Get instant AI insights.
        </p>

        <div className="z-10 flex flex-col sm:flex-row gap-4 items-center">
          <WipeButton
            href="https://github.com/iam-dante/release-sunrose/raw/main/sunrose/Sunrose-1.0.0-arm64.dmg"
            className="py-5 px-8 border-black hover:text-white"
          >
            Download
          </WipeButton>
          <WipeButton
            onClick={() => setAboutOpen(true)}
            className="py-5 border-black hover:text-white"
          >
            About
          </WipeButton>
        </div>
      </section>
    </main>
  );
}