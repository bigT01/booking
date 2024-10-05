import React, {useCallback, useMemo, useState} from 'react';
import {selectedDateFormat} from "@/constants/interface";
import {convertedDateToMonthAndYears, getCalendarArray} from "@/utils/ConvertedDate";
import {toggleSelectedDate} from "@/app/utils/toggleSelectedDate";
import {ArrowLeftLite} from "@/app/icons";
import CalendarSection from "@/app/shared/components/UI/CalendarSection";

const OneWayCalendar = () => {
    const [indexFromCurrentMonth, setIndexFromCurrentMonth] = useState<number>(0);
    const [selectedDate, setSelectedDate] = useState<selectedDateFormat | null>(null);

    const yearAndMonth = useMemo(() => convertedDateToMonthAndYears(indexFromCurrentMonth), [indexFromCurrentMonth]);

    const calendarDays = useMemo(() => yearAndMonth ? getCalendarArray(yearAndMonth.year, yearAndMonth.month) : [], [yearAndMonth]);

    const handleDaySelect = useCallback((day: number) => {
        if (yearAndMonth?.year && yearAndMonth.month) {
            const newDate = { day, year: yearAndMonth.year, month: yearAndMonth.month };
            setSelectedDate(toggleSelectedDate(selectedDate, newDate));
        }
    }, [selectedDate, yearAndMonth]);


    return (
        <div className='flex px-[33px] pt-2 pb-4 justify-between'>
            <button onClick={() => setIndexFromCurrentMonth(old => old - 1)}>
                <ArrowLeftLite/>
            </button>
            <CalendarSection
                yearAndMonth={yearAndMonth}
                calendarDays={calendarDays}
                selectedDate={selectedDate}
                handleDaySelect={handleDaySelect}
            />
            <button className={'rotate-180'} onClick={() => setIndexFromCurrentMonth(old => old + 1)}>
                <ArrowLeftLite/>
            </button>
        </div>
    );
};

export default OneWayCalendar;