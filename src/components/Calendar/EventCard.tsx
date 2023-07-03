import React from 'react'
import styled from 'styled-components'

const CardWrapper = styled.div`
    position: relative;
    border-radius: 16px;
    border: 1px solid grey;
    margin-bottom: 1em;
`;

export const EventCard = ({props}) => {
    return (
        <CardWrapper>
            <p>{props.title}</p>
            <p>{props.duedate}</p>
            <p>{props.location}</p>
            <p>{props.description}</p>
        </CardWrapper>
    )
}