import React, { createContext, useEffect, useState } from "react";

const calendarIds = [1, 2, 3, 4];

// currently hardcoded
const calendarNameIdMap = {};

const calendarIndexOptions = [];

const test = ["Work", "Side Projects", "Family", "Exercise"];

interface CalendarType {
    id: number;
    tag: string;
    created_at: Date;
    updated_at: Date;
}

export const UserCalendarIndexContext = createContext<string[]>([]);
export const UserCalendarMappingContext = createContext<{
    [key in string]: number;
}>({});

export const UserDataProvider = ({ children }) => {
    const [calendarIndex, setCalendarIndex] = useState<string[]>([]);
    const [calendarIdMap, setCalendarIdMap] = useState<{
        [key in string]: number;
    }>({});

    useEffect(() => {
        fetch("http://localhost:3000/api/v1/calendars/")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not okay");
                }
                return response.json();
            })
            .then((data) => {
                const allData = handleCalendarData(data);
                setCalendarIndex(allData.calendarIndexOptions);
                setCalendarIdMap(allData.calendarNameIdMap);
            })
            .catch((error) => {
                console.log("Fetch error:", error);
            });
    });

    const handleCalendarData = (jsonObject: CalendarType[]) => {
        const calendarNameIdMap: any = {};
        const calendarIndexOptions: string[] = [];
        const calendarIdOptions: number[] = [];

        jsonObject.map((item) => {
            calendarIndexOptions.push(item.tag);
            calendarIdOptions.push(item.id);
            calendarNameIdMap[item.tag] = item.id;
        });

        return { calendarNameIdMap, calendarIndexOptions, calendarIdOptions };
    };

    return (
        <>
            <UserCalendarIndexContext.Provider value={calendarIndex}>
                <UserCalendarMappingContext.Provider value={calendarIdMap}>
                    {children}
                </UserCalendarMappingContext.Provider>
            </UserCalendarIndexContext.Provider>
        </>
    );
};
