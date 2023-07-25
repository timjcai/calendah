import React, { useEffect, useState } from "react";
import {
    CardWrapper,
    EventCard,
    HoverEventCard,
} from "../components/Calendar/EventCard";
import { formatISO, parseISO } from "date-fns";
import {
    DateObjectto12Hour,
    DateObjectto24Hour,
    addZero,
    allHours,
    extractTime,
    getLocalHour,
    getLocalMinute,
    getTime,
    rubyDateConverter,
} from "../utils";
import NewEventModal from "../components/Modal/NewEventModal";
import { IconButton, StyledButton } from "../components/common/Button";

import settings from "../db/settings.json";
import { StyledPlannerColumn } from "../components/Calendar/Calendar.styles";
import { ModalNavbar } from "../components/Modal/BaseModalComponents";
import { ModalBox } from "../components/Modal/Modal.styles";
import { FormInputText } from "../components/common/Form/Form";
import { FormProvider, useForm } from "react-hook-form";
import { CalendarHeader } from "../components/Calendar/Headers";
import { allTimes } from "../Mapping";

export const Test = () => {
    const selectedTimes = allHours();
    const cellId = "col4--27-6-2023|3 AM";
    const cellId2 = "col4--27-6-2023|3:00 AM";
    const cellId3 = "col4--27-6-2023|3:00";
    console.log(extractTime(cellId));
    return (
        <div className="w-screen h-screen flex justify-center items-center flex-col">
            <h1>Test page</h1>
            {selectedTimes.map((time) => {
                return <p key={`time ${time}`}>{DateObjectto24Hour(time)}</p>;
            })}
            <br />
            <br />
            {selectedTimes.map((time) => {
                return <p key={`time ${time}`}>{DateObjectto12Hour(time)}</p>;
            })}
        </div>
    );
};

// const [isActive, setIsActive] = useState(false);
// const [grabbing, setGrabbing] = useState(false);
// const [newEventData, setNewEventData] = useState(settings.newevent_default);
// const [mousePosX, setMousePosX] = useState(0);
// const [mousePosY, setMousePosY] = useState(0);
// const [colWidth, setColWidth] = useState("10000px");
// const [xGuardRails, setXGuardRails] = useState(null);
// const [hoverEventCardWidth, setHoverEventCardWidth] = useState(colWidth);
// const [hoverEventCardLeft, setHoverEventCardLeft] = useState(0);
// const methods = useForm();

// useEffect(() => {
//     // Function to be executed on window resize
//     const handleResize = () => {
//         // Your logic here
//         console.log(window.innerWidth);
//     };

//     // Attach the event listener when the component mounts
//     window.addEventListener("resize", handleResize);

//     // Clean up the event listener when the component unmounts
//     return () => {
//         window.removeEventListener("resize", handleResize);
//     };
// }, []);

// const startGrabbing = (e) => {
//     setGrabbing(true);
//     const canvas = e.target.getBoundingClientRect();
//     setMousePosX(e.clientX);
//     setMousePosY(e.clientY);
//     setHoverEventCardWidth(canvas.width);
//     setHoverEventCardLeft(canvas.x);
//     // console.log(`grabbing`)
//     // console.log(newEventData)
// };

// const stopGrabbing = (e) => {
//     if (grabbing) {
//         setGrabbing(false);
//         console.log(`exiting - grabbing`);
//     } else {
//         return;
//     }
// };

// const moveEventCard = (e) => {
//     if (grabbing) {
//         const canvas = e.target.getBoundingClientRect();
//         setMousePosX(e.clientX);
//         setMousePosY(e.clientY);
//         setHoverEventCardWidth(canvas.width);
//         setHoverEventCardLeft(canvas.x);
//     } else {
//         return;
//     }
// };

// const setPositions = (e) => {
//     setMousePosX(e.clientX);
//     setMousePosY(e.clientY);
// };
