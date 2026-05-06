import type { MetadataRoute } from "next";
import { BRAND } from "@/lib/constants";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: BRAND.name,
    short_name: BRAND.name,
    description: BRAND.metaDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#FAF7F4",
    theme_color: "#C9A99A",
    lang: "nl",
  };
}
