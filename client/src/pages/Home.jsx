import React from 'react'
import {motion, AnimatePresence} from 'framer-motion';
import {useSnapshot} from 'valtio';
import state from '../store';
import { CustomButton } from '../components';

import {headContainerAnimation, headContentAnimation, headTextAnimation, slideAnimation} from '../config/motion'

const Home = () => {
    const snap = useSnapshot(state);
  return (
    <AnimatePresence>
        {snap.intro && <motion.section className="home" {...slideAnimation('left')}>
            <motion.header {...slideAnimation("down")}>
                <img src={snap.logoDecal} alt='logo'className='w-8 h-8 object-contain'></img>
            </motion.header>
            <motion.div className='home-content' {...headContainerAnimation}>
                <motion.div {...headTextAnimation}>
                    <h1 className='head-text'>
                            How's <br className='xl:block hidden' /> it ?
                    </h1>
                </motion.div>
                <motion.div 
                {...headContentAnimation}
                className="flex flex-col gap-5"
                >
                    <p className="max-w-md font-normal text-gray-600 text-base">Create your unique and personalized shirt with our
                    3D Customization tool. <strong>Unleash your Imagination</strong>{" "}
                    and define your own style with the help of AI Tool.
                    </p>
                    <CustomButton 
                        type="filled"
                        title="House it!"
                        handleClick={()=> state.intro = false}
                        CustomStyles="w-fit px-4 py-2.5 font-bold text-sm"
                    />
                </motion.div>
            </motion.div>
        </motion.section>}
    </AnimatePresence>
  )
}

export default Home