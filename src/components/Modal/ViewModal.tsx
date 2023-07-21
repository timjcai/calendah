import React from "react";
import { ModalBox, ModalStyledForm } from "./Modal.styles";
import { FormProvider, useForm } from "react-hook-form";
import { ModalNavbar } from "./BaseModalComponents";
import { FormInputText } from "../common/Form/Form";
import { StyledButton } from "../common/Button";

export const ViewModal = ({ top, left, setActiveCard, eventCardData }) => {
    const methods = useForm();

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
    } = eventCardData;
    console.log(eventCardData);

    const INPUTS = [
        "title",
        "starttime",
        "endtime",
        "location",
        "meeting",
        "attachments",
        "description",
        "guests",
    ];

    return (
        <ModalBox $top={top} $left={left}>
            <FormProvider {...methods}>
                <ModalNavbar
                    setActiveCard={setActiveCard}
                    calendar_id={calendar_id}
                />
                <ModalStyledForm>
                    {title !== null && (
                        <FormInputText
                            label={"title"}
                            margin={"5px"}
                            defaultValue={title}
                        />
                    )}
                    {/* custom display for start and endtime */}
                    {/* {starttime !== null && (
                        <FormInputText
                            label={"starttime"}
                            margin={"5px"}
                            defaultValue={starttime}
                        />
                    )}
                    {endtime !== null && (
                        <FormInputText
                            label={"endtime"}
                            margin={"5px"}
                            defaultValue={endtime}
                        />
                    )} */}
                    {guests !== null && (
                        <FormInputText
                            label={"guests"}
                            margin={"5px"}
                            defaultValue={guests}
                        />
                    )}
                    {location !== null && (
                        <FormInputText
                            label={"location"}
                            margin={"5px"}
                            defaultValue={location}
                        />
                    )}
                    {description !== null && (
                        <FormInputText
                            label={"description"}
                            margin={"5px"}
                            defaultValue={description}
                        />
                    )}
                </ModalStyledForm>
            </FormProvider>
        </ModalBox>
    );
};
