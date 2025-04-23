import React from 'react'
import PortfolioCard from './PortfolioCard'

const Portfolio = () => {
    return (
        <div id="portfolio" className='pt-16 pb-16 bg-black'>
            <h1 className="mt-6 text-2xl text-white md:text-3xl capitalize font-bold flex items-center justify-center w-[88%] mx-auto text-center">
                <span className="flex-grow border-t border-white ml-20 mr-6"></span>
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-blue-500'>Portfolio</span>
                <span className="flex-grow border-t border-white ml-6 mr-20"></span>
            </h1>

            <h2 className='mt-6  text-white md:text-2xl font-bold text-center'>See some of my work!</h2>
            <div className='mt-20 grid w-[70%] mx-auto grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-20'>
                <div data-aos="fade-right" data-aos-anchor-placement="top center">
                    {/*reusable card component*/}
                    <PortfolioCard
                        image="/assets/yourstorage.png"
                        title="YourStorage!"
                        description='Fullstack cloud storage/file manager web application with One Time Password (OTP) Authentication system'
                        badges={[
                            { text: "Next.js" },
                            { text: "React" },
                            { text: "Typescript" },
                            { text: "Tailwind CSS" },
                            { text: "Shadcn" },
                            { text: "Appwrite" },
                        ]}
                        demolinkText="Try the Live Demo"
                        demolink='https://yourstorage-app.vercel.app/'
                        gitlink='https://github.com/Lucascordovaa/yourstorage_app'
                        gitlinkText='Check out the GitHub Repo'/>
                </div>
                <div data-aos="fade-left" data-aos-anchor-placement="top center" data-aos-delay="100">
                    {/*reusable card component*/}
                    <PortfolioCard
                        image="/assets/sonicaudio.PNG"
                        title="Sonic - The Perfect Sound, Anywhere"
                        description='A full-fledged product website for a fictional portable speaker/audio company called "Sonic".'
                        badges={[
                            { text: "Next.js" },
                            { text: "React" },
                            { text: "Typescript" },
                            { text: "Tailwind CSS" },
                            { text: "Framer Motion"},
                            { text: "Shadcn" },
                        ]}
                        demolinkText="Try the Live Demo"
                        demolink='https://sonic-audio.vercel.app/' 
                        gitlink='https://github.com/Lucascordovaa/sonic-audio'
                        gitlinkText='Check out the GitHub Repo'/>
                </div>
                <div data-aos="fade-right" data-aos-anchor-placement="top center" data-aos-delay="200">
                    {/*reusable card component*/}
                    <PortfolioCard
                        image="/assets/flowiq.PNG"
                        title="FlowIQ - Business Analytics"
                        description='A modern landing page for a fictional Business Analytics company called "FlowIQ"'
                        badges={[
                            { text: "Next.js" },
                            { text: "React" },
                            { text: "Typescript" },
                            { text: "Tailwind CSS" },
                            { text: "Shadcn" },
                        ]}
                        demolinkText="Try the Live Demo"
                        demolink='https://flowiq-business.vercel.app/'
                        gitlink='https://github.com/Lucascordovaa/flowiq'
                        gitlinkText='Check out the GitHub Repo' />
                </div>
                <div data-aos="fade-left" data-aos-anchor-placement="top center" data-aos-delay="300">
                    {/*reusable card component*/}
                    <PortfolioCard
                        image="/images/placeholder.png"
                        title="Coming soon"
                        description='Project under development, coming soon!'
                        badges={[
                            { text: "TBD" }
                        ]}
                        demolinkText=""
                        demolink='' 
                        gitlink=''
                        gitlinkText=''/>
                </div>
            </div>
        </div>
    )
}

export default Portfolio