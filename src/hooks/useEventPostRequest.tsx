import { convert12to24time, mergeDateTime } from "../utils";
import { EventProps } from "../components/types";

export const EventPostRequest = (formData: EventProps) => {
    fetch(
        `http://localhost:3000/api/v1/calendars/${formData.calendar_id}/events`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        }
    )
        .then((response) => response.json())
        .then((data) => {
            console.log("Response from server:", data);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
};

export const DeleteRequest = (eventData: EventProps) => {
    const url = `http://localhost:3000/api/v1/calendars/${eventData.calendar_id}/events/${eventData.id}`;

    fetch(url, {
        method: "DELETE",
        headers: {
            // Add any required headers here, such as authentication tokens or content type
            "Content-Type": "application/json",
        },
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error("DELETE request failed");
            }
            return response.json().catch(() => ({})); // Handle potential JSON parsing errors
        })
        .then((data) => {
            // Handle the response data here, even if it's empty
            console.log("Resource deleted successfully:", data);
        })
        .catch((error) => {
            console.error("Error deleting resource:", error);
        });
};
