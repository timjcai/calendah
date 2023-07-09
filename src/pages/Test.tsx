import React, { useEffect, useState } from 'react'
import { EventCard } from '../components/Calendar/EventCard';
import { dayMappingFromIndex, monthMappingFromIndex } from '../db/Mapping';
import { formatISO, parseISO }  from 'date-fns';
import { rubyDateConverter } from '../utils';
import { Timepicker } from '../components/Timepicker/Timepicker';


export const Test = () => {
  return (
    <div>
      <h1>Test page</h1>
      <Timepicker />
    </div>
  )
}
