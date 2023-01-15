import React from 'react'
import Buttons from './Buttons'

interface SlidesProps {
    image?: string,
    text: string,
    primary_txt: string,
    heading?: string,
    desc?: string
}
export default function Slides({
    image,
    text,
    primary_txt,
    heading,
    desc
}: SlidesProps): JSX.Element {
    return (
        <section className="flex items-center snap-start">
            <div className="absolute top-[14%] left-1/2 transform -translate-x-1/2 -translate-y-3/2">
                <h1 className="text-[#393c41] text-5xl font-bold text-center mb-4 capitalize">
                   {heading}
                </h1>
                <p className="text-[#393c41] text-center text-md font-medium capitalize
                underline hover:underline-offset-2 hover:decoration-[2.3px] 
                ">
                    {desc}
                </p>
            </div>

                <img
                    src={image}
                    alt="image"
                    className="h-screen w-screen object-cover"
                />
            <div className="absolute top-[85%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="text-center flex flex-row mb-12">
            <Buttons
                text={primary_txt}
                isPrimary={true}
                className="mr-4 px-4 lg:w-[256px] h-[40px] w-96 max-w-[768px] user-select-none
                "
            />
            <Buttons
                text={text}
                isPrimary={false}
                className="ml-4 px-10 lg:w-[256px] h-[40px] w-96 max-w-[768px] user-select-none
                "
                />
            </div>
            </div>

        </section>
    )
}
