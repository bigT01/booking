"use client"
import React, {useEffect, useState} from 'react';
import {convertedDateToMonthAndYears, getCalendarArray} from "@/utils/ConvertedDate";
import {CalendarDayFormat} from "@/constants/interface";

type selectedDate = {
    year: number,
    day: number,
    month: string
}

const Calendar = () => {
    const [firstYearAndMonth, setFirstYearAndMonth] = useState<{ month: string, year: number } | null>(null)
    const [indexFromCurrentMonth, setIndexFromCurrentMonth] = useState<number>(0)
    const [calendarArray, setCalendarArray] = useState([])

    const [firstSelectedDate, setFirstSelectedDate] = useState<selectedDate | null>(null)

    useEffect(() => {
        setFirstYearAndMonth(convertedDateToMonthAndYears(indexFromCurrentMonth))
    }, [indexFromCurrentMonth]);

    useEffect(() => {
        if (firstYearAndMonth) {
            setCalendarArray(getCalendarArray(firstYearAndMonth.year, firstYearAndMonth.month))
        }
    }, [firstYearAndMonth]);

    const handleFirstDaySelect = (day: number) => {
        if (firstYearAndMonth?.year && firstYearAndMonth.month) {
            setFirstSelectedDate({day: day, year: firstYearAndMonth.year, month: firstYearAndMonth.month})
        }
    }

    const checkingTheActiveDay = (day:CalendarDayFormat): boolean => {
        if(firstSelectedDate?.day === day.day &&
            day.isThisMonth &&
            firstSelectedDate?.month === firstYearAndMonth?.month &&
            firstSelectedDate?.year === firstYearAndMonth?.year){
            return true
        } else {
            return false
        }
    }
    return (
        <div>
            <div className={'p-4'}>
                <h5>{firstYearAndMonth?.month} {firstYearAndMonth?.year}</h5>
                <table>
                    <tr>
                        <th>S</th>
                        <th>M</th>
                        <th>T</th>
                        <th>W</th>
                        <th>T</th>
                        <th>F</th>
                        <th>S</th>
                    </tr>
                    {
                        calendarArray.map((week, index) => (
                            <tr key={index}>
                                {week.map((day: CalendarDayFormat) => (
                                    <td key={day.day}
                                        className={`w-[32px] h-[32px] rounded-full
                                        ${!day.isThisMonth ? 'text-gray-400' : 'cursor-pointer'} 
                                        ${checkingTheActiveDay(day) ? 'bg-purple-blue text-white' : 'bg-transparent'}`}
                                        onClick={() => handleFirstDaySelect(day.day)}>
                                        {day.day}
                                    </td>
                                ))}
                            </tr>
                        ))
                    }
                </table>
            </div>
        </div>
    );
};

export default Calendar;