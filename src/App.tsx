import React from 'react'
import { Sidebar } from "./components/Sidebar/Sidebar";
import { BaseCalendar } from "./components/Calendar/Calendar";
import { ViewProps } from './components/types/calendar';

  
const CalendarViewSettings: ViewProps = {
    times: ['12AM', '1AM', '2AM', '3AM', '4AM', '5AM', '6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM', '9PM', '10PM', '11PM'],
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday','Friday','Saturday','Sunday']
}

export default function App() {
  return (
    <div className="flex flex-row w-screen h-screen">
      <Sidebar />
      <BaseCalendar times={CalendarViewSettings['times']} days={CalendarViewSettings['days']} />
    </div>
  )
}
