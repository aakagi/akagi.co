"use client";

import { useCallback, useEffect, useState } from "react";
import {
  fetchCalendarList,
  fetchCalendarEvents,
  extractEventDayIndices,
  type GoogleCalendar,
} from "./google-calendar-api";
import { useGoogleCalendar } from "./use-google-calendar";

type CalendarSidebarProps = {
  year: number;
  onDaysSelected: (dayIndices: number[]) => void;
};

export function CalendarSidebar({ year, onDaysSelected }: CalendarSidebarProps) {
  const { isSignedIn, isLoading, accessToken, signIn, signOut } = useGoogleCalendar();

  const [calendars, setCalendars] = useState<GoogleCalendar[]>([]);
  const [selectedCalendarId, setSelectedCalendarId] = useState<string | null>(null);
  const [loadingCalendars, setLoadingCalendars] = useState(false);
  const [loadingEvents, setLoadingEvents] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch calendars when signed in
  useEffect(() => {
    if (!accessToken) {
      setCalendars([]);
      setSelectedCalendarId(null);
      return;
    }

    const loadCalendars = async () => {
      setLoadingCalendars(true);
      setError(null);
      try {
        const calendarList = await fetchCalendarList(accessToken);
        setCalendars(calendarList);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load calendars");
      } finally {
        setLoadingCalendars(false);
      }
    };

    loadCalendars();
  }, [accessToken]);

  // Fetch events when a calendar is selected or year changes
  const handleCalendarSelect = useCallback(
    async (calendarId: string) => {
      if (!accessToken) return;

      setSelectedCalendarId(calendarId);
      setLoadingEvents(true);
      setError(null);

      try {
        const events = await fetchCalendarEvents(accessToken, calendarId, year);
        const dayIndices = extractEventDayIndices(events, year);
        onDaysSelected(dayIndices);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load events");
      } finally {
        setLoadingEvents(false);
      }
    },
    [accessToken, year, onDaysSelected]
  );

  // Reload events when year changes and a calendar is selected
  useEffect(() => {
    if (selectedCalendarId && accessToken) {
      handleCalendarSelect(selectedCalendarId);
    }
  }, [year]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!isSignedIn) {
    return (
      <div className="flex flex-col gap-4 p-4">
        <button
          onClick={signIn}
          disabled={isLoading}
          className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 disabled:opacity-50"
        >
          {isLoading ? "Loading..." : "Sign in with Google"}
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-600">Google Calendar</span>
        <button onClick={signOut} className="text-sm text-gray-500 hover:text-gray-700">
          Sign out
        </button>
      </div>

      {error && <div className="text-sm text-red-500">{error}</div>}

      {loadingCalendars ? (
        <div className="text-sm text-gray-500">Loading calendars...</div>
      ) : (
        <div className="flex flex-col gap-1">
          {calendars.map((calendar) => (
            <button
              key={calendar.id}
              onClick={() => handleCalendarSelect(calendar.id)}
              disabled={loadingEvents}
              className={`rounded px-3 py-2 text-left text-sm transition-colors ${
                selectedCalendarId === calendar.id
                  ? "bg-blue-100 text-blue-700"
                  : "hover:bg-gray-100"
              } disabled:opacity-50`}
            >
              <span
                className="mr-2 inline-block h-3 w-3 rounded-full"
                style={{ backgroundColor: calendar.backgroundColor ?? "#4285f4" }}
              />
              {calendar.summary}
              {calendar.primary && <span className="ml-1 text-xs text-gray-400">(primary)</span>}
            </button>
          ))}
        </div>
      )}

      {loadingEvents && <div className="text-sm text-gray-500">Loading events...</div>}
    </div>
  );
}
