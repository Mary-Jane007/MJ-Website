import { Hero } from "@/components/home/Hero";
import { TrustStrip } from "@/components/home/TrustStrip";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { AboutIntro } from "@/components/home/AboutIntro";
import { ProcessSection } from "@/components/home/ProcessSection";
import { PortfolioPreview } from "@/components/home/PortfolioPreview";
import { CTABanner } from "@/components/home/CTABanner";
import { HomeContact } from "@/components/home/HomeContact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ServicesGrid />
      <AboutIntro />
      <ProcessSection />
      <PortfolioPreview />
      <CTABanner />
      <HomeContact />
    </>
  );
}
