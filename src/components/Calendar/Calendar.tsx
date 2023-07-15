import React, {FC, useCallback, useEffect, useContext, useState } from 'react'

import { TimebarProps, TimecellProps, ViewProps, DateProps } from '../types';

import { Timebar } from './Timebar';
import { DateHeader } from './DateHeader';
import { EventCard } from './EventCard';

import { EventContext, ViewSizeContext, WeekContext } from '../../context/Context';

import { generateColumnId, thisWeek, getYYYYMMDD, mergeDateTime } from '../../utils/DateUtils';
import { calcIndividualColWidth, closest15min, extractDate, extractTime } from '../../utils';

import { StyledCalendar, StyledPlannerColumn, PlannerWrapper, PlannerCell } from './Calendar.styles';


export const BaseCalendar: FC<ViewProps> = ({times})=> {
    const thisWeekdata = useContext(WeekContext)
    const eventData = useContext(EventContext)


    function doubleClickHandler(event) {
        if (event.detail == 2) {
            // console.log('create new event here')
            const date = extractDate(event.target.parentNode.id)
            const time = extractTime(event.target.id)
            const cell = event.target.getBoundingClientRect()
            const clickPositionY = event.pageY
            const height = (clickPositionY - cell.top)/48
            const mouseTime = (Math.round(height*60/15) * 15) % 60
            time.setMinutes(mouseTime)
            const targetDateTime = mergeDateTime(date,time)

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