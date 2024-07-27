"use client";
import React from 'react';
import {useRouter} from "next/navigation";

type cardProps = {
    id: string,
    name: string,
    img: string,
    colorStar: string,
    category: string
}

const Card = ({id, name, category, colorStar, img}:cardProps) => {
    const router = useRouter()
    return (
        <div className='min-w-[217px] relative' onClick={() => {
            router.push(`/movie/${id}`)
        }}>
            <img src={img} alt="img:endGame" height={310} width={217}/>
            <p className='text-white text-2xl font-bold text-center w-11/12'>{name}</p>
            <div className='px-3 py-2 rounded-xl w-[103px] absolute z-50 top-4 gap-1 flex items-center' style={{left: '50%', transform: "translateX(-50%)"}}>
                <svg className={'relative z-50'} width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M7.04894 0.92705C7.3483 0.00573921 8.6517 0.00573969 8.95106 0.92705L10.0206 4.21885C10.1545 4.63087 10.5385 4.90983 10.9717 4.90983H14.4329C15.4016 4.90983 15.8044 6.14945 15.0207 6.71885L12.2205 8.75329C11.87 9.00793 11.7234 9.4593 11.8572 9.87132L12.9268 13.1631C13.2261 14.0844 12.1717 14.8506 11.388 14.2812L8.58778 12.2467C8.2373 11.9921 7.7627 11.9921 7.41221 12.2467L4.61204 14.2812C3.82833 14.8506 2.77385 14.0844 3.0732 13.1631L4.14277 9.87132C4.27665 9.4593 4.12999 9.00793 3.7795 8.75329L0.979333 6.71885C0.195619 6.14945 0.598395 4.90983 1.56712 4.90983H5.02832C5.46154 4.90983 5.8455 4.63087 5.97937 4.21885L7.04894 0.92705Z"
                        fill={colorStar}/>
                </svg>
                <div className={'w-full bg-[#6F6F6F50] h-full absolute rounded-xl left-0 top-0 backdrop-blur-2xl'}></div>
                <p className=' relative z-50 text-white font-bold text-xs'>{category}</p>
            </div>
        </div>
    );
};

export default Card;