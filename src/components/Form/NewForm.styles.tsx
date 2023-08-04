import styled from "styled-components";
import { APIDataObject, EventProps, formInput } from "../types";

export type StyledInputProps = {
    id: formInput;
    defaultValue: EventProps | null;
    onChange?: Function;
    $fsize?: string;
    placeholder: EventProps[];
};

export type FormInputProps = {
    label: formInput;
    payload: EventProps;
    onChange: (() => void) | ((e: any) => void);
    data?: string[];
    color: string;
};

export const IconBubble = styled.span`
    align-items: center;
    background-color: #3a3a3a;
    color: white;
    border-radius: 50%;
    padding: 2px 4px 2px 4px;
`;

export const StyledInputLabel = styled.div`
    display: flex;
    padding: 8px 0px 8px 8px;
    background-color: #212121;
    border: 1px solid black;
    border-radius: 6px;
    width: 50vw;
    margin-bottom: 5px;
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

export const FormActionButton = styled.button`
    background-color: var(--blue);
    padding: 5px 10px;
    color: white;
    border-radius: 6px;
`;
