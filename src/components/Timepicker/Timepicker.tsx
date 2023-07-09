import React, { useState } from 'react'
import styled from 'styled-components'
import { CalendarViewSettings } from '../../pages/View'

export const StyledSelect = styled.select`
    scrollHeight: 10px;
`;



export const Timepicker = () => {
    const [expanded, setExpanded] = useState(false)

    return (
        <StyledSelect>
            {CalendarViewSettings.times.map((time)=>{
                return(<option role="option" value={time}>{time}</option>)
            })}
        </StyledSelect>
    )
}
