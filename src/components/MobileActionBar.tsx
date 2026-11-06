"use client";

import { Icon } from "@/components/ui/Icon";
import phoneIcon from "@iconify-icons/solar/phone-calling-linear";
import calendarIcon from "@iconify-icons/solar/calendar-add-linear";
import { business } from "@/config/business";
import { useScrollTo } from "@/lib/useScrollTo";

export default function MobileActionBar() {
  const scrollTo = useScrollTo();

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex border-t border-line bg-cream sm:hidden">
      <a
        href={business.phoneHref}
        className="flex flex-1 items-center justify-center gap-2 py-3.5 text-sm font-medium text-charcoal"
      >
        <Icon icon={phoneIcon} width={18} height={18} aria-hidden="true" />
        Call
      </a>
      <a
        href="#booking"
        onClick={(e) => scrollTo(e, "booking")}
        className="flex flex-1 items-center justify-center gap-2 bg-accent py-3.5 text-sm font-medium text-charcoal"
      >
        <Icon icon={calendarIcon} width={18} height={18} aria-hidden="true" />
        Book Now
      </a>
    </div>
  );
}
