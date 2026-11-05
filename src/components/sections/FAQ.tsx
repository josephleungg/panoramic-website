import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { Reveal } from "@/components/Reveal";
import { business } from "@/config/business";

export default function FAQ() {
  return (
    <section id="faq" className="mx-auto max-w-[1200px] px-6 py-20 sm:py-28">
      <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" />
      <Reveal className="mx-auto mt-10 max-w-2xl">
        <Accordion items={business.faq} />
      </Reveal>
    </section>
  );
}
