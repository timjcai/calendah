import styled from 'styled-components'
import { InputType } from '../../types';

export const StyledInput = styled.textarea<inputStylingProps>`
    margin: 1em;
    width: ${props => props.width};
    height: ${props => (props.size === 'large') ? '15em' : '3em'};
    border-radius: 5px;
    padding: 0.75em 1em 0.75em 1em;
    font-size: 14px;
    background-color: #EFF1F2;
`;

export const StyledForm = styled.form`
    padding: 1em;
    border-radius: 16px;
    width: 100%;
    text-align: center;
    margin: 1em 0em 1em 0em;
    display: flex;
    flex-direction: row;
`;

export const FormCol = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const StyledLabel = styled.label<labelProps>`
    display: flex;
    flex-direction: ${props => props.direction};
    place-items: baseline;
    font-size: 20px;
`;

export interface InputProps {
    label: InputType;
    size?: string;
}

export interface inputStylingProps {
    size: string;
    width: string;
}

export interface labelProps {
    direction: string;
}