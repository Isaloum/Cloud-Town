import { createFileRoute } from "@tanstack/react-router";
import { Check, ChevronLeft, ChevronRight, Cloud, Copy, Play } from "lucide-react";
import { useMemo, useRef, useState } from "react";
import { EPISODE_SCRIPTS } from "@/lib/scripts";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({ component: Home });

function posterFor(video: string) {
  const file = video.split("?")[0]?.replace(/^\//, "").replace(/\.mp4$/, "") ?? "";
  return `/posters/${file}.jpg`;
}

function fileUrl(video: string) {
  return video.split("?")[0] ?? video;
}

function Home() {
  const [n, setN] = useState(22);
  const episode = useMemo(() => EPISODE_SCRIPTS.find((e) => e.n === n) ?? EPISODE_SCRIPTS[0], [n]);
  const [copied, setCopied] = useState(false);
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const boxRef = useRef<HTMLTextAreaElement>(null);
  const src = fileUrl(episode.video);
  const poster = posterFor(episode.video);

  const playLoud = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = false;
    void v.play().then(() => setPlaying(true)).catch(() => {
      v.muted = true;
      void v.play().then(() => setPlaying(true));
    });
  };

  const copyScript = async () => {
    const el = boxRef.current;
    el?.focus();
    el?.select();
    try {
      await navigator.clipboard.writeText(episode.voiceover);
      setCopied(true);
    } catch {
      try {
        document.execCommand("copy");
        setCopied(true);
      } catch {
        setCopied(false);
      }
    }
    window.setTimeout(() => setCopied(false), 2000);
  };

  const order = useMemo(() => EPISODE_SCRIPTS.map((e) => e.n), []);
  const prev = () => {
    setPlaying(false);
    const i = order.indexOf(n);
    setN(order[(i - 1 + order.length) % order.length]);
  };
  const next = () => {
    setPlaying(false);
    const i = order.indexOf(n);
    setN(order[(i + 1) % order.length]);
  };

  return (
    <main className="min-h-dvh bg-bg text-fg">
      <div className="sticky top-0 z-20 border-b border-border bg-bg/95 px-3 py-2 backdrop-blur sm:px-4">
        <div className="mx-auto flex max-w-5xl items-center gap-2">
          <Cloud className="size-5 shrink-0 text-primary" aria-hidden />
          <p className="min-w-0 flex-1 truncate font-display text-base font-semibold">
            Episode {episode.n} · {episode.title}
          </p>
          <button type="button" onClick={prev} className="inline-flex size-11 items-center justify-center rounded-lg border border-border bg-surface" aria-label="Previous episode">
            <ChevronLeft className="size-5" />
          </button>
          <button type="button" onClick={next} className="inline-flex size-11 items-center justify-center rounded-lg border border-border bg-surface" aria-label="Next episode">
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>

      <section className="flex justify-center bg-ink p-3">
        <div className="relative w-full max-w-[360px] min-h-[480px] aspect-[9/16] overflow-hidden rounded-xl bg-ink">
          <img
            src={poster}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          <video
            ref={videoRef}
            key={src}
            className={cn(
              "absolute inset-0 h-full w-full object-cover",
              playing ? "opacity-100" : "opacity-0",
            )}
            src={src}
            poster={poster}
            controls={playing}
            playsInline
            preload="auto"
            onPlaying={() => setPlaying(true)}
            aria-label={`${episode.title} cartoon`}
          />
          {!playing ? (
            <button
              type="button"
              onClick={playLoud}
              className="absolute inset-0 z-10 flex items-center justify-center"
            >
              <span className="inline-flex size-20 items-center justify-center rounded-full bg-primary text-primary-fg shadow-card">
                <Play className="size-10 translate-x-0.5" aria-hidden />
              </span>
              <span className="sr-only">Play cartoon</span>
            </button>
          ) : null}
        </div>
      </section>

      <div className="mx-auto w-full max-w-5xl px-4 pb-16 pt-4 sm:px-6">
        <p className="mb-3 text-base text-muted">{episode.tagline}</p>
        <div className="mb-6 flex flex-wrap gap-2">
          {EPISODE_SCRIPTS.map((ep) => (
            <button
              key={ep.n}
              type="button"
              onClick={() => {
                setPlaying(false);
                setN(ep.n);
              }}
              className={cn(
                "rounded-lg border px-3 py-2 font-display text-sm font-semibold transition-colors",
                ep.n === n
                  ? "border-primary bg-primary text-primary-fg"
                  : "border-border bg-surface text-fg hover:bg-surface-2",
              )}
            >
              {ep.n}
            </button>
          ))}
        </div>

        <section className="rounded-2xl border-2 border-primary bg-surface p-4 shadow-card sm:p-6">
          <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="font-display text-xs font-semibold uppercase tracking-wide text-primary">Voice-over</p>
              <h2 className="font-display text-2xl font-semibold">Episode {episode.n} script</h2>
            </div>
            <button
              type="button"
              onClick={() => void copyScript()}
              className="inline-flex h-12 min-h-12 items-center gap-2 rounded-xl bg-primary px-5 font-display text-base font-semibold text-primary-fg shadow-card"
            >
              {copied ? <Check className="size-5" /> : <Copy className="size-5" />}
              {copied ? "Copied" : "Select + copy"}
            </button>
          </div>
          <textarea
            ref={boxRef}
            readOnly
            value={episode.voiceover}
            onFocus={(e) => e.currentTarget.select()}
            className="min-h-56 w-full resize-y rounded-xl border border-border bg-bg p-4 font-sans text-base leading-relaxed text-fg"
          />
        </section>

        <section className="mt-6 space-y-3">
          <h2 className="font-display text-2xl font-semibold">PDF pages (read here)</h2>
          {episode.pages.map((page) => (
            <img
              key={page}
              src={page}
              alt={`${episode.title} script page`}
              className="w-full rounded-xl border border-border bg-surface shadow-card"
            />
          ))}
        </section>
      </div>
    </main>
  );
}
