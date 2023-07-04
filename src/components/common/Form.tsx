import React, {FC} from 'react'
import styled from 'styled-components'
import { Icon } from './Icon';
import { CommonStylingProps, InputType } from '../types';
import { iconMapping } from '../../db/Mapping';

export const StyledInput = styled.input<CommonStylingProps>`
    border: 1px solid black;
    margin: 1em;
    width: ${props => props.width};
    border-radius: 8px;
    padding: 0.25em;
`;

type InputProps = {
    label: InputType;
}

export const NewEventInput: FC<InputProps> = ({label}) => {
    const icon = iconMapping[label]

    return (
        <div> 
            <Icon icon={icon} color={'black'} />
            <StyledInput defaultValue={label} width={'50%'} />
        </div>
    );
}


export const InputForm = () => {
    return (
        <div className="flex flex-col">
            <NewEventInput label={'location'} />
            <NewEventInput label={'meeting'} />
            <NewEventInput label={'attachments'} />
            <NewEventInput label={'notification'} />
            <NewEventInput label={'description'} />
            <NewEventInput label={'guests'} />
        </div>
    );

}