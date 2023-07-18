import React, {FC, useCallback, useEffect, useContext, useState } from 'react'

import { TimebarProps, TimecellProps, ViewProps, DateProps } from '../types';

import { Timebar } from './Timebar';
import { DateHeader } from './DateHeader';
import { EventCard, HoverEventCard } from './EventCard';

import { EventContext, ViewSizeContext, WeekContext } from '../../context/Context';

import { generateColumnId, thisWeek, getYYYYMMDD, mergeDateTime } from '../../utils/DateUtils';
import { calcIndividualColWidth, closest15min, createDateTimeonPosition, extractDate, extractTime } from '../../utils';

import { StyledCalendar, StyledPlannerColumn, PlannerWrapper, PlannerCell, CalendarColumnWrapper } from './Calendar.styles';

import settings from '../../db/settings.json'
import { EventPostRequest } from '../../hooks/useEventPostRequest';

export const BaseCalendar: FC<ViewProps> = ({times})=> {
    const thisWeekdata = useContext(WeekContext)
    const eventData = useContext(EventContext)
    const [newEventDefault, setNewEventDefault] = useState(settings.newevent_default)
    const [isCreatingEvent, setIsCreatingEvent] = useState(false)

    const [grabbing, setGrabbing] = useState(false)
    const [mousePosX, setMousePosX] = useState(0)
    const [mousePosY, setMousePosY] = useState(0)
    const [hoverEventCardWidth, setHoverEventCardWidth] = useState(100)
    const [hoverEventCardLeft, setHoverEventCardLeft] = useState(0)

    function doubleClickHandler(event) {
        if (event.detail == 2) {
            console.log('double click event')
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

    const startGrabbingCard = (e) => {
        setGrabbing(true)
        const canvas = e.target.getBoundingClientRect()
        setMousePosX(e.clientX)
        setMousePosY(e.clientY)
        setHoverEventCardWidth((canvas.width-5))
        setHoverEventCardLeft(canvas.x)
    }
  
    const stopGrabbingCard = (e) => {
      if (grabbing) {
        setGrabbing(false)
        const startTime = createDateTimeonPosition(event)
        const endTime = new Date(createDateTimeonPosition(event).setHours(startTime.getHours() + 1))
        newEventDefault.starttime = startTime
        newEventDefault.endtime = endTime
        newEventDefault.calendar_id = 1 // hardcoding calendar - need to handle this later - currently only 1 calendar can be created
        setNewEventDefault(newEventDefault)
        console.log(newEventDefault)
        EventPostRequest(newEventDefault)
      } else {
        return
      }
    }
  
    const moveHoverEventCard = (e) => {
        if (grabbing) {
          const canvas = e.target.getBoundingClientRect()
          setMousePosX(e.clientX)
          setMousePosY(e.clientY)
          setHoverEventCardWidth((canvas.width-5))
          setHoverEventCardLeft(canvas.x)
        } else {
          return
        }
    }

    return (
        <StyledCalendar>
            <DateHeader thisWeek={thisWeekdata} />
            <PlannerWrapper onClick={doubleClickHandler}>
                <Timebar times ={times} />
                <CalendarColumnWrapper onPointerDown={startGrabbingCard} onPointerUp={stopGrabbingCard} onPointerMove={moveHoverEventCard} onPointerLeave={stopGrabbingCard}>
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
                </CalendarColumnWrapper>
                {grabbing && <HoverEventCard eventData={newEventDefault} top={mousePosY} left={hoverEventCardLeft} pointerEvents={false} width={`${hoverEventCardWidth}px`}/>}
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