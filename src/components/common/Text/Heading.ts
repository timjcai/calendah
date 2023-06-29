import React, {FC} from 'react'
import styled from 'styled-components'
import { CommonStylingProps } from '../../types';

export const Heading1 = styled.h1<CommonStylingProps>`
    color: ${props => props.color}
    font-size: ${props => props.fsize}
`;

export const Heading2 = styled.h2<CommonStylingProps>`
    color: ${props => props.color}
    font-size: ${props => props.fsize}
`;

export const Heading3 = styled.h3<CommonStylingProps>`
    color: ${props => props.color}
    font-size: ${props => props.fsize}
`;

export const Heading4 = styled.h4<CommonStylingProps>`
    color: ${props => props.color}
    font-size: ${props => props.fsize}
`;