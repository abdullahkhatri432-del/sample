import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center bg-bone px-5 py-32 text-center">
      <p className="headline text-7xl text-gold">404</p>
      <h1 className="headline mt-4 text-3xl text-ink sm:text-4xl">
        This address doesn&apos;t exist.
      </h1>
      <p className="mt-3 max-w-md text-stone">
        The page you&apos;re looking for may have moved, sold, or never existed. Let&apos;s find you
        something better instead.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-bone transition hover:bg-ink-soft"
        >
          Back home
        </Link>
        <Link
          href="/properties"
          className="rounded-full border border-ink/15 px-7 py-3.5 text-sm font-medium text-ink transition hover:border-gold hover:text-gold-deep"
        >
          Browse properties
        </Link>
      </div>
    </div>
  );
}
