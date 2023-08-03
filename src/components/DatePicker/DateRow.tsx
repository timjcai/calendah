import React, { useContext } from "react";
import { SelectedDateContext } from "./DatePicker";
import {
    DPCell,
    DPRow,
    DefaultDateSpan,
    SelectedDateSpan,
} from "./DatePicker.styles";

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
                if (singleDate === null) {
                    return (
                        <DPCell key={`row_${row}${count}`}>
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