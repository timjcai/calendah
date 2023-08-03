import React, { useContext, useEffect, useState } from "react";

import settings from "../db/settings.json";
import { NewForm } from "../components/Form/NewForm";
import { SettingsProvider, StartDayContext } from "../context/SettingsProvider";
import { DatePicker, DateInputButton } from "../components/DatePicker";
import { DateOpenButton } from "../components/DatePicker/DateOpenButton";

export const Test = () => {
    const startDay = useContext(StartDayContext);
    console.log(startDay);
    return (
        <SettingsProvider>
            <div className="w-screen h-screen flex justify-center mx-10 flex-col">
                <h1>Test page</h1>
                <NewForm />
                <DatePicker />
                <DateInputButton />
            </div>
        </SettingsProvider>
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
