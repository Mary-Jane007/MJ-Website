import Link from "next/link";
import { MotionSection } from "@/components/MotionSection";

export function CTABanner() {
  return (
    <section className="bg-gradient-to-r from-blush via-taupe to-blush px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <MotionSection>
          <h2 className="font-display text-3xl text-cream sm:text-4xl md:text-5xl">
            Gratis Kennismakingsgesprek!
          </h2>
          <p className="mt-4 text-lg text-cream/95 sm:text-xl">
            Vertel me jouw verhaal, dan ontwerp ik de rest.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-card-lg bg-cream px-8 py-3.5 font-medium text-earth shadow-warm transition hover:bg-linen"
          >
            Plan een gesprek
          </Link>
        </MotionSection>
      </div>
    </section>
  );
}
