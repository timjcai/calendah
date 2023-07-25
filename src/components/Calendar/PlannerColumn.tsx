import React, { useContext, useEffect, useState } from "react";
import {
    DisplayTimeContext,
    ViewSizeContext,
} from "../../context/SettingsProvider";
import { calcIndividualColWidth, generateTimeArray } from "../../utils";
import { PlannerCell, StyledPlannerColumn } from "./Calendar.styles";
import { EventCard } from "./EventCard";

export const PlannerColumn = ({ id, dayContent }) => {
    const viewSize = useContext(ViewSizeContext);
    const displayTimes = useContext(DisplayTimeContext);
    const displayHours = generateTimeArray(displayTimes);
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
            id={id}
        >
            {displayHours.map((time) => {
                return <PlannerCell key={time} id={`${id}|${time}`} />;
            })}
            {dayContent &&
                dayContent.map((event) => {
                    return <EventCard className="eventcard" props={event} />;
                })}
        </StyledPlannerColumn>
    );
};
