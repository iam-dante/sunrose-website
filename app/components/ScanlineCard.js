"use client";

export default function ScanlineCard() {
  return (
    <div className="flex h-32 w-full items-center justify-center p-4">
      <div className="scanline-sweep relative h-24 w-32 border border-[#333] bg-[#111] overflow-hidden rounded-md">
        {/* Abstract blocks to signify screen content */}
        <div className="absolute top-4 left-4 h-2 w-16 bg-[#333]" />
        <div className="absolute top-8 left-4 h-2 w-24 bg-[#333]" />
        <div className="absolute top-12 left-4 h-6 w-20 bg-[#333]" />
      </div>
    </div>
  );
}
