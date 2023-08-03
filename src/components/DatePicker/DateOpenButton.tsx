import React, { useContext, useEffect, useRef, useState } from "react";
import { StyledOpenButton } from "./DatePicker.styles";
import { getDDMMYYYY } from "../../utils";

export const DateOpenButton = ({
    selectedDate,
    onClick,
    closeModal,
    isOpen,
    id,
}) => {
    const ModalRef = useRef(null);

    useEffect(() => {
        const handleCloseButton = (e) => {
            if (isOpen) {
                if (e.target.id === id) {
                    return;
                } else if (e.target.id !== ModalRef.current) {
                    closeModal(e);
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
            <StyledOpenButton onClick={onClick} id={id}>
                {getDDMMYYYY(selectedDate)}
            </StyledOpenButton>
        </>
    );
};
