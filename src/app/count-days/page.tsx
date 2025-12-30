"use client";

import dayjs from "dayjs";
import { useMemo, useState } from "react";

export default function CountDaysPage() {
  const now = useMemo(() => dayjs(), []);
  const [year, setYear] = useState(
    now
      .add(10, "days") // At the end of the year we generally care about the upcoming year.
      .year()
  );

  return (
    <div className="mx-auto my-16 flex min-h-screen w-full max-w-sm flex-col items-center">
      <h1>Count Days: {year}</h1>
      <div className="mt-4 w-full">
        <div className="grid grid-cols-7">
          <div className="flex items-center justify-center">Sun</div>
          <div className="flex items-center justify-center">Mon</div>
          <div className="flex items-center justify-center">Tue</div>
          <div className="flex items-center justify-center">Wed</div>
          <div className="flex items-center justify-center">Thu</div>
          <div className="flex items-center justify-center">Fri</div>
          <div className="flex items-center justify-center">Sat</div>
        </div>

        <div className="w-full">
          {Array.from({ length: 12 }).map((_, index) => {
            const monthNumber = index + 1;
            const firstDayOfMonth = dayjs(`${year}-${monthNumber}-01`);
            const numDays = firstDayOfMonth.daysInMonth();
            const numWeekRows = Math.ceil(numDays / 7);

            return (
              <div key={index} className="mt-2 flex w-full flex-col items-center justify-center">
                <h4 className="mb-2 font-medium">{firstDayOfMonth.format("MMM")}</h4>
                <div className="flex w-full flex-col items-center justify-center">
                  {Array.from({ length: numWeekRows }).map((_, weekIndex) => (
                    <div key={weekIndex} className="grid w-full grid-cols-7">
                      {Array.from({ length: 7 }).map((_, dayIndex) => {
                        // Calculate the first weekday (0=Sunday..6=Saturday) of the month
                        const firstDayWeekday = firstDayOfMonth.day();
                        // Calculate the day of the month this cell represents
                        const dayNumber = weekIndex * 7 + dayIndex - firstDayWeekday + 1;
                        // Only show a number for days in the valid range for this month
                        return (
                          <div
                            key={dayIndex}
                            className="flex aspect-square w-full items-center justify-center"
                          >
                            {dayNumber > 0 && dayNumber <= numDays ? dayNumber : ""}
                          </div>
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
