import React, {InputHTMLAttributes} from 'react';
import {Arrival} from "@/app/icons/Basic";

type InputProps = {
    isBorder?: boolean,
    inputWidth?: number,
    isPassword?: boolean,
    inputPlaceholder?: string
} & InputHTMLAttributes<HTMLInputElement>

const Input = ({isBorder=true, inputWidth=148, isPassword=false, inputPlaceholder='Placeholder', ...rest}: InputProps) => {
    return (
        <div className={`flex px-3 py-2 gap-2 rounded-[4px] input-basic w-fit`} style={{boxShadow: isBorder ?'inset 0 0 0 1px #A1B0CC' : ''}}>
            <Arrival />
            <input {...rest} className={`h-[32px] text-lg placeholder:text-gray-400 outline-none`} style={{width: inputWidth}} placeholder={inputPlaceholder}/>
            <button className={isPassword ? 'opacity-100' : 'opacity-0 cursor-auto w-[32px] h-[32px]'}>
                {isPassword && <Arrival />}
            </button>
        </div>
    );
};

export default Input;