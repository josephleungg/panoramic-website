import { NextRequest, NextResponse } from "next/server";
import { bookingSchema } from "@/lib/bookingSchema";
import { isRateLimited } from "@/lib/rateLimit";

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json({ ok: false, error: "Too many requests. Please try again shortly." }, { status: 429 });
  }

  const json = await request.json().catch(() => null);
  if (!json) {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const result = bookingSchema.safeParse(json);
  if (!result.success) {
    return NextResponse.json(
      { ok: false, error: "Please check the highlighted fields.", fieldErrors: result.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  if (result.data.website) {
    // Honeypot tripped — report success to the bot, drop the submission.
    return NextResponse.json({ ok: true });
  }

  // TODO: send a notification email (e.g. via Resend) and/or forward to a real
  // booking system (Fresha, Square Appointments, Calendly, Acuity) once credentials exist.
  console.log("[booking] new request", { ...result.data, website: undefined });

  return NextResponse.json({ ok: true });
}
