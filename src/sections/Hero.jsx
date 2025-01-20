import { PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import CanvasLoader from '../components/CanvasLoader'
import HackerRoom from '../components/HackerRoom'
import { useMediaQuery } from 'react-responsive'
import { calculateSizes } from '../constants'
import Target from '../components/Target'
import ReactLogo from '../components/ReactLogo'
import Cube from '../components/Cube'
import Rings from '../components/Rings'
import HeroCamera from '../components/HeroCamera'
import Button from '../components/Button'
import Typed from 'typed.js';
import SideSocialLinks from '../components/SideSocialLinks'

const Hero = () => {
    // Create reference to store the DOM element containing the animation
    const el = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['a web developer', 'Anand '],
            typeSpeed: 50,
            backSpeed: 50,
            startDelay: 500,
            backDelay: 3000,
        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, []);
    const isSmall = useMediaQuery({ maxWidth: 440 })
    const isMobile = useMediaQuery({ maxWidth: 768 })
    const isTablet = useMediaQuery({ maxWidth: 1024 })

    const sizes = calculateSizes(isSmall, isMobile, isTablet)

    return (
        <section id='home'>
            <div className='min-h-screen w-full flex flex-col relative'>

                <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3'>
                    <p className='sm:text-3xl text-white text-2xl font-medium text-center font-generalsans'>
                        Hi, I am <span ref={el}></span> <span className='waving-hand'>👋</span>
                    </p>

                    <p className='hero_tag text-gray_gradient'>
                        Building Products & Brands
                    </p>
                </div>

                <div className='w-full h-full absolute inset-0'>
                    <Canvas className='absolute'>
                        <Suspense fallback={<CanvasLoader />}>
                            <PerspectiveCamera makeDefault position={[0, 0, 20]} />

                            <HeroCamera isMobile={isMobile}>
                                <HackerRoom
                                    position={sizes.deskPosition}
                                    rotation={[0, Math.PI, 0]}
                                    scale={sizes.deskScale}
                                />
                            </HeroCamera>

                            <group>
                                <Target position={sizes.targetPosition} />
                                <ReactLogo position={sizes.reactLogoPosition} />
                                <Cube position={sizes.cubePosition} />
                                <Rings position={sizes.ringPosition} />
                            </group>

                            <ambientLight intensity={1} />
                            <directionalLight position={[10, 10, 10]} intensity={0} />

                        </Suspense>
                    </Canvas>
                </div>

                <div className='absolute bottom-7 left-0 right-0 w-full z-10 c-space'>
                    <a href="#about" className='w-fit'>
                        <Button
                            name="Let's work together"
                            isBeam
                            containerClass="sm:w-fit w-full sm:min-w-96"
                        />
                    </a>

                </div>

            </div>
            <div>
                <SideSocialLinks />
            </div>
        </section>
    )
}

export default Hero