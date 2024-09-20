"use client"
import React, {useRef, useState} from 'react';
import Input from "@/app/shared/components/UI/Input";
import {CalendarWD} from "@/app/icons/Basic";
import RadioListButton from "@/app/shared/components/UI/RadioListButton";
import {LabelForm} from "@/constants/interface";

const radioItemsArray: LabelForm[] = [
    {id: '123', label:'Round trip'},
    {id: '124', label:'One way'}
]

const Calendar = () => {
    const ref = useRef<HTMLDivElement | null>(null)
    const [isOpenedDropDown, setIsOpenedDropDown] = useState(false)

    return (
        <div className='relative w-fit' ref={ref}>
            <Input Icon={<CalendarWD/>} isRelative={true} isBorder={false} readOnly={true} value={''} inputWidth={148} inputPlaceholder={'Depart - Return'} onClick={() => setIsOpenedDropDown(old => !old)}/>
            <div className="absolute -top-[20px] rounded-xl shadow-2xl w-[642px] -right-[24px] h-[395px] bg-white">
                <RadioListButton className='flex gap-4 text-gray-600 mt-[29px] py-1 ml-[29px] mb-[29px]' RadioItems={radioItemsArray}/>
                <div className='w-full border-gray-200 border-[0.5px]'></div>
            </div>
        </div>
    );
};

export default Calendar;