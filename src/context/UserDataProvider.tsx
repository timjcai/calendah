import React, { createContext, useEffect, useState } from "react";
import { CalendarData } from "../components/types";
import { Calendar } from "react-widgets/cjs";

const calendarIds = [1, 2, 3, 4];

// currently hardcoded
const calendarNameIdMap = {};

const calendarIndexOptions = [];

const test = ["Work", "Side Projects", "Family", "Exercise"];

export const UserCalendarIndexContext = createContext<string[]>([]);
export const UserCalendarMappingContext = createContext<{
    [key in string]: number;
}>({});
export const AllUserCalendarContext = createContext([]);

export const UserDataProvider = ({ children }) => {
    const [calendarIndex, setCalendarIndex] = useState<string[]>([]);
    const [calendarIdMap, setCalendarIdMap] = useState<{
        [key in string]: number;
    }>({});
    const [allCalendarData, setAllCalendarData] = useState<CalendarData[]>([]);

    useEffect(() => {
        fetch("http://localhost:3000/api/v1/calendars/")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not okay");
                }
                return response.json();
            })
            .then((data) => {
                setAllCalendarData(data);
                const allData = handleCalendarData(data);
                setCalendarIndex(allData.calendarIndexOptions);
                setCalendarIdMap(allData.calendarNameIdMap);
            })
            .catch((error) => {
                console.log("Fetch error:", error);
            });
    }, []);

    const handleCalendarData = (jsonObject: CalendarData[]) => {
        const calendarNameIdMap: any = {};
        const calendarIndexOptions: string[] = [];
        const calendarIdOptions: number[] = [];

        jsonObject.map((item) => {
            calendarIndexOptions.push(item.tag);
            calendarIdOptions.push(item.id);
            calendarNameIdMap[item.tag] = item.id;
        });

        return {
            calendarNameIdMap,
            calendarIndexOptions,
            calendarIdOptions,
        };
    };

    return (
        <>
            <AllUserCalendarContext.Provider value={allCalendarData}>
                <UserCalendarIndexContext.Provider value={calendarIndex}>
                    <UserCalendarMappingContext.Provider value={calendarIdMap}>
                        {children}
                    </UserCalendarMappingContext.Provider>
                </UserCalendarIndexContext.Provider>
            </AllUserCalendarContext.Provider>
        </>
    );
};
