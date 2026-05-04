import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center bg-cream px-4 pt-28 text-center">
      <p className="text-sm font-medium uppercase tracking-wider text-blush">
        404
      </p>
      <h1 className="mt-3 font-display text-4xl text-earth md:text-5xl">
        Deze pagina bestaat niet
      </h1>
      <p className="mt-4 max-w-md text-earth/75">
        Misschien is de link verouderd. Ga terug naar home of neem contact op —
        ik help je graag verder.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Link
          href="/"
          className="rounded-card-lg bg-blush px-6 py-3 font-medium text-cream transition hover:bg-taupe"
        >
          Naar home
        </Link>
        <Link
          href="/contact"
          className="rounded-card-lg border border-taupe/40 px-6 py-3 font-medium text-earth transition hover:border-blush hover:text-blush"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}
