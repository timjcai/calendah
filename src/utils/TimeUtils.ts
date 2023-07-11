import settings from '../db/settings.json'
import { languageDataMapping } from '../db/Mapping'
import { timezoneType } from '../components/types'
import { addZero } from './DateUtils'

export function convertTime(timezone: timezoneType, date: Date) {
    if (languageDataMapping[timezone]) {
        console.log(languageDataMapping[timezone])
        console.log(date.toUTCString())
        console.log(date.getHours())
    } else {
        console.log('error, incorrect timezone provided')
    }
}

export function getLocalHour(date: Date) {
    return date.getHours()
}

export function getLocalMinute(date: Date) {
    return date.getMinutes()
}

export function getLocalTime(date: Date) {
    const hours = date.getHours()
    const minutes = date.getMinutes()
    if ( hours > 12) {
        return `${addZero(hours - 12)}:${addZero(minutes)} PM`;
    } else {
        return `${addZero(hours)}:${addZero(minutes)} AM`;
    }
}

export function closest15min(input: Date): string {
    const minutes = addZero((Math.round(input.getMinutes()/15) * 15) % 60);
    const hours = input.getHours()

    return `${hours}:${minutes}`
}

export function convert24to12time(input: Date|string): string {
    const array = input.toString().split(':')
    const hours = parseInt(array[0])
    const minutes = parseInt(array[1])
    if ( hours > 12) {
         return `${addZero(hours - 12)}:${addZero(minutes)} PM`;
    } else {
         return `${addZero(hours)}:${addZero(minutes)} AM`;
    }
 }