"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MotionSection } from "@/components/MotionSection";
import {
  PORTFOLIO_ITEMS,
  PORTFOLIO_CATEGORY_LABELS,
  type PortfolioCategory,
} from "@/lib/constants";
import {
  portfolioThumbImageClass,
  portfolioThumbWrapperClass,
} from "@/lib/portfolio-thumb";

export function PortfolioPreview() {
  const [filter, setFilter] = useState<PortfolioCategory>("alle");

  const filterOptions = useMemo(() => {
    const keys = Array.from(
      new Set(PORTFOLIO_ITEMS.map((p) => p.category)),
    ).sort();
    return [
      { key: "alle" as const, label: "Alle" },
      ...keys.map((key) => ({
        key,
        label: PORTFOLIO_CATEGORY_LABELS[key],
      })),
    ];
  }, []);

  useEffect(() => {
    if (filter === "alle") return;
    const ok = PORTFOLIO_ITEMS.some((p) => p.category === filter);
    if (!ok) setFilter("alle");
  }, [filter]);

  const items = useMemo(
    () =>
      filter === "alle"
        ? PORTFOLIO_ITEMS
        : PORTFOLIO_ITEMS.filter((p) => p.category === filter),
    [filter],
  );

  return (
    <section id="portfolio" className="bg-cream px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <MotionSection>
          <h2 className="text-center font-display text-4xl text-earth md:text-5xl">
            Portfolio
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-earth/70">
            Geselecteerde projecten — hover voor de titel. Beelden in een rustig
            16:10-kader (tenzij anders passend bij de opname).
          </p>
        </MotionSection>

        <MotionSection className="mt-10 flex flex-wrap justify-center gap-2">
          {filterOptions.map((f) => (
            <button
              key={f.key}
              type="button"
              onClick={() => setFilter(f.key)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                filter === f.key
                  ? "bg-earth text-cream"
                  : "bg-linen text-earth/80 hover:bg-blush/25"
              }`}
            >
              {f.label}
            </button>
          ))}
        </MotionSection>

        <motion.div
          layout
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {items.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 1, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 1, scale: 0.98 }}
                transition={{ duration: 0.35 }}
                className="flex"
              >
                <Link
                  href={`/portfolio/${item.id}`}
                  className="group relative flex w-full flex-col overflow-hidden"
                >
                  <div
                    className={`${portfolioThumbWrapperClass(item.thumbFrame)} flex-1`}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className={`${portfolioThumbImageClass(item.thumbFrame)} transition duration-500 group-hover:scale-[1.02]`}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-earth/0 transition duration-300 group-hover:bg-earth/45" />
                    <div className="absolute inset-0 flex items-center justify-center p-4 opacity-0 transition duration-300 group-hover:opacity-100">
                      <p className="text-center font-display text-xl text-cream sm:text-2xl">
                        {item.title}
                      </p>
                      <span className="sr-only">Bekijk project</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <MotionSection className="mt-10 text-center">
          <Link
            href="/portfolio"
            className="inline-block text-sm font-medium text-blush underline-offset-4 hover:underline"
          >
            Bekijk volledig portfolio →
          </Link>
        </MotionSection>
      </div>
    </section>
  );
}
