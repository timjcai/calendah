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
import { DatePicker } from "react-widgets/cjs";

export const TextInput: FC<FormInputProps> = ({ label, payload, onChange }) => {
    const selectedIcon = iconMapping[label];
    return (
        <StyledInputLabel>
            <IconBubble>
                <Icon icon={selectedIcon}></Icon>
            </IconBubble>
            <StyledInput
                id={label}
                placeholder={payload[label]}
                defaultValue={null}
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
                placeholder={payload[label]}
                defaultValue={null}
                onChange={onChange}
                $fsize={"32px"}
            />
        </StyledInputLabel>
    );
};

export const SelectInput: FC<FormInputProps> = ({
    label,
    payload,
    color,
    onChange,
    data,
}) => {
    return (
        <StyledInputLabel>
            <SelectPicker
                label={label}
                color={color}
                placeholder={payload[label]}
                list={data}
                onChange={onChange}
            />
        </StyledInputLabel>
    );
};

export const DateTimeInput: FC<FormInputProps> = ({
    payload,
    color,
    onChange,
    data,
}) => {
    return (
        <StyledInputLabel>
            <DatePicker />
            <SelectPicker
                label={"starttime"}
                color={color}
                placeholder={payload["starttime"]}
                list={data}
                onChange={onChange}
                width={"47px"}
            />
            <p>to</p>
            <DatePicker />
            <SelectPicker
                label={"endtime"}
                color={color}
                placeholder={payload["endtime"]}
                list={data}
                onChange={onChange}
                width={"47px"}
            />
        </StyledInputLabel>
    );
};
