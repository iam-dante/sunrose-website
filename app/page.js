"use client";

import { useState } from "react";
import Image from "next/image";
import WipeButton from "./components/WipeButton";
import AboutModal from "./components/AboutModal";

function IconGear() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M10.8 2.3h2.4l.5 2a7.7 7.7 0 0 1 1.8.8l1.8-1 1.7 1.7-1 1.8c.3.6.6 1.2.8 1.8l2 .5v2.4l-2 .5a7.7 7.7 0 0 1-.8 1.8l1 1.8-1.7 1.7-1.8-1a7.7 7.7 0 0 1-1.8.8l-.5 2h-2.4l-.5-2a7.7 7.7 0 0 1-1.8-.8l-1.8 1-1.7-1.7 1-1.8a7.7 7.7 0 0 1-.8-1.8l-2-.5V9.7l2-.5c.2-.6.5-1.2.8-1.8l-1-1.8 1.7-1.7 1.8 1a7.7 7.7 0 0 1 1.8-.8l.5-2Zm1.2 6a3.7 3.7 0 1 0 0 7.4 3.7 3.7 0 0 0 0-7.4Z" />
    </svg>
  );
}

function IconMic() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3.5a2.8 2.8 0 0 1 2.8 2.8v5.4a2.8 2.8 0 1 1-5.6 0V6.3A2.8 2.8 0 0 1 12 3.5Zm-5 8.2a1 1 0 0 1 1 1 4 4 0 1 0 8 0 1 1 0 1 1 2 0 6 6 0 0 1-5 5.9V22h-2v-2.4a6 6 0 0 1-5-5.9 1 1 0 0 1 1-1Z" />
    </svg>
  );
}

function IconAttach() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14.6 6.3a3.5 3.5 0 0 1 5 5l-7.8 7.8a5 5 0 1 1-7-7l7.7-7.7 1.4 1.4-7.7 7.7a3 3 0 0 0 4.2 4.2l7.8-7.8a1.5 1.5 0 0 0-2.2-2.1l-7.8 7.8a1 1 0 1 0 1.4 1.4l7.1-7.1 1.4 1.4-7.1 7.1a3 3 0 1 1-4.2-4.2l7.8-7.8Z" />
    </svg>
  );
}

function IconChevron() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="m5 7.5 5 5 5-5" />
    </svg>
  );
}

