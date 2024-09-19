"use client"
import React from 'react';

type ListItemProps = {
    label: string,
    state?: 'Default' | 'Selected' | 'Inactive',
    handleSelect: (value: string) => void,
}

const ListItem = ({label, state='Default', handleSelect}: ListItemProps) => {

    return (
        <li onClick={() => {
            handleSelect(label)
        }}
            className={`rounded-[4px] 
            flex items-center hover:bg-purple-blue hover:text-white transition-colors cursor-pointer px-[13px] h-[32px] 
            text-gray-900 text-base text-left ${state === 'Selected' ? 'bg-purple-extra-light' : null} ${state === 'Inactive' ? 'text-gray-300' : null}`}
            style={{listStyle: 'none'}}>
            <span>{label}</span>
        </li>
    );
};

export default ListItem;