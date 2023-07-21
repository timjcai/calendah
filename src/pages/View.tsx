import React, { useState, useEffect } from "react";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { BaseCalendar } from "../components/Calendar/Calendar";
import { NavWrapper, NavButton, NavMapping } from "../components/Navbar/Navbar";

import { ViewProps } from "../components/types";
import {
    WeekContext,
    TodayContext,
    ViewSizeContext,
    SelectDateContext,
    EventContext,
} from "../context/Context";
import { generateStartandEndDate, thisWeek } from "../utils/DateUtils";

import DatePicker from "react-widgets/DatePicker";
import Calendar from "react-widgets/Calendar";
import settings from "../db/settings.json";
import { SettingsProvider } from "../context/SettingsProvider";

export const CalendarViewSettings: ViewProps = {
    times: [
        "12 AM",
        "1 AM",
        "2 AM",
        "3 AM",
        "4 AM",
        "5 AM",
        "6 AM",
        "7 AM",
        "8 AM",
        "9 AM",
        "10 AM",
        "11 AM",
        "12 PM",
        "1 PM",
        "2 PM",
        "3 PM",
        "4 PM",
        "5 PM",
        "6 PM",
        "7 PM",
        "8 PM",
        "9 PM",
        "10 PM",
        "11 PM",
    ],
};

export const View = () => {
    const [viewSize, setViewSize] = useState(settings.view_size);
    const [todayDate, setTodayDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(todayDate);
    const [dateRange, setDateRange] = useState(
        thisWeek(selectedDate, viewSize)
    );
    const [startDate, setStartDate] = useState(
        generateStartandEndDate(dateRange)[0]
    );
    const [endDate, setEndDate] = useState(
        generateStartandEndDate(dateRange)[1]
    );
    const [calendarEvents, setCalendarEvents] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const updateInputValue = (date: Date) => {
        console.log("updating date range");
        setSelectedDate(date);
        setDateRange(thisWeek(selectedDate, viewSize));
        setStartDate(generateStartandEndDate(dateRange)[0]);
        setEndDate(generateStartandEndDate(dateRange)[1]);
    };

    useEffect(() => {
        const url = `http://localhost:3000/api/v1/calendars/1/events/${startDate}/${endDate}`;
        console.log(url);
        fetch(url)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw response;
            })
            .then((data) => {
                console.log(data);
                setCalendarEvents(data);
            })
            .catch((error) => {
                console.log("Error fetching data: ", error);
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [dateRange]);

    if (loading) return "Loading...";
    if (error) return "Error!";

    return (
        <SettingsProvider>
            <WeekContext.Provider value={dateRange}>
                <TodayContext.Provider value={todayDate}>
                    <SelectDateContext.Provider value={selectedDate}>
                        <EventContext.Provider value={calendarEvents}>
                            <NavWrapper>
                                <NavButton navigation={NavMapping["new"]} />
                                <div>
                                    <DatePicker
                                        defaultValue={todayDate}
                                        valueFormat={{ dateStyle: "medium" }}
                                        onChange={(
                                            value: Date | null | undefined
                                        ) => updateInputValue(value)}
                                    />
                                </div>
                                <div>
                                    <NavButton
                                        navigation={NavMapping["calendar"]}
                                    />
                                    <NavButton
                                        navigation={NavMapping["settings"]}
                                    />
                                    <NavButton
                                        navigation={NavMapping["test"]}
                                    />
                                </div>
                            </NavWrapper>
                            <div className="flex flex-row w-screen h-screen">
                                <Sidebar>
                                    <Calendar
                                        defaultValue={todayDate}
                                        onChange={updateInputValue}
                                    />
                                </Sidebar>
                                <BaseCalendar
                                    times={CalendarViewSettings["times"]}
                                />
                            </div>
                        </EventContext.Provider>
                    </SelectDateContext.Provider>
                </TodayContext.Provider>
            </WeekContext.Provider>
        </SettingsProvider>
    );
};
