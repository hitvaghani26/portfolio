import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <>
      <div className='w-full md:w-2/3 ml-4 mt-2 md:mt-0'>
        <div className='flex flex-col gap-5 text-2xl sm:text-3xl md:text-5xl sm:text-lg text-center'>
          <Link to="/aboutme">
            <div className='w-4/5 rounded-2xl bg-gradient-to-br from-[#3B3734] to-[#0F0E0D] bg-gray-700 mx-auto py-6 hover:cursor-pointer'>
              &lt; About Me /&gt;
            </div>
          </Link>
          <Link to="project">
            <div className='w-4/5 rounded-2xl bg-gradient-to-br from-[#3B3734] to-[#0F0E0D] bg-gray-700 mx-auto py-6 hover:cursor-pointer'>
              &lt; Project /&gt;
            </div>
          </Link>
          <Link to="Contectus">
            <div className='w-4/5 rounded-2xl bg-gradient-to-br from-[#3B3734] to-[#0F0E0D] bg-gray-700 mx-auto py-6 hover:cursor-pointer'>
              &lt; Contact Us /&gt;
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Main;
