import dayjs from "dayjs";
import dayOfYear from "dayjs/plugin/dayOfYear";

dayjs.extend(dayOfYear);

const CALENDAR_API_BASE = "https://www.googleapis.com/calendar/v3";

export type GoogleCalendar = {
  id: string;
  summary: string;
  backgroundColor?: string;
  primary?: boolean;
};

type CalendarListResponse = {
  items: GoogleCalendar[];
};

type CalendarEvent = {
  id: string;
  summary?: string;
  start: {
    date?: string; // For all-day events
    dateTime?: string; // For timed events
  };
  end: {
    date?: string;
    dateTime?: string;
  };
};

type EventsListResponse = {
  items: CalendarEvent[];
  nextPageToken?: string;
};

export async function fetchCalendarList(
  accessToken: string,
): Promise<GoogleCalendar[]> {
  const response = await fetch(`${CALENDAR_API_BASE}/users/me/calendarList`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch calendars: ${response.statusText}`);
  }

  const data: CalendarListResponse = await response.json();
  return data.items;
}

export async function fetchCalendarEvents(
  accessToken: string,
  calendarId: string,
  year: number,
): Promise<CalendarEvent[]> {
  const timeMin = dayjs(`${year}-01-01`).toISOString();
  const timeMax = dayjs(`${year}-12-31`).endOf("day").toISOString();

  const allEvents: CalendarEvent[] = [];
  let pageToken: string | undefined;

  do {
    const params = new URLSearchParams({
      timeMin,
      timeMax,
      singleEvents: "true",
      maxResults: "2500",
    });
    if (pageToken) {
      params.set("pageToken", pageToken);
    }

    const response = await fetch(
      `${CALENDAR_API_BASE}/calendars/${
        encodeURIComponent(calendarId)
      }/events?${params}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch events: ${response.statusText}`);
    }

    const data: EventsListResponse = await response.json();
    allEvents.push(...data.items);
    pageToken = data.nextPageToken;
  } while (pageToken);

  return allEvents;
}

export function extractEventDayIndices(
  events: CalendarEvent[],
  year: number,
): number[] {
  const dayIndices = new Set<number>();

  for (const event of events) {
    const startStr = event.start.date ?? event.start.dateTime;
    const endStr = event.end.date ?? event.end.dateTime;

    if (!startStr) continue;

    const start = dayjs(startStr);
    // For all-day events, end date is exclusive (e.g., Jan 1-2 means just Jan 1)
    // For timed events, we want to include both start and end days
    const end = event.end.date
      ? dayjs(endStr).subtract(1, "day")
      : dayjs(endStr);

    // Iterate through each day in the event range
    let current = start;
    while (current.isBefore(end) || current.isSame(end, "day")) {
      if (current.year() === year) {
        dayIndices.add(current.dayOfYear());
      }
      current = current.add(1, "day");
    }
  }

  return Array.from(dayIndices).sort((a, b) => a - b);
}
