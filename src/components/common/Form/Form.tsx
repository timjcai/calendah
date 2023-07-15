import React, {FC, useId, useRef, useState} from 'react'
import { Icon } from '../Icon';
import { iconMapping } from '../../../db/Mapping';
import { StyledButton } from '../Button';

import DatePicker from "react-widgets/DatePicker";
import { StyledLabel, StyledInput, StyledForm, FormCol, InputProps, StyledFieldset, StyledTimeInput } from './Form.styles';
import { Timepicker } from '../../Timepicker/Timepicker';

import {useForm, FormProvider, useFormContext , useController, Controller} from 'react-hook-form'
import { mergeDateTime, convert12to24time } from '../../../utils';

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

    const validateData = (formValues) => {
        const {title, startdate, starttime, enddate, endtime, location, meeting, attachments, description, guests} = formValues
        mergeDateTime(startdate, convert12to24time(starttime))
        mergeDateTime(enddate, convert12to24time(endtime))
        formValues['calendar_id'] = 1
        delete formValues.startdate
        delete formValues.enddate
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
        return formValues
    }

    const handleFormSubmit = (formValues) => {
        const form = validateData(formValues)
        
        fetch(`http://localhost:3000/api/v1/calendars/${form.calendar_id}/events`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        })
        .then(response => response.json())
        .then(data => {console.log('Response from server:', data)
        })
        .catch(error => {
            console.error('Error:', error);
        });
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