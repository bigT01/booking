'use client'
import React, {ReactNode, useEffect, useState} from 'react';
import Input from "@/app/shared/components/UI/Input";

type SelectProps = {
    inputWidth?: number
    inputPlaceholder?: string,
    onOpened?: (isOpened: boolean) => void,
    children: ReactNode,
    selectedOption: string
}

const Select = ({inputWidth=148, inputPlaceholder='Placeholder', onOpened, children, selectedOption}: SelectProps) => {
    const [isOpened, setIsOpened] = useState(false)

    useEffect(() => {
        if(onOpened){
            onOpened(isOpened)
        }
    }, [isOpened]);

    return (
        <div className='relative w-fit'>
            <Input isBorder={false} readOnly={true} value={selectedOption} inputWidth={inputWidth} inputPlaceholder={inputPlaceholder} onClick={() => setIsOpened(old => !old)}/>
            {isOpened ? (
                <ul className='absolute max-h-[312px] overflow-scroll top-full bg-white rounded-lg p-4 w-[95%] left-[5%]' style={{boxShadow: '0 2px 4px #07049210'}}>
                    {children}
                </ul>
            ) : null}
        </div>
    );
};

export default Select;