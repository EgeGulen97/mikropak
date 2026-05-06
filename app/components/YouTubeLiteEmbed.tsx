"use client";

import { useMemo, useState } from "react";
import VideoPlayButton from "./VideoPlayButton";

type YouTubeLiteEmbedProps = {
  videoId: string;
  title: string;
  posterSrc?: string;
  className?: string;
  /**
   * When true, only `posterSrc` is used (typically a local asset). The
   * component will not fall back to YouTube CDN thumbnail URLs.
   */
  disableYoutubePosterFallback?: boolean;
};

export default function YouTubeLiteEmbed({
  videoId,
  title,
  posterSrc,
  className,
  disableYoutubePosterFallback = false,
}: YouTubeLiteEmbedProps) {
  const [isActive, setIsActive] = useState(false);

  const posterCandidates = useMemo(() => {
    if (disableYoutubePosterFallback && posterSrc) {
      return [posterSrc];
    }
    return [
      ...(posterSrc ? [posterSrc] : []),
      `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`,
      `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
    ];
  }, [posterSrc, videoId, disableYoutubePosterFallback]);

  const iframeSrc = useMemo(() => {
    const base = `https://www.youtube-nocookie.com/embed/${videoId}`;
    const params = new URLSearchParams({
      autoplay: "1",
      rel: "0",
      modestbranding: "1",
      playsinline: "1",
    });
    return `${base}?${params.toString()}`;
  }, [videoId]);

  return (
    <div className={className}>
      {!isActive ? (
        <button
          type="button"
          onClick={() => setIsActive(true)}
          className="group absolute inset-0 block h-full w-full"
          aria-label={`${title} videosunu oynat`}
        >
          <img
            src={posterCandidates[0]}
            alt={`${title} video önizleme görseli`}
            className="absolute inset-0 z-0 h-full w-full object-cover object-center"
            loading="lazy"
            onError={(e) => {
              const img = e.currentTarget;
              const currentIdx = posterCandidates.findIndex((c) => c === img.src);
              const next = posterCandidates[Math.max(0, currentIdx + 1)];
              if (next && next !== img.src) img.src = next;
            }}
          />

          <span
            className="pointer-events-none absolute inset-0 z-[1] bg-black/35"
            aria-hidden
          />
          <span
            className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-black/50 via-black/15 to-black/10"
            aria-hidden
          />
          <VideoPlayButton />
        </button>
      ) : (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={iframeSrc}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      )}
    </div>
  );
}

