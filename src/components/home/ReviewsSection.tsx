import { MotionSection } from "@/components/MotionSection";

const REVIEWS = [
  {
    quote: "I love the design! Het is precies wat ik wilde.",
    author: "Sabrina",
  },
  {
    quote: "Ik ben gefascineerd door de transformatie! 😍",
    author: "Damaris",
  },
  {
    quote:
      "Vlotte communicatie, luistert heel goed naar alle wensen! Zeer tevreden!",
    author: "Tirsa",
  },
] as const;

export function ReviewsSection() {
  return (
    <section className="bg-linen px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <MotionSection className="text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-blush">
            Reviews
          </p>
          <h2 className="mt-2 font-display text-4xl text-earth md:text-5xl">
            Wat klanten zeggen
          </h2>
        </MotionSection>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {REVIEWS.map((review, i) => (
            <MotionSection key={review.author} delay={i * 0.06}>
              <blockquote className="h-full rounded-card-lg border border-taupe/15 bg-cream p-6 shadow-sm">
                <p className="text-base leading-relaxed text-earth/85">
                  &ldquo;{review.quote}&rdquo;
                </p>
                <footer className="mt-5 text-sm font-medium text-blush">
                  - {review.author}
                </footer>
              </blockquote>
            </MotionSection>
          ))}
        </div>
      </div>
    </section>
  );
}
