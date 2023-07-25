import { daysType, monthType } from "../components/types";

export const dayAbbreviations: { [key in daysType]: string } = {
    Sunday: "SUN",
    Monday: "MON",
    Tuesday: "TUE",
    Wednesday: "WED",
    Thursday: "THU",
    Friday: "FRI",
    Saturday: "SAT",
};

export const dayMappingFromIndex: daysType[] = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

export const monthAbbreviations: { [key in monthType]: string } = {
    January: "JAN",
    February: "FEB",
    March: "MAR",
    April: "APR",
    May: "MAY",
    June: "JUN",
    July: "JUL",
    August: "AUG",
    September: "SEP",
    October: "OCT",
    November: "NOV",
    December: "DEC",
};

export const monthMappingFromIndex: monthType[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
