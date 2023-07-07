import React, { useEffect, useState } from 'react'
import { EventCard } from '../components/Calendar/EventCard';
import { dayMappingFromIndex, monthMappingFromIndex } from '../db/Mapping';
import { formatISO, parseISO }  from 'date-fns';
import { rubyDateConverter } from '../utils';


export const Test = () => {
    const [pageData, setPageData] = useState(null)
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=> {
        fetch("http://localhost:3000/api/v1/calendars/1/events")
            .then (response => {
                if (response.ok) {
                    return response.json()
                }
                throw response;
            })
            .then (data => {
                console.log(data)
                setPageData(data)
            })
            .catch(error => {
                console.log("Error fetching data: ", error);
                setError(error);
            }) 
            .finally(()=> {
                setLoading(false);
            })
    }, [])

    if (loading) return "Loading...";
    if (error) return "Error!"


  return (
    <div>
      <h1>Test page</h1>
      {pageData && pageData.map((item)=>{
        console.log(item)
        const theDate = rubyDateConverter(item.duedate)
        console.log(theDate)
        return (
            <div>
                <EventCard props={item} />
                <h1>{formatISO(new Date(item.duedate))}</h1>
                <h1>{new Date(item.duedate).getDate()}</h1>
                <h1>{formatISO(theDate)}</h1>
            </div>
        )
      })}
    </div>
  )
}
