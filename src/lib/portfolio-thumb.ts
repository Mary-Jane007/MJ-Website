import type { PortfolioProject } from "./constants";

type Frame = PortfolioProject["thumbFrame"];

export function portfolioThumbWrapperClass(frame: Frame): string {
  const f = frame ?? "landscape";
  const base =
    "relative w-full overflow-hidden rounded-card-lg border border-taupe/10 bg-linen shadow-sm";
  if (f === "portrait") {
    return `${base} aspect-[3/4] sm:max-w-md sm:mx-auto`;
  }
  if (f === "contain") {
    return `${base} aspect-[16/10]`;
  }
  return `${base} aspect-[16/10]`;
}

export function portfolioThumbImageClass(frame: Frame): string {
  const f = frame ?? "landscape";
  if (f === "contain") {
    return "object-contain object-center";
  }
  return "object-cover object-center";
}
