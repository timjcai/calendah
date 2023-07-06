import React, { useEffect, useState } from 'react'
import { EventCard } from '../components/Calendar/EventCard';
import { dayMappingFromIndex, monthMappingFromIndex } from '../db/Mapping';

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
        return (
            <div>
                <EventCard props={item} />
            </div>
        )
      })}
    </div>
  )
}
