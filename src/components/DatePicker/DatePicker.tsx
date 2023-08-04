import React, {
    FC,
    createContext,
    useContext,
    useEffect,
    useRef,
    useState,
} from "react";
import styled from "styled-components";
import {
    generateWeeks,
    getAllDaysOfCurrentMonth,
    getLastXdayOfPreviousMonth,
} from "../../utils";
import {
    DPGrid,
    DPNavButton,
    DPNavbar,
    DateBox,
    DatepickerWrapper,
} from "./DatePicker.styles";
import { monthMappingFromIndex } from "../../Mapping";
import { DatesHeaderRow, DatesRow } from "./DateRow";
import { MonthModal } from "./MonthPicker";
import { YearModal } from "./YearPicker";
import { DatepickerNavbar } from "./DatePickerNavbar";
import { StartDayContext } from "../../context/SettingsProvider";
import { DateOpenButton } from "./DateOpenButton";

export const SelectedDateContext = createContext(new Date());

export const DatePicker = ({ label }) => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
    const [isMonthModalOpen, setIsMonthModalOpen] = useState(false);
    const [isYearModalOpen, setIsYearModalOpen] = useState(false);
    const startDay = useContext(StartDayContext);

    const weeklyBreakdown = generateWeeks(
        getAllDaysOfCurrentMonth(
            selectedDate,
            getLastXdayOfPreviousMonth(startDay, selectedDate)
        )
    );

    const exceptions = ["monthmodalbutton", "right", "left", `${label}`];

    const handleSelectDate = (e) => {
        const target = e.target.id;
        if (target !== null) {
            // console.log(new Date(target));
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
            setSelectedDate(newMonth);
            console.log(isDatePickerOpen);
        }
        setIsMonthModalOpen(false);
    };

    const openYearModal = (e) => {
        setIsYearModalOpen((prevState) => !prevState);
    };

    const closeYearModal = (e) => {
        setIsYearModalOpen(false);
    };

    const closeDP = (e) => {
        setIsDatePickerOpen(false);
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
        console.log(e.target);
        setIsDatePickerOpen((prevState) => !prevState);
    };

    return (
        <SelectedDateContext.Provider value={selectedDate}>
            <DatepickerWrapper
                id={label}
                className="combobox"
                role="combobox"
                aria-haspopup="listbox"
                aria-expanded={isDatePickerOpen}
            >
                <DateOpenButton
                    id={label}
                    selectedDate={selectedDate}
                    onClick={handleOpenClose}
                    closeModal={closeDP}
                    isOpen={isDatePickerOpen}
                    exceptions={exceptions}
                />
                <DateBox
                    id="dropdownOptions"
                    role="listbox"
                    aria-label="Options"
                    isopen={isDatePickerOpen}
                >
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
                                    key={`${week[0].getDay()}${week[0].getDate()}}`}
                                    dates={week}
                                    row={1}
                                    onClick={handleSelectDate}
                                />
                            );
                        })}
                    </DPGrid>
                    {isMonthModalOpen && (
                        <MonthModal
                            id={label}
                            handleSelectMonth={handleSelectMonth}
                            closeModal={closeMonthModal}
                            isOpen={isMonthModalOpen}
                        />
                    )}
                    {/* {isMonthModalOpen && (
                            <YearModal
                                handleSelectMonth={handleSelectYear}
                                closeModal={closeYearModal}
                                isOpen={isYearModalOpen}
                            />
                        )} */}
                </DateBox>
            </DatepickerWrapper>
        </SelectedDateContext.Provider>
    );
};
