"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&q=80"
          alt="Warm interieur met natuurlijk licht"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(59,47,47,0.04)_1px,transparent_1px),linear-gradient(rgba(59,47,47,0.04)_1px,transparent_1px)] bg-[size:48px_48px]"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-earth/55 via-earth/45 to-linen/90"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-grain-light opacity-90 mix-blend-multiply"
          aria-hidden
        />
      </div>

      <div className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center px-4 pb-24 pt-28 text-center sm:px-6">
        <motion.p
          initial={{ opacity: 1, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="mb-3 text-sm uppercase tracking-[0.25em] text-cream/90"
        >
          Curaçao
        </motion.p>
        <motion.h1
          initial={{ opacity: 1, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-5xl text-cream sm:text-6xl md:text-7xl"
        >
          Mary-Jane Design
        </motion.h1>
        <motion.p
          initial={{ opacity: 1, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-xl font-script text-2xl text-cream/95 sm:text-3xl"
        >
          Tell me your story, I&apos;ll design.
        </motion.p>
        <motion.div
          initial={{ opacity: 1, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.32 }}
          className="mt-10"
        >
          <a
            href="#contact"
            className="inline-block rounded-card-lg bg-blush px-8 py-3.5 font-medium text-cream shadow-warm transition hover:bg-cream hover:text-earth"
          >
            Gratis kennismakingsgesprek
          </a>
        </motion.div>
      </div>
    </section>
  );
}
