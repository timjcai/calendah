import React, { useState } from "react";
import styled from "styled-components";
import { getAllDaysOfCurrentMonth } from "../../utils";
import { DPCell, DPGrid, DPRow, DateBox, Spanner } from "./DatePicker.styles";

export const DatePicker = () => {
    const daysOfCurrentMonth = getAllDaysOfCurrentMonth();
    const [selectedDate, setSelectedDate] = useState(new Date());

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
        for (let i = 0; i < dates.length; i++) {
            const date = dates[i];
            const day = date.getDay();
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

    const handleClick = (e) => {
        const target = e.target.id;
        if (target !== null) {
            console.log(new Date(target));
            setSelectedDate(new Date(target));
        }
    };

    return (
        <DateBox>
            <h1>datepicker</h1>
            <div>
                <h1>(Month YYYY)</h1>
            </div>
            <DPGrid>
                <DatesHeaderRow />
                <DatesRow
                    dates={weeklyBreakdown[0]}
                    row={1}
                    onClick={handleClick}
                />
                <DatesRow
                    dates={weeklyBreakdown[1]}
                    row={2}
                    onClick={handleClick}
                />
                <DatesRow
                    dates={weeklyBreakdown[2]}
                    row={3}
                    onClick={handleClick}
                />
                <DatesRow
                    dates={weeklyBreakdown[3]}
                    row={4}
                    onClick={handleClick}
                />
                <DatesRow
                    dates={weeklyBreakdown[4]}
                    row={5}
                    onClick={handleClick}
                />
                <DatesRow
                    dates={weeklyBreakdown[5]}
                    row={6}
                    onClick={handleClick}
                />
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

export const DatesRow = ({ dates, row, onClick }) => {
    let count = 0;

    return (
        <DPRow>
            {dates.map((date) => {
                count++;
                if (date === null) {
                    return (
                        <DPCell key={`row_${row}${count}`} onClick={onClick}>
                            <span style={{ pointerEvents: "none" }}></span>
                        </DPCell>
                    );
                } else {
                    return (
                        <DPCell id={date} onClick={onClick}>
                            <span style={{ pointerEvents: "none" }}>
                                {date.getDate()}
                            </span>
                        </DPCell>
                    );
                }
            })}
        </DPRow>
    );
};
