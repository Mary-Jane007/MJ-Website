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

const imageMoodVariants = [
  "saturate-[0.82] contrast-[0.9] brightness-[0.94]",
  "saturate-[0.76] contrast-[0.92] brightness-[0.92]",
  "saturate-[0.8] contrast-[0.88] brightness-[0.95]",
] as const;

export function PortfolioGallery() {
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
    <>
      <MotionSection className="flex flex-wrap justify-center gap-2">
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
          {items.map((item, index) => (
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
                className="group relative flex w-full flex-col"
              >
                <div
                  className={`${portfolioThumbWrapperClass(item.thumbFrame)} flex-1`}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className={`${portfolioThumbImageClass(item.thumbFrame)} ${imageMoodVariants[index % imageMoodVariants.length]} scale-[1.03] opacity-75 transition duration-700 group-hover:scale-[1.08] group-hover:opacity-100 group-hover:saturate-100 group-hover:contrast-100 group-hover:brightness-100`}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-cream/45 via-cream/25 to-earth/45 transition duration-700 group-hover:from-cream/15 group-hover:via-transparent group-hover:to-earth/60" />
                  <div className="absolute inset-0 border border-cream/55 bg-[radial-gradient(circle_at_25%_15%,rgba(255,255,255,0.32),transparent_40%)] opacity-90 transition duration-700 group-hover:border-cream/25 group-hover:opacity-55" />
                  <div className="absolute inset-0 flex flex-col justify-end p-5 opacity-100 transition duration-500 group-hover:opacity-100">
                    <p className="inline-flex w-fit rounded-full bg-earth/55 px-4 py-1.5 font-display text-lg text-cream shadow-sm backdrop-blur-[2px]">
                      {item.title}
                    </p>
                    <span className="mt-2 text-xs uppercase tracking-[0.16em] text-cream/95">
                      Bekijk project
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
