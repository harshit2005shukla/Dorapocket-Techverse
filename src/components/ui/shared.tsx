import { ReactNode } from "react";

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.15] bg-white/[0.035] px-3 py-[7px] text-[11.8px] tracking-wide text-zinc-300 light:border-zinc-300 light:bg-white light:text-zinc-700">
      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.7)]" />
      {children}
    </span>
  );
}

export function SectionEyebrow({ children }: { children: ReactNode }) {
  return <div className="text-[11.8px] uppercase tracking-[0.18em] text-zinc-400 light:text-zinc-600">{children}</div>;
}

export function SectionTitle({ children, className = "" }: { children: ReactNode, className?: string }) {
  return <h2 className={"text-[34px] md:text-[46px] leading-[1.06] tracking-[-0.022em] text-heading "+className}>{children}</h2>;
}

export function SectionCopy({ children }: { children: ReactNode }) {
  return <p className="text-[16.5px] leading-relaxed text-muted max-w-2xl">{children}</p>;
}
