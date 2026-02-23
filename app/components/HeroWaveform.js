"use client";

export default function HeroWaveform() {
  // We offset the animation delay to create a sine wave appearance
  return (
    <div className="waveform-container" aria-hidden>
      {[...Array(20)].map((_, i) => {
        // Calculate a sine wave delay pattern
        const delay = Math.sin((i / 19) * Math.PI) * -1.2;
        return (
          <span
            key={i}
            className="waveform-bar"
            style={{ animationDelay: `${delay}s` }}
          />
        );
      })}
    </div>
  );
}
