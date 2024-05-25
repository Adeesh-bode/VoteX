import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0, y: '-100vw' },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 70, delay: 0.5 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (custom) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: custom * 0.3, duration: 0.5 },
  }),
};

const problems = [
  { id: 1, text: "Higher operational costs and extensive preparation times" },
  { id: 2, text: "Limited accessibility and convenience for voters" },
  { id: 3, text: "Increased potential for security risks and fraud concerns" },
  { id: 4, text: "Offline voting excludes those away from home, curbing voter participation" },
];

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
        className=" space-y-4 flex flex-col justify-between items-center"
        initial="hidden"
        animate="visible"
      >
        {problems.map((problem, index) => (
          <motion.div
            key={problem.id}
            variants={itemVariants}
            custom={index + 2}
            className="text-lg text-gray-700 p-4 border rounded-lg bg-white shadow-md w-full max-w-lg"
          >
            {problem.text}
          </motion.div>
        ))}
      </motion.ul>
    </motion.div>
  );
};

export default Problem;
