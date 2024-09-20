import React, {InputHTMLAttributes, ReactNode} from 'react';
import {Arrival} from "@/app/icons/Basic";

type InputProps = {
    isBorder?: boolean,
    inputWidth?: number,
    isPassword?: boolean,
    inputPlaceholder?: string,
    Icon?: ReactNode,
    isRelative?: boolean,
} & InputHTMLAttributes<HTMLInputElement>

const Input = ({isBorder=true, isRelative=false, inputWidth=148, isPassword=false, inputPlaceholder='Placeholder', Icon ,...rest}: InputProps) => {
    return (
        <div className={`flex ${isRelative ? "relative": ''} z-50 px-3 py-2 gap-2 rounded-[4px] input-basic w-fit`} style={{boxShadow: isBorder ?'inset 0 0 0 1px #A1B0CC' : ''}}>
            {Icon}
            <input {...rest} className={`h-[32px] text-lg placeholder:text-gray-400 outline-none`} style={{width: inputWidth}} placeholder={inputPlaceholder}/>
            <button className={isPassword ? 'opacity-100' : 'opacity-0 cursor-auto w-[32px] h-[32px]'}>
                {isPassword && <Arrival />}
            </button>
        </div>
    );
};

export default Input;