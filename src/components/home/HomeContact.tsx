import { Phone, Mail, Instagram, Facebook } from "lucide-react";
import { MotionSection } from "@/components/MotionSection";
import { ContactForm } from "@/components/ContactForm";
import { BRAND, SITE } from "@/lib/constants";

export function HomeContact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-linen px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-3xl text-center">
        <MotionSection>
          <h2 className="font-display text-4xl text-earth md:text-5xl">
            Let&apos;s talk
          </h2>
          <p className="mt-3 text-earth/70">
            Liever direct contact? Je vindt me hier — of laat een bericht
            achter.
          </p>
        </MotionSection>

        <MotionSection delay={0.06} className="mt-10">
          <ul className="mx-auto flex max-w-md flex-col gap-4 text-left text-earth/85">
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 shrink-0 text-blush" size={20} />
              <a href={SITE.phoneTel} className="hover:text-blush">
                {SITE.phoneDisplay}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 shrink-0 text-blush" size={20} />
              <a
                href={`mailto:${SITE.email}`}
                className="break-all hover:text-blush"
              >
                {SITE.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Instagram className="mt-0.5 shrink-0 text-blush" size={20} />
              <a
                href={SITE.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blush"
              >
                Instagram: mary_janedesign
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Facebook className="mt-0.5 shrink-0 text-blush" size={20} />
              <a
                href={SITE.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blush"
              >
                Facebook: {BRAND.name}
              </a>
            </li>
          </ul>
        </MotionSection>

        <MotionSection delay={0.12} className="mt-14">
          <ContactForm compact />
        </MotionSection>
      </div>
    </section>
  );
}
