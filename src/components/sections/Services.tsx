"use client";

import { useState } from "react";
import { business } from "@/config/business";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/Reveal";

export default function Services() {
  const categories = business.serviceCategories;
  const [activeId, setActiveId] = useState(categories[0].id);
  const active = categories.find((c) => c.id === activeId) ?? categories[0];

  return (
    <section id="services" className="mx-auto max-w-[1200px] px-6 py-20 sm:py-28">
      <SectionHeading eyebrow="Services" title="Services & Pricing" />

      <div className="mt-10 flex flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <button
            key={category.id}
            type="button"
            onClick={() => setActiveId(category.id)}
            aria-current={category.id === activeId}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              category.id === activeId
                ? "bg-charcoal text-cream"
                : "bg-charcoal/5 text-charcoal hover:bg-charcoal/10"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="mt-10 divide-y divide-line">
        {active.services.map((service, index) => (
          <Reveal key={service.id} delay={index * 0.12}>
            <div className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <h3 className="text-lg font-medium text-charcoal">{service.name}</h3>
                <p className="mt-1 text-sm text-charcoal/60">{service.description}</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-charcoal/40">{service.duration}</p>
              </div>
              <p className="shrink-0 font-heading text-lg text-accent">{service.priceLabel}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <p className="mt-6 text-center text-xs text-charcoal/50">
        Prices are placeholders and subject to change.
      </p>
    </section>
  );
}
