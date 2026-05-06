/** Canonical site URL for metadata, sitemap, and OG. */
export function getSiteUrl() {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (raw) {
    try {
      const withProtocol = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;
      const url = new URL(withProtocol);
      return `${url.protocol}//${url.host}`;
    } catch {
      /* fall through */
    }
  }

  const vercel = process.env.VERCEL_URL?.trim();
  if (vercel) {
    return `https://${vercel}`;
  }

  return "http://localhost:3000";
}
