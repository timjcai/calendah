import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
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
import { mergeDateTime } from "../../utils";
import { ModalNavbar } from "./BaseModalComponents";
import { ModalBox } from "./Modal.styles";

export const EditModal = ({ setActiveCard, top, left, eventCardData }) => {
    const formDefault = settings.newevent_default;
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
        formValues["calendar_id"] = 1;
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

    const handleFormSubmit = (formValues) => {
        const form = validateData(formValues);
        console.log(form);

        fetch(
            `http://localhost:3000/api/v1/calendars/${form.calendar_id}/events`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            }
        )
            .then((response) => response.json())
            .then((data) => {
                console.log("Response from server:", data);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    const calendarIds = [1, 2, 3, 4];

    const calendarNameIdMap = {
        Work: 1,
        "Side Projects": 2,
        Family: 3,
        Exercise: 4,
    };

    const test = ["Work", "Side Projects", "Family", "Exercise"];

    return (
        <ModalBox $top={top} $left={left}>
            <form method="post" onSubmit={handleFormSubmit}>
                <TitleInput
                    label={"title"}
                    payload={payload}
                    onChange={customInputHandler}
                ></TitleInput>
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
                {/* <FormInputText
                    label={"guests"}
                    margin={"5px"}
                    defaultValue={guests}
                    readOnly={false}
                    pointerEvents={"auto"}
                />
                <FormInputText
                    label={"location"}
                    margin={"5px"}
                    defaultValue={location}
                    readOnly={false}
                    pointerEvents={"auto"}
                />
                <FormInputText
                    label={"attachments"}
                    margin={"5px"}
                    defaultValue={attachments}
                    readOnly={false}
                    pointerEvents={"auto"}
                /> */}
                {/* <TimeInput eventData={eventCardData} /> */}
                <SubmitButtonSection
                    payload={payload}
                    onChange={customInputHandler}
                    data={calendarIds}
                />
                {/* <StyledButton type="submit">Save</StyledButton> */}
            </form>
        </ModalBox>
    );
};

export const TimeInput = ({ eventData }) => {
    const { register } = useFormContext();
    const { starttime, endtime } = eventData;

    useEffect(() => {
        console.log("rerender");
    }, [eventData]);

    return (
        <TimeInputWrapper>
            <input
                id="starttime"
                defaultValue={starttime}
                {...register("starttime", {
                    valueAsDate: true,
                    required: {
                        value: true,
                        message: "Start time is required",
                    },
                })}
            />
            <input
                id="endtime"
                defaultValue={endtime}
                {...register("endtime", {
                    valueAsDate: true,
                    required: {
                        value: true,
                        message: "End time is required",
                    },
                })}
            />
        </TimeInputWrapper>
    );
};

const TimeInputWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;
