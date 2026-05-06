import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MotionSection } from "@/components/MotionSection";
import { BRAND, PORTFOLIO_ITEMS } from "@/lib/constants";
import {
  portfolioThumbImageClass,
  portfolioThumbWrapperClass,
} from "@/lib/portfolio-thumb";

type Props = { params: { id: string } };

function categoryLabel(
  category: (typeof PORTFOLIO_ITEMS)[number]["category"],
) {
  switch (category) {
    case "woonkamer":
      return "Woonkamer";
    case "slaapkamer":
      return "Slaapkamer";
    case "badkamer":
      return "Badkamer";
    case "keuken":
      return "Keuken";
    case "volledig":
      return "Volledig ontwerp";
    default:
      return "Project";
  }
}

function ctaLabel(category: (typeof PORTFOLIO_ITEMS)[number]["category"]) {
  if (category === "badkamer") {
    return "Ook je badkamer of woning laten ontwerpen?";
  }
  if (category === "keuken") {
    return "Ook jouw keuken of woning laten ontwerpen?";
  }
  return "Interieurplannen bespreken?";
}

export function generateStaticParams() {
  return PORTFOLIO_ITEMS.map((p) => ({ id: p.id }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = PORTFOLIO_ITEMS.find((p) => p.id === params.id);
  if (!project) return { title: "Project" };
  const description =
    project.summary?.slice(0, 155) ??
    `${project.title} — portfolio ${BRAND.name}.`;
  return {
    title: project.title,
    description,
  };
}

export default function PortfolioDetailPage({ params }: Props) {
  const { id } = params;
  const project = PORTFOLIO_ITEMS.find((p) => p.id === id);
  if (!project) notFound();

  const related = PORTFOLIO_ITEMS.filter((p) => p.id !== id).slice(0, 3);

  const isBeforeAfter =
    project.beforeAfter === true &&
    project.extraImages &&
    project.extraImages.length >= 1;
  const isCompactMoodboard = project.id === "14";

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
            {categoryLabel(project.category)}
          </p>
          <h1 className="mt-2 font-display text-4xl text-earth md:text-5xl">
            {project.title}
          </h1>
          {project.summary ? (
            <p className="mt-4 leading-relaxed text-earth/80">{project.summary}</p>
          ) : (
            <p className="mt-4 text-earth/75">
              Een greep uit mijn werk — meer beelden en het volledige verhaal
              volgen zodra dit project online staat.
            </p>
          )}
        </MotionSection>

        {isBeforeAfter ? (
          <MotionSection delay={0.08} className="mt-10">
            <h2 className="font-display text-2xl text-earth">Vóór &amp; na</h2>
            <p className="mt-2 text-sm text-earth/65">
              Links tijdens de verbouwing (o.a. gasfornuis en basisinstallatie);
              rechts het warme taupe eindbeeld met koffiehoek en LED-verlichting.
            </p>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <figure className="space-y-2">
                <figcaption className="text-xs font-semibold uppercase tracking-wider text-taupe">
                  Vóór
                </figcaption>
                <div className="relative aspect-[16/10] overflow-hidden rounded-card-lg border border-taupe/15 bg-linen">
                  <Image
                    src={project.extraImages![0]}
                    alt={`${project.title} — situatie vóór renovatie`}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 440px"
                    priority
                  />
                </div>
              </figure>
              <figure className="space-y-2">
                <figcaption className="text-xs font-semibold uppercase tracking-wider text-blush">
                  Na
                </figcaption>
                <div className="relative aspect-[16/10] overflow-hidden rounded-card-lg border border-taupe/15 bg-linen shadow-warm">
                  <Image
                    src={project.image}
                    alt={`${project.title} — eindresultaat`}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 440px"
                  />
                </div>
              </figure>
            </div>
          </MotionSection>
        ) : (
          <>
            <MotionSection delay={0.08} className="mt-10">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-card-lg border border-taupe/10 bg-linen shadow-sm">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 896px) 100vw, 896px"
                  priority
                />
              </div>
            </MotionSection>

            {project.moodboardImage ? (
              <MotionSection delay={0.085} className="mt-10">
                <h2 className="font-display text-2xl text-earth">Moodboard</h2>
                <p className="mt-2 text-sm text-earth/65">
                  Kleur- en materiaalinspiratie voor dit concept, met focus op
                  sfeer, textuur en een rustig geheel.
                </p>
                <div
                  className={`mt-6 overflow-hidden rounded-card-lg border border-taupe/10 shadow-sm ${
                    isCompactMoodboard ? "mx-auto max-w-2xl bg-linen" : "bg-[#2c2c2c]"
                  }`}
                >
                  <Image
                    src={project.moodboardImage}
                    alt={`${project.title} — moodboard`}
                    width={1024}
                    height={827}
                    className="h-auto w-full object-contain"
                    sizes="(max-width: 896px) 100vw, 896px"
                  />
                </div>
              </MotionSection>
            ) : null}

            {project.extraImages && project.extraImages.length > 0 && (
              <MotionSection delay={0.09} className="mt-6">
                <h2 className="sr-only">Meer beelden</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {project.extraImages.map((src, i) => (
                    <div
                      key={src}
                      className="relative aspect-[16/10] overflow-hidden rounded-card-lg border border-taupe/10 bg-linen"
                    >
                      <Image
                        src={src}
                        alt={`${project.title} — beeld ${i + 2}`}
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 896px) 100vw, 440px"
                      />
                    </div>
                  ))}
                </div>
              </MotionSection>
            )}
          </>
        )}

        {project.highlights && project.highlights.length > 0 && (
          <MotionSection delay={0.1} className="mt-12">
            <h2 className="font-display text-2xl text-earth">Ontwerp in het kort</h2>
            <ul className="mt-4 space-y-3 text-earth/80">
              {project.highlights.map((line, i) => (
                <li key={i} className="flex gap-3">
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blush"
                    aria-hidden
                  />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </MotionSection>
        )}

        <MotionSection delay={0.12} className="mt-12">
          <h2 className="font-display text-2xl text-earth">Meer werk</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {related.map((p) => (
              <Link
                key={p.id}
                href={`/portfolio/${p.id}`}
                className={`group block ${portfolioThumbWrapperClass(p.thumbFrame)}`}
              >
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className={`${portfolioThumbImageClass(p.thumbFrame)} transition group-hover:scale-[1.02]`}
                  sizes="(max-width: 640px) 100vw, 200px"
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
            {ctaLabel(project.category)}
          </Link>
        </MotionSection>
      </div>
    </div>
  );
}
