import { addDays, toDate } from "date-fns";
import { addZero, endDatePlusOne } from "./TimeUtils";

// sets the week and returns an array starting from Monday
export const thisWeek = (input: Date, size: number): Date[] => {
  const dateArray = new Array(size);
  dateArray.fill([]);
  const startDay = input.getDay();
  dateArray[startDay] = input;
  for (let i = 0; i < size; i++) {
    if (dateArray[i].length === 0) {
      const date = toDate(addDays(input, i - startDay));
      dateArray[i] = date;
    }
  }
  return dateArray;
};

export const generateColumnId = (input: Date): string => {
  const day = input.getDay();
  const date = input.getDate();
  const month = input.getMonth();
  const year = input.getFullYear();

  return `col${day}--${date}-${month}-${year}`;
};

export const getYYYYMMDD = (input: Date): string => {
  const date = addZero(input.getDate());
  const month = addZero(input.getMonth() + 1);
  const year = input.getFullYear();

  return `${year}-${month}-${date}`;
};

export const generateStartandEndDate = (input: Date[]): string[] => {
  const start_date = getYYYYMMDD(input[0]);
  const end_date_index = input.length - 1;
  const end_date = endDatePlusOne(getYYYYMMDD(input[end_date_index]));

  return [start_date, end_date];
};

export const rubyDateConverter = (rubyDateString: string): Date => {
  return new Date(rubyDateString);
};

