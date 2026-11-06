"use client";

import { useLenis } from "lenis/react";
import type { MouseEvent } from "react";

const HEADER_OFFSET = 80;

/**
 * Routes same-page anchor navigation through Lenis when it's mounted, so the
 * click-triggered scroll stays on the same engine as scroll-triggered animations
 * instead of fighting native smooth-scroll. Falls back to an instant native jump
 * when Lenis isn't mounted (reduced motion), which is the correct behavior there.
 *
 * Also works around a real browser quirk: clicking a link to the hash already in
 * the URL doesn't re-trigger a scroll, since no navigation/hashchange occurs.
 */
export function useScrollTo() {
  const lenis = useLenis();

  return (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault();

    if (id === "top") {
      if (lenis) lenis.scrollTo(0);
      else window.scrollTo({ top: 0 });
      history.replaceState(null, "", "#top");
      return;
    }

    const target = document.getElementById(id);
    if (!target) return;

    if (lenis) {
      lenis.scrollTo(target, { offset: -HEADER_OFFSET });
    } else {
      target.scrollIntoView({ block: "start" });
    }
    history.replaceState(null, "", `#${id}`);
  };
}
