import Link from "next/link";
import { MotionSection } from "@/components/MotionSection";
import { MessageCircle, Palette, Home, PartyPopper } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Kennismaken",
    text: "We praten over jouw wensen, budget en planning — vrijblijvend en warm.",
    icon: MessageCircle,
  },
  {
    step: "02",
    title: "Concept & mood",
    text: "Ik vertaal jouw verhaal naar kleur, materiaal en een helder ontwerp.",
    icon: Palette,
  },
  {
    step: "03",
    title: "Realisatie",
    text: "Indeling, inkoop en styling: ik begeleid waar jij dat fijn vindt.",
    icon: Home,
  },
  {
    step: "04",
    title: "Oplevering",
    text: "Samen wandelen we door het resultaat tot elk detail klopt.",
    icon: PartyPopper,
  },
];

export function ProcessSection() {
  return (
    <section className="bg-cream px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <MotionSection className="text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-blush">
            Werkwijze
          </p>
          <h2 className="mt-2 font-display text-4xl text-earth md:text-5xl">
            Zo werken we samen
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-earth/75">
            Transparant, rustig en persoonlijk — jij hoeft niet alles te weten
            van interieur; dat mag je aan mij overlaten.
          </p>
        </MotionSection>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <MotionSection key={s.step} delay={i * 0.06}>
              <article className="relative h-full rounded-card-lg border border-taupe/20 bg-linen/50 p-6 pt-10">
                <span className="absolute left-6 top-0 -translate-y-1/2 rounded-full bg-blush px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cream">
                  {s.step}
                </span>
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-cream text-taupe">
                  <s.icon size={20} strokeWidth={1.35} />
                </div>
                <h3 className="font-display text-xl text-earth">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-earth/75">
                  {s.text}
                </p>
              </article>
            </MotionSection>
          ))}
        </div>

        <MotionSection className="mt-12 text-center">
          <Link
            href="/contact"
            className="inline-block rounded-card-lg border border-earth/20 bg-earth px-8 py-3.5 font-medium text-cream transition hover:bg-taupe"
          >
            Start met een gesprek
          </Link>
        </MotionSection>
      </div>
    </section>
  );
}
