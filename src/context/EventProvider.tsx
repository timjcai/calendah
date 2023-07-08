import React, {createContext} from 'react'

export const EventContext = createContext();

export const EventsProvider = ({children}) => {
    return (
        <EventContext.Provider value={value}>
            {children}
        </EventContext.Provider>
    )
}