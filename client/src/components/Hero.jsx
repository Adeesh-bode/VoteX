import React from 'react';
import '../index.css';
import { motion } from 'framer-motion';
import { container, item } from '../utils/animation';
import imageData from '../data/imageData';

const Hero = () => {
  return (
    <div className='bg h-screen flex flex-col justify-between px-72 pt-20'>
        <div className='w-full flex flex-col gap-5 justify-between items-start '>
            <div className='text-6xl'>VoteX</div>
            <div className='text-base'>Coz</div>
            <div className='text-3xl'>Your Anonymity, Our Promise</div>
        </div>

        <motion.div className='h-1/2 flex justify-center items-end gap-3'
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
