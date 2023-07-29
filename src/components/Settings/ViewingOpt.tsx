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
    const displayTimeOptions = ["12 hour", "24 hour", "12:00 hour"];
    const viewSizeOptions = [1, 2, 3, 4, 5, 7];
    const startOftheWeekOptions = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ];
    const color = "var(--background-grey)";

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
                    color={color}
                    placeholder={displayTimeSettings}
                    list={displayTimeOptions}
                />
            </SettingsBlockRow>
            <SettingsHeading>Date Settings</SettingsHeading>
            <SettingsBlockRow>
                <RowSpacer>
                    <SettingsParagraph>View Size</SettingsParagraph>
                    <SettingsSubParagraph>
                        [Semi Functional] Select how you want to display columns
                        in your Calendar
                    </SettingsSubParagraph>
                </RowSpacer>
                <SelectPicker
                    label={"View Size"}
                    color={color}
                    placeholder={viewSizeSettings}
                    list={viewSizeOptions}
                />
                <div>
                    <SettingsParagraph> </SettingsParagraph>
                </div>
            </SettingsBlockRow>
            <SettingsBlockRow>
                <RowSpacer>
                    <SettingsParagraph>Start of the Week</SettingsParagraph>
                    <SettingsSubParagraph>
                        [Not Functional] Select which day you would like to
                        start the week by default
                    </SettingsSubParagraph>
                </RowSpacer>
                <SelectPicker
                    label={"Start of the Week"}
                    color={color}
                    placeholder={startOfTheWeek}
                    list={startOftheWeekOptions}
                />
                <div>
                    <SettingsParagraph> </SettingsParagraph>
                </div>
            </SettingsBlockRow>
        </div>
    );
};
// "time_zone": "en-AU",
// "start_of_the_week": "Monday",
// "view_size": 7,
// "display_time": "24 hour",
