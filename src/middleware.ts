import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

export function middleware(request: NextRequest) {
  const url = request.nextUrl.pathname;

  // Only intercept the /location path
  if (url === "/location") {
    const userAgent = request.headers.get("user-agent") || "";

    if (
      [
        "Zap Calendar", // https://icalendar.org/validator.html
        "Google-Calendar-Importer", // https://calendar.google.com/calendar/u/1/r/settings/addbyurl
      ].includes(userAgent)
    ) {
      const tz = "America/New_York";
      const tomorrow = dayjs().tz(tz).add(1, "day").startOf("day");
      const start = tomorrow.hour(18);
      const end = tomorrow.hour(21);
      const fmt = (d: dayjs.Dayjs) => d.utc().format("YYYYMMDDTHHmmss[Z]");

      const lines = [
        "BEGIN:VCALENDAR",
        "VERSION:2.0",
        "PRODID:-//akagi.co//Calendar Feed//EN",
        "CALSCALE:GREGORIAN",
        "METHOD:PUBLISH",
        "BEGIN:VEVENT",
        `UID:${Date.now()}@akagi.co`,
        `DTSTAMP:${fmt(dayjs())}`,
        `DTSTART:${fmt(start)}`,
        `DTEND:${fmt(end)}`,
        "SUMMARY:Evening Event",
        "DESCRIPTION:Auto-generated 6–9 PM event for tomorrow.",
        "LOCATION:Virtual",
        "END:VEVENT",
        "END:VCALENDAR",
      ];

      // join with CRLF per RFC 5545
      const ics = lines.join("\r\n");

      console.log("ics");
      console.log(ics);

      return new NextResponse(ics, {
        headers: {
          "Content-Type": "text/calendar; charset=utf-8",
          "Content-Disposition": "inline; filename=calendar.ics",
        },
      });
    }
  }

  // Let everything else pass through (renders your page.tsx)
  return NextResponse.next();
}
