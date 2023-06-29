import React, { FC } from 'react'
import styled from 'styled-components'
import { Paragraph, Heading2 } from '../common/Text'
import { DateProps } from '../types';
import { dayAbbreviations } from '../common/Slug';

export const StyledDateHeader = styled.div`
    display: flex;
    flex-direction: row;
`;

export const StyledCell = styled.div`
    width: var(--planner-width);
    text-align: center;
`;

export const PaddedDiv = styled.div`
    width: var(--timebar-width);
`;


export const DateHeader = ({days}) => {
    return (
        <StyledDateHeader>
            <PaddedDiv></PaddedDiv>
            <DHCell date={29} day={'Thursday'} />
            <DHCell date={29} day={'Thursday'} />
            <DHCell date={29} day={'Thursday'} />
            <DHCell date={29} day={'Thursday'} />
            <DHCell date={29} day={'Thursday'} />
            <DHCell date={29} day={'Thursday'} />
            <DHCell date={29} day={'Thursday'} />
        </StyledDateHeader>
    );
}

export const DHCell: FC<DateProps> = ({date, day}) => {
    return (
        <StyledCell>
            <Paragraph>{dayAbbreviations[day]}</Paragraph>
            <Heading2>{date}</Heading2>
        </StyledCell>
    )
}
