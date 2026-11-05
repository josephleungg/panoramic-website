import Image from "next/image";
import { business } from "@/config/business";
import { Reveal } from "@/components/Reveal";

export default function About() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 py-20 sm:py-28">
      <div className="grid gap-10 sm:grid-cols-2 sm:items-center sm:gap-16">
        <Reveal className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-charcoal/10">
          {/* [PLACEHOLDER] Stock photo, not a real photo of J&K Salon — see /public/images/CREDITS.md */}
          <Image
            src="/images/about-salon-interior.jpg"
            alt="Salon interior with styling chairs and mirrors"
            fill
            sizes="(min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        </Reveal>
        <Reveal delay={0.12}>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">About Us</p>
          <h2 className="mt-2 text-3xl text-charcoal sm:text-4xl">Welcome to {business.name}</h2>
          <p className="mt-4 text-base leading-relaxed text-charcoal/70">{business.intro}</p>
        </Reveal>
      </div>
    </section>
  );
}
