import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-url";
import { PORTFOLIO_ITEMS } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const staticPaths = [
    "",
    "/diensten",
    "/portfolio",
    "/over-mij",
    "/contact",
  ] as const;

  const entries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));

  for (const item of PORTFOLIO_ITEMS) {
    entries.push({
      url: `${base}/portfolio/${item.id}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    });
  }

  return entries;
}
