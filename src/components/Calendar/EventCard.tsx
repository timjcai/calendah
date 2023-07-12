import React from 'react'
import styled from 'styled-components'
import { getLocalHour, getTime, getLocalMinute } from '../../utils';
import { formatISO } from 'date-fns'
import settings from '../../db/settings.json'

interface CardWrapperProps {
    $height?: string;
    $top?: string;
    $bgcolor?: string;
    $zindex?: number;
}

const CardWrapper = styled.div<CardWrapperProps>`
    position: absolute;
    border-radius: 4px;
    border: 1px solid grey;
    font-size: 12px;
    margin-bottom: 1em;
    z-index: ${props=>props.$zindex};
    width: inherit;
    overflow: hidden;
    height: ${props=>props.$height};
    top: ${props=>props.$top};
    background-color: ${props=>props.$bgcolor};

    p {
        margin: 3px 0px 5px 5px;
    }
`;

const setTimePosition = (time: string) => {
    const cardHeight = getTime(new Date(time))
    const unitHeight = 48
    const top = (unitHeight*cardHeight.hours) + (unitHeight/60 * cardHeight.minutes) + 152
    return top
}

const findHeight = (starttime, endtime) => {
    return setTimePosition(starttime) - setTimePosition(endtime)
}

export const EventCard = ({props}) => {
    const {id, starttime, endtime, title, location, description, calendar_id} = props

    return (
        <CardWrapper 
            $height={`${findHeight(starttime, endtime)}`} 
            $top={ `${setTimePosition(starttime)}px`} 
            $bgcolor={settings.calendar_color[calendar_id]} 
            $zindex={id}
        >
            <p><strong>{title}</strong></p>
            <p>{getLocalHour(new Date(starttime))}:{getLocalMinute(new Date(starttime))}-{getLocalHour(new Date(endtime))}:{getLocalMinute(new Date(endtime))}</p>
            <br />
            <p>{location}</p>
        </CardWrapper>
    )
}
// top of Calendar = 152px;
// bottom of Calendar = 1248px;