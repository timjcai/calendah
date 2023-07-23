import React from "react";
import styled from "styled-components";

const BubbleWrapper = styled.div`
    background-color: #aae6cc;
    border-radius: 16px;
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
`;

export const NotificationBubble = ({ children }) => {
    return <BubbleWrapper>{children}</BubbleWrapper>;
};
