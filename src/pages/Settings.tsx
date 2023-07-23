import React from "react";
import styled from "styled-components";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Sidebarstyles = {
    borderradius: "16px 0px 0px 16px",
    padding: "32px 0px 32px 32px",
};

export const Settings = () => {
    return (
        <BackgroundWrapper>
            <CenteredWrapper>
                <Sidebar styles={Sidebarstyles}>
                    <h1>Tim Cai</h1>
                    <p>tim.j.cai@gmail.com</p>
                    <p>Profile</p>
                    <p>Passwords & Security</p>
                    <br />
                    <h2>Settings</h2>
                    <p>Language and Region</p>
                    <p>Timezone</p>
                    <p>Viewing Options</p>
                    <p>Default Event</p>
                    <p>Calendar Colors</p>
                    <p>Notifications</p>
                    <p>Keyboard Shortcuts</p>
                    <p>Integrations</p>
                    <br />
                </Sidebar>
                <main>
                    <h1>Settings page</h1>
                </main>
            </CenteredWrapper>
        </BackgroundWrapper>
    );
};

export const BackgroundWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background-color: grey;
`;

export const CenteredWrapper = styled.div`
    display: flex;
    flex-direction: row;
    height: auto;
    background: rgba(255, 255, 255, 0.49);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(14.9px);
    -webkit-backdrop-filter: blur(14.9px);
    border: 1px solid rgba(255, 255, 255, 0.4);
`;