export default function Home() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const featureHighlights = [
    {
      title: "One prompt, three inputs",
      detail: "Screen, voice, and files together.",
    },
    {
      title: "Use your own APIs",
      detail: "No subscription. Bring your keys.",
    },
    {
      title: "Fast useful answers",
      detail: "Clear next steps you can act on.",
    },
  ];
  const appModes = ["Normal", "Job Search"];
  const whisperOptions = ["Whisper Large v3 (Groq)", "Whisper 1 (OpenAI)"];
  const modelOptions = [
    "Llama 4 Scout Vision (Groq)",
    "Llama 4 Maverick Vision (SambaNova)",
    "GPT-5 Nano (2025-08-07)",
    "GPT-5 Mini (2025-08-07)",
    "GPT-4o",
    "GPT-5.2 (2025-12-11)",
    "Gemini 2.5 Flash",
    "Gemini 3 Flash (Preview)",
  ];
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [modeOpen, setModeOpen] = useState(false);
  const [selectedMode, setSelectedMode] = useState(0);
  const [whisperOpen, setWhisperOpen] = useState(false);
  const [modelOpen, setModelOpen] = useState(false);
  const [selectedWhisper, setSelectedWhisper] = useState(0);
  const [selectedModel, setSelectedModel] = useState(0);

  return (
    <main className="surose-page relative flex h-dvh min-h-screen w-full items-center justify-center overflow-hidden px-4 py-6 text-black selection:bg-blue-600 selection:text-white md:px-8">
      <AboutModal isOpen={aboutOpen} onClose={() => setAboutOpen(false)} />

      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="surose-bg-grid absolute inset-0" />
        <div className="surose-soft-light absolute inset-0" />
      </div>

      <section className="relative z-10 mx-auto grid w-full max-w-6xl gap-4 rounded-[2rem] border border-white/70 bg-white/60 p-4 shadow-[0_24px_80px_rgba(0,0,0,0.12),0_0_0_1px_rgba(255,255,255,0.5)_inset] backdrop-blur-2xl md:grid-cols-[1fr_1fr] md:gap-8 md:p-8">
        <div className="flex flex-col justify-between">
          <header className="mb-6 flex items-center justify-between">
            <div className="inline-flex items-center gap-3">
              <Image
                src="/HMgz701.svg"
                alt="Sunrose"
                width={42}
                height={42}
                className="h-10 w-10 object-contain"
              />
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-black/60">
                Sunrose
              </p>
            </div>
          </header>

          <div>
            <p className="surose-kicker">Screen Intelligence Assistant</p>
            <h1 className="surose-headline font-display max-w-[14ch] text-5xl leading-[0.94] tracking-tight text-black md:text-[5.5rem]">
              Focus faster. Decide sharper.
            </h1>
            <p className="mt-5 max-w-md text-base font-[450] leading-relaxed text-black/65 md:text-[1.05rem]">
              Sunrose turns what you see and say into clear next actions, so
              you can move from confusion to execution in one step.
            </p>
            <div className="surose-feature-grid mt-5 max-w-xl">
              {featureHighlights.map((feature) => (
                <article key={feature.title} className="surose-feature-card">
                  <h3>{feature.title}</h3>
                  <p>{feature.detail}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-3 md:mt-9">
            <WipeButton
              href="https://github.com/iam-dante/release-sunrose/raw/main/sunrose/Sunrose-1.0.0-arm64.dmg"
              external
              className="rounded-full border-black px-7 py-4 hover:text-white"
            >
              Download App
            </WipeButton>
            <WipeButton
              onClick={() => setAboutOpen(true)}
              className="rounded-full border-black/70 px-7 py-4 text-black/80 hover:text-white"
            >
              About
            </WipeButton>
          </div>
        </div>

        <div className="surose-panel relative overflow-hidden rounded-[1.4rem] border border-black/10 p-4 md:p-5">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-black/55">
            App Illustration
          </p>
          <div className="surose-app mt-3">
            <div className="surose-app-topbar">
              <span className="surose-dot" />
              <span className="surose-app-brand">Sunrose</span>
              <div className="surose-mode-wrap">
                <button
                  type="button"
                  className="surose-app-mode-btn"
                  onClick={() => {
                    setModeOpen((prev) => !prev);
                    setSettingsOpen(false);
                    setWhisperOpen(false);
                    setModelOpen(false);
                  }}
                  aria-expanded={modeOpen}
                >
                  {appModes[selectedMode]}
                  <IconChevron />
                </button>
                {modeOpen ? (
                  <div className="surose-mode-menu">
                    {appModes.map((mode, index) => (
                      <button
                        key={mode}
                        type="button"
                        className={`surose-menu-item ${selectedMode === index ? "is-active" : ""}`}
                        onClick={() => {
                          setSelectedMode(index);
                          setModeOpen(false);
                        }}
                      >
                        {selectedMode === index ? "✓ " : ""}
                        {mode}
                      </button>
                    ))}
                  </div>
                ) : null}
              </div>
              <button
                type="button"
                className={`surose-app-icon ${settingsOpen ? "is-active" : ""}`}
                aria-label="Toggle API settings"
                onClick={() => {
                  setSettingsOpen((prev) => !prev);
                  setModeOpen(false);
                  setWhisperOpen(false);
                  setModelOpen(false);
                }}
              >
                <IconGear />
              </button>
              <button type="button" className="surose-app-icon" aria-label="Microphone">
                <IconMic />
              </button>
              <button type="button" className="surose-app-icon" aria-label="Attach file">
                <IconAttach />
              </button>
            </div>

            <div className="surose-chat-area">
              <div className="surose-send">Sent to AI</div>

              <div className="surose-bubble">
                I reviewed this role and pulled the key requirements:
                agentic-system design, production deployment, and evaluation
                frameworks. Next, I can generate a tailored resume summary and
                five interview answers based on your experience.
              </div>
            </div>

            <div className="surose-input-wrap">
              <p className="surose-placeholder">Ask a question...</p>
              <div className="surose-select-row">
                <div className="surose-select-wrap">
                  <button
                    type="button"
                    className="surose-select-btn"
                    onClick={() => {
                      setWhisperOpen((prev) => !prev);
                      setModeOpen(false);
                      setSettingsOpen(false);
                      setModelOpen(false);
                    }}
                    aria-expanded={whisperOpen}
                  >
                    {whisperOptions[selectedWhisper]}
                    <IconChevron />
                  </button>
                  {whisperOpen ? (
                    <div className="surose-menu surose-menu-left">
                      {whisperOptions.map((option, index) => (
                        <button
                          key={option}
                          type="button"
                          className={`surose-menu-item ${selectedWhisper === index ? "is-active" : ""
                            }`}
                          onClick={() => {
                            setSelectedWhisper(index);
                            setWhisperOpen(false);
                          }}
                        >
                          {selectedWhisper === index ? "✓ " : ""}
                          {option}
                        </button>
                      ))}
                    </div>
                  ) : null}
                </div>
                <div className="surose-select-wrap">
                  <button
                    type="button"
                    className="surose-select-btn"
                    onClick={() => {
                      setModelOpen((prev) => !prev);
                      setModeOpen(false);
                      setSettingsOpen(false);
                      setWhisperOpen(false);
                    }}
                    aria-expanded={modelOpen}
                  >
                    {modelOptions[selectedModel]}
                    <IconChevron />
                  </button>
                  {modelOpen ? (
                    <div className="surose-menu surose-menu-right">
                      {modelOptions.map((option, index) => (
                        <button
                          key={option}
                          type="button"
                          className={`surose-menu-item ${selectedModel === index ? "is-active" : ""
                            } ${option === "Gemini 3 Flash (Preview)" ? "is-highlight" : ""}`}
                          onClick={() => {
                            setSelectedModel(index);
                            setModelOpen(false);
                          }}
                        >
                          {selectedModel === index ? "✓ " : ""}
                          {option}
                        </button>
                      ))}
                    </div>
                  ) : null}
                </div>
                <div className="surose-capture">
                  <button type="button" className="surose-send-btn" aria-label="Send input">
                    ↑
                  </button>
                  <span>Cmd+Enter</span>
                </div>
              </div>
            </div>

            {settingsOpen ? (
              <div className="surose-settings-modal">
                <div className="surose-settings-head">
                  <p>API Keys</p>
                  <button
                    type="button"
                    aria-label="Close settings"
                    onClick={() => setSettingsOpen(false)}
                  >
                    ×
                  </button>
                </div>
                <p className="surose-settings-copy">
                  Add your API keys below. Keys from .env are used if not set
                  here.
                </p>
                {[
                  ["OpenAI", "sk-...", "Configured"],
                  ["Groq", "gsk_...", "Configured"],
                  ["Google / Gemini", "AIza...", ""],
                  ["SambaNova", "...", ""],
                  ["SambaNova Base URL", "https://api.sambanova.ai/v1", ""],
                ].map(([label, value, state]) => (
                  <div key={label} className="surose-field">
                    <p>{label}</p>
                    <div>{value}</div>
                    {state ? <span>✓ {state}</span> : null}
                  </div>
                ))}
                <div className="surose-settings-actions">
                  <button type="button" className="is-primary">
                    Save
                  </button>
                  <button type="button" onClick={() => setSettingsOpen(false)}>
                    Cancel
                  </button>
                </div>
              </div>
            ) : null}
          </div>

          <div className="mt-5 rounded-2xl border border-white/8 bg-[#0f1117] px-5 py-4 text-white">
            <p className="font-mono text-[9px] font-bold uppercase tracking-[0.22em] text-white/40">
              Why Sunrose
            </p>
            <p className="mt-2 text-[0.88rem] font-medium leading-relaxed text-white/80">
              No subscription. Bring your own API keys and use the app right away on macOS free forever.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
