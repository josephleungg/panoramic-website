import type { MouseEvent } from "react";

/**
 * Browsers skip the scroll-into-view step when a link's href hash already
 * matches the current URL (no navigation occurs), so clicking "Book Now"
 * a second time does nothing. Scroll explicitly instead of relying on the
 * default anchor behavior.
 */
export function scrollToId(event: MouseEvent<HTMLAnchorElement>, id: string) {
  event.preventDefault();

  if (id === "top") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    history.replaceState(null, "", "#top");
    return;
  }

  const target = document.getElementById(id);
  if (!target) return;
  target.scrollIntoView({ behavior: "smooth", block: "start" });
  history.replaceState(null, "", `#${id}`);
}
