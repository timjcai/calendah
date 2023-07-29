import React, { FC } from "react";
import {
    FormInputProps,
    IconBubble,
    StyledInput,
    StyledInputLabel,
} from "./NewForm.styles";
import { SelectPicker } from "../SelectPicker/SelectPicker";
import { iconMapping } from "../../Mapping";
import { Icon } from "../common/Icon";

export const TextInput: FC<FormInputProps> = ({ label, payload, onChange }) => {
    const selectedIcon = iconMapping[label];
    return (
        <StyledInputLabel>
            <IconBubble>
                <Icon icon={selectedIcon}></Icon>
            </IconBubble>
            <StyledInput
                id={label}
                defaultValue={payload[label]}
                onChange={onChange}
                $fsize={"16px"}
            />
        </StyledInputLabel>
    );
};

export const TitleInput: FC<FormInputProps> = ({
    label,
    payload,
    onChange,
}) => {
    return (
        <StyledInputLabel>
            <StyledInput
                id={label}
                defaultValue={payload[label]}
                onChange={onChange}
                $fsize={"32px"}
            />
        </StyledInputLabel>
    );
};

export const SelectInput: FC<FormInputProps> = ({
    label,
    payload,
    onChange,
    data,
}) => {
    return (
        <StyledInputLabel>
            <SelectPicker
                label={label}
                placeholder={payload[label]}
                list={data}
                onChange={onChange}
            />
        </StyledInputLabel>
    );
};
