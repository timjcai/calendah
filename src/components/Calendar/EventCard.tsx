import React from 'react'
import styled from 'styled-components'
import { getLocalHour, getTime, getLocalMinute } from '../../utils';
import { formatISO } from 'date-fns'

interface CardWrapperProps {
    $height?: string;
    $top?: string;
}

const CardWrapper = styled.div<CardWrapperProps>`
    position: absolute;
    border-radius: 16px;
    border: 1px solid grey;
    margin-bottom: 1em;
    z-index: 1;
    width: inherit;
    overflow: hidden;
    height: ${props=>props.$height};
    top: ${props=>props.$top};
`;

function setEventCardTopPosition(duedate: string) {
    const cardHeight = getTime(new Date(duedate))
    const unitHeight = 48
    const top = (unitHeight*cardHeight.hours) + (unitHeight/60 * cardHeight.minutes) + 152
    return `${top}px`
}

export const EventCard = ({props}) => {
    return (
        <CardWrapper $height={'100px'} $top={ setEventCardTopPosition(props.duedate)}>
            <p>{props.title}</p>
            <p>{getLocalHour(new Date(props.duedate))}:{getLocalMinute(new Date(props.duedate))}</p>
            <p>{props.location}</p>
            <p>{props.description}</p>
        </CardWrapper>
    )
}
// top of Calendar = 152px;
// bottom of Calendar = 1248px;