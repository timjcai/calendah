import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { Button, StyledButton } from '../common/Button';

const NavWrapper = styled.div`
    display: flex;
    width: 100vw;
    justify-content: space-between;
    align-items: center;
    height: 5em;
    background-color: var(--shellline);
    padding: 1em 5em 1em 5em;
`;

const NavMapping = {
    new: {
        label: "Create new",
        linkpath: "/new"
    },
    settings: {
        label: "Settings",
        linkpath: "/settings"
    },
    calendar: {
        label: "View",
        linkpath: "/"
    }
}

export const NavButton = ({navigation}) => {
    const {label, linkpath} = navigation

    return (
        <StyledButton>
            <Link to={linkpath}>{label}</Link>
        </StyledButton>
    );
}

export const Navbar = () => { 
    return (
        <NavWrapper>
            <NavButton navigation = {NavMapping['new']}/>
            <div>
                <NavButton navigation = {NavMapping['calendar']}/>
                <NavButton navigation = {NavMapping['settings']}/>
            </div>
        </NavWrapper>
    )
}