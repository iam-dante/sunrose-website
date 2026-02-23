"use client";

export default function StatusBar() {
  return (
    <div className="absolute bottom-4 left-6 right-6 border border-black p-2">
      <div className="ticker-wrap flex items-center font-mono text-xs uppercase tracking-widest text-black">
        <div className="ticker-inner">
          <span className="h-2 w-2 mr-2 inline-block bg-black rounded-full animate-pulse" />
          SUNROSE IS ACTIVE · LISTENING · WATCHING
        </div>
      </div>
    </div>
  );
}
