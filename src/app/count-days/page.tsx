"use client";

import { cn } from "@/lib/cn";
import dayjs from "dayjs";
import dayOfYear from "dayjs/plugin/dayOfYear";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

dayjs.extend(dayOfYear);

const buildSelectionMap = (totalDays: number): Map<number, boolean> => {
  const map = new Map<number, boolean>();
  for (let day = 1; day <= totalDays; day += 1) {
    map.set(day, false);
  }
  return map;
};

export default function CountDaysPage() {
  const now = useMemo(() => dayjs(), []);
  const [year, setYear] = useState(
    now
      .add(10, "days") // At the end of the year we generally care about the upcoming year.
      .year()
  );

  const [highlightStartIndex, setHighlightStartIndex] = useState<number | null>(null);
  const [highlightEndIndex, setHighlightEndIndex] = useState<number | null>(null);

  const activePointerIdRef = useRef<number | null>(null);

  const [selectedDates, setSelectedDates] = useState<Map<number, boolean>>(() => {
    const daysInYear = dayjs(`${year}-12-31`).dayOfYear();
    return buildSelectionMap(daysInYear);
  });

  const totalDaysInYear = useMemo(() => dayjs(`${year}-12-31`).dayOfYear(), [year]);

  useEffect(() => {
    setSelectedDates((prev) => {
      if (prev.size === totalDaysInYear) {
        return prev;
      }
      return buildSelectionMap(totalDaysInYear);
    });
    setHighlightStartIndex(null);
    setHighlightEndIndex(null);
  }, [totalDaysInYear]);

  const count = useMemo(() => {
    let total = 0;
    selectedDates.forEach((isSelected) => {
      if (isSelected) {
        total += 1;
      }
    });
    return total;
  }, [selectedDates]);

  const getValidRangeIndices = useCallback(
    (startIndex: number, endIndex: number) => {
      const min = Math.max(1, Math.min(startIndex, endIndex));
      const max = Math.min(totalDaysInYear, Math.max(startIndex, endIndex));
      const valid: number[] = [];

      for (let idx = min; idx <= max; idx += 1) {
        valid.push(idx);
      }

      return valid;
    },
    [totalDaysInYear]
  );

  const resetHighlightSelection = useCallback(() => {
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

      const allInSelected = range.every((idx) => prev.get(idx) === true);

      if (allInSelected) {
        const next = new Map(prev);
        range.forEach((idx) => next.set(idx, false));
        return next;
      }

      let changed = false;
      const next = new Map(prev);
      range.forEach((idx) => {
        if (next.get(idx) !== true) {
          next.set(idx, true);
          changed = true;
        }
      });

      return changed ? next : prev;
    });
  }, [getValidRangeIndices, highlightEndIndex, highlightStartIndex]);

  // Add a global pointerup / pointercancel listener to reset highlight when pointer released anywhere
  useEffect(() => {
    const handlePointerEnd = (event: PointerEvent) => {
      if (activePointerIdRef.current !== null && event.pointerId !== activePointerIdRef.current) {
        return;
      }
      activePointerIdRef.current = null;
      resetHighlightSelection();
    };
    window.addEventListener("pointerup", handlePointerEnd);
    window.addEventListener("pointercancel", handlePointerEnd);
    return () => {
      window.removeEventListener("pointerup", handlePointerEnd);
      window.removeEventListener("pointercancel", handlePointerEnd);
    };
  }, [resetHighlightSelection]);

  const hasHighlightBounds = highlightStartIndex !== null && highlightEndIndex !== null;
  const highlightLowerBound = hasHighlightBounds
    ? Math.min(highlightStartIndex, highlightEndIndex)
    : null;
  const highlightUpperBound = hasHighlightBounds
    ? Math.max(highlightStartIndex, highlightEndIndex)
    : null;

  return (
    <div className="mx-auto mt-8 mb-16 flex min-h-screen w-full flex-col items-center">
      <select
        className="mb-4"
        value={year}
        onChange={(event) => setYear(Number(event.target.value))}
      >
        {Array.from({ length: 11 }).map((_, i) => {
          const yearValue = now.add(i, "year").year();
          return (
            <option key={yearValue} value={yearValue}>
              {yearValue}
            </option>
          );
        })}
      </select>
      <h3>Count: {count}</h3>

      <div className="@container mt-4 w-full max-w-5xl border-gray-200">
        <div className="mt-4 grid w-full grid-cols-1 gap-px border-x border-gray-200 bg-gray-200 @xl:grid-cols-2 @4xl:grid-cols-3">
          {Array.from({ length: 12 }).map((_, index) => {
            const monthNumber = index + 1;
            const firstDayOfMonth = dayjs(`${year}-${monthNumber}-01`);
            const numDays = firstDayOfMonth.daysInMonth();
            const firstDayWeekday = firstDayOfMonth.day();
            const firstDayOfMonthDayOfYear = firstDayOfMonth.dayOfYear();
            const totalCells = firstDayWeekday + numDays;
            const numWeekRows = Math.ceil(totalCells / 7);

            return (
              <div
                key={index}
                className="mt-px flex h-full w-full flex-col items-center border-gray-200 bg-white"
              >
                <h4 className="my-2 font-medium">{firstDayOfMonth.format("MMM")}</h4>
                <div className="flex w-full flex-col items-center justify-center">
                  {Array.from({ length: numWeekRows }).map((_, weekIndex) => (
                    <div key={weekIndex} className="grid w-full grid-cols-7">
                      {Array.from({ length: 7 }).map((_, dayIndex) => {
                        const dayNumber = weekIndex * 7 + dayIndex - firstDayWeekday + 1;
                        const isValidDay = dayNumber > 0 && dayNumber <= numDays;

                        const dayOfYearValue = isValidDay
                          ? firstDayOfMonthDayOfYear + dayNumber - 1
                          : null;

                        const isSelected =
                          isValidDay &&
                          dayOfYearValue !== null &&
                          selectedDates.get(dayOfYearValue) === true;

                        const isHighlighted =
                          isValidDay &&
                          dayOfYearValue !== null &&
                          highlightLowerBound !== null &&
                          highlightUpperBound !== null &&
                          dayOfYearValue >= highlightLowerBound &&
                          dayOfYearValue <= highlightUpperBound;

                        return (
                          <div
                            data-day-of-year={dayOfYearValue ?? undefined}
                            key={dayIndex}
                            className={cn(
                              "flex aspect-square w-full touch-none items-center justify-center select-none",
                              isValidDay ? "cursor-pointer" : "cursor-default text-slate-300",
                              isSelected && "bg-red-200",
                              isHighlighted && "bg-red-50"
                            )}
                            onPointerDown={(event) => {
                              if (!isValidDay || dayOfYearValue === null) {
                                return;
                              }
                              if (
                                activePointerIdRef.current !== null &&
                                activePointerIdRef.current !== event.pointerId
                              ) {
                                return;
                              }
                              if (event.pointerType !== "mouse") {
                                event.preventDefault();
                              }
                              activePointerIdRef.current = event.pointerId;
                              event.currentTarget.setPointerCapture(event.pointerId);
                              setHighlightStartIndex(dayOfYearValue);
                              setHighlightEndIndex(dayOfYearValue);
                            }}
                            onPointerMove={(event) => {
                              if (activePointerIdRef.current !== event.pointerId) {
                                return;
                              }
                              if (highlightStartIndex === null) {
                                return;
                              }
                              if (event.pointerType !== "mouse") {
                                event.preventDefault();
                              }
                              const hovered = document.elementFromPoint(
                                event.clientX,
                                event.clientY
                              );
                              const dayElement =
                                hovered instanceof Element
                                  ? hovered.closest("[data-day-of-year]")
                                  : null;
                              const attributeValue = dayElement?.getAttribute("data-day-of-year");
                              if (!attributeValue) {
                                return;
                              }
                              const nextDay = Number.parseInt(attributeValue, 10);
                              if (Number.isNaN(nextDay)) {
                                return;
                              }
                              setHighlightEndIndex(nextDay);
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
