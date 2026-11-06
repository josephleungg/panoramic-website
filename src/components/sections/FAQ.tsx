import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { FadeIn } from "@/components/FadeIn";
import { business } from "@/config/business";

export default function FAQ() {
  return (
    <section id="faq" className="mx-auto max-w-[1200px] px-6 py-24 sm:py-32">
      <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" />
      <FadeIn className="mx-auto mt-14 max-w-2xl">
        <Accordion items={business.faq} />
      </FadeIn>
    </section>
  );
}
