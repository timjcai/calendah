export type TimecellProps = {
  time: string;
  id: string;
};

export type ViewProps = {
  times: string[];
};

export type DateProps = {
  date: datenumberType;
  month: monthType;
  year: number;
  day: daysType;
};

export type DateProps2 = {
  date: Date;
  key: string;
};

export type daysType =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

export type monthType =
  | "January"
  | "February"
  | "March"
  | "April"
  | "May"
  | "June"
  | "July"
  | "August"
  | "September"
  | "October"
  | "November"
  | "December";

export type datenumberType =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24
  | 25
  | 26
  | 27
  | 28
  | 29
  | 30
  | 31;

export type IActiveCard = 
  | null
  | 'placeholder'
  | number
