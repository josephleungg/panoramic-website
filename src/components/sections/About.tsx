import Image from "next/image";
import { business } from "@/config/business";
import { FadeIn } from "@/components/FadeIn";
import { RevealText } from "@/components/RevealText";

export default function About() {
  return (
    <section className="mx-auto max-w-[1280px] px-6 py-24 sm:py-32">
      <div className="grid gap-12 sm:grid-cols-12 sm:items-center sm:gap-10">
        <FadeIn className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-charcoal/10 sm:col-span-7">
          {/* [PLACEHOLDER] Stock photo, not a real photo of J&K Salon — see /public/images/CREDITS.md */}
          <Image
            src="/images/about-salon-interior.jpg"
            alt="Salon interior with styling chairs and mirrors"
            fill
            sizes="(min-width: 640px) 58vw, 100vw"
            className="object-cover"
          />
        </FadeIn>
        <div className="sm:col-span-5">
          <FadeIn>
            <p className="text-eyebrow text-accent">About Us</p>
          </FadeIn>
          <RevealText as="h2" className="text-display-sm mt-3 block text-charcoal">
            {`Welcome to ${business.name}`}
          </RevealText>
          <FadeIn delay={0.15}>
            <p className="mt-5 text-base leading-relaxed text-charcoal/70">{business.intro}</p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
