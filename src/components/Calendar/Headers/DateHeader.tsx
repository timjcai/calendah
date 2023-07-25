import React, { FC, useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { Paragraph, Heading2 } from "../../common/Text";
import { CommonStylingProps, DateProps2 } from "../../types";
import {
    dayAbbreviations,
    monthAbbreviations,
    dayMappingFromIndex,
    monthMappingFromIndex,
} from "../../../Mapping";
import {
    SelectDateContext,
    TodayContext,
    ViewSizeContext,
} from "../../../context/Context";
import { getYYYYMMDD } from "../../../utils/DateUtils";
import { calcIndividualColWidth } from "../../../utils";
import { BubbleWrapper } from "./DateHeader.styles";
import { PaddedDiv, StyledCell, StyledHeader } from "./Header.styles";

export type dateHeadingProps = {
    color: string;
    borderRadius: string;
    padding: string;
};

export const SelectedBubble = ({ children, bgcolor, color = "white" }) => {
    return (
        <BubbleWrapper $bgcolor={bgcolor} $color={color}>
            {children}
        </BubbleWrapper>
    );
};

export const DateHeader = (props: { thisWeek: Date[] }) => {
    return (
        <StyledHeader>
            <PaddedDiv></PaddedDiv>
            {props.thisWeek.map((dayPair) => {
                return <DHCell key={getYYYYMMDD(dayPair)} date={dayPair} />;
            })}
        </StyledHeader>
    );
};

export const DHCell: FC<DateProps2> = ({ date }) => {
    const todayDate = useContext(TodayContext);
    const viewSize = useContext(ViewSizeContext);
    const selectDate = useContext(SelectDateContext);

    const dateNumber = date.getDate();
    const day = dayMappingFromIndex[date.getDay()];
    const month = monthMappingFromIndex[date.getMonth()];

    const [windowSize, setWindowSize] = useState(window.innerWidth);

    useEffect(() => {
        function handleResize() {
            setWindowSize(window.innerWidth);
            // Update the state or perform any other actions when the
            // browser is resized
        }

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    let dayHeading = <Heading2>{dateNumber}</Heading2>;
    if (
        dateNumber === todayDate.getDate() &&
        date.getMonth() === todayDate.getMonth() &&
        date.getFullYear() === todayDate.getFullYear()
    ) {
        dayHeading = (
            <SelectedBubble bgcolor={"var(--blue)"}>
                <Heading2>{dateNumber}</Heading2>
            </SelectedBubble>
        );
    } else if (dateNumber === selectDate.getDate()) {
        dayHeading = (
            <SelectedBubble bgcolor={"var(--yellow)"}>
                <Heading2>{dateNumber}</Heading2>
            </SelectedBubble>
        );
    }

    return (
        <StyledCell $width={calcIndividualColWidth(viewSize, windowSize)}>
            <Paragraph>{dayAbbreviations[day]}</Paragraph>
            {dayHeading}
            <Paragraph>{monthAbbreviations[month]}</Paragraph>
        </StyledCell>
    );
};
