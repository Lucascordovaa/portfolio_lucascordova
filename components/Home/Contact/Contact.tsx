"use client"

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ContactForm from './ContactForm'

const Contact = () => {
    return (
        <div id="contact" className='bg-black pt-20 pb-20'>
            <div className='flex justify-center flex-col w-[90%] sm:w-[80%] h-full mx-auto '>
                <h1 className="flex items-center justify-center">
                    <span className="flex-grow border-t border-white"></span>
                </h1>
                <div data-aos="fade-up" className='grid grid-cols-1 lg:grid-cols-2 items-center gap-12 pt-20 pb-15'>
                    {/*Text Content*/}
                    <div>
                        <h1 className=' text-white text-4xl sm:text-4xl md:text-5xl mt-6 mb-6 font-bold md:leading-[3rem]
                            lg:leading[3.5rem]'>Let&apos;s <span className='text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-blue-500'>Connect!
                            </span>
                        </h1>
                        <p className='text-white text-2xl'>
                            Have a project in mind, or just want to say hi? Drop me a message or check out my socials!
                        </p>
                        <div className='flex mt-8 mb-8 items-center space-x-6'>

                            <Link
                                href="https://linkedin.com/in/lucasfilipecordova"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <Image src='/assets/linkedin.svg' alt='reactlogo' width={60} height={60} className='object-contain' />
                            </Link>
                            <Link
                                href="https://github.com/lucascordovaa"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <Image src='/assets/github.svg' alt='reactlogo' width={60} height={60} className='object-contain' />
                            </Link>
                            <Link
                                href="https://instagram.com/lucasflpe"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <Image src='/assets/instagram.svg' alt='reactlogo' width={60} height={60} className='object-contain' />
                            </Link>

                        </div>

                    </div>
                    {/*Form*/}
                    <div className='lg:block'>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact