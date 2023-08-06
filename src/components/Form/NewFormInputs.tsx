import React, { FC, useContext } from "react";
import {
    FormActionButton,
    FormInputProps,
    IconBubble,
    StyledInput,
    StyledInputLabel,
} from "./NewForm.styles";
import { SelectPicker } from "../SelectPicker/SelectPicker";
import { iconMapping } from "../../Mapping";
import { Icon } from "../common/Icon";
import { DatePicker } from "../DatePicker";
import {
    closest15min,
    closest15minDOtoDO,
    dateObjecttoString,
} from "../../utils";
import { DisplayTimeContext } from "../../context/SettingsProvider";
import { UserCalendarMappingContext } from "../../context";

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
    const displayTimeSetting = useContext(DisplayTimeContext);
    payload["starttime"] = new Date();
    payload["endtime"] = new Date();
    const startTime = closest15minDOtoDO(payload["starttime"]);
    let endTime = closest15minDOtoDO(payload["endtime"]);
    endTime = new Date(endTime.setHours(endTime.getHours() + 1));
    return (
        <StyledInputLabel>
            <div>
                <DatePicker label={"startdate"} />
            </div>
            <SelectPicker
                label={"starttime"}
                color={color}
                placeholder={dateObjecttoString(startTime, displayTimeSetting)}
                list={data}
                onChange={onChange}
                width={"54px"}
            />
            <p className="mr-4">to</p>
            <SelectPicker
                label={"endtime"}
                color={color}
                placeholder={dateObjecttoString(endTime, displayTimeSetting)}
                list={data}
                onChange={onChange}
                width={"54px"}
            />
        </StyledInputLabel>
    );
};

export const SubmitButtonSection: FC<FormInputProps> = ({
    payload,
    onChange,
    data,
}) => {
    return (
        <StyledInputLabel>
            <SelectPicker
                label={"calendar_id"}
                color={"#212121"}
                payload={payload["calendar_id"]}
                onChange={onChange}
                list={data}
            />
            <FormActionButton type="submit">Submit</FormActionButton>
        </StyledInputLabel>
    );
};
