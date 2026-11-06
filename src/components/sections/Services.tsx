"use client";

import { useState } from "react";
import { business } from "@/config/business";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/FadeIn";

export default function Services() {
  const categories = business.serviceCategories;
  const [activeId, setActiveId] = useState(categories[0].id);
  const active = categories.find((c) => c.id === activeId) ?? categories[0];

  return (
    <section id="services" className="bg-charcoal py-24 sm:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeading eyebrow="Services" title="Services & Pricing" tone="dark" />

        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => setActiveId(category.id)}
              aria-current={category.id === activeId}
              className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.1em] transition-colors ${
                category.id === activeId
                  ? "bg-accent text-charcoal"
                  : "bg-cream/5 text-cream/70 hover:bg-cream/10 hover:text-cream"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="mt-12 divide-y divide-cream/10">
          {active.services.map((service, index) => (
            <FadeIn key={service.id} delay={index * 0.08}>
              <div className="flex flex-col gap-1 py-6 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <h3 className="text-xl font-medium text-cream">{service.name}</h3>
                  <p className="mt-1 text-sm text-cream/55">{service.description}</p>
                  <p className="mt-1 text-xs uppercase tracking-wide text-cream/35">{service.duration}</p>
                </div>
                <p className="shrink-0 font-heading text-2xl text-accent">{service.priceLabel}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-cream/40">
          Prices are placeholders and subject to change.
        </p>
      </div>
    </section>
  );
}
