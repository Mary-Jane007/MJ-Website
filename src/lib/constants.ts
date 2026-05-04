export type PortfolioCategory = "alle" | "woonkamer" | "slaapkamer" | "volledig";

const facebookFromEnv = process.env.NEXT_PUBLIC_FACEBOOK_URL?.trim();

export const SITE = {
  instagramUrl: "https://instagram.com/mary_janedesign",
  /** Set `NEXT_PUBLIC_FACEBOOK_URL` in Vercel to your real page URL */
  facebookUrl:
    facebookFromEnv && facebookFromEnv.length > 0
      ? facebookFromEnv
      : "https://www.facebook.com/",
  email: "maryjanedesign.su@gmail.com",
  phoneDisplay: "+597-8927286",
  phoneTel: "tel:+5978927286",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/diensten", label: "Diensten" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/over-mij", label: "Over Mij" },
  { href: "/contact", label: "Contact" },
] as const;

export const SERVICES = [
  {
    id: "materiaal",
    title: "Materiaal-, kleur- en/of meubeladvies",
    short:
      "Samen kiezen we materialen, tinten en meubels die bij jouw verhaal passen.",
    icon: "palette" as const,
  },
  {
    id: "interieuradvies",
    title: "Interieuradvies",
    short:
      "Gericht advies voor een ruimte die rust, balans en warmte uitstraalt.",
    icon: "sofa" as const,
  },
  {
    id: "volledig",
    title: "Volledig interieurontwerp",
    short:
      "Van concept tot styling: een samenhangend ontwerp voor je hele woning.",
    icon: "layout" as const,
  },
  {
    id: "3d",
    title: "3D render van uw interieur",
    short:
      "Zie je toekomstige ruimte tot leven komen voordat er een hamer slaat.",
    icon: "box" as const,
  },
  {
    id: "indelingsplan",
    title: "Indelingsplan & projectbegeleiding",
    short:
      "Slimme indeling plus begeleiding tijdens de realisatie van je droominterieur.",
    icon: "ruler" as const,
  },
] as const;

export const SERVICE_DETAILS = SERVICES.map((s) => ({
  ...s,
  description:
    s.id === "materiaal"
      ? "Kleuren, texturen en meubelkeuzes bepalen de sfeer van je huis. Tijdens een persoonlijke sessie breng ik jouw voorkeuren in kaart en stel ik een moodboard en concrete aanbevelingen samen — van vloer tot gordijnen."
      : s.id === "interieuradvies"
        ? "Je wilt verandering, maar weet niet waar te beginnen? Met interieuradvies krijg je een helder plan: indeling, licht, stijl en praktische tips die je direct kunt toepassen of laat uitvoeren."
        : s.id === "volledig"
          ? "Voor wie één lijn door het hele huis wil: van eerste schets tot laatste accessoire. Ik ontwerp elk detail in harmonie met jouw levensstijl, zodat elk vertrek voelt als thuiskomen."
          : s.id === "3d"
            ? "Visualiseer je ontwerp met realistische 3D-beelden. Zo maak je betere keuzes, stem je af met aannemers en ervaar je rust voordat je investeert in materialen en meubels."
            : "Een goed indelingsplan bespaart frustratie en ruimte. Ik teken opties, adviseer over stromen en licht, en kan optioneel meelopen tijdens de bouw- of renovatiefase.",
}));

export const PORTFOLIO_ITEMS: {
  id: string;
  title: string;
  category: Exclude<PortfolioCategory, "alle">;
  image: string;
}[] = [
  {
    id: "1",
    title: "Warme woonkamer",
    category: "woonkamer",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
  },
  {
    id: "2",
    title: "Luxe slaapkamer",
    category: "slaapkamer",
    image:
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80",
  },
  {
    id: "3",
    title: "Volledig appartement",
    category: "volledig",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
  },
  {
    id: "4",
    title: "Rustige woonruimte",
    category: "woonkamer",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
  },
  {
    id: "5",
    title: "Slaapkamer suite",
    category: "slaapkamer",
    image:
      "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=800&q=80",
  },
  {
    id: "6",
    title: "Complete woning",
    category: "volledig",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
  },
  {
    id: "7",
    title: "Eet- en leefruimte",
    category: "woonkamer",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  },
  {
    id: "8",
    title: "Master bedroom",
    category: "slaapkamer",
    image:
      "https://images.unsplash.com/photo-1505693416389-b9b2bbd783d?w=800&q=80",
  },
  {
    id: "9",
    title: "Design tot in detail",
    category: "volledig",
    image:
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=800&q=80",
  },
];
