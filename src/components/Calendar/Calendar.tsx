import React, {FC, useCallback, useEffect, useState, useContext} from 'react'
import styled from 'styled-components'
import { TimebarProps, TimecellProps, ViewProps, DateProps, CommonStylingProps } from '../types';
import { Timebar } from './Timebar';
import { DateHeader } from './DateHeader';
import { ViewSizeContext, WeekContext } from '../../context/Context';
import { generateColumnId, thisWeek } from '../../utils/DateUtils';
import { calcIndividualColWidth } from '../../utils';

export const PlannerWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: auto;
    border: var(--shell-line) 1px solid;
    height: auto;
    z-index: -1;
`;

export const StyledPlannerColumn = styled.div<CommonStylingProps>`
    display: flex;
    flex-direction: column;
    width: ${props => props.$width};
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

export const BaseCalendar: FC<ViewProps> = ({times})=> {
    const thisWeekdata = useContext(WeekContext)


    const doubleClickHandler = (event) => {
        if (event.detail == 2) {
            console.log('create new event here')
        }
    }

    const handleKeyPress = useCallback((event) => {
        console.log(`Key pressed: ${event.key}`);
    }, []);

    useEffect(() => {
        // attach the event listener
        document.addEventListener('keydown', handleKeyPress);
    
        // remove the event listener
        return () => {
          document.removeEventListener('keydown', handleKeyPress);
        };
    }, [handleKeyPress]);

    return (
        <StyledCalendar onClick={doubleClickHandler}>
            <DateHeader thisWeek={thisWeekdata} />
            <PlannerWrapper>
                <Timebar times ={times} />
                {thisWeekdata.map((day)=>{
                    return (<PlannerColumn times={times} />);
                })}
            </PlannerWrapper>
        </StyledCalendar>
    )
}

const PlannerColumn = ({times}) => {
    const viewSize = useContext(ViewSizeContext)

    return (
        <StyledPlannerColumn $width={calcIndividualColWidth(viewSize)}>
            {times.map((time)=>{
                return (<PlannerCell/>);
            })}
        </StyledPlannerColumn>
    )
}