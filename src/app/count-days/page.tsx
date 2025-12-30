"use client";

import { cn } from "@/lib/cn";
import dayjs from "dayjs";
import { useCallback, useEffect, useMemo, useState } from "react";

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

  const getDayInfoForCell = useCallback(
    (cellIndex: number) => {
      const monthNumber = Math.floor(cellIndex / 100);
      if (monthNumber < 1 || monthNumber > 12) {
        return { isValidDay: false };
      }

      const remainder = cellIndex % 100;
      const weekIndex = Math.floor(remainder / 7);
      const dayIndex = remainder % 7;

      const firstDayOfMonth = dayjs(`${year}-${String(monthNumber).padStart(2, "0")}-01`);
      const firstDayWeekday = firstDayOfMonth.day();
      const numDays = firstDayOfMonth.daysInMonth();
      const dayNumber = weekIndex * 7 + dayIndex - firstDayWeekday + 1;

      const isValidDay = dayNumber > 0 && dayNumber <= numDays;

      return {
        monthNumber,
        weekIndex,
        dayIndex,
        dayNumber,
        numDays,
        firstDayWeekday,
        isValidDay,
      };
    },
    [year]
  );

  const getValidRangeIndices = useCallback(
    (startIndex: number, endIndex: number) => {
      const min = Math.min(startIndex, endIndex);
      const max = Math.max(startIndex, endIndex);
      const valid: number[] = [];

      for (let idx = min; idx <= max; idx++) {
        if (getDayInfoForCell(idx).isValidDay) {
          valid.push(idx);
        }
      }

      return valid;
    },
    [getDayInfoForCell]
  );

  // Add a global mouseup event listener to reset highlight when mouse released anywhere
  useEffect(() => {
    const handleMouseUp = () => {
      if (highlightStartIndex === null || highlightEndIndex === null) {
        return;
      }
      setHighlightStartIndex(null);
      setHighlightEndIndex(null);
      setSelectedDates((prev) => {
        const range = getValidRangeIndices(highlightStartIndex, highlightEndIndex);

        if (range.length === 0) {
          return prev;
        }

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
  }, [getValidRangeIndices, highlightEndIndex, highlightStartIndex]);

  const hasHighlightBounds = highlightStartIndex !== null && highlightEndIndex !== null;
  const highlightLowerBound = hasHighlightBounds
    ? Math.min(highlightStartIndex, highlightEndIndex)
    : null;
  const highlightUpperBound = hasHighlightBounds
    ? Math.max(highlightStartIndex, highlightEndIndex)
    : null;

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
            const firstDayWeekday = firstDayOfMonth.day();
            const totalCells = firstDayWeekday + numDays;
            const numWeekRows = Math.ceil(totalCells / 7);

            return (
              <div key={index} className="mt-2 flex w-full flex-col items-center justify-center">
                <h4 className="mb-2 font-medium">{firstDayOfMonth.format("MMM")}</h4>
                <div className="flex w-full flex-col items-center justify-center">
                  {Array.from({ length: numWeekRows }).map((_, weekIndex) => (
                    <div key={weekIndex} className="grid w-full grid-cols-7">
                      {Array.from({ length: 7 }).map((_, dayIndex) => {
                        const cellGlobalIndex = monthNumber * 100 + weekIndex * 7 + dayIndex;

                        const dayNumber = weekIndex * 7 + dayIndex - firstDayWeekday + 1;
                        const isValidDay = dayNumber > 0 && dayNumber <= numDays;

                        const isSelected = isValidDay && selectedDates.includes(cellGlobalIndex);

                        const isHighlighted =
                          isValidDay &&
                          highlightLowerBound !== null &&
                          highlightUpperBound !== null &&
                          cellGlobalIndex >= highlightLowerBound &&
                          cellGlobalIndex <= highlightUpperBound;

                        return (
                          <div
                            key={dayIndex}
                            className={cn(
                              "flex aspect-square w-full items-center justify-center select-none",
                              isValidDay ? "cursor-pointer" : "cursor-default text-slate-300",
                              isSelected && "bg-red-200",
                              isHighlighted && "bg-red-50"
                            )}
                            onMouseDown={() => {
                              if (!isValidDay) {
                                return;
                              }
                              setHighlightStartIndex(cellGlobalIndex);
                              setHighlightEndIndex(cellGlobalIndex);
                            }}
                            onMouseEnter={() => {
                              if (!isValidDay || highlightStartIndex === null) {
                                return;
                              }
                              setHighlightEndIndex(cellGlobalIndex);
                            }}
                          >
                            {isValidDay ? dayNumber : ""}
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
