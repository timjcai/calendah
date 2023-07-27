import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { CommonStylingProps } from "../types";

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

    const closePopup = (e) => {
        if (!isHidden) {
            setIsHidden(true);
        }
    };

    return (
        <div onClick={handlePopup} onBlur={closePopup}>
            <SelectorLabel $bgcolor={"var(--background-grey)"}>
                {label}
            </SelectorLabel>
            <SelectWrapper>
                <SelectInput value={selectItem} />
            </SelectWrapper>
            <PopupSelector
                list={list}
                isHidden={isHidden}
                handleSelect={handleSelect}
            ></PopupSelector>
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
    width: 100px;
    overflow: hidden;
    margin-left: 6px;
`;

export const SelectWrapper = styled.div`
    padding: 12px 10px;
    border: 1px solid grey;
    border-radius: 4px;
    width: fit-content;
`;

export const SelectorLabel = styled.label<CommonStylingProps>`
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.4375em;
    letter-spacing: 0.00938em;
    padding: 0px 6px;
    display: block;
    transform-origin: left top;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: calc(133% - 32px);
    position: absolute;
    transform: translate(12px, -9px) scale(0.75);
    transition:
        color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
        transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
        max-width 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
    z-index: 1;
    pointer-events: auto;
    user-select: none;
    background-color: ${(props) => props.$bgcolor};
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
    position: absolute;
    z-index: 2;
    width: 100px;
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
    width: 128px;
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
    margin: 4px 0px 4px 0px;
`;
