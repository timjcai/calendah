import React from "react";
import styled from "styled-components";
import {
    RowSpacer,
    SettingsBlockRow,
    SettingsHeading,
    SettingsParagraph,
    SettingsSubParagraph,
} from "./common";

export const DefaultEvent = () => {
    return (
        <div>
            <SettingsHeading>Default Event Settings</SettingsHeading>
            <SettingsBlockRow>
                <RowSpacer>
                    <SettingsParagraph>Title</SettingsParagraph>
                    <SettingsSubParagraph>
                        Default title text when creating new event
                    </SettingsSubParagraph>
                </RowSpacer>
                <div>action</div>
            </SettingsBlockRow>
            <SettingsBlockRow>
                <RowSpacer>
                    <SettingsParagraph>Meeting</SettingsParagraph>
                    <SettingsSubParagraph>
                        Default meeting text when creating new event
                    </SettingsSubParagraph>
                </RowSpacer>
                <div>action</div>
            </SettingsBlockRow>
            <SettingsBlockRow>
                <RowSpacer>
                    <SettingsParagraph>Location</SettingsParagraph>
                    <SettingsSubParagraph>
                        Default location text when creating new event
                    </SettingsSubParagraph>
                </RowSpacer>
                <div>action</div>
            </SettingsBlockRow>
            <SettingsBlockRow>
                <RowSpacer>
                    <SettingsParagraph>Attachments</SettingsParagraph>
                    <SettingsSubParagraph>
                        Default attachments text when creating new event
                    </SettingsSubParagraph>
                </RowSpacer>
                <div>action</div>
            </SettingsBlockRow>
            <SettingsBlockRow>
                <RowSpacer>
                    <SettingsParagraph>Guests</SettingsParagraph>
                    <SettingsSubParagraph>
                        Default guests text when creating new event
                    </SettingsSubParagraph>
                </RowSpacer>
                <div>action</div>
            </SettingsBlockRow>
            <SettingsBlockRow>
                <RowSpacer>
                    <SettingsParagraph>Description</SettingsParagraph>
                    <SettingsSubParagraph>
                        {" "}
                        Default description text when creating new event
                    </SettingsSubParagraph>
                </RowSpacer>
                <div>action</div>
            </SettingsBlockRow>
        </div>
    );
};
