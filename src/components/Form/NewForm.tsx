import React, { FC, useContext, useEffect, useState } from "react";
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
import { validateData } from "../../utils/FormUtils";
import {
    DateTimeInput,
    SelectInput,
    SubmitButtonSection,
    TextInput,
    TitleInput,
} from "./NewFormInputs";
import {
    allTimesEvery15min,
    generateTimeArray,
    parseTimeStringtoDateObject,
} from "../../utils";
import { DisplayTimeContext } from "../../context/SettingsProvider";
import { FormActionButton } from "./NewForm.styles";

export const NewForm = () => {
    const displayTimes = useContext(DisplayTimeContext);
    const formDefault = settings.newevent_default;
    const [payload, setPayload] = useState(formDefault);
    const [currentActive, setCurrentActive] = useState(null);
    const [formColor, setFormColor] = useState("#212121");

    const customInputHandler = (e) => {
        const currentInput = e.target.id;
        const value = e.target.value;
        setPayload((prevState) => ({ ...prevState, [currentInput]: value }));
    };

    const dateTimeInputHandler = (e) => {
        console.log(e.target.id);
        const currentInput = e.target.id;
        const value = parseTimeStringtoDateObject(
            displayTimes,
            e.target.innerHTML
        );
        setPayload((prevState) => ({ ...prevState, [currentInput]: value }));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const form = validateData(payload);
        console.log(form);
    };

    return (
        <form method="post" onSubmit={handleFormSubmit}>
            <div className="flex flex-col">
                <TitleInput
                    label={"title"}
                    payload={payload}
                    onChange={customInputHandler}
                ></TitleInput>
                <DateTimeInput
                    color={"#212121"}
                    payload={payload}
                    onChange={dateTimeInputHandler}
                    data={generateTimeArray(displayTimes, allTimesEvery15min())}
                />
                <TextInput
                    label={"description"}
                    payload={payload}
                    onChange={customInputHandler}
                />
                <TextInput
                    label={"location"}
                    payload={payload}
                    onChange={customInputHandler}
                />
                <TextInput
                    label={"meeting"}
                    payload={payload}
                    onChange={customInputHandler}
                />
                <TextInput
                    label={"attachments"}
                    payload={payload}
                    onChange={customInputHandler}
                />

                <TextInput
                    label={"guests"}
                    payload={payload}
                    onChange={customInputHandler}
                />
                <SubmitButtonSection
                    payload={payload}
                    onChange={customInputHandler}
                    data={calendarIds}
                />
            </div>

            <br />
            <br />
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

// types of inputs: Text, Title, Links, Attachments

const calendarIds = [1, 2, 3, 4];

const calendarNameIdMap = {
    Work: 1,
    "Side Projects": 2,
    Family: 3,
    Exercise: 4,
};

const test = ["Work", "Side Projects", "Family", "Exercise"];
