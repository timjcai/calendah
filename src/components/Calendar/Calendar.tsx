import React, {FC} from 'react'
import styled from 'styled-components'
import { TimebarProps, TimecellProps, ViewProps } from '../types/calendar';
import { Timebar } from './Timebar';

export const PlannerWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: auto;
    border: var(--shell-line) 1px solid;
    height: auto;
    z-index: -1;
`;

export const StyledPlannerColumn = styled.div`
    display: flex;
    flex-direction: column;
    width: 10vw;
    height: auto;
    border-right: var(--shell-line) 1px solid;
`;

export const PlannerCell = styled.div`
    display: flex;
    width: auto;
    height: 48px;
    border-top: var(--shell-line) 1px solid;
`;

export const StyledCalendar = styled.div`
    display: flex;
    flex-direction: column;
`;


export const BaseCalendar: FC<ViewProps> = ({days, times})=> {
    return (
        <StyledCalendar>
            <div>
                <h1>heading</h1>
            </div>
            <PlannerWrapper>
                <Timebar times ={times} />
                {days && days.map((day)=>{
                    return (<PlannerColumn times={times}/>);
                })}
            </PlannerWrapper>
        </StyledCalendar>

    )
}

const PlannerColumn = ({times}) => {
    return (
        <StyledPlannerColumn>
            {times.map((time)=>{
                return (<PlannerCell />);
            })}
        </StyledPlannerColumn>
    )
}