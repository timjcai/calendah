import styled from "styled-components";
import { CommonStylingProps } from "../types";

export const PlannerWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: auto;
    border: var(--shell-line) 1px solid;
    height: auto;
    z-index: 1;
`;

export const StyledPlannerColumn = styled.div<CommonStylingProps>`
    display: flex;
    flex-direction: column;
    width: ${(props) => props.$width};
    height: auto;
    border-right: var(--shell-line) 1px solid;
`;

export const PlannerCell = styled.div`
    display: flex;
    width: auto;
    height: 48px;
    border-top: var(--shell-line) 1px solid;
`;

export const StyledCalendar = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 1em;
`;

export const CalendarColumnWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: auto;
    height: auto;
    z-index: 1;
`;
