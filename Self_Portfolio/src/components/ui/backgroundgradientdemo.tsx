"use client";
import React from "react";
import { BackgroundGradient } from "./backgroundgradient";
import project1 from '../../assets/projects/project-1.png';
import project2 from '../../assets/projects/project-2.png';
import project3 from '../../assets/projects/project-3.png';

export function BackgroundGradientDemo() {
  return (
    <div className="min-h-screen font-montserrat text-gray-800">
      <h1 className="text-4xl text-center text-white pt-10 mb-10">My Projects</h1>
      <div className="flex flex-col items-center">
        <div className="text-xl text-center text-white mb-5">
          I have worked on a wide range of projects using different technologies and libraries.
        </div>
        <div className="text-xl text-center text-white mb-5">
          Here are some of my projects to show my hard work.
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-center space-x-4 mt-10 scale-y-75"> {/* Add flexbox and margin-top */}
        <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
          <img
            src={project1}
            alt="jordans"
            height="400"
            width="400"
            className="object-contain"
          />
          <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-400">
            Github-Pro
          </p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            A modern and fully responsive website used for searching the Github Profiles and their repositories list.User can also get the most popular repositories of some Popular languages.For Authentication user use Github Authentication implemented using the Passport.Js library. 
          </p>
          <div className="flex flex-row">
            <p className="text-red-800 text-2xl space-x-3">#React </p>
            <p className="text-blue-700 text-2xl ">#Passport</p>
            <p className="text-pink-700 text-2xl">#Github Api</p>
          </div>
          <a href="https://github.com/Prakharpandey007/Github-Pro" target="_blank" rel="noopener noreferrer" className="rounded-xl text-white flex justify-center items-center bg-black mt-4 py-2 px-4 text-xs font-bold dark:bg-zinc-800 hover:bg-gray-700 transition duration-300">
            <span className="text-center text-2xl">View on GitHub</span>
          </a>
        </BackgroundGradient>

        <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
          <img
            src={project2}
            alt="jordans"
            height="400"
            width="400"
            className="object-contain"
          />
          <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
           Twitter Backend
          </p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Developed a scalable backend system for a Twitter-like application using Node.js and Express. Implemented a RESTful API for user authentication, tweet management, and follow/unfollow functionality. Utilized MongoDB for database management and AWS services for image-storage
          </p>
          <div className="flex flex-row">
            <p className="text-red-800 text-2xl space-x-3">#API</p>
            <p className="text-blue-700 text-2xl ">#Aws</p>
            <p className="text-pink-700 text-2xl">#Passport</p>
          </div>
          <a href="https://github.com/Prakharpandey007/Twitter_Dev" target="_blank" rel="noopener noreferrer" className="rounded-xl text-white flex justify-center items-center bg-black mt-4 py-2 px-4 text-xs font-bold dark:bg-zinc-800 hover:bg-gray-700 transition duration-300">
            <span className="text-center text-2xl">View on GitHub</span>
          </a>
        </BackgroundGradient>

        <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
          <img
            src={project3}
            alt="jordans"
            height="400"
            width="400"
            className="object-contain"
          />
          <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
            AI_Reactor
          </p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Designed and developed a full-stack Gemini app using the MERN stack . Implemented a robust authentication system, ensuring secure user access and data protection. Integrated the Gemini API to fetch and display  data using typewriter effect, providing real-time updates and insights. 
</p>
<div className="flex flex-row">
            <p className="text-red-800 text-2xl space-x-3">#Gemini</p>
            <p className="text-blue-700 text-2xl ">#React</p>
            <p className="text-pink-700 text-2xl">#Authentication</p>
          </div>
          <a href="https://github.com/Prakharpandey007/AI_Reactor" target="_blank" rel="noopener noreferrer" className="rounded-xl text-white flex justify-center items-center bg-black mt-4 py-2 px-4 text-xs font-bold dark:bg-zinc-800 hover:bg-gray-700 transition duration-300">
            <span className="text-center text-2xl">View on GitHub</span>
          </a>
        </BackgroundGradient>
      </div>
    </div>
  );
}
