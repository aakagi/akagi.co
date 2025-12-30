import dayjs from "dayjs";

type GetValidRangeIndicesParams = {
  startIndex: number;
  endIndex: number;
  totalDaysInYear: number;
};

export const getValidRangeIndices = (
  { startIndex, endIndex, totalDaysInYear }: GetValidRangeIndicesParams,
) => {
  const min = Math.max(1, Math.min(startIndex, endIndex));
  const max = Math.min(totalDaysInYear, Math.max(startIndex, endIndex));
  const valid: number[] = [];

  for (let idx = min; idx <= max; idx += 1) {
    valid.push(idx);
  }

  return valid;
};

export const buildSelectionMap = (totalDays: number): Map<number, boolean> => {
  const map = new Map<number, boolean>();
  for (let day = 1; day <= totalDays; day += 1) {
    map.set(day, false);
  }
  return map;
};

export const getDaysInYear = (year: number) => {
  return dayjs(`${year}-12-31`).dayOfYear();
};
