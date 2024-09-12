import React from 'react';

const ListItem = () => {
    return (
        <li className='rounded-[4px] flex items-center hover:bg-purple-blue hover:text-white transition-colors cursor-pointer px-[13px] h-[32px] text-gray-900 text-base text-left' style={{listStyle: 'none'}}>
            <span>Label</span>
        </li>
    );
};

export default ListItem;