import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { Button, StyledButton } from '../common/Button';
import { StyledInput } from '../common/Form';
import { thisWeek } from '../../utils/DateUtils';
import DatePicker from "react-widgets/DatePicker";

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
    },
    test: {
        label: "Test",
        linkpath: "/test"
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

export const DateSearchBar = () => {
    const [dateSearchQuery, setDateSearchQuery] = useState('')
    
    const updateInputValue = (e) => {
        console.log(e)
        console.log(e.toDateString())
        setDateSearchQuery(e)
        console.log(thisWeek(dateSearchQuery))
    }

    return (
        <div>
            <DatePicker
                defaultValue={new Date()}
                valueFormat={{ dateStyle: "medium" }}
                onChange={updateInputValue}
            />
        </div>
    )
}

export const Navbar = () => { 
    return (
        <NavWrapper>
            <NavButton navigation = {NavMapping['new']}/>
            <DateSearchBar />
            <div>
                <NavButton navigation = {NavMapping['calendar']}/>
                <NavButton navigation = {NavMapping['settings']}/>
                <NavButton navigation = {NavMapping['test']}/>
            </div>
        </NavWrapper>
    )
}