"use client";

import { motion } from "framer-motion";
import {
  Box,
  LayoutGrid,
  Palette,
  Ruler,
  Sofa,
  type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  palette: Palette,
  sofa: Sofa,
  layout: LayoutGrid,
  box: Box,
  ruler: Ruler,
};

type Props = {
  title: string;
  short: string;
  icon: keyof typeof icons;
  delay?: number;
};

export function ServiceCard({ title, short, icon, delay = 0 }: Props) {
  const Icon = icons[icon] ?? Palette;

  return (
    <motion.article
      initial={{ opacity: 1, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay }}
      whileHover={{ y: -6 }}
      className="group flex h-full flex-col rounded-card-lg border border-taupe/20 bg-cream p-6 shadow-sm transition-shadow duration-300 hover:shadow-warm-lg"
    >
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-linen text-blush transition group-hover:bg-blush/15">
        <Icon size={22} strokeWidth={1.5} className="text-taupe" />
      </div>
      <h3 className="font-display text-xl text-earth">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-earth/75">{short}</p>
    </motion.article>
  );
}
