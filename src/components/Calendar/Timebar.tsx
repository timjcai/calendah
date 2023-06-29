import React, {FC} from 'react'
import styled from 'styled-components'
import { TimecellProps, TimebarProps } from '../types/calendar';
import { Text } from '../common/Text/Text';

export const TimebarWrapper = styled.div`
    display: flex;
    flex-direction: column;
    border-right: var(--shell-line) 1px solid;
`;

export const TimebarCell = styled.div`
    position: relative;
    height: 48px;
    padding-right: 8px;
    text-align: right;
    width: 5em;
    top: -12px;
`;

export const Timecell: FC<TimecellProps> = ({time}) => {
    return (
        <TimebarCell>
            <span><Text color={'grey'}>{time}</Text></span>
        </TimebarCell>
    );
}

export const Timebar: FC<TimebarProps> = ({times}) => {

    return (
        <TimebarWrapper>
            {times && times.map((unit)=> {
                return(<Timecell time={unit} />)
            })}
        </TimebarWrapper>
    );
}
