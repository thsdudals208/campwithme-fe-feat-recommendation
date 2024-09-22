export function getMonthDates(year, month) {
    const startDate = new Date(year, month - 1, 1)
    const endDate = new Date(year, month, 0)
    return { startDate, endDate }
}

export function changeMonth(currentDate, direction) {
    const [yyyy, mm] = currentDate.split('-');
    const newDate = new Date(yyyy, Number(mm) - 1 + direction, 1);
    return newDate;
}