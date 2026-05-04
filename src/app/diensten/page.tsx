import type { Metadata } from "next";
import Link from "next/link";
import { MotionSection } from "@/components/MotionSection";
import { SERVICE_DETAILS } from "@/lib/constants";
import {
  Box,
  LayoutGrid,
  Palette,
  Ruler,
  Sofa,
  type LucideIcon,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Diensten",
  description:
    "Interieuradvies, volledig ontwerp, 3D-visualisatie en meer — Mary-Jane Design Curaçao.",
};

const icons: Record<string, LucideIcon> = {
  palette: Palette,
  sofa: Sofa,
  layout: LayoutGrid,
  box: Box,
  ruler: Ruler,
};

export default function DienstenPage() {
  return (
    <div className="bg-cream pb-20 pt-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <MotionSection className="text-center">
          <h1 className="font-display text-4xl text-earth md:text-5xl lg:text-6xl">
            Diensten
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-earth/75">
            Elk traject is maatwerk. Hieronder lees je wat we samen kunnen
            doen — van eerste kleurkeuze tot volledige projectbegeleiding.
          </p>
        </MotionSection>

        <div className="mt-16 space-y-12">
          {SERVICE_DETAILS.map((service, i) => {
            const Icon = icons[service.icon] ?? Palette;
            return (
              <MotionSection key={service.id} delay={i * 0.04}>
                <article className="grid gap-8 rounded-card-lg border border-taupe/20 bg-linen/50 p-8 md:grid-cols-[auto_1fr] md:items-start md:gap-10 md:p-10">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-cream text-blush">
                    <Icon size={28} strokeWidth={1.35} />
                  </div>
                  <div>
                    <h2 className="font-display text-2xl text-earth md:text-3xl">
                      {service.title}
                    </h2>
                    <p className="mt-4 leading-relaxed text-earth/80">
                      {service.description}
                    </p>
                  </div>
                </article>
              </MotionSection>
            );
          })}
        </div>

        <MotionSection className="mt-14 rounded-card-lg border border-blush/30 bg-linen p-8 text-center md:p-10">
          <h2 className="font-display text-2xl text-earth">Investering</h2>
          <p className="mx-auto mt-3 max-w-xl text-earth/75">
            Elk project is anders. Ik werk met heldere offertes op basis van
            jouw wensen en de omvang van het traject. Stuur gerust een bericht
            voor een vrijblijvende indicatie.
          </p>
        </MotionSection>

        <MotionSection className="mt-14 text-center">
          <Link
            href="/contact"
            className="inline-block rounded-card-lg bg-earth px-8 py-3.5 font-medium text-cream transition hover:bg-taupe"
          >
            Vraag een voorstel aan
          </Link>
        </MotionSection>
      </div>
    </div>
  );
}
