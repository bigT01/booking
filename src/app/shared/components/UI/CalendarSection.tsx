import CalendarLayout from "@/app/shared/components/UI/CalendarLayout";
import {CalendarDayFormat, selectedDateFormat, yearAndMonthFormat} from "@/constants/interface";
import CalendarDay from "@/app/shared/components/UI/CalendarDay";
import {checkingTheActiveDay} from "@/app/utils/checkingTheActiveDay";

type CalendarSection = {
    yearAndMonth: yearAndMonthFormat,
    calendarDays: [CalendarDayFormat[]],
    selectDate: selectedDateFormat,
    handleDaySelect: (day: number) =>void
}

const CalendarSection = ({yearAndMonth, calendarDays, selectedDate, handleDaySelect}: CalendarSection) => (
    <div className={'p-4 w-fit'}>
        <h5 className='mb-2 text-left'>{yearAndMonth?.month} {yearAndMonth?.year}</h5>
        <CalendarLayout>
            {
                calendarDays.map((week: CalendarDayFormat[], index: number) => (
                    <tr key={index}>
                        {week.map((day: CalendarDayFormat) => (
                            <CalendarDay key={day.day}
                                         isActive={yearAndMonth ? checkingTheActiveDay(Object.assign(day, yearAndMonth), selectedDate) : false}
                                         day={day.day}
                                         isThisMonth={day.isThisMonth}
                                         handler={() => handleDaySelect(day.day)}/>
                        ))}
                    </tr>
                ))
            }
        </CalendarLayout>
    </div>
);

export default CalendarSection