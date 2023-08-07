import React, { FC, useContext, useEffect, useState } from "react";

import { PaddedDiv, StyledHeader } from "./Header.styles";
import { CalendarTagWrapper } from "./CalendarHeader.styles";
import { CalendarColorSquare } from "../../Modal/Modal.styles";

import { Paragraph } from "../../common/Text";
import { ViewSizeContext } from "../../../context/Context";
import { calcIndividualColWidth } from "../../../utils";

import settings from "../../../db/settings.json";
import { NotificationBubble } from "../../common/Notification";
import { CalendarData, ICalendarData } from "../../types";
import { AllUserCalendarContext } from "../../../context/UserDataProvider";

export const CalendarHeader: FC = (): React.JSX.Element => {
    const allCalendars = useContext(AllUserCalendarContext);
    console.log(allCalendars);
    return (
        <StyledHeader>
            <PaddedDiv></PaddedDiv>
            {allCalendars.map((calendar) => {
                const { id, tag } = calendar;
                return <CalendarTag key={tag} id={id} tag={tag} />;
            })}
        </StyledHeader>
    );
};

export const CalendarTag: FC<CalendarData> = ({
    id,
    tag,
    created_at,
    updated_at,
}): React.JSX.Element => {
    const viewSize = useContext(ViewSizeContext);
    const [active, setActive] = useState(false);
    const [windowSize, setWindowSize] = useState(window.innerWidth);

    const color = settings.calendar_color_settings[`${id}`].color;

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
            <Paragraph>{tag}</Paragraph>
            <NotificationBubble>1</NotificationBubble>
        </CalendarTagWrapper>
    );
};
