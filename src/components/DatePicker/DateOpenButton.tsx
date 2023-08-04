import React, { useContext, useEffect, useRef, useState } from "react";
import { StyledOpenButton } from "./DatePicker.styles";
import { getDDMMYYYY } from "../../utils";

export const DateOpenButton = ({
    selectedDate,
    onClick,
    closeModal,
    isOpen,
    id,
    exceptions,
}) => {
    const ModalRef = useRef(null);

    useEffect(() => {
        const handleCloseButton = (e) => {
            if (isOpen) {
                if (e.target.id === id) {
                    return;
                } else if (exceptions.includes(e.target.id)) {
                    console.log(e.target.id);
                } else if (e.target.id !== ModalRef.current) {
                    closeModal(e);
                } else {
                    return;
                }
            }
        };
        document.addEventListener("click", handleCloseButton);

        return () => {
            document.removeEventListener("click", handleCloseButton);
        };
    });

    return (
        <>
            <StyledOpenButton
                type="button"
                onClick={onClick}
                id={id}
                aria-controls="dropdownOptions"
            >
                {getDDMMYYYY(selectedDate)}
            </StyledOpenButton>
        </>
    );
};
