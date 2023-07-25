import React, { useState } from "react";
import {
    SettingsSubParagraph,
    RowSpacer,
    SettingsBlockRow,
    SettingsHeading,
    SettingsParagraph,
} from "./common";

import settings from "../../db/settings.json";
import { SelectPicker } from "../SelectPicker/SelectPicker";

export const ViewingOpt = () => {
    const [displayTimeSettings, setDisplayTimeSettings] = useState(
        settings.display_time
    );
    const [startOfTheWeek, setStartOfTheWeek] = useState(
        settings.start_of_the_week
    );
    const [viewSizeSettings, setViewSizeSettings] = useState(
        settings.view_size
    );
    const fakeData = ["12 hour", "24 hour", "12:00 hour"];

    return (
        <div>
            <SettingsHeading>Calendar View Options</SettingsHeading>
            <SettingsHeading>Time Settings</SettingsHeading>
            <SettingsBlockRow>
                <RowSpacer>
                    <SettingsParagraph>Display Time Settings</SettingsParagraph>
                    <SettingsSubParagraph>
                        [Functional] Select how you want to display time in your
                        Calendar timebar
                    </SettingsSubParagraph>
                </RowSpacer>
                <SelectPicker
                    label={"Display Time"}
                    placeholder={displayTimeSettings}
                    list={fakeData}
                />
            </SettingsBlockRow>
            <SettingsParagraph></SettingsParagraph>
            <SettingsHeading>Date Settings</SettingsHeading>
            <SettingsBlockRow>
                <RowSpacer>
                    <SettingsParagraph>Start of the Week</SettingsParagraph>
                    <SettingsSubParagraph>
                        [Not Functional] Select which day you would like to
                        start the week by default
                    </SettingsSubParagraph>
                </RowSpacer>
                <div>
                    <SettingsParagraph> {startOfTheWeek}</SettingsParagraph>
                </div>
            </SettingsBlockRow>
            <SettingsBlockRow>
                <RowSpacer>
                    <SettingsParagraph>View Size</SettingsParagraph>
                    <SettingsSubParagraph>
                        [Semi Functional] Select how you want to display columns
                        in your Calendar
                    </SettingsSubParagraph>
                </RowSpacer>
                <div>
                    <SettingsParagraph> {viewSizeSettings}</SettingsParagraph>
                </div>
            </SettingsBlockRow>
        </div>
    );
};
// "time_zone": "en-AU",
// "start_of_the_week": "Monday",
// "view_size": 7,
// "display_time": "24 hour",
