import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

const ICS_USER_AGENTS = [
  "Zap Calendar", // https://icalendar.org/validator.html
  "Google-Calendar-Importer", // https://calendar.google.com/calendar/u/1/r/settings/addbyurl
];

export function middleware(request: NextRequest) {
  const url = request.nextUrl.pathname;

  // Intercept the /location path and serve an ICS file by matching the user-agent header.
  if (url === "/location" && ICS_USER_AGENTS.includes(request.headers.get("user-agent") ?? "")) {
    const tz = "America/New_York";
    const tomorrow = dayjs().tz(tz).add(1, "day").startOf("day");
    const start = tomorrow.hour(18);
    const end = tomorrow.hour(21);
    const fmt = (d: dayjs.Dayjs) => d.utc().format("YYYYMMDDTHHmmss[Z]");

    // Placeholder proof-of-concept ics file.
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

    // Join with CRLF per RFC 5545
    const ics = lines.join("\r\n");

    return new NextResponse(ics, {
      headers: {
        "Content-Type": "text/calendar; charset=utf-8",
        "Content-Disposition": "inline; filename=calendar.ics",
      },
    });
  }

  // Let everything else pass through.
  return NextResponse.next();
}
