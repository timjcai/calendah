import React from "react";
import styled from "styled-components";
import { getAllDaysOfCurrentMonth } from "../../utils";
import { DPCell, DPGrid, DPRow, DateBox } from "./DatePicker.styles";

export const DatePicker = () => {
    const daysOfCurrentMonth = getAllDaysOfCurrentMonth();

    const week1 = daysOfCurrentMonth.slice(0, 1);
    const week2 = daysOfCurrentMonth.slice(1, 8);
    const week3 = daysOfCurrentMonth.slice(8, 15);
    const week4 = daysOfCurrentMonth.slice(15, 22);
    const week5 = daysOfCurrentMonth.slice(22, 29);
    const week6 = daysOfCurrentMonth.slice(29, 31);

    const daysofWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    const generateWeeks = (dates: Date[]) => {
        const allWeeks: Date[][] = [];
        let thisWeek = new Array(7).fill(null);
        let week = 0;
        console.log(dates.length);
        for (let i = 0; i < dates.length; i++) {
            const date = dates[i];
            const day = date.getDay();
            console.log(thisWeek);
            if (day === 0) {
                allWeeks[week] = thisWeek;
                week++;
                thisWeek = new Array(7).fill(null);
            }
            thisWeek[day] = date;
        }
        allWeeks[week] = thisWeek;
        return allWeeks;
    };

    const weeklyBreakdown = generateWeeks(daysOfCurrentMonth);
    console.log(weeklyBreakdown);

    return (
        <DateBox>
            <h1>datepicker</h1>
            <div>
                <h1>(Month YYYY)</h1>
            </div>
            <DPGrid>
                <DatesHeaderRow />
                <DatesRow dates={weeklyBreakdown[0]} />
                <DatesRow dates={weeklyBreakdown[1]} />
                <DatesRow dates={weeklyBreakdown[2]} />
                <DatesRow dates={weeklyBreakdown[3]} />
                <DatesRow dates={weeklyBreakdown[4]} />
                <DatesRow dates={weeklyBreakdown[5]} />
            </DPGrid>
        </DateBox>
    );
};

export const DatesHeaderRow = () => {
    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];

    const firstletter = (word: string): string => {
        return word.charAt(0).toUpperCase().concat(word.charAt(1));
    };

    return (
        <DPRow>
            {days.map((day) => {
                return (
                    <DPCell id={day}>
                        <span>{firstletter(day)}</span>
                    </DPCell>
                );
            })}
        </DPRow>
    );
};

export const DatesRow = ({ dates }) => {
    let count = 0;

    return (
        <DPRow>
            {dates.map((date) => {
                if (date === null) {
                    return (
                        <DPCell key={count}>
                            <span></span>
                        </DPCell>
                    );
                } else {
                    return (
                        <DPCell id={date}>
                            <span>{date.getDate()}</span>
                        </DPCell>
                    );
                }
                count++;
            })}
        </DPRow>
    );
};
