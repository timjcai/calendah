import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Icon } from "../common/Icon";
import { settingsIconMapping } from "../../db/Mapping";
import { Paragraph } from "../common/Text";

export const SettingsLink = ({ label }) => {
    const icon = settingsIconMapping[label];
    const color = "rgba(55, 53, 47, 0.85)";

    const slugify = (label: string): string => {
        const charactersArray = label
            .split(/[^(a-zA-Z)]/g)
            .filter((char) => char !== "");
        return charactersArray.join("-").toLowerCase();
    };

    return (
        <StyledLink to={`/settings/${slugify(label)}`}>
            <Icon icon={icon} color={color} />
            <Paragraph>{label}</Paragraph>
        </StyledLink>
    );
};

const StyledLink = styled(Link)`
    display: flex;
    flex-direction: row;
    font-size: 14px;
    line-height: 20px;
    color: rgb(55, 53, 47);
    min-height: 28px;
    gap: 16px;
`;
