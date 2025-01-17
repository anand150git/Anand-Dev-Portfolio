import React from 'react'
import { motion } from 'framer-motion'
import { staggerContainer } from '../utils/motion'

const sectionWrapper = ( Component) => {
  return (
    function HOC() {
        return (
            <motion.section
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={{once: true, amount: 0.5}}
            className={`mx-auto relative z-0`}
            >
                <Component/>
            </motion.section>
        )
    }
  )
}

export default sectionWrapper