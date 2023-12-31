import React, { FC, useEffect, useRef } from "react";
import styled from "styled-components";
import { monthAbbreviations, monthMappingFromIndex } from "../../Mapping";

type YearModalProps = {
    handleSelectYear: (e: any) => void;
    closeModal: (e: any) => void;
    isOpen: boolean;
};

export const Modal: FC<YearModalProps> = ({
    handleSelectYear,
    closeModal,
    isOpen,
}) => {
    const months = monthMappingFromIndex;
    const ModalRef = useRef(null);

    useEffect(() => {
        const handleCloseModal = (e) => {
            console.log(ModalRef.current);
            if (isOpen === true) {
                if (e.target.id === "yearmodalbutton") {
                    return;
                } else if (e.target !== ModalRef.current) {
                    closeModal(e);
                }
            }
        };
        document.addEventListener("click", handleCloseModal);

        return () => {
            document.removeEventListener("click", handleCloseModal);
        };
    });
    return (
        <ModalGrid ref={ModalRef}>
            {months.map((month) => {
                return (
                    <ModalCellButton onClick={handleSelectYear} id={year}>
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

export const YearModal: FC = () => {
    return <div></div>;
};
