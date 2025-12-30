"use client";

import { cn } from "@/lib/cn";
import dayjs from "dayjs";
import { useEffect, useMemo, useRef, useState } from "react";

export default function CountDaysPage() {
  const now = useMemo(() => dayjs(), []);
  const [year, setYear] = useState(
    now
      .add(10, "days") // At the end of the year we generally care about the upcoming year.
      .year()
  );

  const [highlightStartIndex, setHighlightStartIndex] = useState<number | null>(null);
  const [highlightEndIndex, setHighlightEndIndex] = useState<number | null>(null);

  const [selectedDates, setSelectedDates] = useState<number[]>([]);
  const count = useMemo(() => selectedDates.length, [selectedDates]);

  // Add a global mouseup event listener to reset highlight when mouse released anywhere
  useEffect(() => {
    const handleMouseUp = () => {
      if (highlightStartIndex === null || highlightEndIndex === null) {
        return;
      }
      setHighlightStartIndex(null);
      setHighlightEndIndex(null);
      setSelectedDates((prev) => {
        const range = Array.from(
          { length: highlightEndIndex - highlightStartIndex + 1 },
          (_, i) => highlightStartIndex + i
        );
        const allInSelected = range.every((idx) => prev.includes(idx));
        if (allInSelected) {
          // Unselect all in range
          return prev.filter((idx) => !range.includes(idx));
        } else {
          // Select all in range (add new only)
          return [...prev, ...range.filter((idx) => !prev.includes(idx))];
        }
      });
    };
    window.addEventListener("mouseup", handleMouseUp);
    return () => window.removeEventListener("mouseup", handleMouseUp);
  }, [highlightStartIndex, highlightEndIndex]);

  return (
    <div className="mx-auto my-16 flex min-h-screen w-full max-w-sm flex-col items-center">
      <h1>Count Days: {year}</h1>
      <h3>Count: {count}</h3>

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

        <div className="mt-4 w-full">
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
                        const cellGlobalIndex = monthNumber * 100 + weekIndex * 7 + dayIndex;
                        const isSelected = selectedDates.includes(cellGlobalIndex);

                        const isHighlighted =
                          highlightStartIndex !== null &&
                          highlightEndIndex !== null &&
                          cellGlobalIndex >= highlightStartIndex &&
                          cellGlobalIndex <= highlightEndIndex;

                        // Calculate the first weekday (0=Sunday..6=Saturday) of the month
                        const firstDayWeekday = firstDayOfMonth.day();

                        // Calculate the day of the month this cell represents
                        const dayNumber = weekIndex * 7 + dayIndex - firstDayWeekday + 1;

                        // Only show a number for days in the valid range for this month
                        return (
                          <div
                            key={dayIndex}
                            className={cn(
                              "flex aspect-square w-full cursor-pointer items-center justify-center select-none",
                              isSelected && "bg-red-100",
                              isHighlighted && "bg-red-50"
                            )}
                            onMouseDown={() => {
                              setHighlightStartIndex(cellGlobalIndex);
                            }}
                            onMouseEnter={() => {
                              setHighlightEndIndex(cellGlobalIndex);
                            }}
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
