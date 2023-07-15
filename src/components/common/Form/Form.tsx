import React, {FC, useId, useRef, useState} from 'react'
import { Icon } from '../Icon';
import { iconMapping } from '../../../db/Mapping';
import { StyledButton } from '../Button';

import DatePicker from "react-widgets/DatePicker";
import { StyledLabel, StyledInput, StyledForm, FormCol, InputProps, StyledFieldset, StyledTimeInput } from './Form.styles';
import { Timepicker } from '../../Timepicker/Timepicker';

import {useForm, FormProvider, useFormContext , useController, Controller} from 'react-hook-form'

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
    const [todayDate, setTodayDate] = useState(new Date())
    const [startTime, setStartTime] = useState(null)
    const { control } = useFormContext()

    return (
            <StyledLabel direction={'row'}> 
                <Icon icon={icon} color={'#73767A'} />
                <StyledFieldset className='starttime' direction={'row'} width={'88%'} >
                    <Controller
                        control={control}
                        name="startdate"
                        render={({ field: { value, ...fieldProps } }) => {
                            return (
                                <DatePicker 
                                    {...fieldProps}
                                    defaultValue={todayDate} 
                                    selected={value}
                                />
                            );
                        }}>
                    </Controller>
                    <Timepicker label={'starttime'}/>
                    <p>to</p>
                </StyledFieldset>
                <StyledFieldset>
                    <Controller
                            control={control}
                            name="enddate"
                            render={({ field: { value, ...fieldProps } }) => {
                                return (
                                    <DatePicker 
                                        {...fieldProps}
                                        defaultValue={todayDate} 
                                        selected={value}
                                    />
                                );
                            }}>
                        </Controller>
                        <Timepicker label={'endtime'}/>
                </StyledFieldset>
            </StyledLabel>
    )
}


interface IFormInput {
    title: String
    description: String
    guests: String
    location: String
    meeting: String
    attachments: String
    starttime: String
    endtime: String
}

export const InputForm = () => {
    const [errors, setErrors] = useState({})
    const methods = useForm()

    // const validateData = () => {
    //     let errors = {};
    // }

    const validateData = (formValues) => {
        const {title, startDate, startTime, endDate, endTime, location, meeting, attachments, description, guests} = formValues
        if (!title) {
            console.log('no title provided')
        }
        if (!location) {
            console.log('no location provided')
        }
        if (!meeting) {
            console.log('no meeting provided')
        }
        if (!attachments) {
            console.log('no attachments provided')
        }
        if (!description) {
            console.log('no description provided')
        }
        console.log(formValues)
    }

    const handleFormSubmit = (formValues) => {
        validateData(formValues)
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