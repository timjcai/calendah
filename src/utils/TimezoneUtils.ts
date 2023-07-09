import settings from '../db/settings.json'
import { languageDataMapping } from '../db/Mapping'
import { timezoneType } from '../components/types'

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