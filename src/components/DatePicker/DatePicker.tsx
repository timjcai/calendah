import React from "react";
import styled from "styled-components";
import { getAllDaysOfCurrentMonth } from "../../utils";

export const DatePicker = () => {
    return (
        <DateBox>
            <h1>datepicker</h1>
            <div>
                <h1>(Month YYYY)</h1>
            </div>
            <DatesofMonth>
                <DatesHeaderRow />
            </DatesofMonth>
        </DateBox>
    );
};

const DateBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid black;
    width: 280px;
    max-height: 358px;
`;

const DatesofMonth = styled.div`
    display: flex;
    flex-direction: column;
`;

const DatesRow = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
`;

const DatesCell = styled.div`
    margin: 2px 10px;
`;

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

    const daysOfCurrentMonth = getAllDaysOfCurrentMonth();
    console.log(daysOfCurrentMonth);

    return (
        <DatesRow>
            {days.map((day) => {
                return (
                    <DatesCell id={day}>
                        <span>{firstletter(day)}</span>
                    </DatesCell>
                );
            })}
        </DatesRow>
    );
};
