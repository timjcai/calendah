import { faTerminal } from "@fortawesome/free-solid-svg-icons";
import React, { useContext, useEffect, useState } from "react";
import { PaddedDiv, StyledHeader } from "./Header.styles";
import { CalendarTagWrapper } from "./CalendarHeader.styles";
import { CalendarColorSquare } from "../../Modal/Modal.styles";
import settings from "../../../db/settings.json";
import { Paragraph } from "../../common/Text";
import { ViewSizeContext } from "../../../context/Context";
import { calcIndividualColWidth } from "../../../utils";
import { NotificationBubble } from "../../common/Notification";

export const CalendarHeader = () => {
    const [allCalendars, setAllCalendars] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3000/api/v1/calendars/`)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw response;
            })
            .then((data) => {
                setAllCalendars(data);
            })
            .catch((error) => {
                console.log("Error fetching data: ", error);
            });
    }, []);

    return (
        <StyledHeader>
            <PaddedDiv></PaddedDiv>
            {allCalendars.map((calendar) => {
                return <CalendarTag calendarData={calendar} />;
            })}
        </StyledHeader>
    );
};

export const CalendarTag = ({ calendarData }) => {
    const viewSize = useContext(ViewSizeContext);
    const [active, setActive] = useState(false);
    const [windowSize, setWindowSize] = useState(window.innerWidth);

    const color = settings.calendar_color_settings[calendarData.id].color;
    const label = calendarData.tag;

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
        <CalendarTagWrapper
            active={active}
            onClick={(e) => setActive(active ? false : true)}
            width={calcIndividualColWidth(viewSize, windowSize)}
        >
            <CalendarColorSquare $bgcolor={color} />
            <Paragraph>{label}</Paragraph>
            <NotificationBubble>1</NotificationBubble>
        </CalendarTagWrapper>
    );
};
