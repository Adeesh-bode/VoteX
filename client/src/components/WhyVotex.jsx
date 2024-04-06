// WhyVotex.js

import React from 'react';
import { motion } from 'framer-motion';

const WhyVotex = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-blue-100">
      <motion.h1
        className="text-3xl font-bold text-center mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Why Votex?
      </motion.h1>
      <motion.p
        className="text-lg text-center mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        Revolutionizing the way we vote through secure, remote, and decentralized voting.
      </motion.p>
      <motion.ul
        className="list-disc space-y-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <motion.li
          className="flex items-start"
          initial={{ x: -10 }}
          animate={{ x: 0 }}
          transition={{ delay: 1.2 }}
        >
          <span className="font-semibold">Remote Voting:</span> Vote from anywhere, anytime, ensuring higher participation and accessibility.
        </motion.li>
        <motion.li
          className="flex items-start"
          initial={{ x: -10 }}
          animate={{ x: 0 }}
          transition={{ delay: 1.4 }}
        >
          <span className="font-semibold">Blockchain Integration:</span> Guarantees the integrity and transparency of every vote, making the process tamper-proof and trustable.
        </motion.li>
        <motion.li
          className="flex items-start"
          initial={{ x: -10 }}
          animate={{ x: 0 }}
          transition={{ delay: 1.6 }}
        >
          <span className="font-semibold">Decentralization:</span> Removes central points of failure and ensures a fair and unbiased voting environment.
        </motion.li>
      </motion.ul>
    </div>
  );
};

export default WhyVotex;
