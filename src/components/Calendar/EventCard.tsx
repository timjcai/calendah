import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { getLocalHour, getTime, getLocalMinute } from '../../utils';
import { formatISO } from 'date-fns'
import settings from '../../db/settings.json'

export interface CardWrapperProps {
    $height?: string;
    $top?: string;
    $bgcolor?: string;
    $zindex?: number;
    $active?: boolean;
}

export const CardWrapper = styled.div<CardWrapperProps>`
    position: absolute;
    border-radius: 4px;
    border: ${props=> props.$active ? '2px solid white': '1px solid grey'};
    font-size: 12px;
    margin-bottom: 1em;
    z-index: ${props=>props.$zindex};
    width: inherit;
    overflow: hidden;
    height: ${props=>props.$height};
    top: ${props=>props.$top};
    background-color: ${props=>props.$bgcolor};
    cursor: grab;

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
    return setTimePosition(endtime) - setTimePosition(starttime)
}

export const EventCard = ({props}) => {
    const {id, starttime, endtime, title, location, description, calendar_id} = props

    const [isActive, setIsActive] = useState(false)
    const [draggable, setDraggable] = useState(false);
    const [eventCardHeight, setEventCardHeight] = useState(findHeight(starttime, endtime))
    const [topPosition, setTopPosition] = useState(setTimePosition(starttime))

    const setEventCardPosition = (e) => {
        if (draggable === true) {
            const mouseTracker=e.target.getBoundingClientRect()
            console.log(e)
        } else {
            return 
        }
    }

    const mouseStyle = {
        draggable: "grab",
        dragging: "grabbing",
        resize: "ns-resize"
    }

    return (
        <CardWrapper 
            $height={`${eventCardHeight}px`}
            $top={ `${topPosition}px`} 
            $bgcolor={settings.calendar_color[calendar_id]} 
            $zindex={id}
            onPointerDown={e=>setDraggable(true)}
            onPointerUp={e=>setDraggable(false)}
            onPointerMove={e=>setEventCardPosition(e)}
            onClick={e=>setIsActive(prevstate => !prevstate)}
            $active={isActive||draggable}
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