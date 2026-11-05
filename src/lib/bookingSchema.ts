import { z } from "zod";

export const bookingSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(120),
  email: z.string().trim().email("Enter a valid email address").max(200),
  phone: z.string().trim().min(7, "Enter a valid phone number").max(30),
  serviceId: z.string().trim().min(1, "Select a service"),
  stylistId: z.string().trim().optional().or(z.literal("")),
  preferredDate: z.string().trim().min(1, "Select a preferred date"),
  preferredTime: z.string().trim().min(1, "Select a preferred time"),
  notes: z.string().trim().max(1000).optional().or(z.literal("")),
  // Honeypot: real users never see or fill this field. Left permissive here so a
  // filled-in value still passes validation — the route handler silently drops it
  // instead of returning an error that would tip off the bot.
  website: z.string().optional().or(z.literal("")),
});

export type BookingInput = z.infer<typeof bookingSchema>;
