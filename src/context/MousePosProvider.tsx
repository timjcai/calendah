import React, { createContext } from "react";

export const MousePosXContext = createContext(null);

export const MousePosYContext = createContext(null);

export const MousePosProvider = ({ children, value }) => {
    const { X, Y } = value;

    return (
        <MousePosXContext.Provider value={X}>
            <MousePosYContext.Provider value={Y}>
                {children}
            </MousePosYContext.Provider>
        </MousePosXContext.Provider>
    );
};
