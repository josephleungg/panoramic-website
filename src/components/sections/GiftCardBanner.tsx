import { business } from "@/config/business";
import { Reveal } from "@/components/Reveal";

export default function GiftCardBanner() {
  const { giftCardPromo } = business;
  return (
    <section className="bg-charcoal py-14 text-cream">
      <Reveal className="mx-auto flex max-w-[1200px] flex-col items-center gap-3 px-6 text-center">
        <h2 className="font-heading text-2xl">{giftCardPromo.headline}</h2>
        <p className="max-w-xl text-sm text-cream/70">{giftCardPromo.body}</p>
        <p className="mt-2 text-sm font-medium text-accent-soft">{giftCardPromo.ctaLabel}</p>
      </Reveal>
    </section>
  );
}
