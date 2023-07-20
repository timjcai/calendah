import styled from "styled-components";
import { CommonStylingProps } from "../types";

interface ModalBoxProps {
    $top: number;
    $left: number;
}

export const ModalBox = styled.div<ModalBoxProps>`
    border: 1px solid black;
    border-radius: 16px;
    height: auto;
    width: 25vw;
    align-items: right;
    position: absolute;
    z-index: 10000000;
    top: ${(props) => props.$top}px;
    left: ${(props) => props.$left}px;
`;

export const Modalnav = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0em 1.5em 0em 1.5em;
    background-color: #eff1f2;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    margin-bottom: 16px;
    min-height: 40px;
`;

export const CalendarColorSquare = styled.div<CommonStylingProps>`
    border-radius: 4px;
    height: 14px;
    width: 14px;
    margin-left: 3px;
    margin-top: 3px;
    background-color: ${(props) => props.$bgcolor};
`;

export const NavContentWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: fit-content;
    gap: 8px;
`;
