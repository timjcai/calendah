export interface APIDataObject {
    [key: string]: EventProps[]
}

export interface EventProps {
    id?: number;
    calendar_id: number;
    title: string;
    description: string;
    location: string;
    guests: string;
    tag?: string;
    created_at?: Date;
    updated_at?: Date;
    starttime: Date;
    endtime: Date;
}

export type formInput = 
    | "id"
    | "calendar_id"
    | "title"
    | "description"
    | "location"
    | "guests"
    | "tag"
    | "created_at"
    | "updated_at"
    | "starttime"
    | "endtime"

export interface ICalendarData {
        calendarData: CalendarData[];
    }
    
export interface CalendarData {
        id: number;
        tag: string;
        created_at?: Date;
        updated_at?: Date;
    };