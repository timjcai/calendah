import React from "react";
import {
    CalendarColorSquare,
    ModalBox,
    Modalnav,
    NavContentWrapper,
} from "./Modal.styles";
import { IconButton } from "../common/Button";
import settings from "../../db/settings.json";
import { Paragraph } from "../common/Text";

// CHANGES #1: NEED TO EDIT - add functionality for dynamic changes based on calendar view
export const ModalNavbar = ({ setActiveCard, calendar_id }) => {
    const color = settings.calendar_color[calendar_id].color;
    const name = settings.calendar_color[calendar_id].name;

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
                <IconButton
                    onClick={(e) => console.log("deleting")}
                    label={"delete"}
                />
                <IconButton
                    onClick={(e) => setActiveCard(null)}
                    label={"exit"}
                />
            </NavContentWrapper>
        </Modalnav>
    );
};
