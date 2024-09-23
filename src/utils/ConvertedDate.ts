const listOfMonth = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];
export function convertedDateToMonthAndYears(): {year: number, month: string }{
    const dateNow = new Date();
    const year = dateNow.getFullYear();
    const month = listOfMonth[dateNow.getMonth()];

    return {year, month};
}

function getFirstDayOfMonth(year:number, month:string) {
    const date = new Date(year, listOfMonth.indexOf(month), 1); // Первый день текущего месяца
    return date.getDay(); // Возвращает день недели (0 - Воскресенье, 1 - Понедельник и т.д.)
}

function getDaysInMonth(year:number, month:string) {
    return new Date(year, listOfMonth.indexOf(month), 0).getDate();
}

export function getCalendarArray(year:number, month:string):{day: number, isThisMonth: boolean}[][] {
    const daysInCurrentMonth = getDaysInMonth(year, month); // Количество дней в текущем месяце
    const daysInPreviousMonth = getDaysInMonth(year, listOfMonth[listOfMonth.indexOf(month) - 1]); // Количество дней в предыдущем месяце
    const firstDay = getFirstDayOfMonth(year, month); // На какой день недели начинается месяц
    const weeks: {day: number, isThisMonth: boolean}[][] = []; // Массив для недель

    let week: {day: number, isThisMonth: boolean}[] = []; // Текущая неделя
    let dayCounter = 1; // Счётчик дней текущего месяца

    // Добавляем дни предыдущего месяца в первую неделю
    for (let i = firstDay; i > 0; i--) {
        week.push({day:daysInPreviousMonth -i + 1, isThisMonth:false}); // Заполняем недостающие дни в первой неделе
    }

    // Заполняем оставшиеся дни текущего месяца в первую неделю
    for (let i = firstDay; i < 7; i++) {
        week.push({day:dayCounter++, isThisMonth:true});
    }
    weeks.push(week); // Добавляем первую неделю

    // Заполняем оставшиеся недели
    while (dayCounter <= daysInCurrentMonth) {
        week = [];
        for (let i = 0; i < 7 && dayCounter <= daysInCurrentMonth; i++) {
            week.push({day:dayCounter++, isThisMonth: true});
        }
        weeks.push(week);
    }

    // Если последняя неделя неполная, добавляем дни следующего месяца
    let nextMonthDay = 1;
    while (weeks[weeks.length - 1].length < 7) {
        weeks[weeks.length - 1].push({day:nextMonthDay++, isThisMonth: false});
    }

    week = []
    for(let i=1; i<=7; i++){
        week.push({day:nextMonthDay++, isThisMonth: false})
    }
    weeks.push(week)


    return weeks;
}