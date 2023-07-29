import React, { FC, useState } from "react";
import styled from "styled-components";
import { FormCol, StyledForm } from "./Form.styles";
import { FormInputText } from "./FormInput";
import { FormInputDateTime } from ".";
import { StyledButton } from "../common/Button";
import settings from "../../db/settings.json";
import {
    APIDataObject,
    CommonStylingProps,
    EventProps,
    formInput,
} from "../types";
import { Icon } from "../common/Icon";
import { iconMapping } from "../../Mapping";
import { SelectPicker } from "../SelectPicker/SelectPicker";

export const NewForm = () => {
    const formDefault = settings.newevent_default;
    const [payload, setPayload] = useState(formDefault);
    const [currentActive, setCurrentActive] = useState(null);

    const customInputHandler = (e) => {
        const currentInput = e.target.id;
        const value = e.target.value;
        setPayload((prevState) => ({ ...prevState, [currentInput]: value }));
    };

    const validateData = (formValues) => {
        const {
            title,
            starttime,
            endtime,
            location,
            meeting,
            attachments,
            description,
            guests,
            calendar_id,
        } = formValues;
        if (!title) {
            console.log("no title provided");
        }
        if (!location) {
            console.log("no location provided");
        }
        if (!meeting) {
            console.log("no meeting provided");
        }
        if (!attachments) {
            console.log("no attachments provided");
        }
        if (!description) {
            console.log("no description provided");
        }
        if (calendar_id instanceof String) {
            const idNumber = calendarNameIdMap[`${calendar_id}`];
            console.log(idNumber);
            formValues[`${calendar_id}`] = idNumber;
        }
        return formValues;
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const form = validateData(payload);
        console.log(form);
    };

    return (
        <form method="post" onSubmit={handleFormSubmit}>
            <div className="flex flex-col">
                <StyledTitleInput
                    label={"title"}
                    payload={payload}
                    onChange={customInputHandler}
                ></StyledTitleInput>
                <StyledTextInput
                    label={"description"}
                    payload={payload}
                    onChange={customInputHandler}
                />
                <StyledTextInput
                    label={"location"}
                    payload={payload}
                    onChange={customInputHandler}
                />
                <StyledTextInput
                    label={"meeting"}
                    payload={payload}
                    onChange={customInputHandler}
                />
                <StyledTextInput
                    label={"attachments"}
                    payload={payload}
                    onChange={customInputHandler}
                />
                <StyledSelectInput
                    label={"calendar_id"}
                    payload={payload}
                    onChange={customInputHandler}
                    data={calendarIds}
                />
            </div>
            <button type="submit">Submit</button>

            <br />
            <br />
            <div>
                <p>Current Active: {currentActive} </p>
            </div>
            {/* <p>{payload.title}</p>
            <p>{payload.starttime}</p>
            <p>{payload.endtime}</p>
            <p>{payload.meeting}</p>
            <p>{payload.location}</p>
            <p>{payload.attachments}</p>
            <p>{payload.guests}</p>
            <p>{payload.description}</p> */}
        </form>
    );
};

const IconBubble = styled.span`
    align-items: center;
    background-color: #1d1d1d;
    color: white;
    border-radius: 100%;
    padding: 4px 2.5px 4px 2.5px;
`;

const StyledInputLabel = styled.label`
    display: block;
    padding: 5px 0px 5px 0px;
    background-color: #212121;
    border: 1px solid black;
    border-radius: 6px;
    width: 50vw;
`;

const StyledInput = styled.input<StyledInputProps>`
    background: none;
    outline: none;
    color: white;
    font-size: ${(props) => props.$fsize};
    width: 94%;
    margin-left: 5px;
    text-overflow: ellipsis;
`;

export type StyledInputProps = {
    id: formInput;
    defaultValue: EventProps;
    onChange?: Function;
    $fsize?: string;
};

export const StyledTextInput: FC<FormInputProps> = ({
    label,
    payload,
    onChange,
}) => {
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

export type FormInputProps = {
    label: formInput;
    payload: APIDataObject;
    onChange: Function;
    data?: string[];
};

// types of inputs: Text, Title, Links, Attachments

export const StyledTitleInput: FC<FormInputProps> = ({
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

export const StyledSelectInput: FC<FormInputProps> = ({
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

const calendarIds = [1, 2, 3, 4];

const calendarNameIdMap = {
    Work: 1,
    "Side Projects": 2,
    Family: 3,
    Exercise: 4,
};

const test = ["Work", "Side Projects", "Family", "Exercise"];
