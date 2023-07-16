import React, {FC, useCallback, useEffect, useContext, useState } from 'react'

import { TimebarProps, TimecellProps, ViewProps, DateProps } from '../types';

import { Timebar } from './Timebar';
import { DateHeader } from './DateHeader';
import { EventCard } from './EventCard';

import { EventContext, ViewSizeContext, WeekContext } from '../../context/Context';

import { generateColumnId, thisWeek, getYYYYMMDD, mergeDateTime } from '../../utils/DateUtils';
import { calcIndividualColWidth, closest15min, createDateTimeonPosition, extractDate, extractTime } from '../../utils';

import { StyledCalendar, StyledPlannerColumn, PlannerWrapper, PlannerCell } from './Calendar.styles';

import settings from '../../db/settings.json'

export const BaseCalendar: FC<ViewProps> = ({times})=> {
    const thisWeekdata = useContext(WeekContext)
    const eventData = useContext(EventContext)
    const [newEventDefault, setNewEventDefault] = useState(settings.newevent_default)


    function doubleClickHandler(event) {
        if (event.detail == 2) {
            const startTime = createDateTimeonPosition(event)
            const endTime = new Date(createDateTimeonPosition(event).setHours(startTime.getHours() + 1))
            newEventDefault.starttime = startTime
            newEventDefault.endtime = endTime
            setNewEventDefault(newEventDefault)
            console.log(newEventDefault)
            // const canvasWidthStart = (window.innerWidth)
            // const canvasTotalWidth = document.documentElement.clientWidth
            // console.log(canvasWidthStart)
            // console.log(canvasTotalWidth)
            // console.log(window.innerHeight)
            // console.log(`width: ${canvas.width}`)
            // console.log(canvas)
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
    const [windowSize, setWindowSize] = useState(window.innerWidth)

    useEffect(() => {
        function handleResize() {
            setWindowSize(window.innerWidth)
          // Update the state or perform any other actions when the
          // browser is resized
        }
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    return (
        <StyledPlannerColumn $width={calcIndividualColWidth(viewSize, windowSize)} id={props.id}>
            {props.times.map((time)=>{
                return (<PlannerCell key={time} id={`${props.id}|${time}`}/>);
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