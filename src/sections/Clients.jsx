import React from 'react'
import { clientReviews } from '../constants'
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '../utils/motion'
import { Tilt } from 'react-tilt'
import { sectionWrapper } from '../hoc'

const Clients = () => {
    return (
        <section className='c-space my-20'>
            <motion.h3 variants={textVariant()} className='head-text'>Hear from My Clients</motion.h3>

            <div className='client-container'>
                {clientReviews.map(({ id, name, position, review, img }) => (
                    <Tilt key={id} className='client-review hover:z-10'>
                        <motion.div variants={fadeIn("right", "spring", 0.5, 1)}>
                            <div>
                                <p className='text-white font-light'>{review}</p>
                            </div>
                            <div className='client-content'>
                                <div className='flex gap-3'>
                                    <img src={img} alt={name} className='w-12 h-12 rounded-full' />
                                    <div className='flex flex-col'>
                                        <p className='font-semibold text-white-800'>{name}</p>
                                        <p className='text-white-500 md:text-base text-sm'>{position}</p>
                                    </div>
                                </div>

                                <div className='flex self-end items-center gap-2'>
                                    {Array.from({ length: 5 }).map((_, index) => (
                                        <img key={index} src='/assets/star.png' alt='star' className='w-5 h-5' />
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </Tilt>
                ))}
            </div>
        </section>
    )
}

export default sectionWrapper(Clients, "clients");