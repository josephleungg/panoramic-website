"use client";

import { business } from "@/config/business";
import { scrollToId } from "@/lib/scrollToId";

export default function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex border-t border-line bg-cream/95 backdrop-blur-sm sm:hidden">
      <a
        href={business.phoneHref}
        className="flex flex-1 items-center justify-center gap-2 py-3.5 text-sm font-medium text-charcoal"
      >
        Call
      </a>
      <a
        href="#booking"
        onClick={(e) => scrollToId(e, "booking")}
        className="flex flex-1 items-center justify-center gap-2 bg-accent py-3.5 text-sm font-medium text-charcoal"
      >
        Book Now
      </a>
    </div>
  );
}
