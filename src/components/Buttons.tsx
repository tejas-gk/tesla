import React from 'react'

interface ButtonProps {
    text: string
  isPrimary: boolean,
  className?: string
}
export default function Buttons({
    text,
  isPrimary,
  className,
}: ButtonProps): JSX.Element {
    return (
        <button
            className={`button ${
                isPrimary ? 'bg-[#171a20] opacity-80  text-white ' : 'text-[#393c41] bg-white opacity-[65%]'
          } font-sm text-center leading-[16.8px] h-12 w-fit font-semibold px-4
          ${className}
            `}
      >
        <span className='w-full'>
          {text}
          </span>
        </button>
    )
}