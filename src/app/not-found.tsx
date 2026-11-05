import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4 px-6 py-24 text-center">
      <p className="font-heading text-5xl text-charcoal">404</p>
      <p className="text-charcoal/70">We couldn&apos;t find that page.</p>
      <Link href="/" className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-charcoal hover:bg-accent-soft">
        Back to home
      </Link>
    </main>
  );
}
