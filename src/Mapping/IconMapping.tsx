import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
    faBell,
    faCalendar,
    faComment,
    faFolderOpen,
    faUser,
} from "@fortawesome/free-regular-svg-icons";
import {
    faAddressCard,
    faAngleDown,
    faAngleLeft,
    faAngleRight,
    faAngleUp,
    faC,
    faCircleXmark,
    faClock,
    faEarthOceania,
    faGear,
    faHeading,
    faKey,
    faKeyboard,
    faLanguage,
    faLink,
    faLocationDot,
    faMagnifyingGlass,
    faPalette,
    faPenToSquare,
    faSliders,
    faTrash,
    faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { ActionType, InputType, SettingsType } from "../components/types";

export const iconMapping: { [key in InputType]: IconDefinition } = {
    location: faLocationDot,
    meeting: faVideo,
    notification: faBell,
    calendar: faCalendar,
    description: faComment,
    attachments: faFolderOpen,
    guests: faUser,
    search: faMagnifyingGlass,
    title: faHeading,
    datetime: faClock,
    edit: faPenToSquare,
    exit: faCircleXmark,
    settings: faGear,
    delete: faTrash,
};

export const settingsIconMapping: { [key in SettingsType]: IconDefinition } = {
    Profile: faUser,
    "Passwords & Security": faKey,
    "Language & Region": faLanguage,
    Timezone: faEarthOceania,
    "Viewing Options": faSliders,
    "Default Event": faAddressCard,
    "Calendar Colors": faPalette,
    Notifications: faBell,
    "Keyboard Shortcuts": faKeyboard,
    Integrations: faLink,
};

export const actionIconMapping: { [key in ActionType]: IconDefinition } = {
    edit: faPenToSquare,
    exit: faCircleXmark,
    settings: faGear,
    delete: faTrash,
    left: faAngleLeft,
    right: faAngleRight,
    down: faAngleDown,
    up: faAngleUp,
};
