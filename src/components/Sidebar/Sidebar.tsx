import styled from "styled-components";
import React, { useState } from "react";
import Calendar from "react-calendar";
import { format } from "date-fns";
import "../../styles/Calendar.css";

const SidebarWrapper = styled.div`
    display: column;
    border: 1px solid var(--shell-line);
    width: var(--sidebar-width);
`;

export const Sidebar = ({ children }) => {
    return <SidebarWrapper>{children}</SidebarWrapper>;
};
