"use client";
import { useState } from 'react';

export const useSelectLogic = () => {
    const [selectedOption, setSelectedOption] = useState<option | null>(null);

    const handleSelect = (value: option) => {
        setSelectedOption(value);
    };

    return { selectedOption, handleSelect };
};
