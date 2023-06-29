import React, {FC, useState} from 'react'
import styled from 'styled-components'
import { TimebarProps, TimecellProps, ViewProps, DateProps } from '../types';
import { Timebar } from './Timebar';
import { DateHeader } from './DateHeader';

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
    width: var(--planner-width);
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

const thisWeekdata: DateProps[] = [
    {date: 26, month: 'June', day: 'Monday', year: 2023},
    {date: 27, month: 'June', day: 'Tuesday', year: 2023},
    {date: 28, month: 'June', day: 'Wednesday', year: 2023},
    {date: 29, month: 'June', day: 'Thursday', year: 2023},
    {date: 30, month: 'June', day: 'Friday', year: 2023},
    {date: 1, month: 'July', day: 'Saturday', year: 2023},
    {date: 2, month: 'July', day: 'Sunday', year: 2023},
]

export const BaseCalendar: FC<ViewProps> = ({days, times})=> {
    const [thisWeek, setThisWeek] = useState()
    return (
        <StyledCalendar>
            <DateHeader thisWeek={thisWeekdata} />
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