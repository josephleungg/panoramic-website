"use client";

import { useRef } from "react";
import PanoramaViewerClient from "./PanoramaViewerClient";
import { business } from "@/config/business";
import { useScrollTo } from "@/lib/useScrollTo";
import { gsap, SplitText, useGSAP } from "@/lib/gsap";

export default function Hero() {
  const scrollTo = useScrollTo();
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let split: ReturnType<typeof SplitText.create> | undefined;
    let cancelled = false;

    // Wait for the display font so chars don't get positioned on the fallback
    // font's metrics and visibly jump once Playfair Display swaps in.
    document.fonts.ready.then(() => {
      if (cancelled || !nameRef.current) return;

      split = SplitText.create(nameRef.current, { type: "chars", aria: "auto" });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(eyebrowRef.current, { autoAlpha: 0, y: 12, duration: 0.5 })
        .from(split.chars, { autoAlpha: 0, y: 36, stagger: 0.025, duration: 0.8 }, "-=0.25")
        .from(taglineRef.current, { autoAlpha: 0, y: 16, duration: 0.6 }, "-=0.5")
        .from(ctaRef.current?.children ?? [], { autoAlpha: 0, y: 12, stagger: 0.08, duration: 0.5 }, "-=0.35");
    });

    return () => {
      cancelled = true;
      split?.revert();
    };
  }, []);

  return (
    <section id="top" className="relative h-[100svh] w-full overflow-hidden bg-charcoal">
      <PanoramaViewerClient />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/30" />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 px-6 pb-20 sm:px-10 sm:pb-24">
        <div className="mx-auto max-w-[1280px]">
          <p ref={eyebrowRef} className="text-eyebrow text-accent-soft">
            Welcome to
          </p>
          <h1 ref={nameRef} className="text-display mt-1 text-cream">
            {business.name}
          </h1>
          <p ref={taglineRef} className="mt-4 max-w-md text-base text-cream/80 sm:text-lg">
            {business.tagline}
          </p>

          <div ref={ctaRef} className="pointer-events-auto mt-8 flex gap-4">
            <a
              href="#booking"
              onClick={(e) => scrollTo(e, "booking")}
              className="rounded-full bg-accent px-6 py-3 text-xs font-semibold uppercase tracking-[0.1em] text-charcoal transition-colors hover:bg-accent-soft"
            >
              Book Now
            </a>
            <a
              href="#services"
              onClick={(e) => scrollTo(e, "services")}
              className="rounded-full border border-cream/40 px-6 py-3 text-xs font-semibold uppercase tracking-[0.1em] text-cream transition-colors hover:border-cream"
            >
              View Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
