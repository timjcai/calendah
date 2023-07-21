import React, { useState } from "react";
import { InputForm } from "../components/common/Form";
import { NavWrapper, NavMapping, NavButton } from "../components/Navbar/Navbar";

export const Edit = ({ id }) => {
    const [eventData, setEventData] = useState(null);

    useEffect(() => {
        const url = `http://localhost:3000/api/v1/calendars/1/events/${id}`;
        fetch(url)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw response;
            })
            .then((data) => {
                setEventData(data);
            })
            .catch((error) => {
                console.log("Error fetching data: ", error);
            });
    }, []);

    return (
        <>
            <NavWrapper>
                <NavButton navigation={NavMapping["calendar"]} />
            </NavWrapper>
            <div className="m-20">
                <h1>Edit Event Page</h1>
                <InputForm />
            </div>
        </>
    );
};
