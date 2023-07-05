import React, { useEffect, useState } from 'react'
import { EventCard } from '../components/Calendar/EventCard';
import { dayMappingFromIndex, monthMappingFromIndex } from '../db/Mapping';

const Test2 = () => {
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
export const Test = () => {
    const testData: string[] = [
        'Sun Jul 02 2023 16:45:19 GMT+1000 (Australian Eastern Standard Time)', 
        'Mon Jul 03 2023 16:45:19 GMT+1000 (Australian Eastern Standard Time)', 
        'Tue Jul 04 2023 16:45:19 GMT+1000 (Australian Eastern Standard Time)', 
        'Wed Jul 05 2023 16:45:19 GMT+1000 (Australian Eastern Standard Time)', 
        'Thu Jul 06 2023 16:45:19 GMT+1000 (Australian Eastern Standard Time)', 
        'Fri Jul 07 2023 16:45:19 GMT+1000 (Australian Eastern Standard Time)', 
        'Sat Jul 08 2023 16:45:19 GMT+1000 (Australian Eastern Standard Time)'
    ]
    console.log(testData)
    const dateTestData = []
    testData.map((item) => {
        dateTestData.push(new Date(item))
    })
    console.log(dateTestData)

    console.log(dateTestData[0].getDate())
    console.log(dayMappingFromIndex[dateTestData[0].getDay()])
    console.log(monthMappingFromIndex[dateTestData[0].getMonth()])
}

// Testing
