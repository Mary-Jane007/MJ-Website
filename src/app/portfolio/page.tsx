import type { Metadata } from "next";
import { MotionSection } from "@/components/MotionSection";
import { PortfolioGallery } from "@/components/PortfolioGallery";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Portfolio",
  description: `Bekijk geselecteerde projecten van ${BRAND.name} — interieur, materiaal en bouw.`,
};

export default function PortfolioPage() {
  return (
    <div className="bg-cream pb-24 pt-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <MotionSection className="text-center">
          <h1 className="font-display text-4xl text-earth md:text-5xl lg:text-6xl">
            Portfolio
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-earth/75">
            Een selectie van sferen en stijlen — filter op ruimte of bekijk
            alles.
          </p>
        </MotionSection>

        <div className="mt-12">
          <PortfolioGallery />
        </div>
      </div>
    </div>
  );
}
