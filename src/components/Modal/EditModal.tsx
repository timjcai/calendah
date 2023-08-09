import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import {
    DateTimeInput,
    FormInputText,
    SubmitButtonSection,
    TextInput,
    TitleInput,
} from "../Form";
import settings from "../../db/settings.json";
import {
    useForm,
    FormProvider,
    useFormContext,
    useController,
    Controller,
} from "react-hook-form";
import { ExitButton, IconButton, StyledButton } from "../common/Button";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { Icon } from "../common/Icon";
import { StyledForm } from "../Form/Form.styles";
import {
    allTimesEvery15min,
    generateTimeArray,
    mergeDateTime,
    parseTimeStringtoDateObject,
} from "../../utils";
import { ModalNavbar } from "./BaseModalComponents";
import { ModalBox } from "./Modal.styles";
import {
    DisplayTimeContext,
    UserCalendarIndexContext,
    UserCalendarMappingContext,
} from "../../context";

export const EditModal = ({ setActiveCard, top, left, eventCardData }) => {
    const formDefault = settings.newevent_default;
    const displayTimes = useContext(DisplayTimeContext);
    const calendarIndexData = useContext(UserCalendarIndexContext);
    const calendarIdMap = useContext(UserCalendarMappingContext);
    const [payload, setPayload] = useState(formDefault);

    const {
        id,
        starttime,
        endtime,
        title,
        location,
        description,
        calendar_id,
        guests,
        attachments,
        meeting,
    } = eventCardData;

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
        console.log(typeof value);
        setPayload((prevState) => ({ ...prevState, [currentInput]: value }));
        console.log(payload);
    };

    const calendarIdHandler = (e) => {
        const currentInput = e.target.id;
        console.log(currentInput);
        const value = calendarIdMap[e.target.innerHTML];
        console.log(value);
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
        return formValues;
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const form = validateData(payload);
        console.log(form);

        // fetch(
        //     `http://localhost:3000/api/v1/calendars/${form.calendar_id}/events`,
        //     {
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json",
        //         },
        //         body: JSON.stringify(form),
        //     }
        // )
        //     .then((response) => response.json())
        //     .then((data) => {
        //         console.log("Response from server:", data);
        //     })
        //     .catch((error) => {
        //         console.error("Error:", error);
        //     });
    };

    return (
        <ModalBox $top={top} $left={left}>
            <form method="post" onSubmit={handleFormSubmit}>
                <TitleInput
                    label={"title"}
                    payload={payload}
                    onChange={customInputHandler}
                ></TitleInput>
                <DateTimeInput
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
                    onChange={calendarIdHandler}
                    data={calendarIndexData}
                />
            </form>
        </ModalBox>
    );
};
