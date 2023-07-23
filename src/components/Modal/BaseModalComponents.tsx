import React, { useContext } from "react";
import {
    CalendarColorSquare,
    ModalBox,
    Modalnav,
    NavContentWrapper,
} from "./Modal.styles";
import { IconButton } from "../common/Button";
import settings from "../../db/settings.json";
import { Paragraph } from "../common/Text";
import { DeleteRequest } from "../../hooks/useEventPostRequest";
import { deleteEventId } from "../../utils";
import { EventContext } from "../../context/Context";

// CHANGES #1: NEED TO EDIT - add functionality for dynamic changes based on calendar view
export const ModalNavbar = ({ setActiveCard, eventData }) => {
    const color = settings.calendar_color_settings[eventData.calendar_id].color;
    const name = settings.calendar_color_settings[eventData.calendar_id].name;
    const allEventData = useContext(EventContext);

    const handleDelete = (e) => {
        DeleteRequest(eventData);
        // deleteEventId(eventData.id, allEventData);
    };

    return (
        <Modalnav>
            <NavContentWrapper>
                <CalendarColorSquare $bgcolor={color} />
                <Paragraph $fsize={"14px"}>{name}</Paragraph>
            </NavContentWrapper>
            <NavContentWrapper>
                <IconButton
                    onClick={(e) => console.log("editing")}
                    label={"edit"}
                />
                <IconButton onClick={(e) => handleDelete(e)} label={"delete"} />
                <IconButton
                    onClick={(e) => setActiveCard(null)}
                    label={"exit"}
                />
            </NavContentWrapper>
        </Modalnav>
    );
};
