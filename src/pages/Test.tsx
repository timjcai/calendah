import React, { useEffect, useState } from 'react'

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
                <p>{item.id}</p>
                <p>{item.title}</p>
                <p>{item.description}</p>
                <p>{item.guests}</p>
                <p>{item.duedate}</p>
                <p>{item.location}</p>
            </div>
        )
      })}
    </div>
  )
}

