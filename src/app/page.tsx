import Image from "next/image";
import Select from "@/components/select";
import {FiArrowDownRight} from "react-icons/fi";
import Card from "@/components/card";
import CardsWrapper from "@/components/CardsWrapper";

export default function Home() {
    return (
        <div>
            <header className='px-8 pt-12 flex justify-between items-center mb-7'>
                <Select/>
                <div className={'w-[50px] relative h-[50px] bg-white rounded-[12.5px]'}>
                    <Image src={'/profile.png'} alt={'img:profile'} fill={true}/>
                </div>
            </header>
            <section className={'px-8 mb-10'}>
                <div className='bg-[#2B2B38] justify-between w-full rounded-xl items-center px-7 py-4 text-white flex gap-1'>
                    <h5 className={'text-lg w-8/12'}>Know the
                        promotions of
                        <span className='font-extrabold'> Tuesdays & Monday</span></h5>
                    <div className={'w-[74px] h-[74px] bg-[#F74346] flex items-center justify-center rounded-[20px]'}>
                        <FiArrowDownRight size={48} color={'white'}/>
                    </div>
                </div>
            </section>
            <CardsWrapper/>
        </div>
    );
}
