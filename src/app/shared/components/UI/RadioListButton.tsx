import React, {AllHTMLAttributes, useState} from 'react';
import {LabelForm} from "@/constants/interface";

type RadioListButtonProps = {
    RadioItems: LabelForm[],
}& AllHTMLAttributes<HTMLDivElement>

const RadioListButton = ({RadioItems, ...props}:RadioListButtonProps) => {
    const [activeRadio, setActiveRadio] = useState<LabelForm>(RadioItems[0])
    return (
        <div  {...props}>
            {RadioItems.map(radio => (
                <div key={radio.id} className={'flex gap-2 items-center cursor-pointer'} onClick={() => setActiveRadio(radio)}>
                    <input type="radio" id={radio.id} className='opacity-0 text-[0px] w-[0px] h-[0px] hidden'/>
                    <label htmlFor={radio.id}
                           className={'relative w-[16px] cursor-pointer h-[16px] shadow-inner rounded-full'}
                           style={{boxShadow: 'inset 0 0 0 1px #6E7491'}}>
                        {activeRadio.id === radio.id && (
                            <span
                                className={'absolute w-[8px] h-[8px] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-full bg-purple-blue'}></span>
                        )}
                    </label>
                    <span>{radio.label}</span>
                </div>
            ))}
        </div>
    );
};

export default RadioListButton;