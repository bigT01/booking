"use client";
import React, {useState} from 'react';
import Select from "@/app/shared/components/UI/Select";
import dynamic from "next/dynamic";
import {Arrival, Departure} from "@/app/icons/Basic";

const DynamicComponent = dynamic(() => import('./ListOfAirportsData'))
const FlightFilter = () => {
    const [isOpenArrivalData, setIsOpenArrivalData] = useState(false)
    const [isOpenDepartureData, setIsOpenDepartureData] = useState(false)
    const [labelArrival, setLabelArrival] = useState('')
    const [labelDeparture, setLabelDeparture] = useState('')

    return (
        <div className='w-[1200px] bg-white border-[1px] flex border-gray-400 rounded-[4px] h-[48px]'>
            <Select Icon={<Arrival/>} inputWidth={220} inputPlaceholder={'From where?'} onOpened={e => setIsOpenArrivalData(e)}
                    selectedOption={labelArrival}>
                {isOpenArrivalData ?
                    <DynamicComponent onSelectedOption={(e) => setLabelArrival(e)} activeLabel={labelArrival}/> : null}
            </Select>
            <div className='h-full border-gray-200 border-[0.5px]'></div>
            <Select Icon={<Departure/>} inputWidth={220} inputPlaceholder={'Where to?'} onOpened={e => setIsOpenDepartureData(e)}
                    selectedOption={labelDeparture}>
                {isOpenDepartureData ? <DynamicComponent onSelectedOption={(e) => setLabelDeparture(e)} activeLabel={labelDeparture}/> : null}
            </Select>
            <div className='h-full border-gray-200 border-[0.5px]'></div>
        </div>
    );
};

export default FlightFilter;