import { faTerminal } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { PaddedDiv, StyledHeader } from "./Header.styles";
import { CalendarTagWrapper } from "./CalendarHeader.styles";
import { CalendarColorSquare } from "../../Modal/Modal.styles";
import settings from "../../../db/settings.json";
import { Paragraph } from "../../common/Text";

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
                console.log(data);
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
    const [active, setActive] = useState(false);
    const color = settings.calendar_color[calendarData.id].color;
    const label = calendarData.tag;
    return (
        <CalendarTagWrapper
            active={active}
            onClick={(e) => setActive(active ? false : true)}
        >
            <CalendarColorSquare $bgcolor={color} />
            <Paragraph>{label}</Paragraph>
        </CalendarTagWrapper>
    );
};
