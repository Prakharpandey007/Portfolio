
import { motion } from 'framer-motion';
import HTML from '../assets/projects/html1.png';
import CSS from '../assets/projects/css.png';
import C from '../assets/projects/c.png';
import Cpp from '../assets/projects/c++.png';
import javascript from '../assets/projects/javascript.png';
import react from '../assets/projects/reactjs.png';
import node from '../assets/projects/node.png';
import mongodb from '../assets/projects/mongodb.png';
import bootstrap from '../assets/projects/bootstrap.png';
import tailwind from '../assets/projects/tailwind.png';
import mysql from '../assets/projects/mysql.png';
import git from '../assets/projects/git.png';
import github from '../assets/projects/github.png';
import { SiPostman } from 'react-icons/si';

const Technologies = () => {
  const iconVariants = {
    animate: {
      y: [0, -10, 0], // Keyframes for the animation
      transition: {
        y: {
          duration: 1, // Duration for one cycle of the animation
          repeat: Infinity, // Repeat the animation indefinitely
          ease: "easeInOut" // Easing function for smooth animation
        }
      }
    }
  };

  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">My Tech Stacks</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {[HTML, CSS, C, Cpp, javascript, react, node].map((src, index) => (
          <motion.div
            key={index}
            className="rounded-2xl border-4 border-neutral-400 p-4"
            variants={iconVariants}
            animate="animate"
          >
            <img src={src} className="w-10" />
          </motion.div>
        ))}
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4 pt-10">
        {[mongodb, bootstrap, tailwind, mysql, git, github].map((src, index) => (
          <motion.div
            key={index}
            className="rounded-2xl border-4 border-neutral-400 p-4"
            variants={iconVariants}
            animate="animate"
          >
            <img src={src} className="w-10 h-10" />
          </motion.div>
        ))}
        <motion.div
          className="rounded-2xl border-4 border-neutral-400 p-4"
          variants={iconVariants}
          animate="animate"
        >
          <SiPostman className="w-10 h-10" />
        </motion.div>
      </div>
    </div>
  );
};

export default Technologies;
