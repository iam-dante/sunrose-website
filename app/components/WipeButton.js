"use client";

export default function WipeButton({ children, href, external, className = "", ...rest }) {
  const Component = href ? "a" : "button";
  const props = href
    ? { href, ...(external && { target: "_blank", rel: "noopener noreferrer" }), ...rest }
    : rest;

  return (
    <Component
      {...props}
      className={`btn-wipe inline-flex items-center justify-center border px-8 py-4 font-mono text-sm uppercase tracking-widest transition-colors ${className}`}
    >
      <span className="relative z-10">{children}</span>
    </Component>
  );
}
