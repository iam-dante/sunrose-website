"use client";

const TICKER_TEXT = "SUNROSE IS ACTIVE · LISTENING · WATCHING · ";

export default function StatusBarBw() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/20 bg-black">
      <div className="flex items-center gap-3 overflow-hidden py-3 pl-4">
        <span className="shrink-0 inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
        <div className="min-w-0 flex-1 overflow-hidden">
          <div className="ticker-inner whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.3em] text-white/80">
            {TICKER_TEXT.repeat(10)}
          </div>
        </div>
      </div>
    </div>
  );
}
