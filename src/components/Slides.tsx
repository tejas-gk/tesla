import React from 'react'
import Buttons from './Buttons'

export default function Slides({
    image,
}: {
    image: string
}): JSX.Element {
    return (
        <div className="flex  items-center">
          
                <img
                    src={image}
                    alt="image"
                    className="h-screen w-screen object-cover"
                />
            <div className="absolute top-[85%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="text-center flex flex-row">
            <Buttons
                text="Custom order"
                isPrimary={true}
                className="mr-4 px-4
                "
            />
            <Buttons
                text="Existing inventory"
                isPrimary={false}
                        className="ml-4 px-10
                "
                />
            </div>
            </div>

        </div>
    )
}
