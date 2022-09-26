import React from 'react'
import { motion } from "framer-motion"

type Props = {}

function About({}: Props) {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{duration: 1.5 }}
    className='flex flex-col relative h-screen
    text-center md:text-left md:flex-row max-w-7xl px-10
    justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase
        tracking-[20px] text-gray-500 text-2xl'>
            About
        </h3>

       <motion.img 
       initial={{
        x: -200,
       }}
       transition={{
        duration: 1.2,
       }}
       whileInView={{
        x: 0,
        opacity: 1,
       }}
       viewport={{
        once: true,
       }}
       src="https://media-exp1.licdn.com/dms/image/C5603AQHyRgnyR5E7FQ/profile-displayphoto-shrink_200_200/0/1660339300767?e=1669248000&v=beta&t=lY6MNAvNqPcbaiybi3zWu5EaZ2Q1nvOE4NARh91pBk8"  
       className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
       md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]'
       />

       <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>Check out my{" "}
            <span className='underline decoration-[#F7AB0A]/50'>background</span>{" "}
            </h4>
            <p className='text-base'>
                Hi! I&apos;m Brian, a curious and problem solving Front End Developer. I was first drawn to Front End Development 
                by the way it combines creativity, logic and design to create products with user needs in mind. Since then, I have
                been constantly seeking for opportunities to expand my knowledge and apply my skills to design in the exciting
                digital age. As a Front End Developer, I embrace the challenge of turning complex goals into easy to use designs to 
                create better user experiences through the design thinking process. With a 3 year background in accounting, I developed 
                my ability to analyze problems which I apply to my development process in understanding the what, when, how, and why.
                Furthermore, I excel in strong team atmosphere with the ability to work collaboratively and cross-functionally and value 
                different perspectives and efficiencies. My core strengths include being adaptable, problem solving, and being learning oriented. 
            </p>
       </div>
    </motion.div>
  )
}

export default About