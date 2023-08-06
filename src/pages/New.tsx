import React from "react";
import { InputForm, NewForm } from "../components/Form";
import { NavWrapper, NavMapping, NavButton } from "../components/Navbar/Navbar";

export const New = () => {
    return (
        <>
            <NavWrapper>
                <NavButton navigation={NavMapping["calendar"]} />
            </NavWrapper>
            <div className="m-20">
                <NewForm />
            </div>
        </>
    );
};
