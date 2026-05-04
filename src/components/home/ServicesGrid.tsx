import Link from "next/link";
import { MotionSection } from "@/components/MotionSection";
import { ServiceCard } from "@/components/ServiceCard";
import { SERVICES } from "@/lib/constants";

export function ServicesGrid() {
  return (
    <section id="diensten" className="bg-cream px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <MotionSection>
          <h2 className="text-center font-display text-4xl text-earth md:text-5xl">
            Services
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-earth/70">
            Van eerste idee tot afgerond interieur — altijd persoonlijk en met
            aandacht voor jouw verhaal.
          </p>
        </MotionSection>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {SERVICES.slice(0, 4).map((s, i) => (
            <ServiceCard
              key={s.id}
              title={s.title}
              short={s.short}
              icon={s.icon}
              delay={i * 0.06}
            />
          ))}
        </div>
        <MotionSection className="mt-6 flex justify-center">
          <div className="w-full max-w-md sm:max-w-none lg:max-w-[calc(50%-12px)]">
            <ServiceCard
              title={SERVICES[4].title}
              short={SERVICES[4].short}
              icon={SERVICES[4].icon}
              delay={0.2}
            />
          </div>
        </MotionSection>

        <MotionSection className="mt-10 text-center">
          <Link
            href="/diensten"
            className="inline-block text-sm font-medium text-blush underline-offset-4 transition hover:text-taupe hover:underline"
          >
            Bekijk alle diensten in detail →
          </Link>
        </MotionSection>
      </div>
    </section>
  );
}
