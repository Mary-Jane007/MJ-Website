import Link from "next/link";
import { Instagram, Facebook, Mail } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-taupe/20 bg-linen">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-blush/50 bg-cream font-display text-lg font-semibold text-earth">
                MJ
              </span>
              <span className="font-display text-2xl text-earth">
                Mary-Jane Design
              </span>
            </div>
            <p className="mt-3 max-w-sm font-script text-xl text-taupe">
              Tell me your story, I&apos;ll design.
            </p>
          </div>

          <div>
            <p className="text-sm font-medium uppercase tracking-wider text-earth/50">
              Navigatie
            </p>
            <ul className="mt-3 flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-earth/80 transition hover:text-blush"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium uppercase tracking-wider text-earth/50">
              Volg mij
            </p>
            <div className="mt-3 flex gap-3">
              <a
                href={SITE.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-taupe/30 bg-cream text-earth transition hover:border-blush hover:text-blush"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href={SITE.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-taupe/30 bg-cream text-earth transition hover:border-blush hover:text-blush"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-taupe/30 bg-cream text-earth transition hover:border-blush hover:text-blush"
                aria-label="E-mail"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        <p className="mt-12 text-center text-sm text-earth/50">
          © {new Date().getFullYear()} Mary-Jane Design. Alle rechten
          voorbehouden.
        </p>
      </div>
    </footer>
  );
}
