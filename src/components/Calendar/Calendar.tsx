import React, {FC, useCallback, useEffect, useState, useContext} from 'react'
import styled from 'styled-components'
import { TimebarProps, TimecellProps, ViewProps, DateProps, CommonStylingProps } from '../types';
import { Timebar } from './Timebar';
import { DateHeader } from './DateHeader';
import { EventContext, ViewSizeContext, WeekContext } from '../../context/Context';
import { generateColumnId, thisWeek, getYYYYMMDD } from '../../utils/DateUtils';
import { calcIndividualColWidth } from '../../utils';
import { EventCard } from './EventCard';

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
    const eventData = useContext(EventContext)

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
                {thisWeekdata.map((date)=>{
                    const dayContent = eventData[getYYYYMMDD(date)]
                    return (
                        <PlannerColumn
                            key={generateColumnId(date)} 
                            times={times} 
                            id={generateColumnId(date)}
                            dayContent={dayContent}
                        />
                    );
                })}
            </PlannerWrapper>
        </StyledCalendar>
    )
}

const PlannerColumn = (props: {times: string[], id: string, dayContent}) => {
    const viewSize = useContext(ViewSizeContext)
    const events = useContext(EventContext)

    return (
        <StyledPlannerColumn $width={calcIndividualColWidth(viewSize)}>
            {props.times.map((time)=>{
                return (<PlannerCell key={time}/>);
            })}
            {props.dayContent && props.dayContent.map((event)=> {
                return (
                    <EventCard props={event}/>
                )
                })
            }
        </StyledPlannerColumn>
    )
}