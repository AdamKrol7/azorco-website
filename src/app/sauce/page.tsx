"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";

const PDF_PATH = "/sauce/interview-cheat-sheet.pdf"; // must match /public/sauce/<file>
type ReactPdfModule = typeof import("react-pdf");

export default function SaucePage() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [reactPdf, setReactPdf] = useState<ReactPdfModule | null>(null);
  const [numPages, setNumPages] = useState<number>(0);
  const [pageWidth, setPageWidth] = useState<number>(900);

  // Load react-pdf ONLY in the browser + set LOCAL worker
  useEffect(() => {
    let mounted = true;

    (async () => {
      const mod = await import("react-pdf");

      mod.pdfjs.GlobalWorkerOptions.workerSrc = new URL(
        "pdfjs-dist/build/pdf.worker.min.mjs",
        import.meta.url
      ).toString();

      if (mounted) setReactPdf(mod);
    })();

    return () => {
      mounted = false;
    };
  }, []);

  // Recompute width on resize so pages are wide
  useEffect(() => {
    if (!containerRef.current) return;

    const el = containerRef.current;

    const compute = () => {
      const w = el.clientWidth;
      const padded = Math.max(320, w - 16);
      setPageWidth(padded);
    };

    compute();

    const ro = new ResizeObserver(() => compute());
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const pages = useMemo(() => {
    return Array.from({ length: numPages }, (_, i) => i + 1);
  }, [numPages]);

  // Memoize options to avoid react-pdf warning
  const documentOptions = useMemo(() => ({}), []);

  // Title block styled like Links page: token-based colors
  const TitleBlock = () => (
    <div className="mx-auto max-w-4xl text-center">
      <h1 className="mb-6 text-3xl font-medium tracking-tight text-foreground sm:mb-8 sm:text-4xl">
        Sauce
      </h1>

      <div className="flex flex-wrap justify-center gap-3">
        <Link
          href="https://github.com/AdamKrol7/my-website"
          target="_blank"
          className="text-sm font-semibold text-red-600 hover:underline"
        >
          Website code on GitHub
        </Link>

        <span className="text-sm text-foreground/40">•</span>

        <a
          href={PDF_PATH}
          download
          className="text-sm font-semibold text-red-600 hover:underline"
        >
          Download PDF
        </a>
      </div>
    </div>
  );

  if (!reactPdf) {
    return (
      <main className="mx-auto w-full max-w-6xl px-4 py-14">
        <TitleBlock />
        <p className="mx-auto mt-10 max-w-4xl text-center text-foreground/70">
          Loading PDF…
        </p>
      </main>
    );
  }

  const { Document, Page } = reactPdf;

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-14">
      <TitleBlock />

      <div className="mt-10">
        <div ref={containerRef} className="w-full">
          <Document
            file={PDF_PATH}
            options={documentOptions}
            onLoadSuccess={({ numPages }) => setNumPages(numPages)}
            loading={<p className="text-foreground">Loading PDF…</p>}
            error={
              <p className="text-red-600">
                Couldn’t load the PDF. Make sure it exists at {PDF_PATH}
              </p>
            }
          >
            {/* Continuous look: no page cards, no gaps */}
            <div className="flex flex-col gap-0">
              {pages.map((pageNumber) => (
                <div key={pageNumber} className="m-0 p-0">
                  <Page
                    pageNumber={pageNumber}
                    width={pageWidth}
                    renderAnnotationLayer={false}
                    renderTextLayer={false}
                    className="!m-0 !p-0"
                  />
                </div>
              ))}
            </div>
          </Document>
        </div>
      </div>
    </main>
  );
}
