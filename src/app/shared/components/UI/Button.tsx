"use client";
import React, {ReactNode} from 'react';

type ButtonProps = {
    type: 'Primary' | 'Secondary' | 'Tertiary',
    icon?: ReactNode,
    size: 'lg' | 'md' | 'sm' | 'xs',
    state?: 'default' | 'inactive' | 'destructive',
    children: ReactNode
}

const Button = ({type, size, icon, state='default', children}:ButtonProps) => {
    // Hash table for button sizes
    const sizeStyles: { [key: string]: string } = {
        lg: "py-3 px-5 text-lg",
        md: "py-3 px-5 text-base",
        sm: "py-2 px-4 text-base",
        xs: "py-[10px] px-4 text-base"
    };

    // Хеш-таблица для стилей с вложенными состояниями
    const typeStyles: {
        [key: string]: {
            [key: string]: string
        }
    } = {
        Primary: {
            default: "bg-purple-blue text-grey-100 hover:bg-purple-dark hover:text-grey-100",
            inactive: "bg-[#CBD4E630] border-[1px] border-grey-400 text-grey-400 hover:bg-purple-dark hover:text-grey-100",
            destructive: "bg-red text-grey-100 hover:bg-purple-dark hover:text-grey-100"
        },
        Secondary: {
            default: "bg-transparent border-[1px] border-purple-blue text-purple-blue hover:bg-purple-extra-light hover:text-purple-blue",
            inactive: "bg-transparent border-[1px] border-grey-400 text-grey-400 hover:bg-purple-extra-light hover:text-purple-blue",
            destructive: "bg-transparent border-[1px] border-red text-red hover:bg-purple-extra-light hover:text-purple-blue"
        },
        Tertiary: {
            default: "bg-transparent text-purple-blue hover:bg-purple-white hover:text-purple-dark",
            inactive: "bg-transparent text-grey-400 hover:bg-purple-white hover:text-purple-dark",
            destructive: "bg-transparent text-red hover:bg-purple-white hover:text-purple-dark"
        }
    };

    return (
        <button className={`rounded-md ${sizeStyles[size]} ${typeStyles[type][state]} transition-colors`}>
            {children}
        </button>
    );
};

export default Button;