import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { CommonStylingProps } from "../types";

export const SelectPicker = ({ label, placeholder, list }) => {
    const [selectItem, setSelectItem] = useState(placeholder);
    const [isHidden, setIsHidden] = useState(true);
    const [currentToggle, setCurrentToggle] = useState(label);
    const selectorRef = useRef();

    // what does stopPropagation do?
    const handlePopup = (e) => {
        e.stopPropagation();
        setIsHidden((prevState) => !prevState);
    };

    const handleSelect = (e) => {
        const value = e.target.innerHTML;
        console.log(value);
        setSelectItem(value);
        setIsHidden(true);
    };

    // unable to implement a closepopup box - not sure how to implement this after 2-3 hours of work

    useEffect(() => {
        const closePopup = (e: Event) => {
            if (e.target !== selectorRef.current) {
                setIsHidden(true);
            }
        };

        document.addEventListener("click", closePopup);

        return () => {
            document.removeEventListener("click", closePopup);
        };
    });

    return (
        <Selector
            id={label}
            className="combobox"
            role="combobox"
            aria-haspopup="listbox"
            aria-expanded={!isHidden}
        >
            <SelectorLabel $bgcolor={"var(--background-grey)"}>
                {label}
            </SelectorLabel>
            <SelectButton aria-controls="dropdownOptions" onClick={handlePopup}>
                <span> {selectItem}</span>
            </SelectButton>
            <PopupSelector
                aria-label="Options"
                selected={selectItem}
                list={list}
                isHidden={isHidden}
                handleSelect={handleSelect}
                ref={selectorRef}
            />
        </Selector>
    );
};

export const Selector = styled.div``;

// export const SelectInput = styled.input`
//     padding: 0;
//     background: none;
//     border: none;
//     border-radius: 0;
//     outline: none;
//     -webkit-appearance: none;
//     -moz-appearance: none;
//     appearance: none;
//     width: 100px;
//     overflow: hidden;
//     margin-left: 6px;
//     &: hover {
//         cursor: pointer;
//     }
// `;

export const SelectButton = styled.button`
    padding: 12px 10px;
    border: 1px solid grey;
    border-radius: 4px;
    width: fit-content;
    text-align: left;
    width: 128px;
    &: hover {
        cursor: pointer;
    }
    span {
        margin-left: 6px;
    }
`;

// export const SelectWrapper = styled.div`
//     padding: 12px 10px;
//     border: 1px solid grey;
//     border-radius: 4px;
//     width: fit-content;
//     &: hover {
//         cursor: pointer;
//     }
// `;

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

export const PopupSelector = ({ list, isHidden, handleSelect, selected }) => {
    const isTrue = (item) => {
        return item === selected;
    };
    return (
        <PopupWrapper show={isHidden} onClick={(e) => e.stopPropagation}>
            <PopupMenu>
                {list &&
                    list.map((items) => {
                        return (
                            <PopupMenuItem
                                role="option"
                                onClick={handleSelect}
                                value={items}
                                aria-selected={isTrue(items)}
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
    transform-origin: 60px 0px;
    position: absolute;
    z-index: 2;
    width: 100px;
    display: ${(props) => (props.show ? "none" : "block")};
`;

type PWProps = {
    top?: string;
    left?: string;
    show?: boolean;
};

export const PopupMenu = styled.ul`
    list-style: none;
    margin: 0px;
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
    padding: 4px 16px 4px 16px;
    border: 1px solid black;
    width: 100%;
    &: hover {
        background-color: #6b7a90;
        color: white;
        font-weight: 500;
        cursor: pointer;
    }
    &[aria-selected="true"] {
        background-color: #6b728e;
    }
`;
