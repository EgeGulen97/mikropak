"use client";

type VideoPlayButtonProps = {
  className?: string;
};

export default function VideoPlayButton({ className }: VideoPlayButtonProps) {
  return (
    <span
      className={
        className ??
        "pointer-events-none absolute left-1/2 top-1/2 z-10 inline-flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-slate-900 shadow-[0_12px_28px_rgba(0,0,0,0.22)] ring-1 ring-black/10 transition-transform duration-200 ease-out group-hover:scale-[1.04] md:h-16 md:w-16"
      }
      aria-hidden
    >
      <svg viewBox="0 0 24 24" className="ml-0.5 h-6 w-6 md:h-7 md:w-7">
        <path fill="currentColor" d="M8 5v14l11-7z" />
      </svg>
    </span>
  );
}

