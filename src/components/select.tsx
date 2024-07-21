import React from 'react';
import {IoIosArrowDown} from "react-icons/io";

const Select = () => {
    return (
        <div className={'bg-[#2B2B38] relative py-2 px-4 w-fit flex gap-1 items-center rounded-xl'}>
            <div className='flex flex-col '>
                <h5 className='font-bold text-sm text-[#F74346]'>Choose cinema</h5>
                <span className={'text-base font-light text-[#FFFFFF]'}>Medellín</span>
            </div>
            <IoIosArrowDown size={24} color={'#F74346'}/>
            <div className='absolute left-0 top-[110%] bg-[#2B2B38] w-full px-4 py-2'>
                <ul>
                    <li>Astana</li>
                    <li>Almaty</li>
                    <li>Shymkent</li>
                    <li>Kokshetau</li>
                    <li>Aktobe</li>
                </ul>
            </div>
        </div>
    );
};

export default Select;