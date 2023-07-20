import React from "react";
import { ModalBox, Modalnav } from "./Modal.styles";
import { IconButton } from "../common/Button";

export const BaseModal = ({ children, top, left }) => {
    return (
        <ModalBox $top={top} $left={left}>
            {children}
        </ModalBox>
    );
};

export const ModalNavbar = () => {
    return (
        <Modalnav>
            <div></div>
            <div>
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
            </div>
        </Modalnav>
    );
};
