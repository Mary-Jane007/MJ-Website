import { MotionSection } from "@/components/MotionSection";
import { Award, HeartHandshake, Sparkles } from "lucide-react";

const items = [
  {
    icon: HeartHandshake,
    title: "Persoonlijk",
    text: "Geen standaardpakketten — elk traject is maatwerk.",
  },
  {
    icon: Sparkles,
    title: "Warme luxe",
    text: "Materialen en kleuren die rust én karakter geven.",
  },
  {
    icon: Award,
    title: "Van idee tot styling",
    text: "Van eerste gesprek tot de laatste accessoire op z’n plek.",
  },
];

export function TrustStrip() {
  return (
    <section className="border-y border-taupe/15 bg-linen/80 px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3 md:gap-8">
        {items.map((item, i) => (
          <MotionSection key={item.title} delay={i * 0.05}>
            <div className="flex flex-col items-center text-center md:items-start md:text-left">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cream text-blush shadow-sm">
                <item.icon size={22} strokeWidth={1.35} />
              </div>
              <h3 className="mt-4 font-display text-xl text-earth">
                {item.title}
              </h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-earth/75">
                {item.text}
              </p>
            </div>
          </MotionSection>
        ))}
      </div>
    </section>
  );
}
