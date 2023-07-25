import settings from "../db/settings.json";
import { allTimes, languageDataMapping } from "../Mapping";
import { DisplayTimeSettings, timezoneType } from "../components/types";

export function convertTime(timezone: timezoneType, date: Date) {
  if (languageDataMapping[timezone]) {
    // console.log(languageDataMapping[timezone])
    // console.log(date.toUTCString())
    // console.log(date.getHours())
  } else {
    console.log("error, incorrect timezone provided");
  }
}

export function getLocalHour(date: Date):number {
  return date.getHours();
}

export function getLocalMinute(date: Date):number {
  return date.getMinutes();
}

export function getLocalTime(date: Date):string {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  if (hours > 12) {
    return `${addZero(hours - 12)}:${addZero(minutes)} PM`;
  } else {
    return `${addZero(hours)}:${addZero(minutes)} AM`;
  }
}

export function closest15min(input: Date): string {
  const minutes = addZero((Math.round(input.getMinutes() / 15) * 15) % 60);
  const hours = input.getHours();

  return `${hours}:${minutes}`;
}

export function convert24to12time(input: Date | string): string {
  const array = input.toString().split(":");
  const hours = parseInt(array[0]);
  const minutes = parseInt(array[1]);
  if (hours > 12) {
    return `${addZero(hours - 12)}:${addZero(minutes)} PM`;
  } else {
    return `${addZero(hours)}:${addZero(minutes)} AM`;
  }
}

//  layout must be '5:15 AM'
export function convert12to24time(input: string): Date {
  const array = input.split(/(?:\s|:)/);
  const specificTime = new Date();
  array[2] === "PM"
    ? specificTime.setHours(parseInt(array[0]) + 12)
    : specificTime.setHours(parseInt(array[0]));
  specificTime.setMinutes(parseInt(array[1]));
  specificTime.setSeconds(0);
  return specificTime;
}

// layout must be '5 AM'
export function convert24stringto24time(input: string): Date {
  const timeArray = input.split(" ");
  const specificTime = new Date();
  timeArray[1] === "PM"
    ? specificTime.setHours(parseInt(timeArray[0]) + 12)
    : specificTime.setHours(parseInt(timeArray[0]));
  specificTime.setMinutes(0);
  specificTime.setSeconds(0);
  return specificTime;
}

export const addZero = (input: number): string => {
  if (input < 10) {
    return `0${input}`;
  } else {
    return `${input}`;
  }
};

interface getTimeProps {
  hours: number;
  minutes: number;
}

export const getTime = (input: Date): getTimeProps => {
  const hours = input.getHours();
  const mins = input.getMinutes();
  return { hours: hours, minutes: mins };
};

export const endDatePlusOne = (input: string): string => {
  const test = input.split("-");
  const newDate = parseInt(test[2]) + 1;
  test[2] = addZero(newDate);
  return test.join("-");
};

export const mergeDateTime = (date, time): Date => {
  const setDate = date;
  const setTime = time;
  const newdate = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  setTime.setFullYear(year);
  setTime.setMonth(month);
  setTime.setDate(newdate);
  return setTime;
};


export const allHours = (): Date[] => {
    const allHours: Date[] = [];
    for (let i = 0; i < allTimes.length; i++) {
      if (i % 4 === 0) {
          allHours.push(new Date(allTimes[i]));
      }
    }
    return allHours
}

export const DateObjectto1200Hour = (input: Date): string => {
  const hours = input.getHours()
  const minutes = addZero(input.getMinutes())
  if (hours > 11) {
    if (hours === 12) {
      return `12:${minutes} PM`
    }else 
    return `${hours-12}:${minutes} PM`
  } else {
    if (hours === 0) {
      return `12:${minutes} AM`
    }else 
    return `${hours}:${minutes} AM`
  }

}

export const DateObjectto12Hour = (input: Date): string => {
  const hours = input.getHours()
  const minutes = addZero(input.getMinutes())
  if (hours > 11) {
    if (hours === 12) {
      return `12 PM`
    }else 
    return `${hours-12} PM`
  } else {
    if (hours === 0) {
      return `12 AM`
    }else 
    return `${hours} AM`
  }

}

export const DateObjectto24Hour = (input: Date): string => {
  return `${input.getHours()}:${addZero(input.getMinutes())}`
}

export const generateTimeArray = (input: DisplayTimeSettings): string[] => {
  const newArray: string[] = [];
  const selectedTimes = allHours();

  allHours()
  if (input === '12 hour') {
    selectedTimes.map((time) => {
      newArray.push(DateObjectto12Hour(time));
    });
  } else if (input === '12:00 hour') {
    selectedTimes.map((time) => {
      newArray.push(DateObjectto1200Hour(time));
    });
  } else if (input === '24 hour') {
    selectedTimes.map((time) => {
      newArray.push(DateObjectto24Hour(time));
    });
  } else {
    return ['error']
  }
  return newArray
}