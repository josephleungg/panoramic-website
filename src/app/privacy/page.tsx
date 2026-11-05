import Link from "next/link";
import { business } from "@/config/business";

export const metadata = { title: `Privacy Policy — ${business.name}` };

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-2xl flex-1 px-6 py-24">
      <Link href="/" className="text-sm font-medium text-accent hover:underline">
        ← Back to home
      </Link>
      <h1 className="mt-6 font-heading text-3xl text-charcoal">Privacy Policy</h1>
      <p className="mt-6 text-sm text-charcoal/70">
        [PLACEHOLDER] This is placeholder content. Replace with your salon&apos;s actual privacy
        policy before launch — covering what information is collected through the booking and
        contact forms, how it is used and stored, and how clients can request its deletion.
      </p>
    </main>
  );
}
