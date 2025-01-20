import React, { Suspense, useState } from 'react'
import { myProjects } from '../constants'
import { Canvas } from '@react-three/fiber'
import { Center, OrbitControls } from '@react-three/drei'
import CanvasLoader from '../components/CanvasLoader'
import DemoComputer from '../components/DemoComputer'
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '../utils/motion'
import { sectionWrapper } from '../hoc'
import Button from '../components/Button'
import { useMediaQuery } from 'react-responsive'

const projectCount = myProjects.length

const Projects = () => {
    const isMobile = useMediaQuery({ maxWidth: 768 })
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0)
    const [hoverToZoom, setHoverToZoom] = useState(false)

    const currentProject = myProjects[selectedProjectIndex]

    const handleNavigation = (direction) => {
        setSelectedProjectIndex((prevIndex) => {
            if (direction === "previous") {
                return prevIndex === 0 ? projectCount - 1 : prevIndex - 1
            }
            else {
                return prevIndex === projectCount - 1 ? 0 : prevIndex + 1
            }
        })
    }
    return (
        <section className="c-space my-20">
            <motion.p variants={textVariant()} className="head-text">My Selected Work</motion.p>
            <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
                <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 h-[650px] shadow-2xl shadow-black-200">
                    <div className="absolute top-0 right-0">
                        <img src={currentProject.spotlight} alt="spotlight" className="w-full h-96 object-cover rounded-xl" />
                    </div>

                    <div className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg" style={currentProject.logoStyle}>
                        <img className="h-10 shadow-sm" src={currentProject.logo} alt="logo" />
                    </div>

                    <motion.div variants={textVariant()} className="flex flex-col gap-5 text-white-600 my-5">
                        <p className="text-white text-2xl font-semibold animatedText">{currentProject.title}</p>

                        <p className="animatedText">{currentProject.desc}</p>
                        <p className="animatedText">{currentProject.subdesc}</p>
                    </motion.div>

                    <motion.div variants={textVariant()} className="flex items-center justify-between flex-wrap gap-5">
                        <div className="flex items-start gap-5">
                            {currentProject.tags.map((tag, index) => (
                                <div key={index} className='w-10 leading-none text-center'>
                                    <div className="tech-logo">
                                        <img src={tag.path} alt={tag.name} />
                                    </div>
                                    <span className='text-white text-[10px]'>{tag.name}</span>
                                </div>
                            ))}
                        </div>

                        <a
                            className="flex items-center gap-2 cursor-pointer text-white-600"
                            href={currentProject.href}
                            target="_blank"
                            rel="noreferrer">
                            <p>Check Live Site</p>
                            <img src="/assets/arrow-up.png" alt="arrow" className="w-3 h-3" />
                        </a>
                    </motion.div>

                    <div className="flex justify-between items-center mt-7">
                        <button className="arrow-btn absolute left-5 bottom-6" onClick={() => handleNavigation('previous')}>
                            <img src="/assets/left-arrow.png" alt="left arrow" />
                        </button>

                        <button className="arrow-btn absolute right-5 bottom-6" onClick={() => handleNavigation('next')}>
                            <img src="/assets/right-arrow.png" alt="right arrow" className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                <div
                    className='border border-black-300 bg-black-200 rounded-lg h-96 md:h-full'
                    onPointerOver={() => setHoverToZoom(true)}
                    onPointerOut={() => setHoverToZoom(false)}
                >
                    <Canvas>
                        <ambientLight intensity={Math.PI} />
                        <directionalLight position={[10, 10, 5]} />

                        <Center>
                            <Suspense fallback={<CanvasLoader />}>
                                <group scale={hoverToZoom ? 2.79 : 2} position={hoverToZoom ? [-0.3, -4.7, 0.2] : [0, -3, 0]} rotation={[0, -0.1, 0]} >
                                    <DemoComputer texture={currentProject.texture} />
                                </group>

                            </Suspense>
                        </Center>

                        <OrbitControls enabled={!isMobile} maxPolarAngle={Math.PI / 2} enableZoom={false}
                        />
                    </Canvas>
                </div>
            </div>

            {/* <a href="/project">
                <Button name='See All Projects' containerClass='w-1/2 mt-10 text-xl hover:bg-black-500 transition-all ease-in-out duration-300' />
            </a> */}
        </section>
    )
}

export default sectionWrapper(Projects, "projects");