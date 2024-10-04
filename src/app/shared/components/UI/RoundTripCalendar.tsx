"use client"
import React, {useEffect, useState} from 'react';
import {convertedDateToMonthAndYears, getCalendarArray} from "@/utils/ConvertedDate";
import {CalendarDayFormat, selectedDateFormat, yearAndMonthFormat} from "@/constants/interface";
import {toggleSelectedDate} from "@/app/utils/toggleSelectedDate";
import {checkingTheActiveDay} from "@/app/utils/checkingTheActiveDay";
import CalendarLayout from "@/app/shared/components/UI/CalendarLayout";
import {ArrowLeftLite} from "@/app/icons";
import CalendarDay from "@/app/shared/components/UI/CalendarDay";


const RoundTripCalendar = () => {
    const [firstYearAndMonth, setFirstYearAndMonth] = useState<yearAndMonthFormat | null>(null)
    const [secondYearAndMonth, setSecondYearAndMonth] = useState<yearAndMonthFormat | null>(null)

    const [indexFromCurrentMonth, setIndexFromCurrentMonth] = useState<number>(0)

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
        <div className='flex px-[33px] pt-2 pb-4'>
            <button onClick={() => setIndexFromCurrentMonth(old => old - 1)}>
                <ArrowLeftLite/>
            </button>
            <div className={'p-4 w-fit'}>
                <h5 className='mb-2 text-left'>{firstYearAndMonth?.month} {firstYearAndMonth?.year}</h5>
                <CalendarLayout>
                    {
                        firstCalendarDays.map((week, index) => (
                            <tr key={index}>
                                {week.map((day: CalendarDayFormat) => (
                                    <CalendarDay key={day.day}
                                                 isActive={firstYearAndMonth ? checkingTheActiveDay(Object.assign(day, firstYearAndMonth) , firstSelectedDate) : false}
                                                 day={day.day}
                                                 isThisMonth={day.isThisMonth}
                                                 handler={() => handleFirstDaySelect(day.day)}/>
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
                                    <CalendarDay key={day.day}
                                                 isActive={secondYearAndMonth ? checkingTheActiveDay(Object.assign(day, secondYearAndMonth), secondSelectedDate) : false}
                                                 day={day.day}
                                                 isThisMonth={day.isThisMonth}
                                                 handler={() => handleSecondDaySelect(day.day)}/>
                                ))}
                            </tr>
                        ))
                    }
                </CalendarLayout>
            </div>
            <button className={'rotate-180'} onClick={() => setIndexFromCurrentMonth(old => old + 1)}>
                <ArrowLeftLite/>
            </button>
        </div>
    );
};

export default RoundTripCalendar;