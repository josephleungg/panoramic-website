"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { ReactLenis, type LenisRef } from "lenis/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  const lenisRef = useRef<LenisRef>(null);
  // Starts false on both server and client's first render (no mismatch), then upgrades
  // to Lenis only once we've confirmed the visitor hasn't asked for reduced motion —
  // mounting Lenis without ever running its raf loop would freeze scrolling entirely,
  // not just skip the smoothing, so "don't mount it" is the only safe bypass here.
  const [smoothScrollEnabled, setSmoothScrollEnabled] = useState(false);

  useEffect(() => {
    // Deliberately deferred to the client: matchMedia isn't available during SSR, and
    // this must not run during the initial render anyway (see the comment on the
    // state above) to avoid a server/client mismatch.
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSmoothScrollEnabled(!prefersReducedMotion);

    function refresh() {
      ScrollTrigger.refresh();
    }
    window.addEventListener("load", refresh);
    document.fonts?.ready.then(refresh);
    return () => window.removeEventListener("load", refresh);
  }, []);

  useEffect(() => {
    if (!smoothScrollEnabled) return;

    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);
    lenisRef.current?.lenis?.on("scroll", ScrollTrigger.update);

    return () => {
      gsap.ticker.remove(update);
    };
  }, [smoothScrollEnabled]);

  if (!smoothScrollEnabled) return <>{children}</>;

  return (
    <ReactLenis root ref={lenisRef} options={{ autoRaf: false }}>
      {children}
    </ReactLenis>
  );
}
