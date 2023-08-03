import React, { FC, useContext } from "react";
import { DPNavButton, DPNavbar } from "./DatePicker.styles";
import { actionIconMapping, monthMappingFromIndex } from "../../Mapping";
import { SelectedDateContext } from "./DatePicker";
import { Icon } from "../common/Icon";

export const DatepickerNavbar: FC<IDatepickerNavbar> = ({
    openMonthModal,
    openYearModal,
    changeMonth,
}) => {
    const selectedDate = useContext(SelectedDateContext);

    return (
        <DPNavbar>
            <div>
                <DatepickerNavButton label={"left"} onClick={changeMonth} />
            </div>
            <div>
                <button onClick={openMonthModal} id="monthmodalbutton">
                    <h1 style={{ pointerEvents: "none" }}>
                        {`${monthMappingFromIndex[selectedDate.getMonth()]}`}
                    </h1>
                </button>
                <span> </span>
                <button onClick={openMonthModal} id="monthmodalbutton">
                    <h1 style={{ pointerEvents: "none" }}>
                        {`${selectedDate.getFullYear()}`}
                    </h1>
                </button>
            </div>
            <div>
                <DatepickerNavButton label={"right"} onClick={changeMonth} />
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
}) => {
    const icon = actionIconMapping[label];
    const color = "var(--shell-line)";
    return (
        <DPNavButton id={label} onClick={onClick}>
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
}
