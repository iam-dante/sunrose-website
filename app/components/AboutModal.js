"use client";

import { useEffect } from "react";

export default function AboutModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleEscape = (e) => e.key === "Escape" && onClose();
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg max-h-[85vh] overflow-y-auto bg-white border border-black p-8 md:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 font-mono text-xs tracking-widest uppercase text-black/60 hover:text-black transition-colors"
          aria-label="Close"
        >
          Close
        </button>

        <h2 className="font-display text-2xl font-bold tracking-tighter mb-6">
          About Sunrose
        </h2>

        <section className="mb-6">
          <h3 className="font-mono text-xs tracking-widest uppercase text-black/50 mb-2">Application</h3>
          <p className="text-sm text-black/80 font-serif leading-relaxed">
            Sunrose is a cross-platform desktop application that runs as an always-on-top overlay, capturing your screen and sending it to AI for real-time assistance. It combines three inputs into a single request: the visible window (screenshot), an optional document (PDF, Word, PowerPoint, text), and optional voice (mic + screen audio). The AI synthesizes all inputs and responds with streaming output, markdown, and syntax-highlighted code. Configure your API keys in the app settings.
          </p>
        </section>

        <section>
          <h3 className="font-mono text-xs tracking-widest uppercase text-black/50 mb-3">Commands</h3>
          <table className="w-full text-sm font-serif text-black/80">
            <tbody className="[&>tr]:border-b [&>tr]:border-black/10 [&>tr:last-child]:border-0">
              <tr className="align-baseline">
                <td className="py-2 pr-4 font-mono text-xs whitespace-nowrap"><kbd className="px-1.5 py-0.5 border border-black/30 rounded">⌘</kbd>/<kbd className="px-1.5 py-0.5 border border-black/30 rounded">Ctrl</kbd>+<kbd className="px-1.5 py-0.5 border border-black/30 rounded">Enter</kbd></td>
                <td className="py-2">Capture screenshot and send to AI</td>
              </tr>
              <tr className="align-baseline">
                <td className="py-2 pr-4 font-mono text-xs whitespace-nowrap"><kbd className="px-1.5 py-0.5 border border-black/30 rounded">⌘</kbd>+<kbd className="px-1.5 py-0.5 border border-black/30 rounded">Shift</kbd>+<kbd className="px-1.5 py-0.5 border border-black/30 rounded">↑</kbd></td>
                <td className="py-2">Move window up 160px</td>
              </tr>
              <tr className="align-baseline">
                <td className="py-2 pr-4 font-mono text-xs whitespace-nowrap"><kbd className="px-1.5 py-0.5 border border-black/30 rounded">⌘</kbd>+<kbd className="px-1.5 py-0.5 border border-black/30 rounded">Shift</kbd>+<kbd className="px-1.5 py-0.5 border border-black/30 rounded">↓</kbd></td>
                <td className="py-2">Move window down 160px</td>
              </tr>
              <tr className="align-baseline">
                <td className="py-2 pr-4 font-mono text-xs whitespace-nowrap"><kbd className="px-1.5 py-0.5 border border-black/30 rounded">⌘</kbd>+<kbd className="px-1.5 py-0.5 border border-black/30 rounded">Shift</kbd>+<kbd className="px-1.5 py-0.5 border border-black/30 rounded">←</kbd></td>
                <td className="py-2">Move window left 160px</td>
              </tr>
              <tr className="align-baseline">
                <td className="py-2 pr-4 font-mono text-xs whitespace-nowrap"><kbd className="px-1.5 py-0.5 border border-black/30 rounded">⌘</kbd>+<kbd className="px-1.5 py-0.5 border border-black/30 rounded">Shift</kbd>+<kbd className="px-1.5 py-0.5 border border-black/30 rounded">→</kbd></td>
                <td className="py-2">Move window right 160px</td>
              </tr>
              <tr className="align-baseline">
                <td className="py-2 pr-4 font-mono text-xs whitespace-nowrap"><kbd className="px-1.5 py-0.5 border border-black/30 rounded">⌘</kbd>+<kbd className="px-1.5 py-0.5 border border-black/30 rounded">{"\\"}</kbd></td>
                <td className="py-2">Show/hide window</td>
              </tr>
              <tr className="align-baseline">
                <td className="py-2 pr-4 font-mono text-xs whitespace-nowrap"><kbd className="px-1.5 py-0.5 border border-black/30 rounded">⌘</kbd>/<kbd className="px-1.5 py-0.5 border border-black/30 rounded">Ctrl</kbd>+<kbd className="px-1.5 py-0.5 border border-black/30 rounded">R</kbd></td>
                <td className="py-2">Clear chat</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
}
