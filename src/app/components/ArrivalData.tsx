/**
 * ArrivalData Component
 *
 * This component dynamically imports airport data from `airportsByCountry.json` to optimize the loading process.
 * It renders a list of airport codes inside a `ListItem` component, and passes selection functionality
 * through the `useSelectLogic` hook.
 *
 * Features:
 * - Dynamic import of airport data to reduce initial load times, as the data is only fetched when needed.
 * - Uses the `ListItem` component to display individual airport options, which is customized for this specific list.
 * - The `onSelectedOption` prop is passed to indicate which option is currently active or selected,
 *   providing external components with the ability to know the selected airport code.
 *
 * Props:
 * - `onSelectedOption` (optional): A callback function that is triggered when the user selects an option.
 *
 * Hooks:
 * - `useSelectLogic`: Handles logic related to selecting an item from the list, like storing the selected option.
 *
 * How It Works:
 * - The airport data is fetched dynamically using the `import()` function to prevent unnecessary loading on the initial render.
 * - The component maps over the fetched airport data and renders each airport as a `ListItem`.
 * - When an airport is selected, the `handleSelect` function updates the `selectedOption` and triggers the `onSelectedOption` callback.
 *
 * Optimization:
 * - Dynamic imports are used to delay loading the airport data until it's needed, which helps optimize the overall performance of the application.
 */
"use client"
import React, {useEffect, useState} from 'react';
import ListItem from "@/app/shared/components/UI/ListItem";
import {useSelectLogic} from "@/utils/hooks/useSelectLogic";

type ArrivalDataProps = {
    onSelectedOption?: (option: option | null) => void
}

const ArrivalData = ({onSelectedOption}: ArrivalDataProps) => {
    const {selectedOption,handleSelect} = useSelectLogic();
    const [data, setData] = useState<AirportsByCountry[]>([]);

    useEffect(() => {
        if(onSelectedOption){
            onSelectedOption(selectedOption)
        }
    }, [selectedOption]);

    useEffect(() => {
        const fetchAirportsData = async () => {
            const data: AirportsByCountry[] = await import('../../constants/airportsByCountry.json');
            setData(data);
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