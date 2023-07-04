import React, {createContext} from 'react'
import settings from '../db/settings.json'

export const StartDayContext = createContext(settings.start_of_the_week)

export const TimezoneContext = createContext(settings.time_zone)

export const ViewSizeContext = createContext(settings.view_size)

