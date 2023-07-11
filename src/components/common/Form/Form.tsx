import React, {FC, useState} from 'react'
import { Icon } from '../Icon';
import { iconMapping } from '../../../db/Mapping';
import { StyledButton } from '../Button';

import DatePicker from "react-widgets/DatePicker";
import { StyledLabel, StyledInput, StyledForm, FormCol, InputProps, StyledFieldset } from './Form.styles';
import { Timepicker } from '../../Timepicker/Timepicker';

import {useForm, FormProvider, useFormContext} from 'react-hook-form'

export const FormInputText = ({label, size = 'small'}) => {
    const icon = iconMapping[label]
    const {register} = useFormContext()

    return (
        <StyledLabel direction={'row'}> 
            <Icon icon={icon} color={'#73767A'} />
            <StyledInput placeholder={`Add ${label}`} width={'88%'} size={size} {...register(label)}/>
        </StyledLabel>
    );
}

export const FormInputDateTime = ({label}) => {
    const icon = iconMapping[label]
    const {register} = useFormContext()

    return (
        <StyledLabel direction={'row'}> 
            <Icon icon={icon} color={'#73767A'} />
            <StyledFieldset className='starttime' direction={'row'} width={'88%'} >
                    <DatePicker defaultValue={new Date()}/>
                    <Timepicker label={'starttime'}/>
                    <p>to</p>
            </StyledFieldset>
            <StyledFieldset>
                    <DatePicker defaultValue={new Date()}/>
                    <Timepicker label={'endtime'}/>
            </StyledFieldset>
        </StyledLabel>
    )
}

export 

interface IFormInput {
    title: String
    description: String
    guests: String
    location: String
    meeting: String
    attachments: String
    starttime: Date
    endtime: Date
}

export const InputForm = () => {
    const [errors, setErrors] = useState({})
    const methods = useForm()

    function handleFormInput(event: Event) {
        event.preventDefault();
        console.log(event.target)
    }

    // const validateData = () => {
    //     let errors = {};
    // }

    const handleFormSubmit = (formValues) => {
        console.log(formValues)
        // console.log(form)
        // const formData = new FormData(form)
        // const formJson = Object.fromEntries(formData.entries());
        // console.log(formJson);  
    }

    return (
        <FormProvider {...methods}>
            <StyledForm className="flex flex-col" method="post" onSubmit={methods.handleSubmit(handleFormSubmit)}>
                <FormCol width={'70%'}>
                    <FormInputText label={'title'} />
                    <FormInputDateTime label={'datetime'}/>
                    <FormInputText label={'location'} />
                    <FormInputText label={'meeting'} />
                    <FormInputText label={'attachments'} />
                    <FormInputText label={'description'} size={'large'} />
                </FormCol>
                <FormCol width={'30%'}>
                    <StyledButton type="submit">Submit</StyledButton>
                    <FormInputText label={'guests'} />
                </FormCol>
            </StyledForm>
        </FormProvider>

    );
}