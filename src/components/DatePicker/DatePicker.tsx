import React, { createContext, useContext, useState } from "react";
import styled from "styled-components";
import { getAllDaysOfCurrentMonth } from "../../utils";
import {
    DPCell,
    DPGrid,
    DPRow,
    DateBox,
    DefaultDateSpan,
    SelectedDateSpan,
} from "./DatePicker.styles";
import { monthMappingFromIndex } from "../../Mapping";
import { SelectDateContext } from "../../context/Context";
import { SelectedBubble } from "../Calendar/Headers";

export const SelectedDateContext = createContext(new Date());

export const DatePicker = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
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
    const weeklyBreakdown = generateWeeks(getAllDaysOfCurrentMonth());

    const handleClick = (e) => {
        const target = e.target.id;
        if (target !== null) {
            console.log(new Date(target));
            setSelectedDate(new Date(target));
        }
    };

    return (
        <SelectedDateContext.Provider value={selectedDate}>
            <DateBox>
                <h1>datepicker</h1>
                <button>
                    <h1>
                        {`${
                            monthMappingFromIndex[selectedDate.getMonth()]
                        } ${selectedDate.getFullYear()}`}
                    </h1>
                </button>
                <DPGrid>
                    <DatesHeaderRow />
                    {weeklyBreakdown.map((week) => {
                        return (
                            <DatesRow
                                dates={week}
                                row={1}
                                onClick={handleClick}
                            />
                        );
                    })}

                    {/* <DatesRow
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
                /> */}
                </DPGrid>
            </DateBox>
            <p>{selectedDate.toString()}</p>
        </SelectedDateContext.Provider>
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
                    <DPCell id={day} key={day}>
                        <span>{firstletter(day)}</span>
                    </DPCell>
                );
            })}
        </DPRow>
    );
};

export const DatesRow = ({ dates, row, onClick }) => {
    let count = 0;
    const selectedDate = useContext(SelectedDateContext);

    return (
        <DPRow>
            {dates.map((singleDate) => {
                count++;
                // switch (singleDate) {
                //     case null:
                //         return (
                //             <DPCell
                //                 key={`row_${row}${count}`}
                //                 onClick={onClick}
                //             >
                //                 <span style={{ pointerEvents: "none" }}></span>
                //             </DPCell>
                //         );
                //     case selectedDate:
                //         return (
                //             <DPCell
                //                 id={singleDate}
                //                 key={`row_${row}${singleDate}`}
                //                 onClick={onClick}
                //             >
                //                 <span
                //                     id="hello"
                //                     style={{
                //                         pointerEvents: "none",
                //                         padding: "5px 10px",
                //                         backgroundColor: "var(--blue)",
                //                         borderRadius: "6px",
                //                     }}
                //                 >
                //                     {singleDate.getDate()}
                //                 </span>
                //             </DPCell>
                //         );
                //     default:
                //         return (
                //             <DPCell
                //                 id={singleDate}
                //                 key={`row_${row}${singleDate}`}
                //                 onClick={onClick}
                //             >
                //                 <span style={{ pointerEvents: "none" }}>
                //                     {singleDate.getDate()}
                //                 </span>
                //             </DPCell>
                //         );
                // }
                if (singleDate === null) {
                    return (
                        <DPCell key={`row_${row}${count}`} onClick={onClick}>
                            <DefaultDateSpan></DefaultDateSpan>
                        </DPCell>
                    );
                } else if (singleDate.getDate() === selectedDate.getDate()) {
                    return (
                        <DPCell
                            id={singleDate}
                            key={`row_${row}${singleDate}`}
                            onClick={onClick}
                        >
                            <SelectedDateSpan>
                                {singleDate.getDate()}
                            </SelectedDateSpan>
                        </DPCell>
                    );
                } else {
                    return (
                        <DPCell
                            id={singleDate}
                            key={`row_${row}${singleDate}`}
                            onClick={onClick}
                        >
                            <DefaultDateSpan>
                                {singleDate.getDate()}
                            </DefaultDateSpan>
                        </DPCell>
                    );
                }
            })}
        </DPRow>
    );
};
