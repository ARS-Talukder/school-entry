
const useDate = () => {
    const today = new Date();
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    const date = today.getDate() + ' ' + (monthNames[today.getMonth()]) + ' ' + today.getFullYear();
    const time = today.getHours() + ':' + today.getMinutes();
    return [date, time]
};

export default useDate;