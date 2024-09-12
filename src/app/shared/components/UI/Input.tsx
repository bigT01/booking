import React from 'react';
import {Arrival} from "@/app/icons/Basic";

type InputProps = {
    isBorder?: boolean
}

const Input = ({isBorder=true, ...rest}: InputProps) => {
    return (
        <div {...rest} className={`flex px-3 py-2 gap-2 rounded-[4px] input-basic w-fit`} style={{boxShadow: isBorder ?'inset 0 0 0 1px #A1B0CC' : ''}}>
            <Arrival />
            <input className={'h-[32px] text-lg placeholder:text-gray-400 outline-none'} placeholder='Placeholder'/>
        </div>
    );
};

export default Input;