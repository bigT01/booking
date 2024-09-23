"use client"
import React, {useEffect, useState} from 'react';
import {convertedDateToMonthAndYears, getCalendarArray} from "@/utils/ConvertedDate";

const Calendar = () => {
    const [mainDates, setMainDates] = useState<{month: string, year: number} | null>(null)
    const [calendarArray, setCalendarArray] = useState([])

    useEffect(() => {
        setMainDates(convertedDateToMonthAndYears())
    }, []);

    useEffect(() => {
        if(mainDates){
            setCalendarArray(getCalendarArray(mainDates.year, mainDates.month))
        }
    }, [mainDates]);
    return (
        <div>
            <div className={'p-4'}>
                <h5>{mainDates?.month} {mainDates?.year}</h5>
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
                                {week.map(day => (
                                    <td key={day.day} className={`w-[32px] h-[32px] ${!day.isThisMonth ? 'text-gray-400' : 'cursor-pointer'}`}>{day.day}</td>
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