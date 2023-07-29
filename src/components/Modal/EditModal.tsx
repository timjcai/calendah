import React, { useEffect } from "react";
import styled from "styled-components";
import { FormInputText } from "../Form";
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
    const methods = useForm();

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

    return (
        <ModalBox $top={top} $left={left}>
            <FormProvider {...methods}>
                <form
                    method="post"
                    onSubmit={methods.handleSubmit(handleFormSubmit)}
                >
                    <FormInputText
                        label={"title"}
                        margin={"5px"}
                        defaultValue={title}
                        readOnly={false}
                        pointerEvents={"auto"}
                    />
                    <FormInputText
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
                    />
                    <TimeInput eventData={eventCardData} />
                    <StyledButton type="submit">Save</StyledButton>
                </form>
            </FormProvider>
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
