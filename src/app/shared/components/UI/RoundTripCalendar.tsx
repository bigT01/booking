"use client"
import React, {useEffect, useState} from 'react';
import {convertedDateToMonthAndYears, getCalendarArray} from "@/utils/ConvertedDate";
import {CalendarDayFormat, selectedDateFormat, yearAndMonthFormat} from "@/constants/interface";
import {toggleSelectedDate} from "@/app/utils/toggleSelectedDate";
import {checkingTheActiveDay} from "@/app/utils/checkingTheActiveDay";
import CalendarLayout from "@/app/shared/components/UI/CalendarLayout";



const RoundTripCalendar = () => {
    const [firstYearAndMonth, setFirstYearAndMonth] = useState<yearAndMonthFormat | null>(null)
    const [indexFromCurrentMonth, setIndexFromCurrentMonth] = useState<number>(0)
    const [firstSelectedDate, setFirstSelectedDate] = useState<selectedDateFormat | null>(null)

    const [calendarArray, setCalendarArray] = useState([])


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
            const newDate = {day: day, year: firstYearAndMonth.year, month: firstYearAndMonth.month}
            setFirstSelectedDate(toggleSelectedDate( firstSelectedDate, newDate))
        }
    }

    return (
        <div>
            <div className={'p-4'}>
                <h5>{firstYearAndMonth?.month} {firstYearAndMonth?.year}</h5>
                <CalendarLayout>
                    {
                        calendarArray.map((week, index) => (
                            <tr key={index}>
                                {week.map((day: CalendarDayFormat) => (
                                    <td key={day.day}
                                        className={`w-[32px] h-[32px] rounded-full
                                        ${!day.isThisMonth ? 'text-gray-400' : 'cursor-pointer'} 
                                        ${checkingTheActiveDay(day, firstSelectedDate) ? 'bg-purple-blue text-white transition-colors' 
                                            : 'bg-transparent transition-colors'}`}
                                        onClick={() => day.isThisMonth? handleFirstDaySelect(day.day) : null}>
                                        {day.day}
                                    </td>
                                ))}
                            </tr>
                        ))
                    }
                </CalendarLayout>
            </div>
        </div>
    );
};

export default RoundTripCalendar;