export const getTime = (date: string) => {
    // change to your timezone
    const timezone = "Europe/Helsinki";
    const timeFormat = "en-FI";
    return new Date(date).toLocaleTimeString(timeFormat, { timeZone: timezone });
};

export const getDay = (date: string) => {
    // change to your timezone
    const timezone = "Europe/Helsinki";
    const dateFormat = "en-FI";
    return new Date(date).toLocaleDateString(dateFormat, { timeZone: timezone });
};
