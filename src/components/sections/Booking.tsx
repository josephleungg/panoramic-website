"use client";

import { useState, type FormEvent } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Input, Select, Textarea } from "@/components/ui/Field";
import { Button, ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/Reveal";
import { business } from "@/config/business";

type SubmitState = "idle" | "submitting" | "success" | "error";

export default function Booking() {
  const [state, setState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  if (business.booking.useExternalUrl) {
    return (
      <section id="booking" className="mx-auto max-w-[1200px] px-6 py-20 sm:py-28">
        <SectionHeading
          eyebrow="Booking"
          title="Book Your Visit"
          description="You'll be taken to our online booking partner to pick a time."
        />
        <div className="mt-8 text-center">
          <ButtonLink href={business.booking.externalUrl}>Book Now</ButtonLink>
        </div>
      </section>
    );
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");
    setErrorMessage(null);

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const body = await response.json();

      if (!response.ok || !body.ok) {
        setErrorMessage(body.error ?? "Something went wrong. Please try again.");
        setState("error");
        return;
      }

      setState("success");
      form.reset();
    } catch {
      setErrorMessage("Network error. Please try again.");
      setState("error");
    }
  }

  return (
    <section id="booking" className="mx-auto max-w-[1200px] px-6 py-20 sm:py-28">
      <SectionHeading
        eyebrow="Booking"
        title="Book Your Visit"
        description="Send us your preferred time and we'll confirm by phone or email."
      />

      <Reveal>
        <p className="mx-auto mt-4 max-w-2xl rounded-lg bg-charcoal/5 px-4 py-2 text-center text-xs text-charcoal/60">
          TODO: connect this form to a real booking tool (Fresha, Square Appointments, Calendly, or
          Acuity) or flip <code>business.booking.useExternalUrl</code> to send clients straight to one.
        </p>

        {state === "success" ? (
          <div className="mx-auto mt-8 max-w-lg rounded-2xl border border-line bg-white/60 p-8 text-center">
            <p className="font-heading text-xl text-charcoal">Thank you!</p>
            <p className="mt-2 text-sm text-charcoal/70">
              Your request has been sent. We&apos;ll confirm your appointment by phone or email shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mx-auto mt-10 max-w-2xl space-y-5">
            {/* Honeypot — hidden from sighted users, visible to bots */}
            <div className="absolute left-[-9999px]" aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <Input id="name" name="name" label="Name" required autoComplete="name" />
              <Input id="email" name="email" type="email" label="Email" required autoComplete="email" />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <Input id="phone" name="phone" type="tel" label="Phone" required autoComplete="tel" />
              <Select id="serviceId" name="serviceId" label="Service" required defaultValue="">
                <option value="" disabled>
                  Select a service
                </option>
                {business.serviceCategories.map((category) => (
                  <optgroup key={category.id} label={category.name}>
                    {category.services.map((service) => (
                      <option key={service.id} value={service.id}>
                        {service.name}
                      </option>
                    ))}
                  </optgroup>
                ))}
              </Select>
            </div>

            <div className="grid gap-5 sm:grid-cols-3">
              <Select id="stylistId" name="stylistId" label="Preferred Stylist" defaultValue="">
                <option value="">No preference</option>
                {business.team.map((member) => (
                  <option key={member.id} value={member.id}>
                    {member.name}
                  </option>
                ))}
              </Select>
              <Input id="preferredDate" name="preferredDate" type="date" label="Preferred Date" required />
              <Input id="preferredTime" name="preferredTime" type="time" label="Preferred Time" required />
            </div>

            <Textarea id="notes" name="notes" label="Notes" rows={4} placeholder="Anything we should know?" />

            {state === "error" && errorMessage && (
              <p role="alert" className="text-sm text-red-600">
                {errorMessage}
              </p>
            )}

            <Button type="submit" disabled={state === "submitting"} className="w-full sm:w-auto">
              {state === "submitting" ? "Sending…" : "Request Appointment"}
            </Button>
          </form>
        )}
      </Reveal>
    </section>
  );
}
