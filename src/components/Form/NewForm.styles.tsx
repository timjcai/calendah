import styled from "styled-components";
import { APIDataObject, EventProps, formInput } from "../types";

export type StyledInputProps = {
    id: formInput;
    defaultValue: EventProps;
    onChange?: Function;
    $fsize?: string;
};

export type FormInputProps = {
    label: formInput;
    payload: APIDataObject;
    onChange: Function;
    data?: string[];
};

export const IconBubble = styled.span`
    align-items: center;
    background-color: #1d1d1d;
    color: white;
    border-radius: 100%;
    padding: 4px 2.5px 4px 2.5px;
`;

export const StyledInputLabel = styled.label`
    display: block;
    padding: 5px 0px 5px 0px;
    background-color: #212121;
    border: 1px solid black;
    border-radius: 6px;
    width: 50vw;
`;

export const StyledInput = styled.input<StyledInputProps>`
    background: none;
    outline: none;
    color: white;
    font-size: ${(props) => props.$fsize};
    width: 94%;
    margin-left: 5px;
    text-overflow: ellipsis;
`;
