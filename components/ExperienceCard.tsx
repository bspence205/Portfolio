import React from 'react'
import { motion } from "framer-motion"

type Props = {}

function ExperienceCard({}: Props) {
  return (
    <article>
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
            <h4>Front End Developer</h4>
            <p>Haz La Diferencia</p>
            <div>
                {/* Tech Used */}
                {/* Tech Used */}
                {/* Tech Used */}
            </div>
            <p>Started work... - Ended ...</p>
            <ul className='list-disc space-y-4 ml-5 text-lg'>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    </article>
  )
}

export default ExperienceCard