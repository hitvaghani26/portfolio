import React from 'react';
import { Link } from 'react-router-dom';

const NextPrev = (props) => {
  return (
    <div>
      <div className="w-full bg-[#0f0e0d] py-12 text-white">
        <div className="header w-full m-auto flex   justify-between items-center content-center">
          <Link to={props.prev}>
            <div className='bg-gradient-to-br md:px-2 py-1 sm:px-6 sm:py-4 from-[#3B3734] to-[#0F0E0D] hover:cursor-pointer text-2xl md:text-4xl'>&lt; Previous</div>
          </Link>
          <Link to={props.next}>
            <div className='bg-gradient-to-br md:px-2 py-1 sm:px-6 sm:py-4 from-[#3B3734] to-[#0F0E0D] hover:cursor-pointer text-2xl md:text-4xl md:ml-4'>Next &gt;</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NextPrev;
