import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { business } from "@/config/business";
import HoursAndStatus from "./HoursAndStatus";

export default function Contact() {
  const { address, geo } = business;
  const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${geo.lng - 0.01},${
    geo.lat - 0.008
  },${geo.lng + 0.01},${geo.lat + 0.008}&layer=mapnik&marker=${geo.lat},${geo.lng}`;
  const directionsUrl = `https://www.openstreetmap.org/directions?from=&to=${geo.lat}%2C${geo.lng}`;

  return (
    <section id="contact" className="mx-auto max-w-[1200px] px-6 py-20 sm:py-28">
      <SectionHeading eyebrow="Visit Us" title="Contact & Location" />

      <div className="mt-10 grid gap-10 sm:grid-cols-2">
        <Reveal className="space-y-6">
          <div>
            <h3 className="font-heading text-lg text-charcoal">Address</h3>
            <p className="mt-1 text-sm text-charcoal/70">
              {address.line1}
              <br />
              {address.line2}
              <br />
              {address.city}, {address.region} {address.postalCode}
            </p>
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-sm font-medium text-accent hover:underline"
            >
              Get directions
            </a>
          </div>

          <div>
            <h3 className="font-heading text-lg text-charcoal">Contact</h3>
            <p className="mt-1 text-sm text-charcoal/70">
              <a href={business.phoneHref} className="hover:text-accent">
                {business.phone}
              </a>
              <br />
              <a href={`mailto:${business.email}`} className="hover:text-accent">
                {business.email}
              </a>
            </p>
          </div>

          <HoursAndStatus />
        </Reveal>

        <Reveal delay={0.12} className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-line">
          <iframe
            title="Map showing salon location"
            src={mapSrc}
            className="h-full w-full"
            loading="lazy"
          />
        </Reveal>
      </div>
    </section>
  );
}
