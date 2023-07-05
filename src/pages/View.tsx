import React from 'react'
import { Sidebar } from '../components/Sidebar/Sidebar'
import { BaseCalendar } from '../components/Calendar/Calendar'
import { ViewProps } from '../components/types'
import { WeekContext } from '../context/Context'
import { thisWeek } from '../utils/DateUtils'

const CalendarViewSettings: ViewProps = {
    times: ['12 AM', '1 AM', '2 AM', '3 AM', '4 AM', '5 AM', '6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM', '9 PM', '10 PM', '11 PM'],
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday','Friday','Saturday','Sunday']
}

export const View = () => {
  return (
    <WeekContext.Provider value={thisWeek(new Date())}>
      <div className="flex flex-row w-screen h-screen">
          <Sidebar />
          <BaseCalendar times={CalendarViewSettings['times']} days={CalendarViewSettings['days']} />
      </div>
    </WeekContext.Provider>

  )
}
