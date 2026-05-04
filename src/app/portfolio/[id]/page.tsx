import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MotionSection } from "@/components/MotionSection";
import { PORTFOLIO_ITEMS } from "@/lib/constants";

type Props = { params: { id: string } };

export function generateStaticParams() {
  return PORTFOLIO_ITEMS.map((p) => ({ id: p.id }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = PORTFOLIO_ITEMS.find((p) => p.id === params.id);
  if (!project) return { title: "Project" };
  return {
    title: project.title,
    description: `${project.title} — portfolio Mary-Jane Design.`,
  };
}

export default function PortfolioDetailPage({ params }: Props) {
  const { id } = params;
  const project = PORTFOLIO_ITEMS.find((p) => p.id === id);
  if (!project) notFound();

  const related = PORTFOLIO_ITEMS.filter((p) => p.id !== id).slice(0, 3);

  return (
    <div className="bg-cream pb-20 pt-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <MotionSection>
          <Link
            href="/portfolio"
            className="text-sm font-medium text-blush hover:underline"
          >
            ← Terug naar portfolio
          </Link>
          <p className="mt-6 text-sm uppercase tracking-wider text-taupe">
            {project.category === "woonkamer"
              ? "Woonkamer"
              : project.category === "slaapkamer"
                ? "Slaapkamer"
                : "Volledig ontwerp"}
          </p>
          <h1 className="mt-2 font-display text-4xl text-earth md:text-5xl">
            {project.title}
          </h1>
          <p className="mt-4 text-earth/75">
            Placeholder projectpagina — vervang met echte fotografie en
            verhaal wanneer je content klaar hebt.
          </p>
        </MotionSection>

        <MotionSection delay={0.08} className="mt-10">
          <div className="relative aspect-[4/3] overflow-hidden rounded-card-lg">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 896px) 100vw, 896px"
              priority
            />
          </div>
        </MotionSection>

        <MotionSection delay={0.12} className="mt-12">
          <h2 className="font-display text-2xl text-earth">Meer werk</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {related.map((p) => (
              <Link
                key={p.id}
                href={`/portfolio/${p.id}`}
                className="group relative aspect-square overflow-hidden rounded-card"
              >
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover transition group-hover:scale-105"
                  sizes="200px"
                />
                <div className="absolute inset-0 bg-earth/0 transition group-hover:bg-earth/35" />
                <p className="absolute bottom-2 left-2 right-2 font-display text-sm text-cream opacity-0 transition group-hover:opacity-100">
                  {p.title}
                </p>
              </Link>
            ))}
          </div>
        </MotionSection>

        <MotionSection className="mt-12 text-center">
          <Link
            href="/contact"
            className="inline-block rounded-card-lg bg-blush px-8 py-3.5 font-medium text-cream transition hover:bg-taupe"
          >
            Vergelijkbare stijl bespreken?
          </Link>
        </MotionSection>
      </div>
    </div>
  );
}
