import React from 'react';
import {IIconProps} from "@/constants/interface";

export const ArrowRight = ({size=18}:IIconProps) => {
    return (
        <svg width={size} height={(size / 22) * 18} viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 9H20.5M20.5 9L13 1.5M20.5 9L13 16.5" stroke="#6E7491" strokeWidth="2" strokeLinecap="round"
                  strokeLinejoin="round"/>
        </svg>
    );
};

export const ArrowLeft = ({size=18}:IIconProps) => {
    return (
        <svg width={size} height={(size / 22) * 18} viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.5 9H1M1 9L8.5 1.5M1 9L8.5 16.5" stroke="#6E7491" strokeWidth="2" strokeLinecap="round"
                  strokeLinejoin="round"/>
        </svg>

    );
};


