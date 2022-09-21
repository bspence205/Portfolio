import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from "framer-motion"

type Props = {}

export default function Header({}: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between 
    max-w-7xl mx-auto z-20 xl:items-center'>
      {/* framer motion */}
        <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className='flex flex-row justify-between'>
        {/* Social Icon */}

        <SocialIcon url='https://github.com/bspence205'
        fgColor='gray'
        bgColor='transparent'
        />

        <SocialIcon url='https://www.linkedin.com/in/brian-spencer-99733823b'
        fgColor='gray'
        bgColor='transparent'
        />

        <SocialIcon url='https://facebook.com'
        fgColor='gray'
        bgColor='transparent'
        />
        </motion.div>


        <motion.div 
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className='flex flex-row items-center text-gray-300 cursor'>
        <SocialIcon 
        className='cursor-pointer'
        network="email"
        fgColor="gray"
        bgColor='transparent'
        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
        Lets connect!
        </p>

        </motion.div>
    </header>
  )
}