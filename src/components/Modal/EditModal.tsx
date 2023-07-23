import React from "react";
import styled from "styled-components";
import { FormInputText, InputForm } from "../common/Form/Form";
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
import { StyledForm } from "../common/Form/Form.styles";
import { convert12to24time, mergeDateTime } from "../../utils";
import { ModalNavbar } from "./BaseModalComponents";
import { ModalBox } from "./Modal.styles";

export const EditModal = ({ setActiveCard, top, left, eventCardData }) => {
    const methods = useForm();
    if (eventCardData !== {}) {
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
    }

    const validateData = (formValues) => {
        const {
            title,
            startdate,
            starttime,
            enddate,
            endtime,
            location,
            meeting,
            attachments,
            description,
            guests,
        } = formValues;
        mergeDateTime(startdate, convert12to24time(starttime));
        mergeDateTime(enddate, convert12to24time(endtime));
        formValues["calendar_id"] = 1;
        delete formValues.startdate;
        delete formValues.enddate;
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
                        readOnly={false}
                        pointerEvents={"auto"}
                    />
                    <FormInputText
                        label={"guests"}
                        margin={"5px"}
                        readOnly={false}
                        pointerEvents={"auto"}
                    />
                    <FormInputText
                        label={"location"}
                        margin={"5px"}
                        readOnly={false}
                        pointerEvents={"auto"}
                    />
                    <FormInputText
                        label={"attachments"}
                        margin={"5px"}
                        readOnly={false}
                        pointerEvents={"auto"}
                    />
                    <StyledButton type="submit">Save</StyledButton>
                </form>
            </FormProvider>
        </ModalBox>
    );
};
