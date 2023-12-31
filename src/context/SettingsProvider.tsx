import React, { FC, createContext, useState, useEffect } from "react";
import settings from "../db/settings.json";
import { convertTime } from "../utils";

export const TimezoneContext = createContext(settings.time_zone);

export const StartDayContext = createContext(settings.start_of_the_week);

export const ViewSizeContext = createContext(settings.view_size);

export const DisplayTimeContext = createContext(settings.display_time);

export const SettingsProvider = ({ children }) => {
    const [viewSize, setViewSize] = useState(settings.view_size);
    const [startDay, setStartDay] = useState(settings.start_of_the_week);
    const [timezone, setTimezone] = useState(settings.time_zone);
    const [displayTime, setDisplayTime] = useState(settings.display_time);

    return (
        <TimezoneContext.Provider value={timezone}>
            <StartDayContext.Provider value={startDay}>
                <ViewSizeContext.Provider value={viewSize}>
                    <DisplayTimeContext.Provider value={displayTime}>
                        {children}
                    </DisplayTimeContext.Provider>
                </ViewSizeContext.Provider>
            </StartDayContext.Provider>
        </TimezoneContext.Provider>
    );
};
