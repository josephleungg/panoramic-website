"use client";

import PanoramaViewerClient from "./PanoramaViewerClient";
import { business } from "@/config/business";
import { scrollToId } from "@/lib/scrollToId";

export default function Hero() {
  return (
    <section id="top" className="relative h-[100svh] w-full overflow-hidden bg-charcoal">
      <PanoramaViewerClient />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/20" />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 flex flex-col items-center gap-4 px-6 pb-20 sm:items-start sm:px-10 sm:pb-24">
        <div className="pointer-events-auto flex w-full max-w-sm flex-col items-center gap-5 rounded-3xl border border-cream/15 bg-black/45 p-6 text-center sm:w-auto sm:items-start sm:text-left">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-soft">Welcome to</p>
            <p className="mt-1 font-heading text-3xl text-cream sm:text-4xl">{business.name}</p>
            <p className="mt-2 text-sm text-cream/75 sm:text-base">{business.tagline}</p>
          </div>

          <div className="flex gap-3">
            <a
              href="#booking"
              onClick={(e) => scrollToId(e, "booking")}
              className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-charcoal transition-colors hover:bg-accent-soft"
            >
              Book Now
            </a>
            <a
              href="#services"
              onClick={(e) => scrollToId(e, "services")}
              className="rounded-full border border-cream/40 px-5 py-2.5 text-sm font-medium text-cream transition-colors hover:border-cream"
            >
              View Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
