"use client";
import React, {useState} from 'react';
import Select from "@/app/shared/components/UI/Select";
import dynamic from "next/dynamic";

const DynamicComponent = dynamic(() => import('./ArrivalData'))
const FlightFilter = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [labelArrival, setLabelArrival] = useState('')

    return (
        <div className='w-[1200px] bg-white border-[1px] border-gray-400 rounded-[4px] h-[48px]'>
            <Select inputWidth={220} inputPlaceholder={'From where?'} onOpened={e => setIsOpen(e)} selectedOption={labelArrival}>
                {isOpen ? <DynamicComponent onSelectedOption={e => setLabelArrival(e?.label || '')}/> : null}
            </Select>

        </div>
    );
};

export default FlightFilter;