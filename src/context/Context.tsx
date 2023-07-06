import React, {createContext} from 'react'
import settings from '../db/settings.json'
import { thisWeek } from '../utils/DateUtils'

export const TimezoneContext = createContext(settings.time_zone)

export const StartDayContext = createContext(settings.start_of_the_week)

export const ViewSizeContext = createContext(settings.view_size)

export const WeekContext = createContext(thisWeek(new Date(), settings.view_size))

export const TodayContext = createContext(new Date())
