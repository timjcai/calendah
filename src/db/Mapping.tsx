import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import { BCP47Type, InputType, daysType, monthType, timezoneData } from "../components/types"
import { faBell, faCalendar, faComment, faFolderOpen, faUser } from "@fortawesome/free-regular-svg-icons"
import { faC, faClock, faHeading, faLocationDot, faMagnifyingGlass, faVideo } from "@fortawesome/free-solid-svg-icons"

export const dayAbbreviations: {[key in daysType]: string } = {
    Sunday: 'SUN',
    Monday: 'MON',
    Tuesday: 'TUE',
    Wednesday: 'WED',
    Thursday: 'THU',
    Friday: 'FRI',
    Saturday: 'SAT',
}

export const dayMappingFromIndex: daysType[] = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
]

export const monthAbbreviations: {[key in monthType]: string } = {
    January: 'JAN',
    February: 'FEB',
    March: 'MAR',
    April: 'APR',
    May: 'MAY',
    June: 'JUN',
    July: 'JUL',
    August: 'AUG',
    September: 'SEP',
    October: 'OCT',
    November: 'NOV',
    December: 'DEC',
}

export const monthMappingFromIndex: monthType[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
]

export const iconMapping: {[key in InputType]: IconDefinition} = {
    location: faLocationDot,
    meeting: faVideo,
    notification: faBell,
    calendar: faCalendar,
    description: faComment,
    attachments: faFolderOpen,
    guests: faUser,
    search: faMagnifyingGlass,
    title: faHeading,
    datetime: faClock
}

export const languageDataMapping: {[key in BCP47Type]: timezoneData } = {
    'ar-SA': { language: 'Arabic Saudi Arabia', timezone: 'UTC+03:00', conversion: '+03:00' },
    'cs-CZ': { language: 'Czech Czech Republic', timezone: 'UTC+02:00', conversion: '+02:00' },
    'da-DK': { language: 'Danish Denmark', timezone: 'UTC+02:00', conversion: '+02:00' },
    'de-DE': { language: 'German Germany', timezone: 'UTC+02:00', conversion: '+02:00' },
    'el-GR': { language: 'Modern Greek Greece', timezone: 'UTC+03:00', conversion: '+03:00' },
    'en-AU': { language: 'English Australia', timezone: 'UTC+10:00', conversion: '+10:00' },
    'en-GB': { language: 'English United Kingdom', timezone: 'UTC+01:00', conversion: '+01:00' },
    'en-IE': { language: 'English Ireland', timezone: 'UTC+01:00', conversion: '+01:00' },
    'en-US': { language: 'English United States', timezone: 'UTC-04:00', conversion: '-04:00' },
    'en-ZA': { language: 'English South Africa', timezone: 'UTC+02:00', conversion: '+02:00' },
    'es-ES': { language: 'Spanish Spain', timezone: 'UTC+02:00', conversion: '+02:00' },
    'es-MX': { language: 'Spanish Mexico', timezone: 'UTC-05:00', conversion: '-05:00' },
    'fi-FI': { language: 'Finnish Finland', timezone: 'UTC+03:00', conversion: '+03:00' },
    'fr-CA': { language: 'French Canada', timezone: 'UTC-04:00', conversion: '-04:00' },
    'fr-FR': { language: 'French France', timezone: 'UTC+02:00', conversion: '+02:00' },
    'he-IL': { language: 'Hebrew Israel', timezone: 'UTC+03:00', conversion: '+03:00' },
    'hi-IN': { language: 'Hindi India', timezone: 'UTC+05:30', conversion: '+05:30' },
    'hu-HU': { language: 'Hungarian Hungary', timezone: 'UTC+02:00', conversion: '+02:00' },
    'id-ID': { language: 'Indonesian Indonesia', timezone: 'UTC+07:00', conversion: '+07:00' },
    'it-IT': { language: 'Italian Italy', timezone: 'UTC+02:00', conversion: '+02:00' },
    'ja-JP': { language: 'Japanese Japan', timezone: 'UTC+09:00', conversion: '+09:00' },
    'ko-KR': { language: 'Korean Republic of Korea', timezone: 'UTC+09:00', conversion: '+09:00' },
    'nl-BE': { language: 'Dutch Belgium', timezone: 'UTC+02:00', conversion: '+02:00' },
    'nl-NL': { language: 'Dutch Netherlands', timezone: 'UTC+02:00', conversion: '+02:00' },
    'no-NO': { language: 'Norwegian Norway', timezone: 'UTC+02:00', conversion: '+02:00' },
    'pl-PL': { language: 'Polish Poland', timezone: 'UTC+02:00', conversion: '+02:00' },
    'pt-BR': { language: 'Portuguese Brazil', timezone: 'UTC-03:00', conversion: '-03:00' },
    'pt-PT': { language: 'Portuguese Portugal', timezone: 'UTC+01:00', conversion: '+01:00' },
    'ro-RO': { language: 'Romanian Romania', timezone: 'UTC+03:00', conversion: '+03:00' },
    'ru-RU': { language: 'Russian Russian Federation', timezone: 'UTC+03:00', conversion: '+03:00' },
    'sk-SK': { language: 'Slovak Slovakia', timezone: 'UTC+02:00', conversion: '+02:00' },
    'sv-SE': { language: 'Swedish Sweden', timezone: 'UTC+02:00', conversion: '+02:00' },
    'th-TH': { language: 'Thai Thailand', timezone: 'UTC+07:00', conversion: '+07:00' },
    'tr-TR': { language: 'Turkish Turkey', timezone: 'UTC+03:00', conversion: '+03:00' },
    'zh-CN': { language: 'Chinese China', timezone: 'UTC+08:00', conversion: '+08:00' },
    'zh-HK': { language: 'Chinese Hong Kong', timezone: 'UTC+08:00', conversion: '+08:00' },
    'zh-TW': { language: 'Chinese Taiwan', timezone: 'UTC+08:00', conversion: '+08:00' }
};

export const hotkeyMapping : {[key in string]: HotkeyType} = {
    
}

