import { APIDataObject, EventProps } from "../components/types/apidata";
import { timeMappings12to24 } from "../db/Mapping";
import { mergeDateTime } from "./DateUtils";
import { convert24stringto24time } from "./TimeUtils";

export const calcIndividualColWidth = (
  viewSettings: number,
  windowSize: number,
): string => {
  // 320 = 256 (sidebar width) + 64 (timebar width)
  const leftoverWindow = Math.round(((windowSize - 320) / windowSize) * 100);
  return `${leftoverWindow / viewSettings}vw`;
};

// dependent on the column id being presented in this format: "colX--DD-MM-YYYY"
export const extractDate = (columnId: string) => {
  const dateArray = columnId.split("-");
  const extractedDate = new Date();
  extractedDate.setDate(parseInt(dateArray[2]));
  extractedDate.setMonth(parseInt(dateArray[3]));
  extractedDate.setFullYear(parseInt(dateArray[4]));
  return extractedDate;
};

// dependent on the cell id being presented in this format: "colX--DD-MM-YYYY| 5 AM"
export const extractTime = (cellId: string): Date => {
  const timeArray = cellId.split("|");
  const Time12HR = timeArray[1];
  return convert24stringto24time(timeMappings12to24[Time12HR]);
};

export const createDateTimeonPosition = (event) => {
  const date = extractDate(event.target.parentNode.id);
  const time = extractTime(event.target.id);
  const cell = event.target.getBoundingClientRect();
  const clickPositionY = event.pageY;
  const height = limit0to1((clickPositionY - cell.top) / 48);
  const mouseTime = Math.round((height * 60) / 15) * 15;
  time.setMinutes(mouseTime);
  const targetDateTime = mergeDateTime(date, time);
  return targetDateTime;
};

const limit0to1 = (heightPercentage: number): number => {
  if (heightPercentage < 0) {
    return (heightPercentage = 0);
  } else if (heightPercentage > 1) {
    return (heightPercentage = 1);
  } else {
    return heightPercentage;
  }
};

export const getEventId = (eventCardId: string): number => {
  return parseInt(eventCardId.split('-')[1])
}

export const ModalLeftOrRight = (eventCardData: DOMRect): number => {
  const max = window.innerWidth
  const min = 0
  const gap = 5
  if (eventCardData.right + 448 > max) {
    return eventCardData.left - (448 + gap)
  } else if (eventCardData.left - 448 < min) {
    return eventCardData.right + gap
  } else {
    return eventCardData.right + gap
  }
}

export const searchEventId = (id: number, eventData: APIDataObject): EventProps => {
  const allKeys = Object.keys(eventData)
  let searchEvent;
  allKeys.forEach((date)=>{
    eventData[date].forEach((event)=>{
      if (event.id === id) {
        searchEvent = event
      }
    })
  })
  return searchEvent
}

export const deleteEventId = (id: number, eventData: APIDataObject): APIDataObject => {
  const allKeys = Object.keys(eventData)
  let deleteEvent;
  allKeys.forEach((date)=>{
    eventData[date].forEach((event,index)=>{
      if (event.id === id) {
        eventData[date].splice(index,1)
      }
    })
  })
  return eventData
}