import React, { useState } from 'react'
import Button from '../components/Button'
import Globes from '../components/Globes'
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '../utils/motion'
import { Tilt } from 'react-tilt'
import { sectionWrapper } from '../hoc'
import { useMediaQuery } from 'react-responsive'

const About = () => {
    const [hasCopied, setHasCopied] = useState(false)
    
    const isMobile = useMediaQuery({ maxWidth: 768 })

    const handleCopy = () => {
        navigator.clipboard.writeText('anandrajpersonal150@gmail.com')

        setHasCopied(true)

        setTimeout(() => {
            setHasCopied(false)
        }, 5000);
    }
    return (
        <section className='c-space my-20' id='about'>
            <div className='grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full'>

                <Tilt className='col-span-1 xl:row-span-3 hover:z-10 grid-container'>
                    <motion.div variants={isMobile ? "" : fadeIn("right", "spring", 1, 1)} >
                        <img src="/assets/grid1.png" alt="grid-1" className='w-full sm:h[276px] h-fit object-contain' />
                        <div>
                            <p className='grid-headtext'>Hi, I'm Anand</p>
                            <p className='grid-subtext'>
                                With 2 years of experience, I have honed my skills in frontend and backend development, with dynamic and responsive websites.
                            </p>
                        </div>
                    </motion.div>
                </Tilt>

                <Tilt className='col-span-1 xl:row-span-3 hover:z-10 grid-container'>
                    <motion.div variants={isMobile ? "" : fadeIn("right", "spring", 1, 1)}>
                        <img src="/assets/grid2.png" alt="grid-2" className='w-full sm:h-[276px] h-fit object-contain' />
                        <div>
                            <p className='grid-headtext'>Tech Stack</p>
                            <p className='grid-subtext'>I specialize in JavaScript/TypeScript with a focus on React and Next.js ecosystems.</p>
                        </div>
                    </motion.div>
                </Tilt>

                <Tilt className='col-span-1 xl:row-span-4 hover:z-10 grid-container'>
                    <motion.div variants={isMobile ? "" : fadeIn("right", "spring", 1, 1)}>
                        <div className='rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center'>
                            <Globes />
                        </div>

                        <div>
                            <p className='grid-headtext'>I work remotely across most timezones.</p>
                            <p className='grid-subtext'>I'm based in Bihar India, with remote work available.</p>
                            <a href="mailto:anandrajpersonal150@gmail.com?subject=Hello Anand&body=I would like to work with you">
                                <Button name="Contact Me" isBeam containerClass='w-full mt-10' />
                            </a>
                        </div>
                    </motion.div>
                </Tilt>

                <Tilt className='xl:col-span-2 xl:row-span-3 hover:z-10 grid-container' options={{ max: 45, scale: 1, speed: 450, transition: true }}>
                    <motion.div variants={isMobile ? "" : fadeIn("right", "spring", 1, 1)} >
                        <img src="/assets/grid3.png" alt="grid-3" className='w-full sm:h-[266px] h-fit object-contain ' />
                        <div>
                            <p className='grid-headtext'>My Passion for Coding</p>
                            <p className='grid-subtext'>I love solving problems and building things through code. Coding isn't just my profession - it is my Passion.</p>
                        </div>
                    </motion.div>
                </Tilt>

                <Tilt className='xl:col-span-1 xl:row-span-2 hover:z-10 grid-container'>
                    <motion.div variants={isMobile ? "" : fadeIn("right", "spring", 1, 1)}>
                        <img src="assets/grid4.png" alt="grid-4" className='w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top' />

                        <div className='space-y-2'>
                            <p className='grid-subtext text-center'>
                                Contact Me
                            </p>
                            <div className='copy-container' onClick={handleCopy}>
                                <img src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"} alt="copy" />
                                <p className='lg:text-xl md:text-lg max-sm:text-sm font-medium text-grey_gradient text-white'>anandrajpersonal150@gmail.com</p>
                            </div>
                        </div>
                    </motion.div>
                </Tilt>
            </div>
        </section>
    )
}

export default sectionWrapper(About, "about")