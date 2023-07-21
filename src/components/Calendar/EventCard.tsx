import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { getLocalHour, getTime, getLocalMinute } from "../../utils";
import { formatISO } from "date-fns";
import settings from "../../db/settings.json";
import { CardWrapper } from "./EventCard.styles";
import NewEventModal from "../Modal/NewEventModal";
import {
    MousePosXContext,
    MousePosYContext,
} from "../../context/MousePosProvider";

const setTimePosition = (time: string) => {
    const cardHeight = getTime(new Date(time));
    const unitHeight = 48;
    const top =
        unitHeight * cardHeight.hours +
        (unitHeight / 60) * cardHeight.minutes +
        152;
    return top;
};

const findHeight = (starttime, endtime) => {
    return setTimePosition(endtime) - setTimePosition(starttime);
};

export const EventCard = ({ className, props }) => {
    const {
        id: event_id,
        starttime,
        endtime,
        title,
        location,
        description,
        calendar_id,
    } = props;
    // const MousePosX = useContext(MousePosXContext)
    // const MousePosY = useContext(MousePosYContext)

    // const [isActive, setIsActive] = useState(false)
    // const [draggable, setDraggable] = useState(false);
    // const [openModal, setOpenModal] = useState(false)
    const [eventCardHeight, setEventCardHeight] = useState(
        findHeight(starttime, endtime)
    );
    const [topPosition, setTopPosition] = useState(setTimePosition(starttime));

    const mouseStyle = {
        draggable: "grab",
        dragging: "grabbing",
        resize: "ns-resize",
    };

    return (
        <CardWrapper
            $height={`${eventCardHeight}px`}
            $top={`${topPosition}px`}
            $bgcolor={settings.calendar_color[calendar_id].color}
            $zindex={event_id}
            // onPointerDown={e=>setDraggable(true)}
            // onPointerUp={e=>setDraggable(false)}
            // onPointerMove={e=>setEventCardPosition(e)}
            // onClick={e=>setIsActive(prevstate => !prevstate)}
            // $active={isActive||draggable}
            $pointerEvents={true}
            className={className}
            id={`eventcard-${event_id}`}
            role="button"
            // onClick={e=>setOpenModal(prevState =>!prevState)}
        >
            <p>
                <strong>{title}</strong>
            </p>
            <p>
                {getLocalHour(new Date(starttime))}:
                {getLocalMinute(new Date(starttime))}-
                {getLocalHour(new Date(endtime))}:
                {getLocalMinute(new Date(endtime))}
            </p>
            <br />
            <p>{location}</p>
            {/* {openModal && <NewEventModal closeModal={setOpenModal} top={MousePosX} left={MousePosX}/>} */}
        </CardWrapper>
    );
};

export const HoverEventCard = ({
    eventData,
    top,
    left,
    pointerEvents,
    width = "inherit",
}) => {
    const {
        id,
        starttime,
        endtime,
        title,
        location,
        description,
        calendar_id,
    } = eventData;
    return (
        <CardWrapper
            $bgcolor={settings.calendar_color[calendar_id]}
            $zindex={id}
            $width={width}
            $top={`${top}px`}
            $left={`${left}px`}
            $pointerEvents={pointerEvents}
            role="button"
        >
            <p>
                <strong>{title}</strong>
            </p>
            <br />
            <p>{location}</p>
        </CardWrapper>
    );
};
// top of Calendar = 152px;
// bottom of Calendar = 1248px;
