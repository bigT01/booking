'use client'
import React, {useEffect, useState} from 'react';
import Tag from "@/components/Tag";
import {usePathname, useRouter} from "next/navigation";
import {IMovie, useStore} from "@/store/useStore";

const Page = () => {
    const [data, setData] = useState<null | IMovie>(null)
    const movie = useStore(state => state.movies)
    const router = useRouter()
    const pathname = usePathname()

    useEffect(() => {
        const goodData = movie.filter(item => item.id === pathname.split('/')[2])[0]
        if(goodData){
            setData(goodData)
        }
    }, [movie, pathname])
    return (
        <div className='w-full'>
            <div className='w-full h-[360px] relative mb-4'>
                <img src={data?.img} alt="img:endGame" className='h-full w-full object-cover' fill={true}/>
                <button
                    onClick={() => {
                        router.push('/')
                    }}
                    className={'w-[53px] h-[53px] flex items-center justify-center bg-[#F74346] rounded-[13px] absolute top-4 left-4'}>
                    <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M0.523056 6.89775C0.603101 6.81558 0.905342 6.46425 1.18688 6.17525C2.83747 4.35767 7.14337 1.38267 9.39706 0.474583C9.73933 0.328667 10.6046 0.0198333 11.067 0C11.51 0 11.9323 0.102 12.3353 0.308833C12.8376 0.597833 13.2406 1.05258 13.4614 1.5895C13.6036 1.96208 13.8244 3.077 13.8244 3.09683C14.0452 4.31658 14.1667 6.2985 14.1667 8.48867C14.1667 10.5754 14.0452 12.4766 13.8644 13.7147C13.8437 13.7346 13.6229 15.1201 13.3814 15.5947C12.9384 16.4617 12.0731 17 11.147 17H11.067C10.4639 16.9788 9.19557 16.4404 9.19557 16.4206C7.06332 15.5111 2.8568 12.682 1.16618 10.8021C1.16618 10.8021 0.690047 10.319 0.483033 10.0173C0.160091 9.58375 0 9.04683 0 8.50992C0 7.91067 0.180792 7.3525 0.523056 6.89775Z"
                            fill="white"/>
                    </svg>
                </button>
                <button
                    className='px-[23px] z-50 py-[12px] bg-[#F74346] absolute gap-2 text-white flex items-center bottom-1 rounded-[13px]'
                    style={{left: '50%', transform: 'translateX(-50%)'}}>
                    <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M15.9146 0.35376C24.6861 0.35376 31.8292 7.49346 31.8292 16.2776C31.8292 25.0433 24.6861 32.183 15.9146 32.183C7.14314 32.183 0 25.0433 0 16.2776C0 7.49346 7.14314 0.35376 15.9146 0.35376ZM14.1019 9.95013C13.764 9.95013 13.4414 10.0269 13.1342 10.1804C12.7501 10.3954 12.4429 10.7332 12.2739 11.1324C12.1664 11.4088 11.9974 12.2379 11.9974 12.2533C11.8284 13.1592 11.7363 14.6332 11.7363 16.2607C11.7363 17.813 11.8284 19.2241 11.9667 20.1453C11.982 20.1607 12.151 21.1894 12.3354 21.5425C12.6733 22.1874 13.3339 22.5866 14.0405 22.5866H14.1019C14.5628 22.5713 15.5306 22.1721 15.5306 22.1567C17.1589 21.4811 20.3695 19.3776 21.6598 17.9804L21.752 17.8882C21.921 17.7193 22.1361 17.4583 22.1821 17.3969C22.4279 17.0745 22.5508 16.6753 22.5508 16.2776C22.5508 15.8308 22.4126 15.4162 22.1514 15.0784C22.09 15.017 21.8596 14.756 21.6445 14.541C20.3848 13.1899 17.0975 10.9789 15.377 10.3033C15.1158 10.1973 14.4553 9.96548 14.1019 9.95013Z"
                            fill="white"/>
                    </svg>
                    <span className={'font-light text-xl'}>Trailer</span>
                </button>
                <img src="/wr.png" alt="img:cover" className={'absolute bottom-[-1px] w-full'} height={163}/>
            </div>
            <h5 className={'text-center text-white font-bold text-3xl w-1/2 mx-auto mb-3'}>{data?.name}</h5>
            <div className='flex w-full justify-center gap-2 mb-5'>
                {data?.category.map(tag => (
                    <Tag key={tag} label={tag}/>
                ))}
            </div>
            <div className={'flex justify-between items-center gap-2 mb-4'}>
                <img src="/actor.png" alt="img:actor" height={75} width={75}
                     className={'w-[75px] h-[75px] rounded-full'}/>
                <img src="/actor.png" alt="img:actor" height={75} width={75}
                     className={'w-[75px] h-[75px] rounded-full'}/>
                <img src="/actor.png" alt="img:actor" height={75} width={75}
                     className={'w-[75px] h-[75px] rounded-full'}/>
                <img src="/actor.png" alt="img:actor" height={75} width={75}
                     className={'w-[75px] h-[75px] rounded-full'}/>
                <img src="/actor.png" alt="img:actor" height={75} width={75}
                     className={'w-[75px] h-[75px] rounded-full'}/>
            </div>
            <p className='mx-8 text-white text-base text-center'>{data?.bio}</p>
            <button
                className='px-[23px] z-50 py-[12px] bg-[#F74346] absolute gap-2 text-white flex items-center bottom-10 rounded-[13px]'
                style={{left: '50%', transform: 'translateX(-50%)'}}>
                <span className={'font-extrabold w-[225px] text-xl'}>Booking</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M15.2 10.492L13.23 8.522L10.02 5.312C9.33999 4.642 8.17999 5.122 8.17999 6.082V17.922C8.17999 18.882 9.33999 19.362 10.02 18.682L15.2 13.502C16.03 12.682 16.03 11.322 15.2 10.492Z"
                        fill="white"/>
                </svg>

            </button>
        </div>
    );
};

export default Page;