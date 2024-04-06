import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0, x: '-100vw' },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', stiffness: 120, delay: 2. },
  },
};

const itemVariants = {
  hidden: { x: -10, opacity: 0 },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.3, duration: 0.5 },
  }),
};

const Problem = () => {
  return (
    <motion.div 
      className="max-w-4xl mx-auto my-10 p-6 border-2 border-blue-500 rounded-lg bg-blue-50"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2
        className="text-blue-500 text-center text-3xl mb-6"
        variants={itemVariants}
        custom={1}
      >
        Offline Voting Hurdles
      </motion.h2>
      <motion.ul
        className="list-inside space-y-4 flex flex-col justify-between items-center"
        variants={itemVariants}
        custom={2}
      >
        <motion.li variants={itemVariants} custom={2.5} className="text-lg text-gray-700">Limited accessibility and convenience for voters</motion.li>
        <motion.li variants={itemVariants} custom={3} className="text-lg text-gray-700">Higher operational costs and extensive preparation times</motion.li>
        <motion.li variants={itemVariants} custom={3.5} className="text-lg text-gray-700">Increased potential for security risks and fraud concerns</motion.li>
        <motion.li variants={itemVariants} custom={3.5} className="text-lg text-gray-700">Offline voting excludes those away from home, curbing voter participation.</motion.li>
      </motion.ul>
    </motion.div>
  );
};

export default Problem;
