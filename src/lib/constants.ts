export type PortfolioCategory =
  | "alle"
  | "woonkamer"
  | "slaapkamer"
  | "volledig"
  | "badkamer"
  | "keuken";

/** Labels voor portfolio-filterknoppen (per categorie). */
export const PORTFOLIO_CATEGORY_LABELS: Record<
  Exclude<PortfolioCategory, "alle">,
  string
> = {
  woonkamer: "Woonkamer",
  slaapkamer: "Slaapkamer",
  badkamer: "Badkamer",
  keuken: "Keuken",
  volledig: "Volledig ontwerp",
};

export type PortfolioProject = {
  id: string;
  title: string;
  category: Exclude<PortfolioCategory, "alle">;
  image: string;
  /** Extra beelden op de projectpagina (onder het hoofdbeeld) */
  extraImages?: string[];
  /** Optioneel moodboard (collage) — eigen sectie met volledige weergave */
  moodboardImage?: string;
  /**
   * `true`: eerste extra afbeelding = vóór, `image` = na (vóór/na-sectie op detailpagina).
   */
  beforeAfter?: boolean;
  /** Korte intro op de projectpagina */
  summary?: string;
  /** Bulletpunten met ontwerp-highlights */
  highlights?: string[];
  /**
   * Thumbnail op home/portfolio-overzicht:
   * `landscape` = 16:10 (standaard, ruimtelijke / brede foto’s),
   * `portrait` = 3:4 voor duidelijk verticale beelden,
   * `contain` = 16:10 kader, volledige foto zichtbaar (letterbox).
   */
  thumbFrame?: "landscape" | "portrait" | "contain";
};

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

export const PORTFOLIO_ITEMS: PortfolioProject[] = [
  {
    id: "10",
    title: "Modern Zen badkamer",
    category: "badkamer",
    thumbFrame: "portrait",
    image: "/images/portfolio/modern-zen-badkamer.png",
    moodboardImage: "/images/portfolio/modern-zen-matcha-moodboard.png",
    summary:
      "Een compacte badkamer omgetoverd tot een rustig, luxe toevluchtsoord: diep matzwart als canvas, zacht saliegroen als accent en warm hout voor balans. Het resultaat voelt strak én ontspannen — alsof je elke dag een klein spa-moment cadeau geeft.",
    highlights: [
      "Matzwarte wanden met witte sanitairlijn voor hoog contrast en tijdloze elegantie",
      "Zwevend wastafelmeubel in donker hout met stevig werkblad en ronde spiegel met subtiele verlichting",
      "Inloopdouche met regendouche, handdouche en textuur op de douchevloer voor tactiele diepte",
      "Gelaagde lichtplanning: plafondlamp, gerichte spots en sfeer rond de spiegel",
      "Saliegroene zwevende planken en zen-kunstwerk voor kleur en persoonlijkheid zonder drukte",
    ],
  },
  {
    id: "11",
    title: "Terrazzo & messing — luxe spa-badkamer",
    category: "badkamer",
    thumbFrame: "landscape",
    image: "/images/portfolio/terrazzo-goud-spa-badkamer.png",
    extraImages: ["/images/portfolio/eik-messing-wastafel-badkamer.png"],
    summary:
      "Een masterbadkamer ontworpen als rustige wellness: warm neutraal palet, royale dubbele wastafel in licht eikenhout en messing details, plus een inloopdouche met een sculpturale terrazzo-accentwand. 3D-visualisatie en realisatie vielen samen in één helder concept — luxe zonder koelte.",
    highlights: [
      "Custom terrazzo-look in de douche als eyecatcher, gecombineerd met goudkleurig kader en regendouche",
      "Dubbele waskommen op houten werkblad, mozaïektegel als rugwand en ovale spiegels in messing lijst",
      "Zwevende eikenhouten wastafel met open onderblad voor handdoeken en spa-sfeer",
      "Verticaal gestreepte taupe wand achter de wastafel voor tactiele diepte en warm licht",
      "Gelaagde verlichting: lineaire spiegellamp, pendels en sfeervolle pampas als zachte styling",
    ],
  },
  {
    id: "12",
    title: "Compacte keuken — renovatie vóór & na",
    category: "keuken",
    thumbFrame: "landscape",
    image: "/images/portfolio/keuken-voor.png",
    extraImages: ["/images/portfolio/keuken-na.png"],
    beforeAfter: true,
    summary:
      "Wat je links ziet is de keuken midden in de verbouwing: ruimte voor techniek, basisapparatuur en een tijdelijke werkplek. Rechts staat het eindresultaat: een strakke, moderne keuken in warm taupe met greeploze fronten, donker werkblad, houten koffiehoek en heldere LED-taakverlichting — rustig, functioneel en klaar om dagelijks te leven.",
    highlights: [
      "Greeploze taupe fronten met donker werkblad en geïntegreerde greepprofielen voor een rustige lijn",
      "Houten koffienis met sfeerverlichting, open legplank en plek voor espresso — dagelijks genot in één vak",
      "Inbouwapparatuur (o.a. koelkast en combimagnetron) netjes verzonken in de kolom",
      "Onderbouw-LED boven het werkblad voor helder, warm licht bij koken en afwassen",
      "Verlengd werkblad met barkruk: ontbijtplek zonder extra vierkante meters",
    ],
  },
  {
    id: "13",
    title: "Low budget wachtruimte in salonsfeer",
    category: "woonkamer",
    thumbFrame: "landscape",
    image: "/images/portfolio/wachtruimte-salon-eindresultaat.png",
    summary:
      "Een donkere, kale wachtruimte van een salon omgevormd tot een warme, uitnodigende zithoek met minimale middelen: lichte bouclé-zitmeubels, zwart staal, veel groen en een rond juten vloerkleed als eyecatcher.",
    highlights: [
      "Meubelbord met betaalbare items: bouclé-bankje, zwarte salontafeltjes, lattenpaneel, grote kamerplant en rond juten vloerkleed",
      "Diep donkerblauwe / bijna zwarte accentmuur voor een chique basis, gecombineerd met lichte meubels voor contrast",
      "Ronde jute vloermat als zacht middenpunt dat warmte en textuur toevoegt bovenop de bestaande, donkere vloertegels",
      "Strakke zwarte tafeltjes in staal die luchtig ogen maar voldoende plek geven voor accessoires en koffiekopjes",
      "Grote planten en gouden accenten (zoals de staande lamp) zorgen voor hotel-achtige salonsfeer met een klein budget",
    ],
  },
  {
    id: "14",
    title: "RB&B slaapkamer inrichting",
    category: "slaapkamer",
    thumbFrame: "landscape",
    image: "/images/portfolio/rbb-slaapkamer-inrichting.png",
    moodboardImage: "/images/portfolio/rbb-slaapkamer-moodboard.png",
    summary:
      "Een rustige RB&B-slaapkamer ingericht in warme zand- en crèmetinten, met twee comfortabele bedden, zachte texturen en subtiele styling die meteen een ontspannen verblijf uitstraalt.",
    highlights: [
      "Twee volwaardige slaapplaatsen in een lichte, overzichtelijke opstelling die de kamer ruim laat aanvoelen",
      "Zachte beige en crèmekleuren voor een kalme, gastvrije sfeer die past bij kort verblijf",
      "Natuurlijke materialen zoals hout, geweven vloerkleed en pampas voor warmte zonder visuele drukte",
      "Compact zit- en stylinghoekje met fauteuil, bijzettafel en sfeerdecor voor extra comfort",
      "Eenvoudige, budgetvriendelijke inrichting met hotelgevoel door textiel, lagen en rustige accessoires",
    ],
  },
];
