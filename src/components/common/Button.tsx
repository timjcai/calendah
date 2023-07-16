import React, { Component } from 'react'
import styled from 'styled-components'

export const StyledButton = styled.button`
    border-radius: 8px;
    width: content-fit;
    color: white;
    background-color: var(--blue);
    padding: 0.5em;
    margin: 0.5em;
`;

export const ExitButton = styled.button`
    top: 4px;
    right: 12px;
    z-index: 1;
    width: 28px;
    height: 28px;
    padding: 2px;
    color: rgb(95,99,104);
`;

export const Button = ({children}) => {
    return (
        <StyledButton>
            {children}
        </StyledButton>
    )

}