"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { BRAND, NAV_LINKS } from "@/lib/constants";

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const onHero = isHome && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const titleClass = onHero
    ? "hidden font-display text-xl tracking-tight text-cream sm:block"
    : "hidden font-display text-xl tracking-tight text-earth sm:block";

  const logoRing = onHero
    ? "border-cream/40 bg-earth/20 text-cream group-hover:border-cream/60"
    : "border-blush/60 bg-linen/80 text-earth group-hover:border-blush";

  const headerBg =
    scrolled || !isHome
      ? "border-b border-taupe/20 bg-cream/80 shadow-sm backdrop-blur-md"
      : "bg-transparent";

  const menuBtnClass = onHero
    ? "inline-flex items-center justify-center rounded-card border border-cream/35 p-2 text-cream md:hidden"
    : "inline-flex items-center justify-center rounded-card border border-taupe/30 p-2 text-earth md:hidden";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${headerBg}`}
    >
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-2">
          <span
            className={`flex h-10 w-10 items-center justify-center rounded-full border font-display text-lg font-semibold transition ${logoRing}`}
          >
            MJ
          </span>
          <span className={titleClass}>{BRAND.name}</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            const base = onHero
              ? "text-sm font-medium text-cream/90 transition hover:text-cream"
              : "text-sm font-medium text-earth/80 transition hover:text-blush";
            const activeClass = onHero
              ? "text-cream underline decoration-cream/70 underline-offset-8"
              : "text-earth underline decoration-blush/70 underline-offset-8";

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`${base} ${active ? activeClass : ""}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/contact"
            className={`rounded-card-lg px-4 py-2.5 text-sm font-medium shadow-warm transition hover:shadow-warm-lg ${
              onHero
                ? "bg-cream text-earth hover:bg-linen"
                : "bg-blush text-cream hover:bg-taupe"
            }`}
          >
            Plan een gesprek
          </Link>
        </div>

        <button
          type="button"
          className={menuBtnClass}
          aria-label={open ? "Menu sluiten" : "Menu openen"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-b border-taupe/20 bg-cream/95 px-4 py-4 backdrop-blur-md md:hidden"
        >
          <div className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`py-1 ${
                  pathname === link.href
                    ? "font-medium text-blush"
                    : "text-earth"
                }`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 rounded-card-lg bg-blush px-4 py-3 text-center font-medium text-cream"
              onClick={() => setOpen(false)}
            >
              Plan een gesprek
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
}
