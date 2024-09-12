import Link from "next/link";
import {LogoIcon} from "@/app/icons";
import Button from "@/app/shared/components/UI/Button";
import Hero from '../../public/Hero.png'
import FullyLoadedImage from "@/app/shared/components/FullyLoadedImage";
import Input from "@/app/shared/components/UI/Input";
import Select from "@/app/shared/components/UI/Select";

export default function Home() {
    return (
        <div>
            <header>
                <nav className='flex justify-between container mx-auto items-center'>
                    <Link href={'/'} className='p-3'><LogoIcon/></Link>
                    <ul className='flex gap-4 items-center p-4'>
                        <li>
                            <Link href={'/'}>
                                <Button btnType={'Tertiary'} size={'md'} state={"default"}>
                                    Flights
                                </Button>
                            </Link>
                        </li>
                        <li>
                            <Link href={'/'}>
                                <Button btnType={'Tertiary'} size={'md'} state={"inactive"}>
                                    Hotels
                                </Button>
                            </Link>
                        </li>
                        <li>
                            <Link href={'/'}>
                                <Button btnType={'Tertiary'} size={'md'} state={"inactive"}>
                                    Packages
                                </Button>
                            </Link>
                        </li>
                        <li>
                            <Link href={'/'}>
                                <Button btnType={'Tertiary'} size={'md'} state={"inactive"}>
                                    Sign in
                                </Button>
                            </Link>
                        </li>
                        <li>
                            <Link href={'/'}>
                                <Button btnType={'Primary'} size={'md'} state={"default"}>
                                    Sign up
                                </Button>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <main className={'min-h-[700px] w-full relative'}>
                    <FullyLoadedImage src={Hero} alt={'img:Hero'} priority={true}/>
                    <div
                        className="absolute top-1/2 flex items-center gap-[64px] flex-col container left-1/2 text-center"
                        style={{transform: 'translate(-50%, -50%)'}}>
                        <h1 className='gradient-text'>It’s more than just a trip</h1>
                        <div className='w-[1200px] bg-white border-[1px] border-gray-400 rounded-[4px] h-[48px]'>
                            <Select inputWidth={220} inputPlaceholder={'From where?'}/>
                        </div>
                    </div>
                </main>
            </header>
        </div>
    );
}
