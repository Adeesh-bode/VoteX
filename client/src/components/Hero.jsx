import React from 'react';
import '../index.css';
import { motion } from 'framer-motion';
import { container, item , up } from '../utils/animation';
import imageData from '../data/imageData';

// import { up } from '../utils/animation';

const Hero = () => {
  return (
    <div className='bg h-screen flex flex-col justify-between px-[360px] pt-20 '>
        <motion.div variants={container} className='w-full flex flex-col gap-5 justify-between items-start '>
            {/* <AnimatePresence> */}
                <motion.div className='text-7xl' variants={up} initial='hidden' animate='visible'>VoteX</motion.div>
                <motion.div className='text-3xl' variants={up} initial='hidden' animate='visible'>Coz</motion.div>
                <motion.div className='text-5xl' variants={up} initial='hidden' animate='visible'>Your Anonymity, Our Promise</motion.div>
            {/* </AnimatePresence> */}
        </motion.div>

        <motion.div className='h-1/2 flex justify-center items-end gap-12'
            variants={container}
            initial="hidden"
            animate="visible"
        >
            {imageData.map((image, index) => (
                <motion.img key={index} src={image.src} alt={image.alt} className='h-5/6'
                    variants={item}
                />
            ))}
        </motion.div>
    </div>
  );
};

export default Hero;
