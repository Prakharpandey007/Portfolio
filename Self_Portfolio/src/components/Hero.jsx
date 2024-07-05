import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import profilePic from '../assets/projects/heroimage.png';

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pt-40 justify-items-center lg:mb-35 px-20">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-10 text-6xl font-thin tracking-tight lg:mt-16 lg:text-5xl">
              Prakhar Pandey
            </h1>
            <span
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              <Typewriter
                words={['I am', 'Full Stack Web Developer', 'And', 'A Competitive Programmer']}
                loop={0} // Set to 0 for infinite loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center rounded-xl">
            <img className="h-50 w-80 rounded-2xl" src={profilePic} alt="profilepic" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
