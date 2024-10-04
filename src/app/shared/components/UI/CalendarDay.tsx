"use client"
import React from 'react';

type CalendarDayProps = {
    day: number,
    isThisMonth: boolean,
    isActive: boolean,
    handler: (day: number) => void
}

const CalendarDay = ({day, handler, isActive, isThisMonth}: CalendarDayProps) => {
    return (
        <td
            className={`w-[32px] h-[32px] rounded-full ${isThisMonth ? 'cursor-pointer' : 'text-gray-400'} 
            ${isActive ? 'bg-purple-blue text-white transition-colors' : 'bg-transparent transition-colors'}`}
            onClick={() => isThisMonth ? handler(day) : null}>
            {day}
        </td>
    );
};

export default CalendarDay;