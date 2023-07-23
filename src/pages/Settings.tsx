import React, { Profiler } from "react";
import styled from "styled-components";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { Routes, Route, Link } from "react-router-dom";
import {
    CalendarColors,
    DefaultEvent,
    Integrations,
    KeyboardShortcuts,
    LanguageandRegion,
    Notification,
    Profile,
    Security,
    Timezone,
    ViewingOpt,
} from "../components/Settings";
import { SettingsLink } from "../components/Settings/SettingsLink";

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
                    <br />
                    <SettingsLink label={"Profile"} />
                    <SettingsLink label={"Passwords & Security"} />
                    <br />
                    <h2>Settings</h2>
                    <SettingsLink label={"Language & Region"} />
                    <SettingsLink label={"Timezone"} />
                    <SettingsLink label={"Viewing Options"} />
                    <SettingsLink label={"Default Event"} />
                    <SettingsLink label={"Calendar Colors"} />
                    <SettingsLink label={"Notifications"} />
                    <SettingsLink label={"Keyboard Shortcuts"} />
                    <SettingsLink label={"Integrations"} />
                    <br />
                </Sidebar>
                <main>
                    <h1>Settings page</h1>
                    <Routes>
                        <Route path="/profile" element={<Profile />} />
                        <Route
                            path="/passwords-security"
                            element={<Security />}
                        />
                        <Route
                            path="/language-region"
                            element={<LanguageandRegion />}
                        />
                        <Route path="/timezone" element={<Timezone />} />
                        <Route
                            path="/viewing-options"
                            element={<ViewingOpt />}
                        />
                        <Route
                            path="/default-event"
                            element={<DefaultEvent />}
                        />
                        <Route
                            path="/calendar-colors"
                            element={<CalendarColors />}
                        />
                        <Route
                            path="/notifications"
                            element={<Notification />}
                        />
                        <Route
                            path="/keyboard-shortcuts"
                            element={<KeyboardShortcuts />}
                        />
                        <Route
                            path="/integrations"
                            element={<Integrations />}
                        />
                    </Routes>
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
