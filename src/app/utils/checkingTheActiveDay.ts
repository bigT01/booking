import {CalendarDayFormat, selectedDateFormat, yearAndMonthFormat} from "@/constants/interface";

type fullDays = CalendarDayFormat & yearAndMonthFormat

export const checkingTheActiveDay = (calendarDay:fullDays, selectedDate: selectedDateFormat | null): boolean => {
    return selectedDate?.day === calendarDay.day &&
        calendarDay.isThisMonth &&
        calendarDay?.month === selectedDate?.month &&
        calendarDay?.year === selectedDate?.year;
}