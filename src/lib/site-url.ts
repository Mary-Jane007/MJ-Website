/** Canonical site URL for metadata, sitemap, and OG. Override in production. */
export function getSiteUrl() {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!raw) {
    return "https://mary-jane-design.vercel.app";
  }
  try {
    const withProtocol = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;
    const url = new URL(withProtocol);
    return `${url.protocol}//${url.host}`;
  } catch {
    return "https://mary-jane-design.vercel.app";
  }
}
