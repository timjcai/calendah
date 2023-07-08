import React, {createContext, useEffect, useState} from 'react'
import settings from '../db/settings.json'
import {generateStartandEndDate, thisWeek} from '../utils'
import CalendarView from 'react-widgets/esm/CalendarView'

export const WeekContext = createContext(thisWeek(new Date(), settings.view_size))

export const TodayContext = createContext(new Date())

export const SelectDateContext = createContext(new Date())

export const CalendarViewProvider = ({children}) => {
    const [viewSize, setViewSize] = useState(settings.view_size)
    const [todayDate, setTodayDate] = useState(new Date())
    const [selectedDate, setSelectedDate] = useState(todayDate)
    const [dateRange, setDateRange] = useState(thisWeek(selectedDate, viewSize))
    const [startDate, setStartDate] = useState(generateStartandEndDate(dateRange)[0])
    const [endDate, setEndDate] = useState(generateStartandEndDate(dateRange)[1])
    const [calendarEvents, setCalendarEvents] = useState(null)
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const value = {
        viewSize,
        setViewSize,
        todayDate,
        setTodayDate,
        selectedDate,
        setSelectedDate,
        dateRange,
        setDateRange,
        startDate,
        setStartDate,
        endDate,
        setEndDate,
        calendarEvents,
        setCalendarEvents,
        error,
        setError,
        loading,
        setLoading
    }

    useEffect(() => {
        setDateRange(thisWeek(selectedDate, viewSize))
        setStartDate(generateStartandEndDate(dateRange)[0])
        setEndDate(generateStartandEndDate(dateRange)[1])
    }, [selectedDate])

    useEffect(()=> {
        fetch(`http://localhost:3000/api/v1/calendars/1/events/${startDate}/${endDate}`)
            .then (response => {
                if (response.ok) {
                    return response.json()
                }
                throw response;
            })
            .then (data => {
                // console.log(data)
                setCalendarEvents(data)
            })
            .catch(error => {
                console.log("Error fetching data: ", error);
                setError(error);
            }) 
            .finally(()=> {
              setLoading(false);
            })
      },[selectedDate])
    
      if (loading) return "Loading...";
      if (error) return "Error!"

    return (
        <WeekContext.Provider value={value}>
            {children}
        </WeekContext.Provider>
    );
}