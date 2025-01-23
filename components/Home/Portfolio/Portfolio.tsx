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
                        image="/images/yourstorage.png"
                        title="YourStorage!"
                        description='Fullstack cloud storage/file manager web application with One Time Password (OTP) Authentication'
                        badges={[
                            { text: "Next.js" },
                            { text: "React" },
                            { text: "Typescript" },
                            { text: "Tailwind CSS" },
                            { text: "Shadcn" },
                            { text: "Appwrite" },
                        ]}
                        linkText="Check it out"
                        link='https://yourstorage-app.vercel.app/' />
                </div>
                <div data-aos="fade-left" data-aos-anchor-placement="top center" data-aos-delay="100">
                    {/*reusable card component*/}
                    <PortfolioCard
                        image="/images/placeholder.png"
                        title="Coming soon"
                        description='Project under development, coming soon!'
                        badges={[
                            { text: "Next.JS" }
                        ]}
                        linkText="Coming soon"
                        link='/' />
                </div>
                <div data-aos="fade-right" data-aos-anchor-placement="top center" data-aos-delay="200">
                    {/*reusable card component*/}
                    <PortfolioCard
                        image="/images/placeholder.png"
                        title="Coming soon"
                        description='Project under development, coming soon!'
                        badges={[
                            { text: "Next.JS" }
                        ]}
                        linkText="Coming soon"
                        link='/' />
                </div>
                <div data-aos="fade-left" data-aos-anchor-placement="top center" data-aos-delay="300">
                    {/*reusable card component*/}
                    <PortfolioCard
                        image="/images/placeholder.png"
                        title="Coming soon"
                        description='Project under development, coming soon!'
                        badges={[
                            { text: "Next.JS" }
                        ]}
                        linkText="Coming soon"
                        link='/' />
                </div>
            </div>
        </div>
    )
}

export default Portfolio