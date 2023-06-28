import { type } from 'os';
import React, {FC} from 'react'
import styled from 'styled-components'

export const PlannerWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 70vw;
    border: 5px solid white;
    height: 70vh;
`;

export const PlannerColumn = styled.div`
    display: flex;
    flex-direction: column;
    width: 10vw;
    height: auto;
    border: 5px solid blue;
`;

export const TimebarWrapper = styled.div`
    display: flex;
    flex-direction: column;

`;

export const TimebarCell = styled.div`
    display: flex;

`;

const Times: string[] = ['12AM', '1AM', '2AM', '3AM', '4AM', '5AM', '6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM', '9PM', '10PM', '11PM']

type TimecellProps = {
    time: string
}

type TimebarProps = {
    times: TimecellProps[]
}

export const Timecell: FC<TimecellProps> = ({time}) => {
    return (
        <TimebarCell>
            <span>{time}</span>
        </TimebarCell>
    )
}

export const Timebar: FC<TimebarProps> = ({times}) => {
    return (
        <TimebarWrapper>
            {times && times.map((unit)=> {
                return(<Timecell time={unit} />)
            })}
        </TimebarWrapper>
    )
}

export function Calendar() {
  return (
    <PlannerWrapper>
      <PlannerColumn></PlannerColumn>
      <PlannerColumn></PlannerColumn>
      <PlannerColumn></PlannerColumn>
      <PlannerColumn></PlannerColumn>
      <PlannerColumn></PlannerColumn>
      <PlannerColumn></PlannerColumn>
      <PlannerColumn></PlannerColumn>
    </PlannerWrapper>
  )
}

