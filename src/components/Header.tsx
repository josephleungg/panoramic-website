"use client";

import { useEffect, useState } from "react";
import { business } from "@/config/business";
import { scrollToId } from "@/lib/scrollToId";

const NAV_LINKS = [
  { href: "services", label: "Services" },
  { href: "gallery", label: "Gallery" },
  { href: "reviews", label: "Reviews" },
  { href: "contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const solid = scrolled || menuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? "bg-cream shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4">
        <a
          href="#top"
          onClick={(e) => scrollToId(e, "top")}
          className={`font-heading text-lg transition-colors ${solid ? "text-charcoal" : "text-cream"}`}
        >
          {business.name}
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={`#${link.href}`}
                onClick={(e) => scrollToId(e, link.href)}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  solid ? "text-charcoal" : "text-cream"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#booking"
          onClick={(e) => scrollToId(e, "booking")}
          className="hidden rounded-full bg-accent px-5 py-2 text-sm font-medium text-charcoal transition-colors hover:bg-accent-soft md:inline-flex"
        >
          Book Now
        </a>

        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className={`flex h-10 w-10 items-center justify-center rounded-full md:hidden ${
            solid ? "text-charcoal" : "text-cream"
          }`}
        >
          <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
            {menuOpen ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth={1.8}
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth={1.8}
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </nav>

      {menuOpen && (
        <div className="absolute inset-x-0 top-full flex flex-col gap-1 bg-cream px-6 pb-6 pt-2 shadow-lg md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={`#${link.href}`}
              onClick={(e) => {
                scrollToId(e, link.href);
                setMenuOpen(false);
              }}
              className="rounded-lg px-3 py-3 text-base font-medium text-charcoal hover:bg-charcoal/5"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#booking"
            onClick={(e) => {
              scrollToId(e, "booking");
              setMenuOpen(false);
            }}
            className="mt-2 rounded-full bg-accent px-5 py-3 text-center text-sm font-medium text-charcoal"
          >
            Book Now
          </a>
        </div>
      )}
    </header>
  );
}
