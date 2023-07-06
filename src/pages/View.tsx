import React, {useState, useEffect} from 'react'
import { Sidebar } from '../components/Sidebar/Sidebar'
import { BaseCalendar } from '../components/Calendar/Calendar'
import { NavWrapper, NavButton, NavMapping } from '../components/Navbar/Navbar'

import { ViewProps } from '../components/types'
import { WeekContext, TodayContext, ViewSizeContext, SelectDateContext } from '../context/Context'
import { generateStartandEndDate, thisWeek } from '../utils/DateUtils'

import DatePicker from "react-widgets/DatePicker";
import Calendar from "react-widgets/Calendar";
import settings from '../db/settings.json'
import { DateFormats } from 'react-widgets/esm/Localization'

const CalendarViewSettings: ViewProps = {
    times: ['12 AM', '1 AM', '2 AM', '3 AM', '4 AM', '5 AM', '6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM', '9 PM', '10 PM', '11 PM']
}

export const View = () => {
  const [viewSize, setViewSize] = useState(settings.view_size)
  const [todayDate, setTodayDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState(todayDate)
  const [dateRange, setDateRange] = useState(thisWeek(selectedDate, viewSize))
  const [startDate, setStartDate] = useState(generateStartandEndDate(dateRange)[0])
  const [endDate, setEndDate] = useState(generateStartandEndDate(dateRange)[1])
  const [calendarEvents, setCalendarEvents] = useState('')

    
  const updateInputValue = (date: Date) => {
      setSelectedDate(date)
  }

  useEffect(() => {
    setDateRange(thisWeek(selectedDate, viewSize))
    setStartDate(generateStartandEndDate(dateRange)[0])
    setEndDate(generateStartandEndDate(dateRange)[1])
    console.log(startDate)
    console.log(endDate)
  }, [selectedDate])

    useEffect(()=> {
      fetch(`http://localhost:3000/api/v1/calendars/1/events/${startDate}/${endDate}`)
      .then(response => response.json())
      .then(data => setCalendarEvents(data))
      .catch(error => console.log(error))
  
      console.log(calendarEvents)
    },[dateRange])


  return (
    <ViewSizeContext.Provider value={viewSize}>
      <WeekContext.Provider value={dateRange}>
        <TodayContext.Provider value={todayDate}>
          <SelectDateContext.Provider value={selectedDate}>
            <NavWrapper>
                <NavButton navigation = {NavMapping['new']}/>
                <div>
                  <DatePicker
                      defaultValue={todayDate}
                      valueFormat={{ dateStyle: "medium" }}
                      onChange={(value: Date) => updateInputValue(value) }
                  />
                </div>
                <div>
                    <NavButton navigation = {NavMapping['calendar']}/>
                    <NavButton navigation = {NavMapping['settings']}/>
                    <NavButton navigation = {NavMapping['test']}/>
                </div>
            </NavWrapper>
            <div className="flex flex-row w-screen h-screen">
                {/* <Sidebar /> */}
                <Calendar 
                  defaultValue={todayDate}
                  onChange={updateInputValue}
                  />
                <BaseCalendar times={CalendarViewSettings['times']} />
            </div>
          </SelectDateContext.Provider>
        </TodayContext.Provider>
      </WeekContext.Provider>
    </ViewSizeContext.Provider>

  )
}
