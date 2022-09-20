import React from 'react'
import { SocialIcon } from 'react-social-icons'

type Props = {}

export default function Header({}: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20
    xl:items-center'>
        <div className='flex flex-row justify-between'>
        {/* Social Icon */}

        <SocialIcon url='https://github.com/bspence205'
        fgColor='gray'
        bgColor='transparent'
        />

        <SocialIcon url='https://www.linkedin.com/in/brian-spencer-99733823b'
        fgColor='gray'
        bgColor='transparent'
        />

        <SocialIcon url='https://github.com/bspence205'
        fgColor='gray'
        bgColor='transparent'
        />
        </div>


        <div className='flex flex-row items-center text-gray-300 cursor'>
        <SocialIcon 
        className='cursor-pointer'
        network="email"
        fgColor="gray"
        bgColor='transparent'
        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
        Lets connect!
        </p>

        </div>
    </header>
  )
}