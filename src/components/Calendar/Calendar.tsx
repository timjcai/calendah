import React, { FC, useCallback, useEffect, useContext, useState } from "react";

import {
    TimebarProps,
    TimecellProps,
    ViewProps,
    DateProps,
    IActiveCard,
} from "../types";

import { Timebar } from "./Timebar";
import { DateHeader } from "./Headers/DateHeader";
import { EventCard, HoverEventCard } from "./EventCard";

import {
    EventContext,
    ViewSizeContext,
    WeekContext,
} from "../../context/Context";

import {
    generateColumnId,
    thisWeek,
    getYYYYMMDD,
    mergeDateTime,
} from "../../utils/DateUtils";
import {
    ModalLeftOrRight,
    calcIndividualColWidth,
    closest15min,
    createDateTimeonPosition,
    extractDate,
    extractTime,
    getEventId,
    searchEventId,
} from "../../utils";

import {
    StyledCalendar,
    StyledPlannerColumn,
    PlannerWrapper,
    PlannerCell,
    CalendarColumnWrapper,
} from "./Calendar.styles";

import settings from "../../db/settings.json";
import { EventPostRequest } from "../../hooks/useEventPostRequest";
import { MousePosProvider } from "../../context/MousePosProvider";
import { EditModal } from "../Modal/EditModal";
import { ViewModal } from "../Modal/ViewModal";

export const BaseCalendar: FC<ViewProps> = ({ times, actions }) => {
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

    const startGrabbingCard = (e) => {
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
                setGrabbing(true);
                const canvas = e.target.getBoundingClientRect();
                setMousePosX(e.clientX);
                setMousePosY(e.clientY);
                setHoverEventCardWidth(canvas.width - 5);
                setHoverEventCardLeft(canvas.x);
            }
        } else {
            // exit editor or exit new event
            console.log("exit editor or new event modal");
            return setActiveCard(null);
        }
    };

    const stopGrabbingCard = (e) => {
        if (grabbing) {
            setGrabbing(false);
            const startTime = createDateTimeonPosition(event);
            const endTime = new Date(
                createDateTimeonPosition(event).setHours(
                    startTime.getHours() + 1
                )
            );
            newEventDefault.starttime = startTime;
            newEventDefault.endtime = endTime;
            newEventDefault.calendar_id = 1; // hardcoding calendar - need to handle this later - currently only 1 calendar can be created
            setNewEventDefault(newEventDefault);
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
        } else {
            return;
        }
    };

    const MousePos = { X: mousePosX, Y: mousePosY };

    return (
        <MousePosProvider value={MousePos}>
            <StyledCalendar>
                <div>
                    <DateHeader thisWeek={thisWeekdata} />
                </div>
                <PlannerWrapper onClick={doubleClickHandler}>
                    <Timebar times={times} />
                    <CalendarColumnWrapper
                        onPointerDown={startGrabbingCard}
                        onPointerUp={stopGrabbingCard}
                        onPointerMove={moveHoverEventCard}
                        onPointerLeave={stopGrabbingCard}
                    >
                        {thisWeekdata.map((date) => {
                            const dayContent = eventData[getYYYYMMDD(date)];
                            return (
                                <PlannerColumn
                                    key={generateColumnId(date)}
                                    times={times}
                                    id={generateColumnId(date)}
                                    dayContent={dayContent}
                                />
                            );
                        })}
                    </CalendarColumnWrapper>
                    {activeCard === "placeholder" && (
                        <HoverEventCard
                            eventData={newEventDefault}
                            top={mousePosY}
                            left={hoverEventCardLeft}
                            pointerEvents={false}
                            width={`${hoverEventCardWidth}px`}
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
                </PlannerWrapper>
            </StyledCalendar>
        </MousePosProvider>
    );
};

const PlannerColumn = (props: { times: string[]; id: string; dayContent }) => {
    const viewSize = useContext(ViewSizeContext);
    const [windowSize, setWindowSize] = useState(window.innerWidth);

    useEffect(() => {
        function handleResize() {
            setWindowSize(window.innerWidth);
            // Update the state or perform any other actions when the
            // browser is resized
        }
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <StyledPlannerColumn
            $width={calcIndividualColWidth(viewSize, windowSize)}
            id={props.id}
        >
            {props.times.map((time) => {
                return <PlannerCell key={time} id={`${props.id}|${time}`} />;
            })}
            {props.dayContent &&
                props.dayContent.map((event) => {
                    return <EventCard className="eventcard" props={event} />;
                })}
        </StyledPlannerColumn>
    );
};
