import React from "react";
import { Paragraph } from "../../common/Text";

export const SettingsParagraph = ({ children }) => {
    return (
        <Paragraph
            $color={"rgb(55, 53, 47)"}
            $fweight={"400"}
            $fsize={"16px"}
            $padding={"0px 0px 0px 0px"}
            $margin={"0px 0px 2px 0px"}
        >
            {children}
        </Paragraph>
    );
};

export const SettingsSubParagraph = ({ children }) => {
    return (
        <Paragraph
            $color={"rgb(55, 53, 47,0.65)"}
            $fsize={"14px"}
            $padding={"0px 0px 0px 0px"}
            $margin={"0px 0px 2px 0px"}
        >
            {children}
        </Paragraph>
    );
};
