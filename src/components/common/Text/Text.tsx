import React, {FC} from 'react'
import styled from 'styled-components'
import { CommonStylingProps } from '../../types';

export const Paragraph = styled.p<CommonStylingProps>`
    color: ${props => props.$color};
    font-size: ${props => props.$fsize};
`;