import React, { FC, useContext } from "react";
import { DPNavButton, DPNavbar } from "./DatePicker.styles";
import { actionIconMapping, monthMappingFromIndex } from "../../Mapping";
import { Icon } from "../common/Icon";
import { SelectedDateContext } from "./DatePicker";

export const DatepickerNavbar: FC<IDatepickerNavbar> = ({
    openMonthModal,
    openYearModal,
    changeMonth,
}) => {
    const selectedDate = useContext(SelectedDateContext);

    return (
        <DPNavbar>
            <div>
                <DatepickerNavButton
                    type="button"
                    label={"left"}
                    onClick={changeMonth}
                />
            </div>
            <div>
                <button
                    type="button"
                    onClick={openMonthModal}
                    id="monthmodalbutton"
                >
                    <h1 style={{ pointerEvents: "none" }}>
                        {`${monthMappingFromIndex[selectedDate.getMonth()]}`}
                    </h1>
                </button>
                <span> </span>
                <button
                    type="button"
                    onClick={openMonthModal}
                    id="monthmodalbutton"
                >
                    <h1 style={{ pointerEvents: "none" }}>
                        {`${selectedDate.getFullYear()}`}
                    </h1>
                </button>
            </div>
            <div>
                <DatepickerNavButton
                    type="button"
                    label={"right"}
                    onClick={changeMonth}
                />
            </div>
        </DPNavbar>
    );
};

interface IDatepickerNavbar {
    openMonthModal: (e: any) => void;
    openYearModal: (e: any) => void;
    changeMonth: (e: any) => void;
}

export const DatepickerNavButton: FC<IDatepickerNavButton> = ({
    label,
    onClick,
    type,
}) => {
    const icon = actionIconMapping[label];
    const color = "var(--shell-line)";
    return (
        <DPNavButton type={type} id={label} onClick={onClick}>
            <Icon
                icon={icon}
                color={color}
                style={{ pointerEvents: "none" }}
            ></Icon>
        </DPNavButton>
    );
};

interface IDatepickerNavButton {
    label: string;
    onClick: (e: any) => void;
    type: string;
}
