import React, { FC } from 'react'
import styled from 'styled-components'
import { Paragraph, Heading2 } from '../common/Text'
import { DateProps } from '../types';
import { dayAbbreviations, monthAbbreviations } from '../common/Slug';

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


export const DateHeader = ({thisWeek}) => {
    return (
        <StyledDateHeader>
            <PaddedDiv></PaddedDiv>
            {thisWeek.map((dayPair)=> {
                return (<DHCell date={dayPair['date']} day={dayPair['day']} month={dayPair['month']}/>);
            })}
        </StyledDateHeader>
    );
}

export const DHCell: FC<DateProps> = ({date, day, month}) => {
    return (
        <StyledCell>
            <Paragraph>{dayAbbreviations[day]}</Paragraph>
            <Heading2>{date}</Heading2>
            <Paragraph>{monthAbbreviations[month]}</Paragraph>
        </StyledCell>
    )
}
