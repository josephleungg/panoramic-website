import type { DayHours } from "@/config/business";

const DAY_ORDER = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function nowInTimezone(timezone: string) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: timezone,
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(new Date());

  const weekday = parts.find((p) => p.type === "weekday")?.value ?? "Sunday";
  const hour = Number(parts.find((p) => p.type === "hour")?.value ?? "0");
  const minute = Number(parts.find((p) => p.type === "minute")?.value ?? "0");

  return { weekday, minutesSinceMidnight: hour * 60 + minute };
}

function toMinutes(time: string) {
  const [h, m] = time.split(":").map(Number);
  return h * 60 + m;
}

export function getTodayIndex(timezone: string) {
  const { weekday } = nowInTimezone(timezone);
  return DAY_ORDER.indexOf(weekday);
}

export function isOpenNow(hours: DayHours[], timezone: string): boolean {
  const { weekday, minutesSinceMidnight } = nowInTimezone(timezone);
  const today = hours.find((h) => h.day === weekday);
  if (!today || !today.open || !today.close) return false;

  const openMinutes = toMinutes(today.open);
  const closeMinutes = toMinutes(today.close);
  return minutesSinceMidnight >= openMinutes && minutesSinceMidnight < closeMinutes;
}

export function formatHourLabel(time: string | null): string {
  if (!time) return "Closed";
  const [h, m] = time.split(":").map(Number);
  const period = h >= 12 ? "PM" : "AM";
  const hour12 = h % 12 === 0 ? 12 : h % 12;
  return m === 0 ? `${hour12} ${period}` : `${hour12}:${String(m).padStart(2, "0")} ${period}`;
}

export function getCurrentWeekday(timezone: string): string {
  return nowInTimezone(timezone).weekday;
}
