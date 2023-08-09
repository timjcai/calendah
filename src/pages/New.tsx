import React from "react";
import { InputForm, NewForm } from "../components/Form";
import { NavWrapper, NavMapping, NavButton } from "../components/Navbar/Navbar";
import { UserDataProvider } from "../context";

export const New = () => {
    return (
        <UserDataProvider>
            <NavWrapper>
                <NavButton navigation={NavMapping["calendar"]} />
            </NavWrapper>
            <div className="m-20">
                <NewForm />
            </div>
        </UserDataProvider>
    );
};
