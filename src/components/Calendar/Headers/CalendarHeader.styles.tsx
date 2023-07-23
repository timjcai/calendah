import styled from "styled-components";
import { CommonStylingProps } from "../../types";

type CalendarTagWrapperProps = {
    active: boolean;
    width: string;
};

export const CalendarTagWrapper = styled.div<CalendarTagWrapperProps>`
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 32px;
    margin: 0px 1px 0px 1px;
    gap: 8px;
    width: ${(props) => props.width};
    border-bottom: ${(props) =>
        props.active ? `1px solid var(--yellow)` : ""};
`;
