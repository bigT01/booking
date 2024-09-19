"use client"
import React from 'react';
import {option} from "@/constants/interface";

type ListItemProps = {
    id: string,
    label: string,
    state?: 'Default' | 'Selected' | 'Inactive',
    handleSelect: (value: option) => void,
    selectedOption: option | null
}

const ListItem = ({id, label, state='Default', handleSelect, selectedOption}: ListItemProps) => {

    return (
        <li onClick={() => {
            handleSelect({id: id, label: label})
        }}
            className={`rounded-[4px] 
            flex items-center hover:bg-purple-blue hover:text-white transition-colors cursor-pointer px-[13px] h-[32px] 
            text-gray-900 text-base text-left ${selectedOption?.id === id ? 'bg-purple-extra-light' : null} ${state === 'Selected' ? 'bg-purple-extra-light' : null} ${state === 'Inactive' ? 'text-gray-300' : null}`}
            style={{listStyle: 'none'}}>
            <span>{label}</span>
        </li>
    );
};

export default ListItem;