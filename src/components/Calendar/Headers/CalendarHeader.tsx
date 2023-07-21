import { faTerminal } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";

export const CalendarHeader = () => {
    const [allCalendars, setAllCalendars] = useState({});
    useEffect(() => {
        fetch(`http://localhost:3000/api/v1/calendars/`)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw response;
            })
            .then((data) => {
                console.log(data);
                setAllCalendars(data);
            })
            .catch((error) => {
                console.log("Error fetching data: ", error);
            });
    }, []);
    return <div></div>;
};
