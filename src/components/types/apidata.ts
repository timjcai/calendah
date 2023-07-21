export interface APIDataObject {
    [key: string]: EventProps[]
}

export interface EventProps {
    id: number;
    calendar_id: number;
    title: string;
    description: string;
    location: string;
    guests: string;
    tag: string;
    created_at: Date;
    updated_at: Date;
    starttime: Date;
    endtime: Date;
}

