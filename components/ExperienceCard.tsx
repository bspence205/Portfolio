import React from 'react'
import { motion } from "framer-motion"

type Props = {}

function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 
    w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 
    hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden '>
        <motion.img
        initial={{
            y: -100,
            opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y:0 }}
        viewport={{ once: true }}
        className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center' 
        src="https://media-exp1.licdn.com/dms/image/C4E0BAQFHzygm89etgQ/company-logo_100_100/0/1519864049241?e=1672272000&v=beta&t=IcerP3_P4sXVQGCZEUsQYikDHD6LCJGbZHfKqOYUies"
        alt="" />

        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>Front End Developer</h4>
            <p className='font-bold text-2xl mt-1'>Haz La Diferencia</p>
            <div className='flex space-x-2 my-2'>
                {/* Tech Used */}
                {/* Tech Used */}
                {/* Tech Used */}
            </div>
            <p className='uppercase py=5 text-gray-300'>Started work... - Ended ...</p>
            <ul className='list-disc space-y-4 ml-5 text-lg'>
                <li>Summary Points</li>
                <li>Summary Points</li>
                <li>Summary Points</li>
                <li>Summary Points</li>
                <li>Summary Points</li>
            </ul>
        </div>
    </article>
  )
}

export default ExperienceCard