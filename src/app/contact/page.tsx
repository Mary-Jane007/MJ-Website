import type { Metadata } from "next";
import { Phone, Mail, Instagram, Facebook, MapPin } from "lucide-react";
import { MotionSection } from "@/components/MotionSection";
import { ContactForm } from "@/components/ContactForm";
import { BRAND, SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description: `Neem contact op met ${BRAND.name} — interieurarchitectuur ${BRAND.location}.`,
};

export default function ContactPage() {
  return (
    <div className="bg-linen pb-24 pt-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <MotionSection className="text-center">
          <h1 className="font-display text-4xl text-earth md:text-5xl lg:text-6xl">
            Contact
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-earth/75">
            Vertel me waar je aan denkt — een renovatie, nieuwe styling, of
            gewoon een vraag. Ik reageer persoonlijk.
          </p>
        </MotionSection>

        <div className="mt-14 grid gap-14 lg:grid-cols-2 lg:gap-16">
          <MotionSection>
            <div className="rounded-card-lg border border-taupe/25 bg-cream/80 p-8 shadow-sm">
              <h2 className="font-display text-2xl text-earth">Direct bereikbaar</h2>
              <ul className="mt-6 space-y-5 text-earth/85">
                <li className="flex gap-3">
                  <Phone className="mt-0.5 shrink-0 text-blush" size={22} />
                  <a href={SITE.phoneTel} className="hover:text-blush">
                    {SITE.phoneDisplay}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Mail className="mt-0.5 shrink-0 text-blush" size={22} />
                  <a
                    href={`mailto:${SITE.email}`}
                    className="break-all hover:text-blush"
                  >
                    {SITE.email}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Instagram className="mt-0.5 shrink-0 text-blush" size={22} />
                  <a
                    href={SITE.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blush"
                  >
                    @mary_janedesign
                  </a>
                </li>
                <li className="flex gap-3">
                  <Facebook className="mt-0.5 shrink-0 text-blush" size={22} />
                  <a
                    href={SITE.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blush"
                  >
                    {BRAND.name} op Facebook
                  </a>
                </li>
              </ul>

              <div className="mt-10 flex gap-3 rounded-card border border-blush/25 bg-linen/60 p-5">
                <MapPin className="mt-0.5 shrink-0 text-blush" size={22} />
                <div className="text-sm leading-relaxed text-earth/80">
                  <p className="font-medium text-earth">Locatie &amp; bereik</p>
                  <p className="mt-2">
                    Studio en afspraken op{" "}
                    <strong className="font-medium text-earth">Curaçao</strong>.
                    Voor projecten en samenwerking ben ik ook beschikbaar in{" "}
                    <strong className="font-medium text-earth">Suriname</strong>{" "}
                    en de bredere regio — in overleg en op afspraak.
                  </p>
                </div>
              </div>
            </div>
          </MotionSection>

          <MotionSection delay={0.08}>
            <div className="rounded-card-lg border border-taupe/25 bg-cream p-8 shadow-sm">
              <h2 className="font-display text-2xl text-earth">Stuur een bericht</h2>
              <p className="mt-2 text-sm text-earth/70">
                Vul het formulier in — ik neem zo snel mogelijk contact met je
                op.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </MotionSection>
        </div>

        <MotionSection delay={0.12} className="mt-12">
          <div className="overflow-hidden rounded-card-lg border border-taupe/25 bg-cream shadow-sm">
            <iframe
              title="Kaart van Curaçao"
              src="https://www.google.com/maps?q=Curacao&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-72 w-full"
            />
          </div>
        </MotionSection>
      </div>
    </div>
  );
}
