import React, { FC, createContext, useContext, useRef, useState } from "react";
import styled from "styled-components";
import {
    getAllDaysOfCurrentMonth,
    getLastXdayOfPreviousMonth,
} from "../../utils";
import { DPGrid, DPNavButton, DPNavbar, DateBox } from "./DatePicker.styles";
import { monthMappingFromIndex } from "../../Mapping";
import { DatesHeaderRow, DatesRow } from "./DateRow";
import { MonthModal } from "./MonthPicker";
import { YearModal } from "./YearPicker";
import { DatepickerNavbar } from "./DatePickerNavbar";
import { StartDayContext } from "../../context/SettingsProvider";
import { DateOpenButton } from "./DateOpenButton";

export const SelectedDateContext = createContext(new Date());

export const DatePicker = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
    const [isMonthModalOpen, setIsMonthModalOpen] = useState(false);
    const [isYearModalOpen, setIsYearModalOpen] = useState(false);
    const startDay = useContext(StartDayContext);

    const generateWeeks = (dates: Date[]) => {
        const allWeeks: Date[][] = [];
        let thisWeek = new Array(7).fill(null);
        let week = 0;
        for (let i = 0; i < dates.length; i++) {
            const date = dates[i];
            const day = date.getDay();
            thisWeek[day] = date;
            if (day === 6) {
                allWeeks[week] = thisWeek;
                week++;
                thisWeek = new Array(7).fill(null);
            }
        }
        return allWeeks;
    };
    const weeklyBreakdown = generateWeeks(
        getAllDaysOfCurrentMonth(
            selectedDate,
            getLastXdayOfPreviousMonth(startDay, selectedDate)
        )
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

    const openYearModal = (e) => {
        setIsYearModalOpen((prevState) => !prevState);
    };

    const closeYearModal = (e) => {
        setIsYearModalOpen(false);
    };

    const handleSelectYear = (e) => {
        const target = e.target.id;
        console.log(target);
        if (target !== null) {
            const currentDate = selectedDate.getDate();
            const currentMonth = selectedDate.getMonth();
            const newYear = new Date();
            newYear.setFullYear(target);
            newYear.setMonth(currentMonth);
            newYear.setDate(currentDate);
            console.log(newYear);
            setSelectedDate(newYear);
        }
        setIsMonthModalOpen(false);
    };

    const changeMonth = (e) => {
        const target = e.target.id;
        const currentDate = selectedDate.getDate();
        let currentYear = selectedDate.getFullYear();
        const currentMonth = selectedDate.getMonth();
        const newDate = new Date();
        let newMonth;
        if (target === "left") {
            if (currentMonth > 0) {
                newMonth = currentMonth - 1;
            } else {
                newMonth = 11;
                currentYear = currentYear - 1;
            }
        } else {
            if (currentMonth < 11) {
                newMonth = currentMonth + 1;
            } else {
                newMonth = 0;
                currentYear = currentYear + 1;
            }
        }
        newDate.setDate(currentDate);
        newDate.setMonth(newMonth);
        newDate.setFullYear(currentYear);
        setSelectedDate(newDate);
    };

    const handleOpenClose = (e) => {
        console.log(e.target.getBoundingClientRect());
        setIsDatePickerOpen((prevState) => !prevState);
    };

    return (
        <SelectedDateContext.Provider value={selectedDate}>
            <DateOpenButton
                selectedDate={selectedDate}
                onClick={handleOpenClose}
            />
            {isDatePickerOpen && (
                <DateBox>
                    <h1>datepicker</h1>
                    <DatepickerNavbar
                        openMonthModal={openMonthModal}
                        openYearModal={openMonthModal}
                        changeMonth={changeMonth}
                    />
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
                    {isMonthModalOpen && (
                        <YearModal
                            handleSelectMonth={handleSelectYear}
                            closeModal={closeYearModal}
                            isOpen={isYearModalOpen}
                        />
                    )}
                </DateBox>
            )}
        </SelectedDateContext.Provider>
    );
};
