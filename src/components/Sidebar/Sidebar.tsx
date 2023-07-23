import styled from "styled-components";
import React, { useState } from "react";
import Calendar from "react-calendar";
import { format } from "date-fns";
import "../../styles/Calendar.css";

const SidebarWrapper = styled.div<ISidebarWrapper>`
    display: column;
    border: 1px solid var(--shell-line);
    width: var(--sidebar-width);
    border-radius: ${(props) => props.borderradius};
    padding: ${(props) => props.padding};
    margin: ${(props) => props.margin};
`;

export const Sidebar = ({ children, styles = {} }) => {
    const { borderradius, padding, margin } = styles;
    return (
        <SidebarWrapper borderradius={borderradius} padding={padding}>
            {children}
        </SidebarWrapper>
    );
};

interface ISidebarWrapper {
    borderradius?: string;
    padding?: string;
    margin?: string;
}
