import styled from "styled-components";
import { InputType } from "../../types";

export const StyledForm = styled.form`
    padding: 1em;
    border-radius: 16px;
    width: 100%;
    text-align: center;
    margin: 1em 0em 1em 0em;
    display: flex;
    flex-direction: row;
`;

export const FormCol = styled.div<labelProps>`
    display: flex;
    flex-direction: column;
    width: ${(props) => props.width};
`;

export const StyledLabel = styled.label<labelProps>`
    display: flex;
    flex-direction: ${(props) => props.direction};
    place-items: baseline;
    font-size: 20px;
`;

export const StyledFieldset = styled.fieldset<labelProps>`
    display: flex;
    flex-direction: ${(props) => props.direction};
    width: ${(props) => props.width};
    justify-content: space-between;
    place-items: baseline;
    font-size: 20px;
    border-radius: 5px;
    padding: 0.75em 0.5em 0.75em 1em;
`;

export const StyledTimeInput = styled.input`
    margin: 1em;
    border-radius: 5px;
    padding: 0.75em 1em 0.75em 1em;
    font-size: 14px;
    background-color: #eff1f2;
`;

export interface InputProps {
    label: InputType;
    size?: string;
}

export interface labelProps {
    direction?: string;
    width?: string;
}
