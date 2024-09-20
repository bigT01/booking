"use client"
import React, {useEffect, useState} from 'react';
import ListItem from "@/app/shared/components/UI/ListItem";
import {AirportsByCountry} from "@/constants/interface";

type ArrivalDataProps = {
    onSelectedOption: (option: string) => void,
    activeLabel: string
}

const ListOfAirportsData = ({onSelectedOption, activeLabel}: ArrivalDataProps) => {
    const [selectedOption, setSelectedOption] = useState<string>(activeLabel);
    const [AirportsData, setAirportsData] = useState<AirportsByCountry[]>([]);

    useEffect(() => {
        if (onSelectedOption) {
            onSelectedOption(selectedOption)
        }
    }, [selectedOption]);

    useEffect(() => {
        const fetchAirportsData = async () => {
            const data: { default: AirportsByCountry[] } = await import('../../constants/airportsByCountry.json');
            setAirportsData(data.default);
        };
        fetchAirportsData();
    }, []);

    return (
        <>
            {AirportsData
                ? AirportsData.map(airports => airports.airports.map(airport => (
                    <ListItem key={airport.code} label={airport.code} handleSelect={setSelectedOption}
                              state={activeLabel === airport.code ? "Selected" : "Default"}
                              selectedOption={selectedOption}/>)))
                : <p>Loading...</p>
            }
        </>
    );
};

export default ListOfAirportsData;