import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MotionSection } from "@/components/MotionSection";
import { Heart, Sparkles, Sun } from "lucide-react";

export const metadata: Metadata = {
  title: "Over mij",
  description:
    "Leer Mary-Jane kennen — interieurontwerper op Curaçao met een warme, persoonlijke aanpak.",
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
            Hallo, ik ben Mary-Jane
          </h1>
        </MotionSection>

        <div className="mt-14 grid gap-14 lg:grid-cols-2 lg:items-start">
          <MotionSection>
            <div className="relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-card-lg border border-blush/30 bg-linen shadow-warm lg:mx-0">
              <Image
                src="/images/mary-jane-portrait.png"
                alt="Mary-Jane — interieurontwerper"
                fill
                className="object-cover object-[center_15%]"
                sizes="(max-width: 1024px) 100vw, 448px"
                priority
              />
            </div>
          </MotionSection>
          <MotionSection delay={0.08}>
            <div className="space-y-5 text-lg leading-relaxed text-earth/85">
              <p>
                Mary-Jane Design is ontstaan uit liefde voor mooie ruimtes én
                voor de verhalen die mensen met zich meedragen. Opgegroeid met
                oog voor detail en een zwak voor warme tinten, vond ik mijn
                plek in het creëren van interieurs die zowel elegant als
                uitnodigend zijn.
              </p>
              <p>
                Vanuit Curaçao werk ik persoonlijk samen met klanten die net
                zoals jij zoeken naar een huis dat voelt als een diepe zucht —
                niet perfect op de foto, maar perfect voor jullie leven.
              </p>
              <p>
                Of het nu gaat om één kamer of een volledige woning: mijn
                proces is traag genoeg om echt te voelen, en strak genoeg om
                stress weg te nemen. Samen zoeken we naar balans tussen
                functionaliteit, licht en die zachte luxe waar je elke dag
                weer blij van wordt.
              </p>
            </div>
            <blockquote className="mt-10 rounded-card-lg border border-taupe/25 bg-linen/80 p-6 font-script text-2xl text-taupe md:text-3xl">
              &ldquo;Tell me your story, I&apos;ll design.&rdquo;
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
