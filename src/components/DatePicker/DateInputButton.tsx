import React, { useEffect, useState } from "react";

export const DateInputButton = () => {
    const [DD, setDD] = useState("DD");
    const [MM, setMM] = useState("MM");
    const [YYYY, setYYYY] = useState("YYYY");
    const [Mutable, setMutable] = useState("");

    useEffect(() => {
        const handleKeyUp = (e) => {
            console.log("Key pressed: ", e.key);
        };

        document.addEventListener("keyup", handleKeyUp);
        return () => {
            document.removeEventListener("keyup", handleKeyUp);
        };
    }, [Mutable]);

    const handleClick = (e) => {
        console.log("entering input");
        const xCoord = e.pageX;
        const DOMRECT = e.target.getBoundingClientRect();
        const startX = DOMRECT.x;
        // console.log(`xCoord: ${xCoord}`);
        // console.log(`startX: ${startX}`);
        DDMMYYYYrange(xCoord, startX);
    };

    const handleType = (e) => {
        if (Mutable === "DD") {
        } else if (Mutable === "MM") {
        } else if (Mutable === "YYYY") {
        } else {
            console.log("error: nothing selected to edit");
        }
    };

    const DDMMYYYYrange = (xCoord, startingX) => {
        if (xCoord < startingX + 22.625) {
            console.log("changing DD");
            setMutable("DD");
        } else if (xCoord < startingX + 55) {
            console.log("changing MM");
            setMutable("MM");
        } else if (xCoord < startingX + 100) {
            console.log("changing YYYY");
            setMutable("YYYY");
        } else {
            console.log("changing DD");
            setMutable("DD");
        }
    };

    const handleExitInput = (e) => {
        setMutable("");
        console.log("leaving input");
    };

    return (
        <div>
            <input
                value={`${DD}/${MM}/${YYYY}`}
                onClick={handleClick}
                onFocus={handleClick}
                onBlur={handleExitInput}
            ></input>
            <p>{`Setting ${Mutable} as Mutable`}</p>
        </div>
    );
};

// DD - width: 22.625
// MM - width: 27.34375
// YY - width: 40.6875
