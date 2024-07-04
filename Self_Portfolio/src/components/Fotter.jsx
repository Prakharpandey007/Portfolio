import { Bio } from '../constants/index';
import {  FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { SiCodechef } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";
import { SiGeeksforgeeks } from "react-icons/si";
function Footer() {
  return (
    <div className="w-full py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-row items-center gap-4 mt-4 text-white text-2xl">
            <h1>Contact me At:</h1>
            
            <a href={Bio.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-purple-600 transition duration-300">
              <FaTwitter className='text-white' />
            </a>
            <a href={Bio.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-purple-600 transition duration-300">
              <FaLinkedin className='text-blue-500'/>
            </a>
            <a href={Bio.insta} target="_blank" rel="noopener noreferrer" className="hover:text-purple-600 transition duration-300">
              <FaInstagram className='text-red-500'/>
            </a>
          </div>
          {/* coding plateform */}
          <div className="flex flex-row items-center gap-4 mt-4 text-white text-2xl">
            <h1>I code At:</h1>
            
            <a href={Bio.codechef} target="_blank" rel="noopener noreferrer" className="hover:text-purple-600 transition duration-300">
              <SiCodechef className='text-yellow-300' />
            </a>
            <a href={Bio.leetcode} target="_blank" rel="noopener noreferrer" className="hover:text-purple-600 transition duration-300">
              <SiLeetcode className='text-blue-500'/>
            </a>
            <a href={Bio.gfg} target="_blank" rel="noopener noreferrer" className="hover:text-purple-600 transition duration-300">
              <SiGeeksforgeeks className='text-red-500'/>
            </a>
          </div>
          <div className="flex flex-row items-center gap-4 mt-4 text-white text-2xl text-opacity-25">
            <h1>Email me:</h1>
            <span>{Bio.Email}</span>
            

            </div>
            <div className="flex flex-row items-center gap-4 mt-4 text-white text-2xl text-opacity-25 ">
              <h1>Contact me:</h1>
              <span>{Bio.Contact}</span>

            </div>
          <p className="text-sm text-gray-600 mt-4">&copy; 2024 Prakhar Pandey. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
