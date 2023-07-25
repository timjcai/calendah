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
import {
    BackgroundWrapper,
    CenteredWrapper,
    ContentSection,
    SettingsHeading2,
    SettingsHeading3,
    SettingsSubParagraph,
} from "../components/Settings/common";

const Sidebarstyles = {
    borderradius: "16px 0px 0px 16px",
    padding: "32px 0px 32px 32px",
};

export const Settings = () => {
    return (
        <BackgroundWrapper>
            <CenteredWrapper>
                <Sidebar styles={Sidebarstyles}>
                    <SettingsHeading3>Tim Cai</SettingsHeading3>
                    <SettingsSubParagraph>
                        tim.j.cai@gmail.com
                    </SettingsSubParagraph>
                    <br />
                    <SettingsLink label={"Profile"} />
                    <SettingsLink label={"Passwords & Security"} />
                    <br />
                    <SettingsHeading2>Settings</SettingsHeading2>
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
                <ContentSection>
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
                </ContentSection>
            </CenteredWrapper>
        </BackgroundWrapper>
    );
};
