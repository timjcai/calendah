import styled from "styled-components";
import { CommonStylingProps } from "../../types";

type CalendarTagWrapperProps = {
    active: boolean;
};

export const CalendarTagWrapper = styled.div<CalendarTagWrapperProps>`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 0px 10px 0px 10px;
    gap: 8px;
    width: 125px;
    border-bottom: ${(props) =>
        props.active ? `1px solid var(--yellow)` : ""};
`;
