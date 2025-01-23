
import Image from 'next/image'
import React from 'react'

const Skills = () => {

    const skills = [
        {
            icon: <Image src="/assets/nextjs.svg" alt='next' width={40} height={40} />,
            text: 'Next.JS'
        },
        {
            icon: <Image src="/assets/react.svg" alt='next' width={40} height={40} />,
            text: 'React'
        },
        {
            icon: <Image src="/assets/tailwind.svg" alt='next' width={40} height={40} />,
            text: 'Tailwind CSS'
        },
        {
            icon: <Image src="/assets/typescript.svg" alt='next' width={40} height={40} />,
            text: 'TypeScript'
        },
        {
            icon: <Image src="/assets/javascript.svg" alt='next' width={40} height={40} />,
            text: 'JavaScript'
        },
        {
            icon: <Image src="/assets/html.svg" alt='next' width={40} height={40} />,
            text: 'HTML5'
        },
        {
            icon: <Image src="/assets/css.svg" alt='next' width={40} height={40} />,
            text: 'CSS3'
        },
        {
            icon: <Image src="/assets/node.svg" alt='next' width={40} height={40} />,
            text: 'Node.JS'
        },
        {
            icon: <Image src="/assets/git.svg" alt='next' width={40} height={40} />,
            text: 'Git'
        },
    ]
    return (
        <div id="skills" className="bg-black pt-20 pb-20">
            <div className='w-[80%] mx-auto text-center pt-5'>
                <h1 className=" text-2xl text-white md:text-3xl capitalize font-bold text-center flex items-center justify-center">
                    <span className="flex-grow border-t border-white  mr-6"></span>
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-blue-500'>Featured Skills</span>
                    <span className="flex-grow border-t border-white ml-6 "></span>
                </h1>
                <div
                    data-aos="fade-up" className='grid mt-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {skills.map((skill, index) =>
                        <div
                            key={index} className='flex items-center justify-center p-1 bg-gradient-to-r from-teal-300 to-blue-500 rounded-lg shadow-md space-x-3 transform transition-transform hover:scale-105'>
                            <div className='h-full w-full bg-black rounded-lg flex items-center justify-center p-4 space-x-3'>
                                <span>{skill.icon}</span>
                                <span className='font-bold text-white'>{skill.text}</span>
                            </div>
                        </div>)}
                </div>
            </div>
        </div>
    )
}

export default Skills