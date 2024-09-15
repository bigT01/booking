"use client"
import React, {useEffect, useState} from 'react';
import ListItem from "@/app/shared/components/UI/ListItem";
import {useSelectLogic} from "@/utils/hooks/useSelectLogic";

type ArrivalDataProps = {
    onSelectedOption?: (option: option | null) => void
}

const ArrivalData = ({onSelectedOption}: ArrivalDataProps) => {
    const {selectedOption,handleSelect} = useSelectLogic();
    const [data, setData] = useState(null);

    useEffect(() => {
        if(onSelectedOption){
            onSelectedOption(selectedOption)
        }
    }, [selectedOption]);

    useEffect(() => {
        const fetchAirportsData = async () => {
            const data = await import('../../constants/airportsByCountry.json');
            setData(data.default);
        };
        fetchAirportsData();
    }, []);

    return (
        <>
            { data
                ? data.map(airports => airports.airports.map(airport => (<ListItem key={airport.code} id={airport.code} label={airport.code} handleSelect={handleSelect} selectedOption={selectedOption}/>)))
                : <p>Loading...</p>
            }
        </>
    );
};

export default ArrivalData;