import React, {FC} from 'react'
import styled from 'styled-components'

export const PlannerWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: auto;
    border: rgb(218,220,224) 1px solid;
    height: auto;
`;

export const StyledPlannerColumn = styled.div`
    display: flex;
    flex-direction: column;
    width: 10vw;
    height: auto;
    border-right: rgb(218,220,224) 1px solid;
`;

export const PlannerCell = styled.div`
    display: flex;
    width: auto;
    height: 48px;
    border-top: rgb(218,220,224) 1px solid;
`;

export const TimebarWrapper = styled.div`
    display: flex;
    flex-direction: column;

`;

export const TimebarCell = styled.div`
    position: relative;
    height: 48px;
    padding-right: 8px;
    text-align: right;
    width: 5em;
    top: -12px;
`;



type TimecellProps = {
    time: string
}

type TimebarProps = {
    times: string[]
}

export const Timecell: FC<TimecellProps> = ({time}) => {
    return (
        <TimebarCell>
            <span>{time}</span>
        </TimebarCell>
    )
}

const Times: string[] = ['12AM', '1AM', '2AM', '3AM', '4AM', '5AM', '6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM', '9PM', '10PM', '11PM']
const Days: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday','Friday','Saturday','Sunday']

export const Timebar: FC<TimebarProps> = ({times}) => {

    return (
        <TimebarWrapper>
            {times && times.map((unit)=> {
                return(<Timecell time={unit} />)
            })}
        </TimebarWrapper>
    )
}

export function Calendar({Days}) {
  return (
    <PlannerWrapper>
        <Timebar times ={Times} />
        <PlannerColumn Times = {Times} />
        <PlannerColumn Times = {Times} />
        <PlannerColumn Times = {Times} />
        <PlannerColumn Times = {Times} />
        <PlannerColumn Times = {Times} />
        <PlannerColumn Times = {Times} />
        <PlannerColumn Times = {Times} />
    </PlannerWrapper>
  )
}

const PlannerColumn = ({Times}) => {
    return (
        <StyledPlannerColumn>
            {Times.map((time)=>{
                return (<PlannerCell />);
            })}
        </StyledPlannerColumn>
    )
}