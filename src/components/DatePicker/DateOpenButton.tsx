import React, { useContext, useState } from "react";
import { StyledOpenButton } from "./DatePicker.styles";
import { getDDMMYYYY } from "../../utils";

export const DateOpenButton = ({ selectedDate, onClick }) => {
    return (
        <>
            <StyledOpenButton onClick={onClick}>
                {getDDMMYYYY(selectedDate)}
            </StyledOpenButton>
        </>
    );
};
