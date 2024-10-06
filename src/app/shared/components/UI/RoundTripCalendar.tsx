"use client"
import React, {useCallback, useMemo, useState} from 'react';
import {convertedDateToMonthAndYears, getCalendarArray} from "@/utils/ConvertedDate";
import {LabelForm, selectedDateFormat} from "@/constants/interface";
import {toggleSelectedDate} from "@/app/utils/toggleSelectedDate";
import {ArrowLeftLite} from "@/app/icons";
import CalendarSection from "@/app/shared/components/UI/CalendarSection";


const RoundTripCalendar = ({activeRadio}: LabelForm) => {
    const [indexFromCurrentMonth, setIndexFromCurrentMonth] = useState<number>(0);
    const [firstSelectedDate, setFirstSelectedDate] = useState<selectedDateFormat | null>(null);
    const [secondSelectedDate, setSecondSelectedDate] = useState<selectedDateFormat | null>(null);

    const firstYearAndMonth = useMemo(() => convertedDateToMonthAndYears(indexFromCurrentMonth), [indexFromCurrentMonth]);
    const secondYearAndMonth = useMemo(() => convertedDateToMonthAndYears(indexFromCurrentMonth + 1), [indexFromCurrentMonth]);

    const firstCalendarDays = useMemo(() => firstYearAndMonth ? getCalendarArray(firstYearAndMonth.year, firstYearAndMonth.month) : [], [firstYearAndMonth]);
    const secondCalendarDays = useMemo(() => secondYearAndMonth ? getCalendarArray(secondYearAndMonth.year, secondYearAndMonth.month) : [], [secondYearAndMonth]);

    const handleFirstDaySelect = useCallback((day: number) => {
        if (firstYearAndMonth?.year && firstYearAndMonth.month) {
            const newDate = { day, year: firstYearAndMonth.year, month: firstYearAndMonth.month };
            setFirstSelectedDate(toggleSelectedDate(firstSelectedDate, newDate));
        }
    }, [firstSelectedDate, firstYearAndMonth]);

    const handleSecondDaySelect = useCallback((day: number) => {
        if (secondYearAndMonth?.year && secondYearAndMonth.month) {
            const newDate = { day, year: secondYearAndMonth.year, month: secondYearAndMonth.month };
            setSecondSelectedDate(toggleSelectedDate(secondSelectedDate, newDate));
        }
    }, [secondSelectedDate, secondYearAndMonth]);

    return (
        <div className='flex px-[33px] pt-2 pb-4 justify-between'>
            <button onClick={() => setIndexFromCurrentMonth(old => old - 1)}>
                <ArrowLeftLite/>
            </button>
            <CalendarSection
                yearAndMonth={firstYearAndMonth}
                calendarDays={firstCalendarDays}
                selectedDate={firstSelectedDate}
                handleDaySelect={handleFirstDaySelect}
            />
            {activeRadio.id === '1' ? (
                <CalendarSection
                    yearAndMonth={secondYearAndMonth}
                    calendarDays={secondCalendarDays}
                    selectedDate={secondSelectedDate}
                    handleDaySelect={handleSecondDaySelect}
                />
            ) : null}
            <button className={'rotate-180'} onClick={() => setIndexFromCurrentMonth(old => old + 1)}>
                <ArrowLeftLite/>
            </button>
        </div>
    );
};

export default RoundTripCalendar;