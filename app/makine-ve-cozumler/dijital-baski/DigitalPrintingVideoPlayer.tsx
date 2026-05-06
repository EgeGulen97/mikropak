"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import VideoPlayButton from "../../components/VideoPlayButton";

const YOUTUBE_ID = "kS1cMA63Pzs";

type Props = {
  /** Yerel kapak görseli — YouTube’dan otomatik küçük resim kullanılmaz. */
  posterSrc: string;
};

/**
 * Tıklanınca sayfa içi embed + otomatik oynatma.
 * Poster yalnızca sağlanan yerel görseldir (video karesinden otomatik üretim yok).
 */
export default function DigitalPrintingVideoPlayer({ posterSrc }: Props) {
  const [playing, setPlaying] = useState(false);
  const [posterFailed, setPosterFailed] = useState(false);

  const onPosterError = useCallback(() => {
    setPosterFailed(true);
  }, []);

  return (
    <div className="mx-auto max-w-5xl">
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-950 shadow-[0_16px_38px_rgba(15,23,42,0.10)]">
        {!playing ? (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="group relative block h-full w-full text-left outline-none ring-offset-2 focus-visible:ring-2 focus-visible:ring-[#E6005C]"
            aria-label="Videoyu oynat: dijital baskı hattı"
          >
            {!posterFailed ? (
              <Image
                src={posterSrc}
                alt="Dijital baskı hattı — videoya ait önizleme"
                fill
                className="object-cover object-center transition duration-300 group-hover:brightness-[0.97]"
                sizes="(max-width: 1024px) 100vw, 896px"
                quality={92}
                onError={onPosterError}
              />
            ) : (
              <div
                className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-950"
                aria-hidden
              />
            )}
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/5"
              aria-hidden
            />
            <div className="pointer-events-none absolute bottom-3 left-3 z-10 rounded-md bg-black/55 px-2.5 py-1.5 backdrop-blur-[2px] md:bottom-4 md:left-4 md:px-3 md:py-2">
              <p className="text-[11px] font-medium tracking-wide text-white/95 md:text-[12px]">
                Hattı Çalışırken Görün
              </p>
            </div>
            <VideoPlayButton />
          </button>
        ) : (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1&rel=0&modestbranding=1&controls=1`}
            title="Dijital baskı sistemi — çalışma videosu"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        )}
      </div>
    </div>
  );
}
