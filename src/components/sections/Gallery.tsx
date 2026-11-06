"use client";

import { useState } from "react";
import Image from "next/image";
import { Icon } from "@/components/ui/Icon";
import closeIcon from "@iconify-icons/solar/close-linear";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/FadeIn";
import { business } from "@/config/business";

/**
 * [PLACEHOLDER] Stock photos, not real photos of J&K Salon's work — see
 * /public/images/CREDITS.md for sources/licenses. Replace src and label with
 * real photography before launch.
 */
const GALLERY_ITEMS = [
  { id: "g1", label: "Color work", src: "/images/gallery-color-work.jpg", aspect: "aspect-[3/4]" },
  { id: "g2", label: "Salon interior", src: "/images/gallery-salon-interior.jpg", aspect: "aspect-square" },
  { id: "g3", label: "Ombré color", src: "/images/gallery-ombre-color.jpg", aspect: "aspect-[4/5]" },
  { id: "g4", label: "Updo styling", src: "/images/gallery-updo-styling.jpg", aspect: "aspect-square" },
  { id: "g5", label: "Finishing touches", src: "/images/gallery-finishing-touches.jpg", aspect: "aspect-[3/4]" },
  { id: "g6", label: "Men's cut", src: "/images/gallery-mens-cut.jpg", aspect: "aspect-[4/5]" },
];

export default function Gallery() {
  const [openId, setOpenId] = useState<string | null>(null);
  const openItem = GALLERY_ITEMS.find((item) => item.id === openId) ?? null;

  return (
    <section id="gallery" className="mx-auto max-w-[1280px] px-6 py-24 sm:py-32">
      <SectionHeading eyebrow="Gallery" title="Our Work" description="A look at recent work from the chair." />

      <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
        {GALLERY_ITEMS.map((item, index) => (
          <FadeIn key={item.id} delay={(index % 3) * 0.15}>
            <button
              type="button"
              onClick={() => setOpenId(item.id)}
              className={`${item.aspect} group relative block w-full overflow-hidden rounded-xl bg-charcoal/10`}
            >
              <Image
                src={item.src}
                alt={item.label}
                fill
                sizes="(min-width: 640px) 33vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </button>
          </FadeIn>
        ))}
      </div>

      <div className="mt-12 text-center">
        <a
          href={business.social.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-accent hover:underline"
        >
          Follow us {business.social.instagramHandle}
        </a>
      </div>

      {openItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${openItem.label} preview`}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-6"
          onClick={() => setOpenId(null)}
        >
          <div className="relative aspect-square w-full max-w-lg overflow-hidden rounded-xl">
            <Image src={openItem.src} alt={openItem.label} fill sizes="512px" className="object-cover" />
            <button
              type="button"
              onClick={() => setOpenId(null)}
              aria-label="Close preview"
              className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-cream hover:bg-black/60"
            >
              <Icon icon={closeIcon} width={18} height={18} aria-hidden="true" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
