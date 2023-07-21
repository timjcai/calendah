import styled from "styled-components";
import { CommonStylingProps } from "../../types";

export const BubbleWrapper = styled.div<CommonStylingProps>`
    background-color: ${(props) => props.$bgcolor};
    color: ${(props) => props.$color};
    border-radius: 8px;
    width: 3em;
    margin: auto;
`;
