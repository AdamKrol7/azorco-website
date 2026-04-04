"use client";

export function NotionEmbed({ src }: { src: string }) {
  return (
    <div className="relative w-full">
      {/* iframe */}
      <iframe
        src={src}
        className="h-[calc(100vh-80px)] w-full border-0 bg-white dark:bg-black"
        title="Notion"
        loading="lazy"
      />

      {/* This overlays the Notion top bar (covers "Get Notion free", etc.) */}
      <div
        className="pointer-events-none absolute left-0 top-0 h-11 w-full bg-white dark:bg-black"
        aria-hidden="true"
      />
    </div>
  );
}
