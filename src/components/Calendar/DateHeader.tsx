import React, { FC, useContext, useState } from 'react'
import styled from 'styled-components'
import { Paragraph, Heading2 } from '../common/Text'
import { DateProps2 } from '../types';
import { dayAbbreviations, monthAbbreviations, dayMappingFromIndex, monthMappingFromIndex  } from '../../db/Mapping';
import { TodayContext } from '../../context/Context';
import { generateDateId } from '../../utils/DateUtils';

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

export type dateHeadingProps = {
    color: string,
    borderRadius: string,
    padding: string
}

const BubbleWrapper = styled.div`
    background-color: red;
    border-radius: 8px;
    width: 3em;
    margin: auto;
`;

export const SelectedBubble = ({children}) => {
    return (
        <BubbleWrapper>
            {children}
        </BubbleWrapper>
    );
}

export const DateHeader = (props: {thisWeek: Date[]} ) => {
    return (
        <StyledDateHeader>
            <PaddedDiv></PaddedDiv>
            {props.thisWeek.map((dayPair) => {
                return (
                    <DHCell 
                        key={generateDateId(dayPair)}
                        date={dayPair}
                    />
                );
            })}
        </StyledDateHeader>
    );
}

export const DHCell: FC<DateProps2> = ({date}) => {
    const todayDate = useContext(TodayContext)

    const dateNumber = date.getDate()
    const day = dayMappingFromIndex[date.getDay()]
    const month = monthMappingFromIndex[date.getMonth()]

    let dayHeading = <Heading2>{dateNumber}</Heading2>
    if (dateNumber === todayDate.getDate()) {
        dayHeading = (
            <SelectedBubble><Heading2>{dateNumber}</Heading2></SelectedBubble>
        )
    }

    return (
        <StyledCell>
            <Paragraph>{dayAbbreviations[day]}</Paragraph>
            {dayHeading}
            <Paragraph>{monthAbbreviations[month]}</Paragraph>
        </StyledCell>
    )
}
