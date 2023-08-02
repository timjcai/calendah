import React, { FC, createContext, useRef, useState } from "react";
import styled from "styled-components";
import { getAllDaysOfCurrentMonth } from "../../utils";
import { DPGrid, DateBox } from "./DatePicker.styles";
import { monthMappingFromIndex } from "../../Mapping";
import { DatesHeaderRow, DatesRow } from "./DateRow";
import { MonthModal } from "./MonthPicker";

export const SelectedDateContext = createContext(new Date());

export const DatePicker = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [isMonthModalOpen, setIsMonthModalOpen] = useState(false);
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
    const weeklyBreakdown = generateWeeks(
        getAllDaysOfCurrentMonth(selectedDate)
    );

    const handleSelectDate = (e) => {
        const target = e.target.id;
        if (target !== null) {
            console.log(new Date(target));
            setSelectedDate(new Date(target));
        } else {
            return setSelectedDate(selectedDate);
        }
    };

    const openMonthModal = (e) => {
        setIsMonthModalOpen((prevState) => !prevState);
    };

    const closeMonthModal = (e) => {
        setIsMonthModalOpen(false);
    };

    const handleSelectMonth = (e) => {
        const target = monthMappingFromIndex.indexOf(e.target.id);
        console.log(target);
        if (target !== null) {
            const currentDate = selectedDate.getDate();
            const newMonth = new Date();
            newMonth.setMonth(target);
            newMonth.setDate(currentDate);
            console.log(newMonth);
            setSelectedDate(newMonth);
        }
        setIsMonthModalOpen(false);
    };
    return (
        <SelectedDateContext.Provider value={selectedDate}>
            <DateBox>
                <h1>datepicker</h1>
                <button onClick={openMonthModal} id="monthmodalbutton">
                    <h1 style={{ pointerEvents: "none" }}>
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
                                onClick={handleSelectDate}
                            />
                        );
                    })}
                </DPGrid>
                {isMonthModalOpen && (
                    <MonthModal
                        handleSelectMonth={handleSelectMonth}
                        closeModal={closeMonthModal}
                        isOpen={isMonthModalOpen}
                    />
                )}
            </DateBox>
            <p>{selectedDate.toString()}</p>
        </SelectedDateContext.Provider>
    );
};
