import React, {FC, useCallback, useEffect, useContext } from 'react'

import { TimebarProps, TimecellProps, ViewProps, DateProps } from '../types';

import { Timebar } from './Timebar';
import { DateHeader } from './DateHeader';
import { EventCard } from './EventCard';

import { EventContext, ViewSizeContext, WeekContext } from '../../context/Context';

import { generateColumnId, thisWeek, getYYYYMMDD } from '../../utils/DateUtils';
import { calcIndividualColWidth } from '../../utils';

import { StyledCalendar, StyledPlannerColumn, PlannerWrapper, PlannerCell } from './Calendar.styles';


export const BaseCalendar: FC<ViewProps> = ({times})=> {
    const thisWeekdata = useContext(WeekContext)
    const eventData = useContext(EventContext)

    function doubleClickHandler(event) {
        if (event.detail == 2) {
            // console.log('create new event here')
            console.log(event.target.getBoundingClientRect())
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
        <StyledCalendar>
            <DateHeader thisWeek={thisWeekdata} />
            <PlannerWrapper onClick={doubleClickHandler}>
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