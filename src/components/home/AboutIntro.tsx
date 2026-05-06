import Image from "next/image";
import Link from "next/link";
import { MotionSection } from "@/components/MotionSection";
import { ABOUT_PORTRAIT, BRAND } from "@/lib/constants";

export function AboutIntro() {
  return (
    <section className="bg-linen px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center md:gap-16">
        <MotionSection>
          <div className="mx-auto flex max-w-sm justify-center md:mx-0">
            <div className="relative h-72 w-72 sm:h-80 sm:w-80">
              <div
                className="absolute inset-0 rounded-full border-[3px] border-blush/50 bg-gradient-to-br from-blush/20 to-taupe/20 shadow-warm"
                aria-hidden
              />
              <div className="absolute inset-[11px] overflow-hidden rounded-full border-2 border-cream/90 bg-taupe/10 shadow-inner ring-1 ring-taupe/20">
                <Image
                  src={ABOUT_PORTRAIT}
                  alt={`${BRAND.founder} — interieurarchitect, ${BRAND.name}`}
                  fill
                  className="object-cover object-[center_18%] scale-[1.02]"
                  sizes="(max-width: 640px) 288px, 320px"
                  priority
                />
              </div>
            </div>
          </div>
        </MotionSection>
        <MotionSection delay={0.08}>
          <p className="text-sm font-medium uppercase tracking-wider text-blush">
            Over mij
          </p>
          <h2 className="mt-2 font-display text-3xl text-earth md:text-4xl">
            Ik ben Marisol, interieurarchitect
          </h2>
          <p className="mt-5 leading-relaxed text-earth/80">
            Tijdens mijn studie aan de LOI hogeschool groeide mijn passie voor
            interieurdesign uit tot Mary-Design. In elk project creëer ik
            unieke, inspirerende ruimtes die passen bij de wensen en
            persoonlijkheid van mijn klanten: esthetisch sterk, functioneel en
            comfortabel.
          </p>
          <blockquote className="mt-8 border-l-2 border-blush pl-5 font-script text-2xl text-taupe md:text-3xl">
            &ldquo;Met aandacht voor detail en een creatieve aanpak breng ik
            elke ruimte tot leven.&rdquo;
          </blockquote>
          <Link
            href="/over-mij"
            className="mt-6 inline-block text-sm font-medium text-blush underline-offset-4 hover:underline"
          >
            Lees meer over mij →
          </Link>
        </MotionSection>
      </div>
    </section>
  );
}
