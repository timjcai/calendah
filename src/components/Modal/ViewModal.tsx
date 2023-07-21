import React from "react";
import { ModalBox, ModalStyledForm } from "./Modal.styles";
import { FormProvider, useForm } from "react-hook-form";
import { ModalNavbar } from "./BaseModalComponents";
import { FormInputText } from "../common/Form/Form";
import { StyledButton } from "../common/Button";

export const ViewModal = ({ top, left, closeModal }) => {
    const methods = useForm();
    console.log([top, left]);
    return (
        <ModalBox $top={top} $left={left}>
            <FormProvider {...methods}>
                <ModalNavbar closeModal={closeModal} />
                <ModalStyledForm>
                    <FormInputText label={"title"} margin={"5px"} />
                    <FormInputText label={"guests"} margin={"5px"} />
                    <FormInputText label={"location"} margin={"5px"} />
                    <FormInputText label={"attachments"} margin={"5px"} />
                </ModalStyledForm>
            </FormProvider>
        </ModalBox>
    );
};
