import React, { useEffect, useState } from "react";
import {
    CardWrapper,
    EventCard,
    HoverEventCard,
} from "../components/Calendar/EventCard";
import { dayMappingFromIndex, monthMappingFromIndex } from "../db/Mapping";
import { formatISO, parseISO } from "date-fns";
import { getLocalHour, getLocalMinute, rubyDateConverter } from "../utils";
import NewEventModal from "../components/Modal/NewEventModal";
import { IconButton } from "../components/common/Button";

import settings from "../db/settings.json";
import { StyledPlannerColumn } from "../components/Calendar/Calendar.styles";

export const Test = () => {
    const [isActive, setIsActive] = useState(false);
    const [grabbing, setGrabbing] = useState(false);
    const [newEventData, setNewEventData] = useState(settings.newevent_default);
    const [mousePosX, setMousePosX] = useState(0);
    const [mousePosY, setMousePosY] = useState(0);
    const [colWidth, setColWidth] = useState("10000px");
    const [xGuardRails, setXGuardRails] = useState(null);
    const [hoverEventCardWidth, setHoverEventCardWidth] = useState(colWidth);
    const [hoverEventCardLeft, setHoverEventCardLeft] = useState(0);

    useEffect(() => {
        // Function to be executed on window resize
        const handleResize = () => {
            // Your logic here
            console.log(window.innerWidth);
        };

        // Attach the event listener when the component mounts
        window.addEventListener("resize", handleResize);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const startGrabbing = (e) => {
        setGrabbing(true);
        const canvas = e.target.getBoundingClientRect();
        setMousePosX(e.clientX);
        setMousePosY(e.clientY);
        setHoverEventCardWidth(canvas.width);
        setHoverEventCardLeft(canvas.x);
        // console.log(`grabbing`)
        // console.log(newEventData)
    };

    const stopGrabbing = (e) => {
        if (grabbing) {
            setGrabbing(false);
            console.log(`exiting - grabbing`);
        } else {
            return;
        }
    };

    const moveEventCard = (e) => {
        if (grabbing) {
            const canvas = e.target.getBoundingClientRect();
            setMousePosX(e.clientX);
            setMousePosY(e.clientY);
            setHoverEventCardWidth(canvas.width);
            setHoverEventCardLeft(canvas.x);
        } else {
            return;
        }
    };

    const setPositions = (e) => {
        setMousePosX(e.clientX);
        setMousePosY(e.clientY);
    };

    return (
        <div
            className="w-screen h-screen flex justify-center items-center flex-col"
            onClick={setPositions}
        >
            <h1>Test page</h1>
            <button onClick={(e) => setIsActive((prevState) => !prevState)}>
                open modal
            </button>
            {isActive && (
                <NewEventModal
                    closeModal={setIsActive}
                    top={mousePosY}
                    left={mousePosX}
                />
            )}
            <IconButton label={"settings"} />
            <IconButton label={"exit"} />
            <IconButton label={"edit"} />
            <div
                className="w-1/2 h-1/2 bg-neutral-400 flex flex-row"
                onPointerDown={startGrabbing}
                onPointerUp={stopGrabbing}
                onPointerMove={moveEventCard}
                onPointerLeave={stopGrabbing}
            >
                <StyledPlannerColumn $width={colWidth} id={"1"}>
                    <p>{`${grabbing}`}</p>
                    <h1>{`${Math.round(mousePosX * 100) / 100} : ${
                        Math.round(mousePosY * 100) / 100
                    }`}</h1>
                </StyledPlannerColumn>
                <StyledPlannerColumn $width={colWidth} id={"2"} />
                <StyledPlannerColumn $width={colWidth} id={"3"} />
                <StyledPlannerColumn $width={colWidth} id={"4"} />
                <StyledPlannerColumn $width={colWidth} id={"5"} />
            </div>
            {grabbing && (
                <HoverEventCard
                    eventData={newEventData}
                    top={mousePosY}
                    left={hoverEventCardLeft}
                    pointerEvents={false}
                    width={hoverEventCardWidth}
                />
            )}
        </div>
    );
};
