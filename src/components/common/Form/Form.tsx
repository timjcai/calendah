import React, {FC} from 'react'
import { Icon } from '../Icon';
import { iconMapping } from '../../../db/Mapping';
import { StyledButton } from '../Button';

import DatePicker from "react-widgets/DatePicker";
import { StyledLabel, StyledInput, StyledForm, FormCol, InputProps } from './Form.styles';



export const NewEventInput: FC<InputProps> = ({label, size = 'small'}) => {
    const icon = iconMapping[label]

    return (
        <StyledLabel direction={'row'}> 
            <Icon icon={icon} color={'black'} />
            <StyledInput name={label} placeholder={`Add ${label}`} width={'88%'} size={size}/>
        </StyledLabel>
    );
}


export const InputForm = () => {
    const formConstructor = ['title', 'description', 'guests', 'location', 'meeting', 'attachments']

    function handleFormSubmit(event: Event) {
        event.preventDefault()
        const form = event.target;
        const formData = new FormData(form)
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);  
    }

    return (
        <StyledForm className="flex flex-col" method="post" onSubmit={handleFormSubmit}>
            <FormCol>
                <NewEventInput label={'title'} />
                <StyledLabel direction={'column'}> 
                    Start time:<DatePicker defaultValue={new Date()}/> 
                    End time:<DatePicker defaultValue={new Date()}/> 
                </StyledLabel>

                <NewEventInput label={'location'} />
                <NewEventInput label={'meeting'} />
                <NewEventInput label={'attachments'} />
                <NewEventInput label={'description'} size={'large'}/>
            </FormCol>
            <FormCol>
                <StyledButton type="submit">Submit</StyledButton>
                <NewEventInput label={'guests'} />
            </FormCol>
        </StyledForm>
    );

}