"use client";

import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { business } from "@/config/business";
import { formatHourLabel, getCurrentWeekday, isOpenNow } from "@/lib/hours";

export default function HoursAndStatus() {
  const [status, setStatus] = useState<{ today: string; open: boolean } | null>(null);

  useEffect(() => {
    // Deliberately deferred to the client: this page is statically prerendered, so computing
    // "now" during render would bake in the build timestamp instead of the visitor's real time.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setStatus({
      today: getCurrentWeekday(business.timezone),
      open: isOpenNow(business.hours, business.timezone),
    });
  }, []);

  return (
    <div>
      <div className="mb-3 flex items-center gap-2">
        <h3 className="font-heading text-lg text-cream">Hours</h3>
        {status && (
          <Badge tone={status.open ? "open" : "closed"}>{status.open ? "Open now" : "Closed"}</Badge>
        )}
      </div>
      <table className="w-full text-sm">
        <tbody>
          {business.hours.map((day) => (
            <tr
              key={day.day}
              className={day.day === status?.today ? "font-medium text-cream" : "text-cream/50"}
            >
              <td className="py-1.5 pr-4">{day.day}</td>
              <td className="py-1.5 text-right">
                {day.open && day.close
                  ? `${formatHourLabel(day.open)} – ${formatHourLabel(day.close)}`
                  : "Closed"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
