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

  const singleClickHandler = (e) => {
      setGrabbing(true)
      console.log(`grabbing`)
      console.log(newEventData)
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
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-1/2 h-1/2 bg-neutral-400" onPointerDown={singleClickHandler} onPointerUp={stopGrabbing} onPointerMove={moveEventCard} onPointerLeave={stopGrabbing}>
          <h1>Test page</h1>
          <button onClick={e=>setIsActive(prevState =>!prevState)}>open modal</button>
          {isActive && <NewEventModal closeModal={setIsActive}/>}
          <IconButton label={'settings'} />
          <IconButton label={'exit'} />
          <IconButton label={'edit'} />
          <p>{`${grabbing}`}</p>
          <h1>{`${mousePosX}:${mousePosY}`}</h1>
      </div>
    </div>

  )
}


export const HoverEventCard = ({props}) => {
    const {id, starttime, endtime, title, location, description, calendar_id} = props
    return (
        <CardWrapper
            $bgcolor={settings.calendar_color[calendar_id]} 
            $zindex={id}
        >
            <p><strong>{title}</strong></p>
            <br />
            <p>{location}</p>
        </CardWrapper>
    )
}