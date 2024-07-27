import React from 'react';

type TagProps = {
    label: string
}
const Tag = ({label}: TagProps) => {
    return (
        <div className='px-[16px] py-[6px] rounded-full bg-[#2B2B38] w-fit'>
            <p className={'font-medium text-white text-sm'}>{label}</p>
        </div>
    );
};

export default Tag;