"use client"
import React, {useState} from 'react';
import {IoIosArrowDown} from "react-icons/io";

const Select = () => {
    const [isDropDown, setIsDropDown] = useState<boolean>(false)
    const [active, setActive] = useState<'Astana' | 'Almaty' | 'Shymkent' | 'Kokshetau' | 'Aktobe'>('Astana')
    return (
        <div className='relative w-fit'>
            <div className={'bg-[#2B2B38] py-2 px-4 w-fit flex gap-1 items-center rounded-xl'} onClick={() => setIsDropDown(old => !old)}>
                <div className='flex flex-col '>
                    <h5 className='font-bold text-sm text-[#F74346]'>Choose cinema</h5>
                    <span className={'text-base font-light text-[#FFFFFF]'}>{active}</span>
                </div>
                <IoIosArrowDown className={isDropDown ? 'active-drop' : 'nonactive-drop'} size={24} color={'#F74346'}/>
            </div>
            {isDropDown ? (
                <div className='absolute left-0 top-[110%] bg-[#2B2B38] w-full px-4 py-2'>
                    <ul className='text-white'>
                        <li className='py-1' onClick={() => {
                            setActive('Astana')
                            setIsDropDown(false)
                        }}>Astana</li>
                        <li className='py-1'  onClick={() => {
                            setActive('Almaty')
                            setIsDropDown(false)
                        }}>Almaty</li>
                        <li className='py-1'  onClick={() => {
                            setActive('Shymkent')
                            setIsDropDown(false)
                        }}>Shymkent</li>
                        <li className='py-1'  onClick={() => {
                            setActive('Kokshetau')
                            setIsDropDown(false)
                        }}>Kokshetau</li>
                        <li className='py-1'  onClick={() => {
                            setActive('Aktobe')
                            setIsDropDown(false)
                        }}>Aktobe</li>
                    </ul>
                </div>
            ) : null}
        </div>
    );
};

export default Select;