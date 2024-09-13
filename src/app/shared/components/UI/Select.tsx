'use client'
import React from 'react';
import Input from "@/app/shared/components/UI/Input";
import ListItem from "@/app/shared/components/UI/ListItem";
import {useSelectLogic} from "@/utils/hooks/useSelectLogic";

type SelectProps = {
    inputWidth?: number
    inputPlaceholder?: string
}

const Select = ({inputWidth=148, inputPlaceholder='Placeholder'}: SelectProps) => {
    const {selectedOption,handleSelect} = useSelectLogic();

    return (
        <div className='relative w-fit'>
            <Input isBorder={false} readOnly={true} value={selectedOption?.label || ''} inputWidth={inputWidth} inputPlaceholder={inputPlaceholder}/>
            <ul className='absolute max-h-[312px] overflow-scroll top-full bg-white rounded-lg p-4 w-[95%] left-[5%]' style={{boxShadow: '0 2px 4px #07049210'}}>
                <ListItem id={'1'} label={'Label'} handleSelect={handleSelect} selectedOption={selectedOption}/>
                <ListItem id={'2'} label={'Label'} handleSelect={handleSelect} selectedOption={selectedOption}/>
                <ListItem id={'3'} label={'Label'} handleSelect={handleSelect} selectedOption={selectedOption}/>
                <ListItem id={'4'} label={'Label'} handleSelect={handleSelect} selectedOption={selectedOption}/>
                <ListItem id={'5'} label={'Label'} handleSelect={handleSelect} selectedOption={selectedOption}/>
                <ListItem id={'6'} label={'Label'} handleSelect={handleSelect} selectedOption={selectedOption}/>
            </ul>
        </div>
    );
};

export default Select;