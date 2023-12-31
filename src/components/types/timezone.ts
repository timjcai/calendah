export interface timezoneData {
  language: CountryLanguageType;
  timezone: timezoneType;
  conversion: string;
}

export type BCP47Type =
  | "ar-SA"
  | "cs-CZ"
  | "da-DK"
  | "de-DE"
  | "el-GR"
  | "en-AU"
  | "en-GB"
  | "en-IE"
  | "en-US"
  | "en-ZA"
  | "es-ES"
  | "es-MX"
  | "fi-FI"
  | "fr-CA"
  | "fr-FR"
  | "he-IL"
  | "hi-IN"
  | "hu-HU"
  | "id-ID"
  | "it-IT"
  | "ja-JP"
  | "ko-KR"
  | "nl-BE"
  | "nl-NL"
  | "no-NO"
  | "pl-PL"
  | "pt-BR"
  | "pt-PT"
  | "ro-RO"
  | "ru-RU"
  | "sk-SK"
  | "sv-SE"
  | "th-TH"
  | "tr-TR"
  | "zh-CN"
  | "zh-HK"
  | "zh-TW";

export type CountryLanguageType =
  | "Arabic Saudi Arabia"
  | "Czech Czech Republic"
  | "Danish Denmark"
  | "German Germany"
  | "Modern Greek Greece"
  | "English Australia"
  | "English United Kingdom"
  | "English Ireland"
  | "English United States"
  | "English South Africa"
  | "Spanish Spain"
  | "Spanish Mexico"
  | "Finnish Finland"
  | "French Canada"
  | "French France"
  | "Hebrew Israel"
  | "Hindi India"
  | "Hungarian Hungary"
  | "Indonesian Indonesia"
  | "Italian Italy"
  | "Japanese Japan"
  | "Korean Republic of Korea"
  | "Dutch Belgium"
  | "Dutch Netherlands"
  | "Norwegian Norway"
  | "Polish Poland"
  | "Portuguese Brazil"
  | "Portuguese Portugal"
  | "Romanian Romania"
  | "Russian Russian Federation"
  | "Slovak Slovakia"
  | "Swedish Sweden"
  | "Thai Thailand"
  | "Turkish Turkey"
  | "Chinese China"
  | "Chinese Hong Kong"
  | "Chinese Taiwan";

export type timezoneType =
  | "UTC-12:00"
  | "UTC-11:00"
  | "UTC-10:00"
  | "UTC-09:30"
  | "UTC-09:00"
  | "UTC-08:00"
  | "UTC-07:00"
  | "UTC-06:00"
  | "UTC-05:00"
  | "UTC-04:00"
  | "UTC-03:30"
  | "UTC-03:00"
  | "UTC-02:00"
  | "UTC-01:00"
  | "UTC+00:00"
  | "UTC+01:00"
  | "UTC+02:00"
  | "UTC+03:00"
  | "UTC+03:30"
  | "UTC+04:00"
  | "UTC+04:30"
  | "UTC+05:00"
  | "UTC+05:30"
  | "UTC+05:45"
  | "UTC+06:00"
  | "UTC+06:30"
  | "UTC+07:00"
  | "UTC+08:00"
  | "UTC+08:30"
  | "UTC+08:45"
  | "UTC+09:00"
  | "UTC+09:30"
  | "UTC+10:00"
  | "UTC+10:30"
  | "UTC+11:00"
  | "UTC+11:30"
  | "UTC+12:00"
  | "UTC+12:45"
  | "UTC+13:00"
  | "UTC+14:00";
