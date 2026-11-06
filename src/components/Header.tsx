"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import hamburgerIcon from "@iconify-icons/solar/hamburger-menu-linear";
import closeIcon from "@iconify-icons/solar/close-linear";
import { business } from "@/config/business";
import { useScrollTo } from "@/lib/useScrollTo";
import { gsap, useGSAP } from "@/lib/gsap";

const NAV_LINKS = [
  { href: "services", label: "Services" },
  { href: "gallery", label: "Gallery" },
  { href: "reviews", label: "Reviews" },
  { href: "contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const scrollTo = useScrollTo();

  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.from(headerRef.current, { y: -24, autoAlpha: 0, duration: 0.8, delay: 0.1, ease: "power3.out" });
  }, []);

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
      ref={headerRef}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? "bg-cream shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-5">
        <a
          href="#top"
          onClick={(e) => scrollTo(e, "top")}
          className={`font-heading text-xl tracking-tight transition-colors ${solid ? "text-charcoal" : "text-cream"}`}
        >
          {business.name}
        </a>

        <ul className="hidden items-center gap-10 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={`#${link.href}`}
                onClick={(e) => scrollTo(e, link.href)}
                className={`text-xs font-medium uppercase tracking-[0.14em] transition-colors hover:text-accent ${
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
          onClick={(e) => scrollTo(e, "booking")}
          className="hidden rounded-full bg-accent px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.1em] text-charcoal transition-colors hover:bg-accent-soft md:inline-flex"
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
          <Icon icon={menuOpen ? closeIcon : hamburgerIcon} width={24} height={24} aria-hidden="true" />
        </button>
      </nav>

      {menuOpen && (
        <div className="absolute inset-x-0 top-full flex flex-col gap-1 bg-cream px-6 pb-6 pt-2 shadow-lg md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={`#${link.href}`}
              onClick={(e) => {
                scrollTo(e, link.href);
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
              scrollTo(e, "booking");
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
