import { Icon } from "@/components/ui/Icon";
import mapPointIcon from "@iconify-icons/solar/map-point-linear";
import phoneIcon from "@iconify-icons/solar/phone-calling-linear";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/FadeIn";
import { business } from "@/config/business";
import HoursAndStatus from "./HoursAndStatus";

export default function Contact() {
  const { address, geo } = business;
  const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${geo.lng - 0.01},${
    geo.lat - 0.008
  },${geo.lng + 0.01},${geo.lat + 0.008}&layer=mapnik&marker=${geo.lat},${geo.lng}`;
  const directionsUrl = `https://www.openstreetmap.org/directions?from=&to=${geo.lat}%2C${geo.lng}`;

  return (
    <section id="contact" className="bg-charcoal py-24 sm:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeading eyebrow="Visit Us" title="Contact & Location" tone="dark" />

        <div className="mt-14 grid gap-10 sm:grid-cols-2">
          <FadeIn className="space-y-7">
            <div className="flex gap-4">
              <Icon icon={mapPointIcon} width={22} height={22} className="mt-1 shrink-0 text-accent" aria-hidden="true" />
              <div>
                <h3 className="font-heading text-lg text-cream">Address</h3>
                <p className="mt-1 text-sm text-cream/70">
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
            </div>

            <div className="flex gap-4">
              <Icon icon={phoneIcon} width={22} height={22} className="mt-1 shrink-0 text-accent" aria-hidden="true" />
              <div>
                <h3 className="font-heading text-lg text-cream">Contact</h3>
                <p className="mt-1 text-sm text-cream/70">
                  <a href={business.phoneHref} className="hover:text-accent">
                    {business.phone}
                  </a>
                  <br />
                  <a href={`mailto:${business.email}`} className="hover:text-accent">
                    {business.email}
                  </a>
                </p>
              </div>
            </div>

            <HoursAndStatus />
          </FadeIn>

          <FadeIn delay={0.12} className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-cream/10">
            <iframe
              title="Map showing salon location"
              src={mapSrc}
              className="h-full w-full"
              loading="lazy"
            />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
