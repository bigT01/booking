"use client";
import React, {ButtonHTMLAttributes, ReactNode} from 'react';

type ButtonProps = {
    btnType: 'Primary' | 'Secondary' | 'Tertiary',
    icon?: ReactNode,
    size: 'lg' | 'md' | 'sm' | 'xs',
    state?: 'default' | 'inactive' | 'destructive',
    children: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({btnType, size, icon, state = 'default', children, ...rest}: ButtonProps) => {
    const sizeStyles: { [key: string]: string } = {
        lg: "py-3 px-5 text-lg",
        md: "py-3 px-5 text-base",
        sm: "py-2 px-4 text-base",
        xs: "py-[10px] px-4 text-base"
    };

    const typeStyles: {
        [key: string]: {
            [key: string]: string
        }
    } = {
        Primary: {
            default: "bg-purple-blue btn-primary-default text-grey-100 hover:bg-purple-dark hover:text-grey-100",
            inactive: "bg-[#CBD4E630] btn-primary-inactive border-[1px] border-grey-400 text-grey-400 hover:bg-purple-dark hover:text-grey-100",
            destructive: "bg-red text-grey-100 btn-primary-default hover:bg-purple-dark hover:text-grey-100"
        },
        Secondary: {
            default: "bg-transparent border-[1px] btn-secondary-default border-purple-blue text-purple-blue hover:bg-purple-extra-light hover:text-purple-blue",
            inactive: "bg-transparent border-[1px] btn-primary-inactive border-grey-400 text-grey-400 hover:bg-purple-extra-light hover:text-purple-blue",
            destructive: "bg-transparent border-[1px] btn-secondary-destructive border-red text-red hover:bg-purple-extra-light hover:text-purple-blue"
        },
        Tertiary: {
            default: "bg-transparent btn-tertiary-default text-purple-blue hover:bg-purple-white hover:text-purple-dark",
            inactive: "bg-transparent text-grey-400 btn-primary-inactive hover:bg-purple-white hover:text-purple-dark",
            destructive: "bg-transparent text-red btn-secondary-destructive hover:bg-purple-white hover:text-purple-dark"
        }
    };

    return (
        <button
            className={`rounded-md flex items-center gap-1 ${sizeStyles[size]} ${typeStyles[btnType][state]} transition-colors`}
            {...rest}>
            <span>
                {children}
            </span>
            {icon ? icon : null}
        </button>
    );
};

export default Button;