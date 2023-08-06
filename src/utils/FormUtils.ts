export const validateData = (formValues) => {
    const {
        title,
        starttime,
        endtime,
        location,
        meeting,
        attachments,
        description,
        guests,
        calendar_id,
    } = formValues;

    if (!title) {
        console.log("no title provided");
    }
    if (!location) {
        console.log("no location provided");
    }
    if (!meeting) {
        console.log("no meeting provided");
    }
    if (!attachments) {
        console.log("no attachments provided");
    }
    if (!description) {
        console.log("no description provided");
    }
    return formValues;
};