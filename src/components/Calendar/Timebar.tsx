import React, { FC, useContext } from "react";
import styled from "styled-components";
import { TimecellProps } from "../types/calendar";
import { Paragraph } from "../common/Text/Text";
import { DisplayTimeContext } from "../../context/SettingsProvider";
import { generateTimeArray } from "../../utils";

export const TimebarWrapper = styled.div`
    display: flex;
    flex-direction: column;
    border-right: var(--shell-line) 1px solid;
`;

export const TimebarCell = styled.div`
    position: relative;
    height: 48px;
    padding-right: 8px;
    text-align: right;
    width: var(--timebar-width);
    top: -8px;
`;

export const Timecell: FC<TimecellProps> = ({ id, time }) => {
    return (
        <TimebarCell id={id}>
            <span>
                <Paragraph color={"grey"} $fsize={"10px"}>
                    {time}
                </Paragraph>
            </span>
        </TimebarCell>
    );
};

export const Timebar: FC = () => {
    const displayTimes = useContext(DisplayTimeContext);
    const displayHours = generateTimeArray(displayTimes);

    return (
        <TimebarWrapper>
            {displayHours.map((unit: string) => {
                return <Timecell id={unit} time={unit} />;
            })}
        </TimebarWrapper>
    );
};
