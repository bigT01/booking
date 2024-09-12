import React from 'react';
import Input from "@/app/shared/components/UI/Input";
import ListItem from "@/app/shared/components/UI/ListItem";

type SelectProps = {
    inputWidth?: number
    inputPlaceholder?: string
}

const Select = ({inputWidth=148, inputPlaceholder='Placeholder'}: SelectProps) => {
    return (
        <div className='relative w-fit'>
            <Input isBorder={false} inputWidth={inputWidth} inputPlaceholder={inputPlaceholder}/>
            <div className='absolute max-h-[312px] overflow-scroll top-full bg-white rounded-lg p-4 w-[95%] left-[5%]' style={{boxShadow: '0 2px 4px #07049210'}}>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
            </div>
        </div>
    );
};

export default Select;