"use client"
import React from 'react';
import Link from "next/link";
import {HiVideoCamera} from "react-icons/hi";
import {LuSwitchCamera} from "react-icons/lu";
import {LiaHamburgerSolid} from "react-icons/lia";
import {FiUser} from "react-icons/fi";
import {usePathname} from "next/navigation";

const AppBar = () => {
    const pathname = usePathname()
    return (
        <div className='w-full py-4 bg-[#161621] fixed bottom-0 px-8'>
            <ul className={'w-full text-[#4A4B56] flex justify-between'}>
                <li className=''>
                    <Link href={'/'} className='flex flex-col items-center justify-center'>
                        <HiVideoCamera color={pathname === '/' ? '#F74346' : '#4A4B56'} size={28}/>
                        <span className={`text-sm ${pathname === '/' ? 'text-[#F74346]' : null}`}>BillBoard</span>
                    </Link>
                </li>
                <li className=''>
                    <Link href={'/soon'} className='flex flex-col items-center justify-center'>
                        <LuSwitchCamera  color={pathname === '/soon' ? '#F74346' : '#4A4B56'} size={28}/>
                        <span className={`text-sm ${pathname === '/soon' ? 'text-[#F74346]' : null}`}>Coming Soon</span>
                    </Link>
                </li>
                <li className=''>
                    <Link href={'/food'} className='flex flex-col items-center justify-center'>
                        <LiaHamburgerSolid  color={pathname === '/food' ? '#F74346' : '#4A4B56'} size={28}/>
                        <span className={`text-sm ${pathname === '/food' ? 'text-[#F74346]' : null}`}>Food</span>
                    </Link>
                </li>
                <li className=''>
                    <Link href={'/profile'} className='flex flex-col items-center justify-center'>
                        <FiUser color={pathname === '/profile' ? '#F74346' : '#4A4B56'} size={28}/>
                        <span className={`text-sm ${pathname === '/profile' ? 'text-[#F74346]' : null}`}>Profile</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default AppBar;