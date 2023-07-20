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

export const BaseModal = ({ children, top, left }) => {
    return (
        <ModalBox $top={top} $left={left}>
            {children}
        </ModalBox>
    );
};
// CHANGES #1: NEED TO EDIT - add functionality for dynamic changes based on calendar view
export const ModalNavbar = () => {
    return (
        <Modalnav>
            <NavContentWrapper>
                <CalendarColorSquare
                    $bgcolor={settings.calendar_color[1].color}
                />
                <Paragraph $fsize={"14px"}>
                    {settings.calendar_color[1].name}
                </Paragraph>
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
                    onClick={(e) => console.log("exiting")}
                    label={"exit"}
                />
            </NavContentWrapper>
        </Modalnav>
    );
};
