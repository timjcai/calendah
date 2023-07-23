import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
    BCP47Type,
    InputType,
    SettingsType,
    daysType,
    monthType,
    timezoneData,
} from "../components/types";
import {
    faBell,
    faCalendar,
    faComment,
    faFolderOpen,
    faUser,
} from "@fortawesome/free-regular-svg-icons";
import {
    faAddressCard,
    faC,
    faCircleXmark,
    faClock,
    faEarthOceania,
    faGear,
    faHeading,
    faKey,
    faKeyboard,
    faLanguage,
    faLink,
    faLocationDot,
    faMagnifyingGlass,
    faPalette,
    faPenToSquare,
    faSliders,
    faTrash,
    faVideo,
} from "@fortawesome/free-solid-svg-icons";

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

export const timeMappings12to24 = {
    "12 AM": "12:00",
    "1 AM": "01:00",
    "2 AM": "02:00",
    "3 AM": "03:00",
    "4 AM": "04:00",
    "5 AM": "05:00",
    "6 AM": "06:00",
    "7 AM": "07:00",
    "8 AM": "08:00",
    "9 AM": "09:00",
    "10 AM": "10:00",
    "11 AM": "11:00",
    "12 PM": "12:00",
    "1 PM": "13:00",
    "2 PM": "14:00",
    "3 PM": "15:00",
    "4 PM": "16:00",
    "5 PM": "17:00",
    "6 PM": "18:00",
    "7 PM": "19:00",
    "8 PM": "20:00",
    "9 PM": "21:00",
    "10 PM": "22:00",
    "11 PM": "23:00",
};

export const iconMapping: { [key in InputType]: IconDefinition } = {
    location: faLocationDot,
    meeting: faVideo,
    notification: faBell,
    calendar: faCalendar,
    description: faComment,
    attachments: faFolderOpen,
    guests: faUser,
    search: faMagnifyingGlass,
    title: faHeading,
    datetime: faClock,
    edit: faPenToSquare,
    exit: faCircleXmark,
    settings: faGear,
    delete: faTrash,
};

export const settingsIconMapping: { [key in SettingsType]: IconDefinition } = {
    Profile: faUser,
    "Passwords & Security": faKey,
    "Language & Region": faLanguage,
    Timezone: faEarthOceania,
    "Viewing Options": faSliders,
    "Default Event": faAddressCard,
    "Calendar Colors": faPalette,
    Notifications: faBell,
    "Keyboard Shortcuts": faKeyboard,
    Integrations: faLink,
};

export const languageDataMapping: { [key in BCP47Type]: timezoneData } = {
    "ar-SA": {
        language: "Arabic Saudi Arabia",
        timezone: "UTC+03:00",
        conversion: "+03:00",
    },
    "cs-CZ": {
        language: "Czech Czech Republic",
        timezone: "UTC+02:00",
        conversion: "+02:00",
    },
    "da-DK": {
        language: "Danish Denmark",
        timezone: "UTC+02:00",
        conversion: "+02:00",
    },
    "de-DE": {
        language: "German Germany",
        timezone: "UTC+02:00",
        conversion: "+02:00",
    },
    "el-GR": {
        language: "Modern Greek Greece",
        timezone: "UTC+03:00",
        conversion: "+03:00",
    },
    "en-AU": {
        language: "English Australia",
        timezone: "UTC+10:00",
        conversion: "+10:00",
    },
    "en-GB": {
        language: "English United Kingdom",
        timezone: "UTC+01:00",
        conversion: "+01:00",
    },
    "en-IE": {
        language: "English Ireland",
        timezone: "UTC+01:00",
        conversion: "+01:00",
    },
    "en-US": {
        language: "English United States",
        timezone: "UTC-04:00",
        conversion: "-04:00",
    },
    "en-ZA": {
        language: "English South Africa",
        timezone: "UTC+02:00",
        conversion: "+02:00",
    },
    "es-ES": {
        language: "Spanish Spain",
        timezone: "UTC+02:00",
        conversion: "+02:00",
    },
    "es-MX": {
        language: "Spanish Mexico",
        timezone: "UTC-05:00",
        conversion: "-05:00",
    },
    "fi-FI": {
        language: "Finnish Finland",
        timezone: "UTC+03:00",
        conversion: "+03:00",
    },
    "fr-CA": {
        language: "French Canada",
        timezone: "UTC-04:00",
        conversion: "-04:00",
    },
    "fr-FR": {
        language: "French France",
        timezone: "UTC+02:00",
        conversion: "+02:00",
    },
    "he-IL": {
        language: "Hebrew Israel",
        timezone: "UTC+03:00",
        conversion: "+03:00",
    },
    "hi-IN": {
        language: "Hindi India",
        timezone: "UTC+05:30",
        conversion: "+05:30",
    },
    "hu-HU": {
        language: "Hungarian Hungary",
        timezone: "UTC+02:00",
        conversion: "+02:00",
    },
    "id-ID": {
        language: "Indonesian Indonesia",
        timezone: "UTC+07:00",
        conversion: "+07:00",
    },
    "it-IT": {
        language: "Italian Italy",
        timezone: "UTC+02:00",
        conversion: "+02:00",
    },
    "ja-JP": {
        language: "Japanese Japan",
        timezone: "UTC+09:00",
        conversion: "+09:00",
    },
    "ko-KR": {
        language: "Korean Republic of Korea",
        timezone: "UTC+09:00",
        conversion: "+09:00",
    },
    "nl-BE": {
        language: "Dutch Belgium",
        timezone: "UTC+02:00",
        conversion: "+02:00",
    },
    "nl-NL": {
        language: "Dutch Netherlands",
        timezone: "UTC+02:00",
        conversion: "+02:00",
    },
    "no-NO": {
        language: "Norwegian Norway",
        timezone: "UTC+02:00",
        conversion: "+02:00",
    },
    "pl-PL": {
        language: "Polish Poland",
        timezone: "UTC+02:00",
        conversion: "+02:00",
    },
    "pt-BR": {
        language: "Portuguese Brazil",
        timezone: "UTC-03:00",
        conversion: "-03:00",
    },
    "pt-PT": {
        language: "Portuguese Portugal",
        timezone: "UTC+01:00",
        conversion: "+01:00",
    },
    "ro-RO": {
        language: "Romanian Romania",
        timezone: "UTC+03:00",
        conversion: "+03:00",
    },
    "ru-RU": {
        language: "Russian Russian Federation",
        timezone: "UTC+03:00",
        conversion: "+03:00",
    },
    "sk-SK": {
        language: "Slovak Slovakia",
        timezone: "UTC+02:00",
        conversion: "+02:00",
    },
    "sv-SE": {
        language: "Swedish Sweden",
        timezone: "UTC+02:00",
        conversion: "+02:00",
    },
    "th-TH": {
        language: "Thai Thailand",
        timezone: "UTC+07:00",
        conversion: "+07:00",
    },
    "tr-TR": {
        language: "Turkish Turkey",
        timezone: "UTC+03:00",
        conversion: "+03:00",
    },
    "zh-CN": {
        language: "Chinese China",
        timezone: "UTC+08:00",
        conversion: "+08:00",
    },
    "zh-HK": {
        language: "Chinese Hong Kong",
        timezone: "UTC+08:00",
        conversion: "+08:00",
    },
    "zh-TW": {
        language: "Chinese Taiwan",
        timezone: "UTC+08:00",
        conversion: "+08:00",
    },
};

export const hotkeyMapping: { [key in string]: HotkeyType } = {};
