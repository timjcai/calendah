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

export const Button = ({children}) => {
    <StyledButton>
        {children}
    </StyledButton>
}