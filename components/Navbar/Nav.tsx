"use client"

import { navLinks } from '@/constant/Constant'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '../ui/button'
import { HiBars3BottomRight } from 'react-icons/hi2'


type Props = {
    openNav: () => void
}



const Nav = ({ openNav }: Props) => {


    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = "/LucasFilipeCordova-Resume-2026.pdf";
        link.download = "LucasFilipeCordova-Resume-2026.pdf";
        link.click();
    };

    return (
        <div data-aos="fade-down" className='fixed w-full transition-all duration-200 h-[10vh] z-[1000] bg-black'>
            <div className='flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto'>
                {/*logo*/}
                <Link href={"#about"}>
                    <h1 className='text-3xl text-white font-bold'><span
                        className='text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-blue-500'>&lt;/&gt;
                    </span> Lucas<span
                        className='text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-blue-500'>Cordova</span>
                    </h1></Link>

                {/*navlinks*/}
                <div className='hidden lg:flex items-center space-x-10'>
                    {navLinks.map((link) => {
                        return (
                            <Link href={link.url} key={link.id}>
                                <p className='hover-link'>{link.label}</p>
                            </Link>)
                    })}
                </div>

                <div className="hidden items-center space-x-6 md:flex">
                    <Link
                        href="https://linkedin.com/in/lucasfilipecordova"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <Image
                            src="/assets/linkedin.svg"
                            alt="LinkedIn"
                            width={32}
                            height={32}
                        />
                    </Link>
                    <Link
                        href="https://github.com/lucascordovaa"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <Image
                            src="/assets/github.svg"
                            alt="GitHub"
                            width={32}
                            height={32}
                        />
                    </Link>
                    <Link
                        href="https://instagram.com/lucasflpe"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <Image
                            src="/assets/instagram.svg"
                            alt="Instagram"
                            width={32}
                            height={32}
                        />
                    </Link>
                    <Button
                        className="rounded-full  text-black font-bold bg-gradient-to-r from-teal-300 to-blue-500 transition-colors duration-300 ease-in-out hover:text-white"
                        onClick={handleDownload}
                    >
                        Download Resume
                    </Button>
                </div>
                <HiBars3BottomRight onClick={openNav} className='w-8 h-8 cursor-pointer text-white lg:hidden' />
            </div>
        </div>

    )
}

export default Nav