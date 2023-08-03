import { addDays, toDate } from "date-fns";
import { addZero, endDatePlusOne } from "./TimeUtils";
import { dayMappingFromIndex } from "../Mapping";

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


export const getAllDaysOfCurrentMonth = (currentDate: Date, startDate: Date): Date[] => {
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const startYear = startDate.getFullYear();
  const startMonth = startDate.getMonth();
  const startdate = startDate.getDate();

  const firstDayOfMonth = startDate;
  const lastDayOfMonth = new Date(startYear, startMonth, startdate + 42)
  const allDays: Date[] = [];
  let currentDateInLoop = firstDayOfMonth;

  while (currentDateInLoop <= lastDayOfMonth) {
    allDays.push(new Date(currentDateInLoop))
    currentDateInLoop.setDate(currentDateInLoop.getDate() + 1);
  }

  // for (let i = 0; i < length; i++){
  //   allDays.push(new Date(currentDateInLoop))
  //   currentDateInLoop.setDate(currentDateInLoop.getDate() + 1);
  // }
  return allDays;
}

export function getLastXdayOfPreviousMonth(day, selecteddate: Date) {
  const startDay = dayMappingFromIndex.indexOf(day)
  let currentDate = new Date()
  currentDate.setMonth(selecteddate.getMonth());
  currentDate.setDate(0);
  while (currentDate.getDay() !== startDay) {
    currentDate.setDate(currentDate.getDate() - 1);
  }

  return currentDate;
}

// Call the function and format the output