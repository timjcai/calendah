import React from "react";
import { Heading1 } from "../../common/Text";

export const SettingsHeading = ({ children }) => {
    return (
        <Heading1
            $color={"rgb(55, 53, 47)"}
            $fweight={"500"}
            $fsize={"18px"}
            $padding={"0px 0px 12px 0px"}
            $margin={"0px 0px 16px 0px"}
            $borderBottom={"1px solid rgba(55, 53, 47, 0.09)"}
        >
            {children}
        </Heading1>
    );
};

export const SettingsHeading2 = ({ children }) => {
    return (
        <Heading1
            $color={"rgb(55, 53, 47)"}
            $fweight={"500"}
            $fsize={"16px"}
            $padding={"0px 0px 6px 0px"}
            $margin={"0px 0px 6px 0px"}
        >
            {children}
        </Heading1>
    );
};

export const SettingsHeading3 = ({ children }) => {
    return (
        <Heading1
            $color={"rgb(55, 53, 47)"}
            $fweight={"500"}
            $fsize={"16px"}
            $padding={"0px 0px 0px 0px"}
            $margin={"0px 0px 0px 0px"}
        >
            {children}
        </Heading1>
    );
};
