import React, { FC, MouseEvent } from "react";
import styled from "styled-components";
import { iconMapping } from "../../db/Mapping";
import { InputType } from "../types";
import { Icon } from "./Icon";

export const StyledButton = styled.button`
    border-radius: 8px;
    width: content-fit;
    color: white;
    background-color: var(--blue);
    padding: 0.5em;
    margin: 0.5em;
`;

export const ExitButton = styled.button`
    top: 4px;
    right: 12px;
    z-index: 1;
    width: 28px;
    height: 28px;
    padding: 2px;
    color: rgb(95, 99, 104);
`;

export const Button = ({ children }) => {
    return <StyledButton>{children}</StyledButton>;
};

interface IconButtonProps {
    label: InputType;
    onClick?: MouseEvent<HTMLButtonElement>;
}

export const StyledIconButton = styled.div``;

export const IconButton: FC<IconButtonProps> = ({ label, onClick }) => {
    const icon = iconMapping[label];

    return (
        <StyledIconButton onClick={onClick}>
            <Icon icon={icon}></Icon>
        </StyledIconButton>
    );
};
