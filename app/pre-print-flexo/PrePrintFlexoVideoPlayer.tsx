"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import VideoPlayButton from "../components/VideoPlayButton";

const VIDEO_ID = "J3kDwA5Vr68";

const YOUTUBE_EMBED_URL = `https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&controls=1&modestbranding=1&rel=0&iv_load_policy=3&showinfo=0&mute=0&playsinline=1`;

const THUMB_MAXRES = `https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`;
const THUMB_HQ = `https://img.youtube.com/vi/${VIDEO_ID}/hqdefault.jpg`;

export default function PrePrintFlexoVideoPlayer() {
  const [open, setOpen] = useState(false);
  const [thumbSrc, setThumbSrc] = useState<string>(THUMB_MAXRES);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <div className="group relative overflow-hidden rounded-[12px] bg-slate-900 shadow-[0_18px_60px_rgba(15,23,42,0.10)]">
        <div className="relative aspect-video w-full">
          <Image
            src={thumbSrc}
            alt="Pre-print flexo video önizleme görseli"
            fill
            className="object-contain object-center transition-transform duration-700 group-hover:scale-[1.02]"
            priority
            unoptimized
            onError={() => setThumbSrc(THUMB_HQ)}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-black/0" />

          <button
            type="button"
            aria-label="Videoyu oynat"
            onClick={() => setOpen(true)}
            className="absolute inset-0 z-10 flex items-center justify-center focus:outline-none"
          >
            <VideoPlayButton />
          </button>
        </div>
      </div>

      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/70 p-4"
          onClick={(e) => {
            if (e.currentTarget === e.target) setOpen(false);
          }}
        >
          <div className="relative w-full max-w-5xl overflow-hidden rounded-[14px] bg-black shadow-2xl">
            <button
              type="button"
              aria-label="Videoyu kapat"
              onClick={() => setOpen(false)}
              className="absolute right-3 top-3 z-10 rounded-full bg-white/10 px-2.5 py-2 text-white backdrop-blur transition hover:bg-white/15"
            >
              <svg
                aria-hidden="true"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6L6 18" />
                <path d="M6 6l12 12" />
              </svg>
            </button>

            <div className="relative aspect-video w-full">
              <iframe
                className="absolute inset-0 h-full w-full"
                src={YOUTUBE_EMBED_URL}
                title="Pre-print flexo baskı videosu"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

