import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import { CalendarViewSettings } from '../../pages/View'
import { addZero } from '../../utils';

export const StyledSelect = styled.select`
    scrollHeight: 10px;
`;

export const avaliableTimes = [
    "12:00 AM", "12:15 AM","12:30 AM","12:45 AM",
    "01:00 AM","01:15 AM","01:30 AM","01:45 AM",
    "02:00 AM","02:15 AM","02:30 AM","02:45 AM",
    "03:00 AM","03:15 AM","03:30 AM","03:45 AM",
    "04:00 AM","04:15 AM","04:30 AM","04:45 AM",
    "05:00 AM","05:15 AM","05:30 AM","05:45 AM",
    "06:00 AM","06:15 AM","06:30 AM","06:45 AM",
    "07:00 AM","07:15 AM","07:30 AM","07:45 AM",
    "08:00 AM","08:15 AM","08:30 AM","08:45 AM",
    "09:00 AM","09:15 AM","09:30 AM","09:45 AM",
    "10:00 AM","10:15 AM","10:30 AM","10:45 AM",
    "11:00 AM","11:15 AM","11:30 AM","11:45 AM",
    "12:00 PM","12:15 PM","12:30 PM","12:45 PM",
    "01:00 PM","01:15 PM","01:30 PM","01:45 PM",
    "02:00 PM","02:15 PM","02:30 PM","02:45 PM",
    "03:00 PM","03:15 PM","03:30 PM","03:45 PM",
    "04:00 PM","04:15 PM","04:30 PM","04:45 PM",
    "05:00 PM","05:15 PM","05:30 PM","05:45 PM",
    "06:00 PM","06:15 PM","06:30 PM","06:45 PM",
    "07:00 PM","07:15 PM","07:30 PM","07:45 PM",
    "08:00 PM","08:15 PM","08:30 PM","08:45 PM",
    "09:00 PM","09:15 PM","09:30 PM","09:45 PM",
    "10:00 PM","10:15 PM","10:30 PM","10:45 PM",
    "11:00 PM","11:15 PM","11:30 PM","11:45 PM"
  ];

export const Timepicker = ({label}) => {
    const [isHidden, setIsHidden] = useState(true)
    const [time, setTime] = useState(convert24to12time(closest15min(new Date())))
    const btnRef = useRef();

    function toggleDropDown() {
        (isHidden) ? setIsHidden(false) : setIsHidden(true)
    }

    function selectTime(e) {
        setTime(e.target.innerHTML)
    }

    function closest15min(input: Date): string {
        const minutes = addZero((Math.round(input.getMinutes()/15) * 15) % 60);
        const hours = input.getHours()

        return `${hours}:${minutes}`
    }

    function convert24to12time(input: Date|string): string {
       const array = input.toString().split(':')
       const hours = parseInt(array[0])
       const minutes = parseInt(array[1])
       if ( hours > 12) {
            return `${addZero(hours - 12)}:${addZero(minutes)} PM`;
       } else {
            return `${addZero(hours)}:${addZero(minutes)} AM`;
       }
    }

    const currentTime = convert24to12time(closest15min(new Date()))

    useEffect(()=> {
        function closeDropDown(e) {
            if(e.target !== btnRef.current) {
                setIsHidden(true);
            }
        }
        document.addEventListener('click', closeDropDown);

        return () => {
            document.removeEventListener('click', closeDropDown);
        }
    }, [])

    return (
            <div className="combobox" role="combobox" aria-haspopup="listbox" aria-expanded="false">
                <ComboBoxInput label={label} ref={btnRef} type="text" id="myInput" aria-autocomplete="list" aria-controls="dropdownOptions" value={time} onClick={toggleDropDown}/>
                <ComboBoxList id="dropdownOptions" role="listbox" aria-label="Options" hidden={isHidden} onClick={selectTime}>
                    {avaliableTimes.map((unittime)=>{
                        if (currentTime === unittime) {
                            return (<ComboBoxListItem key={unittime} role="option" aria-selected="true">{unittime}</ComboBoxListItem>);
                        } else {
                            return (<ComboBoxListItem key={unittime} role="option" aria-selected="false">{unittime}</ComboBoxListItem>);
                        }
                    })}
                </ComboBoxList>
            </div>
    )
}



export const ComboBoxInput = styled.input`
    border-radius: 5px;
    padding: 0.75em 1em 0.75em 1em;
    font-size: 14px;
    background-color: #EFF1F2;
    margin: 1em;
    color: black;
    width: 8em;
`;

export const ComboBoxList = styled.ul`
    position: absolute;
    left: inherit;
    margin-left: 15px;
    width: inherit;
    max-height: 150px;
    overflow-y: auto;
    border: 1px solid #ccc;
    background-color: #EFF1F2;
    font-size: 14px;
    width: 8em;
`;

export const ComboBoxListItem = styled.li`
    padding: 0.75em 1em 0.75em 1em;
    color: #9399A6;

    &:hover {
        background-color: var(--blue);
        transition: ease 0.1s;
      }
`;