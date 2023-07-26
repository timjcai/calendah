import React, { useState } from "react";
import styled from "styled-components";

export const SelectPicker = ({ label, placeholder, list }) => {
    const [selectItem, setSelectItem] = useState(placeholder);
    const [isHidden, setIsHidden] = useState(true);

    const handlePopup = () => {
        setIsHidden((prevState) => !prevState);
    };

    const handleSelect = (e) => {
        setSelectItem(e.target.innerHTML);
        setIsHidden(true);
    };

    return (
        <div>
            <SelectorLabel>{label}</SelectorLabel>
            <SelectWrapper>
                <SelectInput value={selectItem} onClick={handlePopup} />
                <PopupSelector
                    list={list}
                    isHidden={isHidden}
                    handleSelect={handleSelect}
                ></PopupSelector>
            </SelectWrapper>
        </div>
    );
};

export const SelectInput = styled.input`
    padding: 0;
    background: none;
    border: none;
    border-radius: 0;
    outline: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
`;

export const SelectWrapper = styled.div`
    padding: 16.5px 14px;
    border: 1px solid grey;
    border-radius: 4px;
`;

export const SelectorLabel = styled.label`
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.4375em;
    letter-spacing: 0.00938em;
    padding: 0px;
    display: block;
    transform-origin: left top;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: calc(133% - 32px);
    position: absolute;
    transform: translate(14px, -9px) scale(0.75);
    transition:
        color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
        transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
        max-width 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
    z-index: 1;
    pointer-events: auto;
    user-select: none;
`;

export const PopupSelector = ({ list, isHidden, handleSelect }) => {
    return (
        <PopupWrapper>
            <PopupMenu hidden={isHidden}>
                {list &&
                    list.map((items) => {
                        return (
                            <PopupMenuItem
                                role="option"
                                onClick={(e) => handleSelect(e)}
                                value={items}
                            >
                                {items}
                            </PopupMenuItem>
                        );
                    })}
            </PopupMenu>
        </PopupWrapper>
    );
};

export const PopupWrapper = styled.div<PWProps>`
    opacity: 1;
    transform: none;
    min-width: 120px;
    transition:
        opacity 251ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        transform 167ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    top: ${(props) => props.top}
    left: ${(props) => props.left}
    transform-origin: 60px 0px;
`;

type PWProps = {
    top?: string;
    left?: string;
};

export const PopupMenu = styled.ul`
    list-style: none;
    margin: 0px;
    padding: 8px 0px;
    position: relative;
    outline: 0px;
    background-image: linear-gradient(
        rgba(255, 255, 255, 0.12),
        rgba(255, 255, 255, 0.12)
    );
    box-shadow:
        rgba(0, 0, 0, 0.2) 0px 5px 5px -3px,
        rgba(0, 0, 0, 0.14) 0px 8px 10px 1px,
        rgba(0, 0, 0, 0.12) 0px 3px 14px 2px;
    border-radius: 4px;
    background-color: #2f2f2f;
    color: white;
    padding-left: 16px;
    padding-right: 16px;
`;

export const PopupMenuItem = styled.li`
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: 0.00938em;
    display: flex;
    -webkit-box-pack: start;
    justify-content: flex-start;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
    text-decoration: none;
`;
