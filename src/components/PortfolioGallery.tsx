"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MotionSection } from "@/components/MotionSection";
import {
  PORTFOLIO_ITEMS,
  type PortfolioCategory,
} from "@/lib/constants";

const FILTERS: { key: PortfolioCategory; label: string }[] = [
  { key: "alle", label: "Alle" },
  { key: "woonkamer", label: "Woonkamer" },
  { key: "slaapkamer", label: "Slaapkamer" },
  { key: "badkamer", label: "Badkamer" },
  { key: "keuken", label: "Keuken" },
  { key: "volledig", label: "Volledig ontwerp" },
];

export function PortfolioGallery() {
  const [filter, setFilter] = useState<PortfolioCategory>("alle");

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
        {FILTERS.map((f) => (
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
        className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3"
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
              className="mb-5 break-inside-avoid"
            >
              <Link
                href={`/portfolio/${item.id}`}
                className="group relative block overflow-hidden rounded-card-lg"
              >
                <div className="relative aspect-[3/4] w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-earth/0 transition duration-300 group-hover:bg-earth/50" />
                  <div className="absolute inset-0 flex flex-col items-center justify-end p-5 opacity-0 transition duration-300 group-hover:opacity-100">
                    <p className="font-display text-xl text-cream">{item.title}</p>
                    <span className="mt-1 text-xs uppercase tracking-wider text-cream/90">
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
