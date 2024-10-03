"use client"
import React, {useEffect, useState} from 'react';
import {convertedDateToMonthAndYears, getCalendarArray} from "@/utils/ConvertedDate";
import {CalendarDayFormat, selectedDateFormat, yearAndMonthFormat} from "@/constants/interface";
import {toggleSelectedDate} from "@/app/utils/toggleSelectedDate";
import {checkingTheActiveDay} from "@/app/utils/checkingTheActiveDay";
import CalendarLayout from "@/app/shared/components/UI/CalendarLayout";


const RoundTripCalendar = () => {
    const [firstYearAndMonth, setFirstYearAndMonth] = useState<yearAndMonthFormat | null>(null)
    const [secondYearAndMonth, setSecondYearAndMonth] = useState<yearAndMonthFormat | null>(null)

    const [indexFromCurrentMonth, setIndexFromCurrentMonth] = useState<number>(2)

    const [firstSelectedDate, setFirstSelectedDate] = useState<selectedDateFormat | null>(null)
    const [secondSelectedDate, setSecondSelectedDate] = useState<selectedDateFormat | null>(null)

    const [firstCalendarDays, setFirstCalendarDays] = useState([])
    const [secondCalendarDays, setSecondCalendarDays] = useState([])


    useEffect(() => {
        setFirstYearAndMonth(convertedDateToMonthAndYears(indexFromCurrentMonth))
        setSecondYearAndMonth(convertedDateToMonthAndYears(indexFromCurrentMonth + 1))
    }, [indexFromCurrentMonth]);

    useEffect(() => {
        if (firstYearAndMonth && secondYearAndMonth) {
            setFirstCalendarDays(getCalendarArray(firstYearAndMonth.year, firstYearAndMonth.month))
            setSecondCalendarDays(getCalendarArray(secondYearAndMonth.year, secondYearAndMonth.month))
        }
    }, [firstYearAndMonth, secondYearAndMonth]);

    const handleFirstDaySelect = (day: number) => {
        if (firstYearAndMonth?.year && firstYearAndMonth.month) {
            const newDate = {day: day, year: firstYearAndMonth.year, month: firstYearAndMonth.month}
            setFirstSelectedDate(toggleSelectedDate(firstSelectedDate, newDate))
        }
    }

    const handleSecondDaySelect = (day: number) => {
        if (secondYearAndMonth?.year && secondYearAndMonth.month) {
            const newDate = {day: day, year: secondYearAndMonth.year, month: secondYearAndMonth.month}
            setSecondSelectedDate(toggleSelectedDate(secondSelectedDate, newDate))
        }
    }

    return (
        <div className='flex justify-between'>
            <div className={'p-4 w-fit'}>
                <h5 className='mb-2 text-left'>{firstYearAndMonth?.month} {firstYearAndMonth?.year}</h5>
                <CalendarLayout>
                        {
                            firstCalendarDays.map((week, index) => (
                                <tr key={index}>
                                    {week.map((day: CalendarDayFormat) => (
                                        <td key={day.day}
                                            className={`w-[32px] h-[32px] rounded-full
                                        ${!day.isThisMonth ? 'text-gray-400' : 'cursor-pointer'} 
                                        ${checkingTheActiveDay(day, firstSelectedDate) ? 'bg-purple-blue text-white transition-colors'
                                                : 'bg-transparent transition-colors'}`}
                                            onClick={() => day.isThisMonth ? handleFirstDaySelect(day.day) : null}>
                                            {day.day}
                                        </td>
                                    ))}
                                </tr>
                            ))
                        }
                    </CalendarLayout>
            </div>
            <div className={'p-4 w-fit'}>
                <h5 className='mb-2 text-left'>{secondYearAndMonth?.month} {secondYearAndMonth?.year}</h5>
                <CalendarLayout>
                        {
                            secondCalendarDays.map((week, index) => (
                                <tr key={index}>
                                    {week.map((day: CalendarDayFormat) => (
                                        <td key={day.day}
                                            className={`w-[32px] h-[32px] rounded-full
                                        ${!day.isThisMonth ? 'text-gray-400' : 'cursor-pointer'} 
                                        ${checkingTheActiveDay(day, secondSelectedDate) ? 'bg-purple-blue text-white transition-colors'
                                                : 'bg-transparent transition-colors'}`}
                                            onClick={() => day.isThisMonth ? handleSecondDaySelect(day.day) : null}>
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