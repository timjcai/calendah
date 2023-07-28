import React, { useState } from "react";
import styled from "styled-components";
import { FormCol, StyledForm } from "./Form.styles";
import { FormInputText } from "./FormInput";
import { FormInputDateTime } from ".";
import { StyledButton } from "../common/Button";
import settings from "../../db/settings.json";

export const NewForm = () => {
    const formDefault = settings.newevent_default;
    const [payload, setPayload] = useState(formDefault);
    const [currentActive, setCurrentActive] = useState(null);

    const customInputHandler = (e) => {
        const target = e.target.id;
        setCurrentActive(target);
    };

    // const typeValue = (e) => {
    //     const key = e.key;
    //     console.log(key);
    //     const current = payload[currentActive];
    //     setPayload({ [currentActive]: current.concat("", key) });
    // };

    return (
        <form method="post">
            <div tabIndex={0}>
                <p id="id" onClick={customInputHandler}>
                    {payload.id}
                </p>
                <p id="title" onClick={customInputHandler}>
                    {payload.title}
                </p>
                <p id="description" onClick={customInputHandler}>
                    {payload.description}
                </p>
                <p id="location" onClick={customInputHandler}>
                    {payload.location}
                </p>
                <p id="attachments" onClick={customInputHandler}>
                    {payload.attachments}
                </p>
            </div>
            <br />
            <br />
            <div>
                <p>Current Active: {currentActive} </p>
            </div>
            {/* <p>{payload.title}</p>
            <p>{payload.starttime}</p>
            <p>{payload.endtime}</p>
            <p>{payload.meeting}</p>
            <p>{payload.location}</p>
            <p>{payload.attachments}</p>
            <p>{payload.guests}</p>
            <p>{payload.description}</p> */}
        </form>
    );
};
