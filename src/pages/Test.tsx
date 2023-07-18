import React, { useEffect, useState } from 'react'
import { CardWrapper, EventCard } from '../components/Calendar/EventCard';
import { dayMappingFromIndex, monthMappingFromIndex } from '../db/Mapping';
import { formatISO, parseISO }  from 'date-fns';
import { getLocalHour, getLocalMinute, rubyDateConverter } from '../utils';
import NewEventModal from '../components/Modal/NewEventModal';
import { IconButton } from '../components/common/Button';

import settings from '../db/settings.json'

export const Test = () => {
  const [isActive, setIsActive] = useState(false)
  const [grabbing, setGrabbing] = useState(false)
  const [newEventData, setNewEventData] = useState(settings.newevent_default)
  const [mousePosX, setMousePosX] = useState(0)
  const [mousePosY, setMousePosY] = useState(0)

  const startGrabbing = (e) => {
      setGrabbing(true)
      // console.log(`grabbing`)
      // console.log(newEventData)
  }

  const stopGrabbing = (e) => {
    if (grabbing) {
      setGrabbing(false)
      console.log(`exiting - grabbing`)
    } else {
      return
    }
  }

  const moveEventCard = (e) => {
      if (grabbing) {
        const canvas = e.target.getBoundingClientRect()
        setMousePosX(e.clientX)
        setMousePosY(e.clientY)
      } else {
        return
      }
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col">
      <h1>Test page</h1>
      <button onClick={e=>setIsActive(prevState =>!prevState)}>open modal</button>
      {isActive && <NewEventModal closeModal={setIsActive}/>}
      <IconButton label={'settings'} />
      <IconButton label={'exit'} />
      <IconButton label={'edit'} />
      <div className="w-1/2 h-1/2 bg-neutral-400" onPointerDown={startGrabbing} onPointerUp={stopGrabbing} onPointerMove={moveEventCard} onPointerLeave={stopGrabbing}>
          <p>{`${grabbing}`}</p>
          <h1>{`${Math.round(mousePosX* 100)/100} : ${Math.round(mousePosY* 100)/100}`}</h1>
      </div>
      {grabbing && <HoverEventCard eventData={newEventData} top={mousePosY} left={mousePosX} pointerEvents={false}/>}
    </div>

  )
}


export const HoverEventCard = ({eventData, top, left, pointerEvents}) => {
    const {id, starttime, endtime, title, location, description, calendar_id} = eventData
    return (
        <CardWrapper
            $bgcolor={settings.calendar_color[calendar_id]} 
            $zindex={id}
            $width={'100px'}
            $top={`${top}px`}
            $left={`${left}px`}
            $pointerEvents={pointerEvents}
        >
            <p><strong>{title}</strong></p>
            <br />
            <p>{location}</p>
        </CardWrapper>
    )
}