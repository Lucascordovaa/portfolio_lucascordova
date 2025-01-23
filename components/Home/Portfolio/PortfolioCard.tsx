import Image from 'next/image';
import React from 'react';
import { Badge } from "@/components/ui/badge"
import Link from 'next/link';



type Props = {
    title: string;
    image: string;
    linkText: string;
    description: string;
    badges: { text: string; }[];
    link: string;
};

const PortfolioCard = ({ image, title, linkText, description, badges, link }: Props) => {
    return (
        <div className="bg-gradient-to-r from-teal-300 to-blue-500 rounded-xl shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl p-1 max-w-xl mx-auto">
            <div className='h-full w-full bg-black rounded-lg'>
                <Image
                    src={image}
                    alt={title}
                    width={600}
                    height={600}
                    className="object-contain mx-auto rounded-lg"
                />
                <h1 className="text-center text-xl mt-5 mb-3 font-semibold text-white">
                    {title}
                </h1>
                <p className="text-white text-center font-medium text-md mb-5 mx-5">
                    {description}
                </p>
                <div className="flex flex-wrap items-center gap-2 px-5 mb-5">
                    {badges.map((badge, index) => (
                        <Badge
                            key={index}
                            variant="outline"
                            className="text-white"
                        >
                            {badge.text}
                        </Badge>
                    ))}
                </div>
                <p className="text-center font-semibold text-teal-200 hover:text-blue-300 transition-colors duration-200 cursor-pointer p-5">
                    <Link
                        href={link}
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        {linkText} &#8594;
                    </Link>

                </p>
            </div>

        </div>
    );
};

export default PortfolioCard;
