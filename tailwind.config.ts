import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        linen: "#F5EFE6",
        blush: "#C9A99A",
        taupe: "#B5A49A",
        earth: "#3B2F2F",
        cream: "#FAF7F4",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "serif"],
        body: ["var(--font-jost)", "sans-serif"],
        script: ["var(--font-dancing)", "cursive"],
      },
      borderRadius: {
        card: "14px",
        "card-lg": "16px",
      },
      boxShadow: {
        warm: "0 12px 40px -8px rgba(59, 47, 47, 0.15)",
        "warm-lg": "0 20px 50px -12px rgba(59, 47, 47, 0.2)",
      },
      backgroundImage: {
        "grain-light":
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.06'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};
export default config;
