import {CalendarDayFormat, selectedDateFormat} from "@/constants/interface";

export const checkingTheActiveDay = (calendarDay:CalendarDayFormat, selectedDate: selectedDateFormat | null): boolean => {
    return selectedDate?.day === calendarDay.day &&
        calendarDay.isThisMonth &&
        selectedDate?.month === selectedDate?.month &&
        selectedDate?.year === selectedDate?.year;
}