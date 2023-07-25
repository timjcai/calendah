import React from "react";
import {
    RowSpacer,
    SettingsBlockRow,
    SettingsHeading,
    SettingsParagraph,
    SettingsSubParagraph,
} from "./common";

export const LanguageandRegion = () => {
    return (
        <div>
            <SettingsHeading>Language and Region Settings</SettingsHeading>
            <SettingsBlockRow>
                <RowSpacer>
                    <SettingsParagraph>Timezone</SettingsParagraph>
                    <SettingsSubParagraph>
                        [Not Functional] Select how you want your Calendar
                        timezone
                    </SettingsSubParagraph>
                </RowSpacer>
                <div>action</div>
            </SettingsBlockRow>
        </div>
    );
};
