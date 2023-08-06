import React, { useState } from "react";
import { ModalBox, ModalStyledForm } from "./Modal.styles";
import { FormProvider, useForm } from "react-hook-form";
import { ModalNavbar } from "./BaseModalComponents";
import { FormInputText, TextInput, TitleInput } from "../Form";
import { StyledButton } from "../common/Button";
import settings from "../../db/settings.json";

export const ViewModal = ({ top, left, setActiveCard, eventCardData }) => {
    const formDefault = settings.newevent_default;
    const [payload, setPayload] = useState(formDefault);

    const customInputHandler = (e) => {
        const currentInput = e.target.id;
        const value = e.target.value;
        setPayload((prevState) => ({ ...prevState, [currentInput]: value }));
    };

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
            {/* <FormProvider {...methods}> */}
            <ModalNavbar
                setActiveCard={setActiveCard}
                eventData={eventCardData}
            />
            <ModalStyledForm>
                {title !== null && (
                    <TitleInput
                        label={"title"}
                        payload={payload}
                        onChange={customInputHandler}
                    ></TitleInput>
                    // <FormInputText
                    //     label={"title"}
                    //     margin={"5px"}
                    //     defaultValue={title}
                    //     readOnly={true}
                    //     pointerEvents={"none"}
                    // />
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
                    <TextInput
                        label={"guests"}
                        payload={payload}
                        onChange={customInputHandler}
                    />
                    // <FormInputText
                    //     label={"guests"}
                    //     margin={"5px"}
                    //     defaultValue={guests}
                    //     readOnly={true}
                    //     pointerEvents={"none"}
                    // />
                )}
                {location !== null && (
                    <TextInput
                        label={"location"}
                        payload={payload}
                        onChange={customInputHandler}
                    />
                    // <FormInputText
                    //     label={"location"}
                    //     margin={"5px"}
                    //     defaultValue={location}
                    //     readOnly={true}
                    //     pointerEvents={"none"}
                    // />
                )}
                {description !== null && (
                    <TextInput
                        label={"description"}
                        payload={payload}
                        onChange={customInputHandler}
                    />
                    // <FormInputText
                    //     label={"description"}
                    //     margin={"5px"}
                    //     defaultValue={description}
                    //     readOnly={true}
                    //     pointerEvents={"none"}
                    // />
                )}
            </ModalStyledForm>
            {/* </FormProvider> */}
        </ModalBox>
    );
};
