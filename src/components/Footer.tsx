"use client";

import Link from "next/link";
import { business } from "@/config/business";
import { scrollToId } from "@/lib/scrollToId";

const NAV_LINKS = [
  { href: "services", label: "Services" },
  { href: "gallery", label: "Gallery" },
  { href: "reviews", label: "Reviews" },
  { href: "faq", label: "FAQ" },
  { href: "contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-charcoal pb-24 pt-14 text-cream sm:pb-14">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <p className="font-heading text-xl">{business.name}</p>
            <p className="mt-2 text-sm text-cream/60">{business.tagline}</p>
            <div className="mt-4 flex gap-4 text-sm">
              <a href={business.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                Instagram
              </a>
              <a href={business.social.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                Facebook
              </a>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium uppercase tracking-wide text-cream/50">Navigate</p>
            <ul className="mt-3 space-y-2 text-sm text-cream/70">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={`#${link.href}`} onClick={(e) => scrollToId(e, link.href)} className="hover:text-accent">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium uppercase tracking-wide text-cream/50">Hours Snapshot</p>
            <ul className="mt-3 space-y-1 text-sm text-cream/70">
              {business.hours.slice(0, 3).map((day) => (
                <li key={day.day}>
                  {day.day}: {day.open && day.close ? `${day.open}–${day.close}` : "Closed"}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-cream/10 pt-6 text-xs text-cream/50 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} {business.name}. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-accent">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-accent">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
