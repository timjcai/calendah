import styled from "styled-components";
import { CommonStylingProps } from "../../types";

export const StyledDateHeader = styled.div`
    display: flex;
    flex-direction: row;
`;

export const StyledCell = styled.div<CommonStylingProps>`
    width: ${(props) => props.$width};
    text-align: center;
`;

export const PaddedDiv = styled.div`
    width: var(--timebar-width);
`;
