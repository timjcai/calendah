import React, { FC, useEffect, useRef } from "react";
import styled from "styled-components";
import { monthAbbreviations, monthMappingFromIndex } from "../../Mapping";

type MonthModalProps = {
    handleSelectMonth: (e: any) => void;
    closeModal: (e: any) => void;
    isOpen: boolean;
    id: string;
};

export const MonthModal: FC<MonthModalProps> = ({
    handleSelectMonth,
    closeModal,
    isOpen,
    id,
}) => {
    const months = monthMappingFromIndex;
    const ModalRef = useRef(null);

    useEffect(() => {
        const handleCloseModal = (e) => {
            if (isOpen === true) {
                if (e.target.id === "monthmodalbutton") {
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
        <ModalGrid ref={ModalRef} id={id}>
            {months.map((month) => {
                return (
                    <ModalCellButton
                        type="button"
                        onClick={handleSelectMonth}
                        id={month}
                    >
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
    grid-template-rows: repeat(3, 91px);
    gap: 0px;
    width: 280px;
    position: absolute;
    background-color: #ffffff;
    z-index: 1;
    color: black;
    height: auto;
`;

const ModalCellButton = styled.button``;
