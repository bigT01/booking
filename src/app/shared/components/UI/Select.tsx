'use client'
import React, {ReactNode, useEffect, useRef, useState} from 'react';
import Input from "@/app/shared/components/UI/Input";
import {useClickOutside} from "@/utils/hooks/useClickOutside";

type SelectProps = {
    inputWidth?: number
    inputPlaceholder?: string,
    onOpened?: (isOpened: boolean) => void,
    children: ReactNode,
    Icon?: ReactNode,
    selectedOption: string
}

const Select = ({inputWidth=148, Icon, inputPlaceholder='Placeholder', onOpened, children, selectedOption}: SelectProps) => {
    const ref = useRef<HTMLDivElement | null>(null)
    const [isOpenedDropDown, setIsOpenedDropDown] = useState(false)

    useEffect(() => {
        if(onOpened){
            onOpened(isOpenedDropDown)
        }
    }, [isOpenedDropDown]);

    useEffect(() => {
        if(selectedOption){
            setIsOpenedDropDown(false)
        }
    }, [selectedOption]);

    useClickOutside(ref, () => {setIsOpenedDropDown(false)})

    return (
        <div className='relative w-fit' ref={ref}>
            <Input Icon={Icon} isBorder={false} readOnly={true} value={selectedOption} inputWidth={inputWidth} inputPlaceholder={inputPlaceholder} onClick={() => setIsOpenedDropDown(old => !old)}/>
            {isOpenedDropDown ? (
                <ul className='absolute max-h-[312px] overflow-scroll top-[105%] bg-white rounded-lg p-4 w-[95%] left-[5%]' style={{boxShadow: '0 2px 4px #07049210'}}>
                    {children}
                </ul>
            ) : null}
        </div>
    );
};

export default Select;