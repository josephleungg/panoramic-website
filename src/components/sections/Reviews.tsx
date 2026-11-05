import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { business } from "@/config/business";

function Stars({ rating }: { rating: number }) {
  return (
    <div aria-label={`${rating} out of 5 stars`} className="flex gap-0.5 text-accent">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} aria-hidden="true">
          {i < rating ? "★" : "☆"}
        </span>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="mx-auto max-w-[1200px] px-6 py-20 sm:py-28">
      <SectionHeading eyebrow="Reviews" title="What Clients Say" description="Sample content shown below." />

      <div className="mt-10 flex gap-5 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {business.reviews.map((review, index) => (
          <Reveal key={review.id} delay={index * 0.15} className="min-w-[280px] max-w-[320px] shrink-0">
            <div className="rounded-2xl border border-line bg-white/60 p-6">
              <Stars rating={review.rating} />
              <p className="mt-3 text-sm italic text-charcoal/70">&ldquo;{review.quote}&rdquo;</p>
              <p className="mt-4 text-sm font-medium text-charcoal">{review.author}</p>
              <p className="text-xs text-charcoal/40">Sample review</p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-6 text-center">
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
