import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MotionSection } from "@/components/MotionSection";
import { ABOUT_PORTRAIT, BRAND } from "@/lib/constants";
import { Heart, Sparkles, Sun } from "lucide-react";

export const metadata: Metadata = {
  title: "Over mij",
  description: `Leer ${BRAND.founder} kennen — interieurarchitect en oprichter van ${BRAND.name} met een persoonlijke aanpak.`,
};

const values = [
  {
    icon: Heart,
    title: "Verbinding",
    text: "Jouw huis vertelt wie je bent. Ik luister eerst — daarna pas teken ik.",
  },
  {
    icon: Sparkles,
    title: "Tijdloze luxe",
    text: "Geen trends om trends wil. Ik kies materialen en lijnen die jaren meegaan.",
  },
  {
    icon: Sun,
    title: "Licht & rust",
    text: "Een goed interieur voelt licht aan, ook wanneer het knus en warm is.",
  },
];

export default function OverMijPage() {
  return (
    <div className="bg-cream pb-20 pt-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <MotionSection>
          <p className="text-sm font-medium uppercase tracking-wider text-blush">
            Over mij
          </p>
          <h1 className="mt-2 font-display text-4xl text-earth md:text-5xl lg:text-6xl">
            Hallo, ik ben Marisol
          </h1>
        </MotionSection>

        <div className="mt-14 grid gap-14 lg:grid-cols-2 lg:items-start">
          <MotionSection>
            <div className="mx-auto flex justify-center lg:justify-start">
              <div className="relative h-80 w-80 sm:h-96 sm:w-96">
                <div
                  className="absolute inset-0 rounded-full border-[3px] border-blush/45 bg-gradient-to-br from-blush/20 to-taupe/20 shadow-warm"
                  aria-hidden
                />
                <div className="absolute inset-[12px] overflow-hidden rounded-full border-2 border-cream/90 bg-linen shadow-inner ring-1 ring-taupe/20">
                  <Image
                    src={ABOUT_PORTRAIT}
                    alt={`${BRAND.founder} — interieurarchitect, ${BRAND.name}`}
                    fill
                    className="object-cover object-[center_15%] scale-[1.02]"
                    sizes="(max-width: 640px) 320px, 384px"
                    priority
                  />
                </div>
              </div>
            </div>
          </MotionSection>
          <MotionSection delay={0.08}>
            <div className="space-y-5 text-lg leading-relaxed text-earth/85">
              <p>
                Mijn naam is Marisol, interieurarchitect en oprichter van
                Mary-Design. Tijdens mijn studie aan de LOI hogeschool heb ik
                mijn passie voor interieurdesign omgezet in een bloeiend
                bedrijf.
              </p>
              <p>
                Mijn doel bij elk project is om unieke en inspirerende ruimtes
                te creëren die perfect aansluiten bij de wensen en
                persoonlijkheid van mijn klanten. Ik geloof dat een goed
                ontworpen interieur niet alleen esthetisch mooi moet zijn, maar
                ook functioneel en comfortabel.
              </p>
              <p>
                Met aandacht voor detail en een creatieve aanpak streef ik
                ernaar om elke ruimte tot leven te brengen en een plek te maken
                waar mensen zich echt thuis voelen. Van interieuradvies en
                materiaalkeuze tot bouwtekeningen en begeleiding tijdens de
                realisatie: ik denk met je mee van idee tot uitvoering.
              </p>
            </div>
            <blockquote className="mt-10 rounded-card-lg border border-taupe/25 bg-linen/80 p-6 font-script text-2xl text-taupe md:text-3xl">
              &ldquo;Een goed interieur voelt niet alleen mooi, maar ook écht
              als thuis.&rdquo;
            </blockquote>
          </MotionSection>
        </div>

        <MotionSection className="mt-24">
          <h2 className="text-center font-display text-3xl text-earth md:text-4xl">
            Mijn ontwerpfilosofie
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-earth/75">
            Drie pijlers die je terugziet in elk project — groot of klein.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {values.map((v, i) => (
              <MotionSection key={v.title} delay={i * 0.06}>
                <div className="h-full rounded-card-lg border border-taupe/20 bg-linen/60 p-8 text-center">
                  <v.icon
                    className="mx-auto text-blush"
                    size={32}
                    strokeWidth={1.25}
                  />
                  <h3 className="mt-4 font-display text-xl text-earth">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-earth/75">
                    {v.text}
                  </p>
                </div>
              </MotionSection>
            ))}
          </div>
        </MotionSection>

        <MotionSection className="mt-20 text-center">
          <Link
            href="/contact"
            className="inline-block rounded-card-lg bg-blush px-8 py-3.5 font-medium text-cream shadow-warm transition hover:bg-taupe"
          >
            Laten we kennismaken
          </Link>
        </MotionSection>
      </div>
    </div>
  );
}
