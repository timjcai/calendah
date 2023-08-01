import React, { FC, createContext, useContext, useState } from "react";
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
import { monthAbbreviations, monthMappingFromIndex } from "../../Mapping";
import { SelectDateContext } from "../../context/Context";
import { SelectedBubble } from "../Calendar/Headers";
import { DatesHeaderRow, DatesRow } from "./DateRow";

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
        }
    };

    const openMonthModal = (e) => {
        setIsMonthModalOpen((prevState) => !prevState);
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
                <button onClick={openMonthModal}>
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
                                onClick={handleSelectDate}
                            />
                        );
                    })}
                </DPGrid>
                {isMonthModalOpen && (
                    <MonthModal handleSelectMonth={handleSelectMonth} />
                )}
            </DateBox>
            <p>{selectedDate.toString()}</p>
        </SelectedDateContext.Provider>
    );
};

type MonthModalProps = {
    handleSelectMonth: (e: any) => void;
};

export const MonthModal: FC<MonthModalProps> = ({ handleSelectMonth }) => {
    const months = monthMappingFromIndex;
    return (
        <ModalGrid>
            {months.map((month) => {
                return (
                    <ModalCellButton onClick={handleSelectMonth} id={month}>
                        {monthAbbreviations[month]}
                    </ModalCellButton>
                );
            })}
        </ModalGrid>
    );
};

const ModalGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 80px);
    gap: 0px;
    width: 280px;
    position: absolute;
    background-color: rgba(255, 255, 20, 0.9);
    z-index: 1;
    color: black;
`;

const ModalCellButton = styled.button``;
