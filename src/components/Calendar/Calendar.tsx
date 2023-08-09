import React, { FC, useCallback, useEffect, useContext, useState } from "react";

import { ViewProps, IActiveCard } from "../types";

import { Timebar } from "./Timebar";
import { DateHeader } from "./Headers/DateHeader";
import { HoverEventCard } from "./EventCard";

import { EventContext, WeekContext } from "../../context/Context";

import { generateColumnId, getYYYYMMDD } from "../../utils/DateUtils";
import {
    ModalLeftOrRight,
    createDateTimeonPosition,
    getEventId,
    searchEventId,
    allHours,
} from "../../utils";

import {
    StyledCalendar,
    PlannerWrapper,
    CalendarColumnWrapper,
} from "./Calendar.styles";

import settings from "../../db/settings.json";
import { EventPostRequest } from "../../hooks/useEventPostRequest";
import { MousePosProvider } from "../../context/MousePosProvider";
import { EditModal } from "../Modal/EditModal";
import { ViewModal } from "../Modal/ViewModal";
import { CalendarHeader } from "./Headers";
import { PlannerColumn } from "./PlannerColumn";

export const BaseCalendar: FC<ViewProps> = () => {
    const thisWeekdata = useContext(WeekContext);
    const eventData = useContext(EventContext);
    const [newEventDefault, setNewEventDefault] = useState(
        settings.newevent_default
    );
    const [activeCard, setActiveCard] = useState<IActiveCard>(null);
    const [activeCardDetails, setActiveCardDetails] = useState({});

    const [grabbing, setGrabbing] = useState(false);

    const [mousePosX, setMousePosX] = useState(0);
    const [mousePosY, setMousePosY] = useState(0);
    const [hoverEventCardWidth, setHoverEventCardWidth] = useState(100);
    const [hoverEventCardLeft, setHoverEventCardLeft] = useState(0);
    const [modalPos, setModalPos] = useState({ top: 0, left: 0 });

    function doubleClickHandler(event) {
        if (event.detail == 2) {
            console.log("double click event");
            console.log("exit editor or new event modal");
            return setActiveCard(null);
        }
    }
    const handleKeyPress = useCallback((event) => {
        console.log(`Key pressed: ${event.key}`);
    }, []);

    useEffect(() => {
        // attach the event listener
        document.addEventListener("keydown", handleKeyPress);
        console.log(eventData);

        // remove the event listener
        return () => {
            document.removeEventListener("keydown", handleKeyPress);
        };
    }, [handleKeyPress]);

    const toggleHoverCard = (e) => {
        const selectedItem = e.target;
        if (activeCard === null) {
            if (selectedItem.id.includes("eventcard")) {
                // opens editor
                const cardId = getEventId(e.target.id);
                setActiveCard(cardId);
                const baseData = selectedItem.getBoundingClientRect();
                setModalPos({
                    top: baseData.y,
                    left: ModalLeftOrRight(baseData),
                });
                setActiveCardDetails(searchEventId(cardId, eventData));
            } else {
                // create new event
                setActiveCard("placeholder");
                const canvas = e.target.getBoundingClientRect();
                setMousePosX(e.clientX);
                setMousePosY(e.clientY);
                setHoverEventCardWidth(canvas.width - 5);
                setHoverEventCardLeft(canvas.x);
                setModalPos({
                    top: mousePosY,
                    left: ModalLeftOrRight(canvas),
                });
            }
        } else {
            // exit editor or exit new event
            // const canvas = e.target.getBoundingClientRect();
            // setMousePosX(e.clientX);
            // setMousePosY(e.clientY);
            // setHoverEventCardWidth(canvas.width - 5);
            // setHoverEventCardLeft(canvas.x);
            // setModalPos({
            //     top: mousePosY,
            //     left: ModalLeftOrRight(canvas),
            // });
            // const startTime = createDateTimeonPosition(e);
            // const endTime = new Date(
            //     createDateTimeonPosition(e).setHours(
            //         startTime.getHours() + 1
            //     )
            // );
            // newEventDefault.starttime = startTime;
            // newEventDefault.endtime = endTime;
            // newEventDefault.calendar_id = 1; // hardcoding calendar - need to handle this later - currently only 1 calendar can be created
            // setNewEventDefault(newEventDefault);
            // console.log(newEventDefault);
            // setGrabbing(false);
            return setActiveCard(null);
        }
    };

    const startGrabbing = (e) => {
        if (activeCard === "placeholder") {
            setGrabbing(true);
        } else {
            return;
        }
    };

    const continueGrabbing = (e) => {
        if (grabbing === true) {
            setGrabbing(true);
        } else {
            setGrabbing(false);
        }
    };

    const stopGrabbingCard = (e) => {
        if (grabbing) {
            setGrabbing(false);
            console.log(newEventDefault);
            // EventPostRequest(newEventDefault);
        } else {
            return;
        }
    };

    const moveHoverEventCard = (e) => {
        if (grabbing) {
            const canvas = e.target.getBoundingClientRect();
            setMousePosX(e.clientX);
            setMousePosY(e.clientY);
            setHoverEventCardWidth(canvas.width - 5);
            setHoverEventCardLeft(canvas.x);
            setModalPos({
                top: mousePosY,
                left: ModalLeftOrRight(canvas),
            });
            const startTime = createDateTimeonPosition(e);
            const endTime = new Date(
                createDateTimeonPosition(e).setHours(startTime.getHours() + 1)
            );
            newEventDefault.starttime = startTime;
            newEventDefault.endtime = endTime;
            newEventDefault.calendar_id = 1; // hardcoding calendar - need to handle this later - currently only 1 calendar can be created
            setNewEventDefault(newEventDefault);
        } else {
            return;
        }
    };

    const MousePos = { X: mousePosX, Y: mousePosY };

    return (
        <MousePosProvider value={MousePos}>
            <StyledCalendar>
                <div>
                    <CalendarHeader />
                    <DateHeader thisWeek={thisWeekdata} />
                </div>
                <PlannerWrapper onClick={doubleClickHandler}>
                    <Timebar />
                    <CalendarColumnWrapper
                        onClick={toggleHoverCard}
                        onPointerMove={moveHoverEventCard}
                        onPointerUp={stopGrabbingCard}
                    >
                        {thisWeekdata.map((date) => {
                            const dayContent = eventData[getYYYYMMDD(date)];
                            return (
                                <PlannerColumn
                                    key={generateColumnId(date)}
                                    id={generateColumnId(date)}
                                    dayContent={dayContent}
                                />
                            );
                        })}
                    </CalendarColumnWrapper>
                    {activeCard === "placeholder" && (
                        <HoverEventCard
                            id="placeholder"
                            eventData={newEventDefault}
                            top={mousePosY}
                            left={hoverEventCardLeft}
                            pointerEvents={true}
                            width={`${hoverEventCardWidth}px`}
                            onPointerDown={startGrabbing}
                            onPointerLeave={continueGrabbing}
                            onPointerUp={stopGrabbingCard}
                        />
                    )}
                    {activeCard !== null && activeCard !== "placeholder" && (
                        <ViewModal
                            top={modalPos.top}
                            left={modalPos.left}
                            setActiveCard={setActiveCard}
                            eventCardData={activeCardDetails}
                        />
                    )}
                    {activeCard === "placeholder" && !grabbing && (
                        <EditModal
                            top={mousePosY}
                            left={modalPos.left}
                            setActiveCard={setActiveCard}
                            eventCardData={newEventDefault}
                        />
                    )}
                </PlannerWrapper>
            </StyledCalendar>
        </MousePosProvider>
    );
};
