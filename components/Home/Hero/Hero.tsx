"use client"

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const Hero = () => {

    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = "/Lucas_Cordova_Resume_2025.pdf";
        link.download = "Lucas_Cordova_Resume_2025.pdf";
        link.click();
    };

    return (
        <div id="about" className='w-full pt-[4vh] md:pt-[12vh] h-screen bg-black'>
            <div className='flex justify-center flex-col w-[90%] sm:w-[80%] h-full mx-auto'>
                <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-12'>
                    {/*Text Content*/}
                    <div>
                        <h1 data-aos="fade-up" className=' text-white text-4xl sm:text-4xl md:text-5xl mt-6 mb-6 font-bold md:leading-[3rem]
                        lg:leading[3.5rem]'>Hi, I&apos;m <span className='text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-blue-500'>Lucas Cordova</span>, <span
                                className='text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-blue-500'>Frontend Developer</span> - Turning ideas into responsive digital realities.
                        </h1>
                        <p data-aos="fade-up" className='text-white text-2xl'>Specializing in building seamless, modern web experiences using Next.JS, React, TailwindCSS, and more.</p>
                        <div data-aos="fade-up" data-aos-delay="300" className='flex mt-8 mb-8 items-center space-x-6'>

                            <Image src='/assets/nextjs.svg' alt='reactlogo' width={60} height={60} className='object-contain' />
                            <Image src='/assets/react.svg' alt='reactlogo' width={50} height={50} className='object-contain' />
                            <Image src='/assets/tailwind.svg' alt='reactlogo' width={60} height={60} className='object-contain' />
                            <Image src='/assets/typescript.svg' alt='reactlogo' width={50} height={50} className='object-contain' />
                            <Image src='/assets/javascript.svg' alt='reactlogo' width={44} height={44} className='object-contain' />

                        </div>

                        <div>
                            <Button data-aos="fade-up" data-aos-delay="600"
                                className="rounded-full text-black text-2xl h-16
                        font-bold bg-gradient-to-r from-teal-300 to-blue-500 transition-colors duration-300 ease-in-out hover:text-white"
                                onClick={handleDownload}
                            >
                                Download My Resume
                            </Button>
                        </div>
                    </div>
                    {/*Image Content*/}
                    <div data-aos="fade-up" data-aos-delay="200" className='hidden lg:block ml-14'>
                        <Image src="/images/coding.png" alt='computer' width={500} height={500} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero