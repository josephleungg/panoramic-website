import { Icon } from "@/components/ui/Icon";
import starBold from "@iconify-icons/solar/star-bold";
import starLinear from "@iconify-icons/solar/star-linear";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/FadeIn";
import { business } from "@/config/business";

function Stars({ rating }: { rating: number }) {
  return (
    <div aria-label={`${rating} out of 5 stars`} className="flex gap-0.5 text-accent">
      {Array.from({ length: 5 }).map((_, i) => (
        <Icon key={i} icon={i < rating ? starBold : starLinear} width={16} height={16} aria-hidden="true" />
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="mx-auto max-w-[1280px] px-6 py-24 sm:py-32">
      <SectionHeading eyebrow="Reviews" title="What Clients Say" description="Sample content shown below." />

      <div className="mt-14 flex gap-5 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {business.reviews.map((review, index) => (
          <FadeIn key={review.id} delay={index * 0.15} className="min-w-[280px] max-w-[320px] shrink-0">
            <div className="rounded-2xl border border-line bg-white/60 p-7">
              <Stars rating={review.rating} />
              <p className="mt-4 text-[15px] leading-relaxed text-charcoal/75">{review.quote}</p>
              <p className="mt-5 text-sm font-medium text-charcoal">{review.author}</p>
              <p className="text-xs text-charcoal/40">Sample review</p>
            </div>
          </FadeIn>
        ))}
      </div>

      <div className="mt-8 text-center">
        <a
          href={business.social.googleReviewsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-accent hover:underline"
        >
          Read more on Google
        </a>
      </div>
    </section>
  );
}
