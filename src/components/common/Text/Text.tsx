import React, { FC } from "react";
import styled from "styled-components";
import { CommonStylingProps } from "../../types";

export const Paragraph = styled.p<CommonStylingProps>`
    color: ${(props) => props.$color};
    font-size: ${(props) => props.$fsize};
    margin: ${(props) => props.$margin};
    border-bottom: ${(props) => props.$borderBottom};
    padding: ${(props) => props.$padding};
    font-weight: ${(props) => props.$fweight};
`;
