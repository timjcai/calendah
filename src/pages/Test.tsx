import React, { useEffect, useState } from 'react'
import { EventCard } from '../components/Calendar/EventCard';
import { dayMappingFromIndex, monthMappingFromIndex } from '../db/Mapping';
import { formatISO, parseISO }  from 'date-fns';
import { rubyDateConverter } from '../utils';
import NewEventModal from '../components/Modal/NewEventModal';


export const Test = () => {
  const [isActive, setIsActive] = useState(false)
  return (
    <div>
      <h1>Test page</h1>
      <button onClick={e=>setIsActive(prevState =>!prevState)}>open modal</button>
      {isActive && <NewEventModal closeModal={setIsActive}/>}
    </div>
  )
}
