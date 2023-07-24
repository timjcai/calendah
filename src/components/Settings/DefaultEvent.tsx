import React from "react";
import { SettingsHeading } from "./common";
import { SettingsParagraph, SettingsSubParagraph } from "./common/SettingsText";

export const DefaultEvent = () => {
    return (
        <div>
            <SettingsHeading>Default Event Settings</SettingsHeading>
            <div className="flex justify-between">
                <div className="mb-4">
                    <SettingsParagraph>Title</SettingsParagraph>
                    <SettingsSubParagraph>
                        Default title text when creating new event
                    </SettingsSubParagraph>
                </div>
                <div>action</div>
            </div>
            <div className="flex justify-between">
                <div className="mb-4">
                    <SettingsParagraph>Meeting</SettingsParagraph>
                    <SettingsSubParagraph>
                        {" "}
                        Default meeting text when creating new event
                    </SettingsSubParagraph>
                </div>
                <div>action</div>
            </div>
            <div className="flex justify-between">
                <div className="mb-4">
                    <SettingsParagraph>Location</SettingsParagraph>
                    <SettingsSubParagraph>
                        {" "}
                        Default location text when creating new event
                    </SettingsSubParagraph>
                </div>
                <div>action</div>
            </div>
            <div className="flex justify-between">
                <div className="mb-4">
                    <SettingsParagraph>Attachments</SettingsParagraph>
                    <SettingsSubParagraph>
                        {" "}
                        Default attachments text when creating new event
                    </SettingsSubParagraph>
                </div>
                <div>action</div>
            </div>
            <div className="flex justify-between">
                <div className="mb-4">
                    <SettingsParagraph>Guests</SettingsParagraph>
                    <SettingsSubParagraph>
                        {" "}
                        Default guests text when creating new event
                    </SettingsSubParagraph>
                </div>
                <div>action</div>
            </div>
            <div className="flex justify-between">
                <div className="mb-4">
                    <SettingsParagraph>Description</SettingsParagraph>
                    <SettingsSubParagraph>
                        {" "}
                        Default description text when creating new event
                    </SettingsSubParagraph>
                </div>
                <div>action</div>
            </div>
        </div>
    );
};
