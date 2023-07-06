import React, { FC, useContext, useState } from 'react'
import styled from 'styled-components'
import { Paragraph, Heading2 } from '../common/Text'
import { CommonStylingProps, DateProps2 } from '../types';
import { dayAbbreviations, monthAbbreviations, dayMappingFromIndex, monthMappingFromIndex  } from '../../db/Mapping';
import { SelectDateContext, TodayContext, ViewSizeContext } from '../../context/Context';
import { getYYYYMMDD } from '../../utils/DateUtils';
import { calcIndividualColWidth } from '../../utils';

export const StyledDateHeader = styled.div`
    display: flex;
    flex-direction: row;
`;

export const StyledCell = styled.div<CommonStylingProps>`
    width: ${props => props.$width};
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

const BubbleWrapper = styled.div<CommonStylingProps>`
    background-color: ${props=> props.$bgcolor};
    color: ${props=>props.$color};
    border-radius: 8px;
    width: 3em;
    margin: auto;
`;

export const SelectedBubble = ({children, bgcolor, color = 'white'}) => {
    return (
        <BubbleWrapper $bgcolor={bgcolor} $color={color}>
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
                        key={getYYYYMMDD(dayPair)}
                        date={dayPair}
                    />
                );
            })}
        </StyledDateHeader>
    );
}

export const DHCell: FC<DateProps2> = ({date}) => {
    const todayDate = useContext(TodayContext)
    const viewSize = useContext(ViewSizeContext)
    const selectDate = useContext(SelectDateContext)

    const dateNumber = date.getDate()
    const day = dayMappingFromIndex[date.getDay()]
    const month = monthMappingFromIndex[date.getMonth()]

    let dayHeading = <Heading2>{dateNumber}</Heading2>
    if (dateNumber === todayDate.getDate() && date.getMonth() === todayDate.getMonth() && date.getFullYear() === todayDate.getFullYear()) {
        dayHeading = (
            <SelectedBubble bgcolor={'var(--blue)'}><Heading2>{dateNumber}</Heading2></SelectedBubble>
        )
    } else if (dateNumber === selectDate.getDate()) {
        dayHeading = (
            <SelectedBubble bgcolor={'var(--yellow)'}><Heading2>{dateNumber}</Heading2></SelectedBubble>
        ) 
    }

    return (
        <StyledCell $width={calcIndividualColWidth(viewSize)}>
            <Paragraph>{dayAbbreviations[day]}</Paragraph>
            {dayHeading}
            <Paragraph>{monthAbbreviations[month]}</Paragraph>
        </StyledCell>
    )
}
