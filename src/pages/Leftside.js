import React from 'react';
import DP from '../assets/DP.jpg';
import twitter from '../assets/twitter.png';
import instagram from '../assets/instagram.png';
import linkedin from '../assets/linkedin.png';
import { Link } from 'react-router-dom';

const Leftside = () => {
  return (
    <div className='w-full md:w-1/3 '>
      <div className='bg-gradient-to-br from-[#3B3734] to-[#0F0E0D] md:py-6 transform rotate-167 rounded-3xl mx-2'>
        <img src={DP} className='rounded-full w-3/4 m-auto pt-2 ' />
        <p className='text-center py-2 text-xl md:text-2xl'>Hit Vaghani</p>
        <ul className='flex w-5/6 py-2 md:w-4/6 justify-around m-auto'>
          <li className='p-2 rounded-full border-transparent border-2 hover:border-white hover:shadow-[0_0px_20px_0px_rgba(0,0,0,0.3)] hover:cursor-pointer bg-[#1f1c1a] hover:shadow-white'>
            <img src={twitter} className='w-8 md:w-9' />
          </li>
          <li className='p-2 rounded-full border-transparent border-2 hover:border-white hover:shadow-[0_0px_20px_0px_rgba(0,0,0,0.3)] hover:cursor-pointer bg-[#1f1c1a] hover:shadow-white'>
            <img src={instagram} className='w-8 md:w-9' />
          </li>
          <li className='p-2 rounded-full border-transparent border-2 hover:border-white hover:shadow-[0_0px_20px_0px_rgba(0,0,0,0.3)] hover:cursor-pointer bg-[#1f1c1a] hover:shadow-white'>
            <img src={linkedin} className='w-8 md:w-9' />
          </li>
        </ul>
        <div className='flex justify-center pt-4'>
          <Link to='/contact'>
            <p className='text-center rounded-lg text-xl md:text-2xl border-slate-400 border-2 inline-block mx-auto px-8 py-3 mb-5'>Contact Me</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Leftside;
