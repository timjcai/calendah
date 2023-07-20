import React, { createContext } from "react";

export const NewEventContext = createContext(false);

export const NewEventProvider = ({ children }) => {
    return (
        <NewEventContext.Provider value={NewEventContext}>
            {children}
        </NewEventContext.Provider>
    );
};
