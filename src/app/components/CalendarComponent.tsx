"use client"
import React, {useRef, useState} from 'react';
import Input from "@/app/shared/components/UI/Input";
import {CalendarWD} from "@/app/icons/Basic";
import RadioListButton from "@/app/shared/components/UI/RadioListButton";
import {LabelForm} from "@/constants/interface";
import {useClickOutside} from "@/utils/hooks/useClickOutside";
import RoundTripCalendar from "@/app/shared/components/UI/RoundTripCalendar";
import OneWayCalendar from "@/app/shared/components/UI/OneWayCalendar";

const radioItemsArray: LabelForm[] = [
    {id: '1', label:'Round trip'},
    {id: '2', label:'One way'}
]

const CalendarComponent = () => {
    const ref = useRef<HTMLDivElement | null>(null)
    const [isOpenedDropDown, setIsOpenedDropDown] = useState<boolean>(false)
    const [activeRadio, setActiveRadio] = useState<LabelForm>(radioItemsArray[0])

    useClickOutside(ref, () => {setIsOpenedDropDown(false)})
    return (
        <div className='relative w-fit' ref={ref}>
            <Input Icon={<CalendarWD/>} isRelative={true} isBorder={false} readOnly={true} value={''} inputWidth={148} inputPlaceholder={'Depart - Return'} onClick={() => setIsOpenedDropDown(old => !old)}/>
            {isOpenedDropDown && (
                <div className="absolute -top-[20px] rounded-xl shadow-2xl w-[642px] -right-[24px] h-[395px] bg-white">
                    <RadioListButton className='flex gap-4 text-gray-600 mt-[29px] py-1 ml-[29px] mb-[29px]'
                                     RadioItems={radioItemsArray} onSelectedRadio={(e) => setActiveRadio(e)}/>
                    <div className='w-full border-gray-200 border-[0.5px]'></div>
                    {activeRadio.id === '1' && <RoundTripCalendar/>}
                    {activeRadio.id === '2' && <OneWayCalendar/>}
                </div>
            )}
        </div>
    );
};

export default CalendarComponent;