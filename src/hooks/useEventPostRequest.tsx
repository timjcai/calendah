import { convert12to24time, mergeDateTime } from "../utils";
import { formType } from "../components/types";

export const EventPostRequest = (formData: formType) => {
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
