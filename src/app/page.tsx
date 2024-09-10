import Link from "next/link";
import {LogoIcon} from "@/app/icons";
import Button from "@/app/shared/components/UI/Button";

export default function Home() {
    return (
        <div>
            <header>
                <nav className='flex justify-between container mx-auto items-center'>
                    <Link href={'/'} className='p-3'><LogoIcon/></Link>
                    <ul className='flex gap-4 items-center p-4'>
                        <li>
                            <Link href={'/'}>
                                <Button type={'Tertiary'} size={'md'} state={"default"}>
                                    Flights
                                </Button>
                            </Link>
                        </li>
                        <li>
                            <Link href={'/'}>
                                <Button type={'Tertiary'} size={'md'} state={"inactive"}>
                                    Hotels
                                </Button>
                            </Link>
                        </li>
                        <li>
                            <Link href={'/'}>
                                <Button type={'Tertiary'} size={'md'} state={"inactive"}>
                                    Packages
                                </Button>
                            </Link>
                        </li>
                        <li>
                            <Link href={'/'}>
                                <Button type={'Tertiary'} size={'md'} state={"inactive"}>
                                    Sign in
                                </Button>
                            </Link>
                        </li>
                        <li>
                            <Link href={'/'}>
                                <Button type={'Primary'} size={'md'} state={"default"}>
                                    Sign up
                                </Button>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}
