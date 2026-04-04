"use client";

import Link from "next/link";
import Image from "next/image";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-2 py-1 sm:px-20 sm:py-4">
        <Link href="/" className="flex min-w-0 items-center">
          <div className="relative h-15 w-50 overflow-hidden rounded-md sm:h-12 sm:w-60">
            <Image
              src="/azorco-6.png"
              alt="Azorco logo"
              fill
              priority
              className="object-contain"
            />
          </div>
        </Link>

        <a
          href="YOUR_BOOKING_LINK_HERE"
          target="_blank"
          rel="noreferrer"
          className="inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-md bg-white px-2 py-2 text-xs font-bold text-black transition hover:opacity-90 sm:px-4 sm:py-2.5 sm:text-sm"
        >
          Book a Call
        </a>
      </div>
    </header>
  );
}