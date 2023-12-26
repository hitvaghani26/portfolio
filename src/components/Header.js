import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import hamburger from '../assets/icons8-menu-100.png'
import cross from '../assets/cross.png'
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  function handleMenuchane() {
    setShowMenu(!showMenu)
  }
  return (
    <div className='w-full bg-[#0f0e0d] py-2 text-white'>
      <div className='header lw-[1280px] m-auto flex justify-between items-center content-center'>
        <Link to='/'>
        <div className='leftHeader font-bold text-6xl cursor-pointer'>Hit</div>
        </Link>
        <div className='md:block hidden rightHeader'>
          <ul className='flex gap-2 text-xl'>
            <Link to='/'>
              <li className='cursor-pointer'>Home</li>
            </Link>
            <Link to='/aboutme'>
              <li className='cursor-pointer'>About Me</li>
            </Link>
            <Link to='/project'>
              <li className='cursor-pointer'>Project</li>
            </Link>
            <Link to='/contact'>
              <li className='cursor-pointer'>Contact Us</li>
            </Link>
          </ul>
        </div>
        <div className='md:hidden block rightHeader relative'>
          {!showMenu && <img src={hamburger} onClick={() => handleMenuchane()} className='w-8 '></img>}
          {showMenu && <img src={cross} onClick={() => handleMenuchane()} className='w-8 '></img>}

        </div>
      </div>
      {showMenu && <div className='flex inline    justify-end'>
        <ul className=' flex flex-col  font-bold pr-4    justify-end content-end  text-xl bg-red'>
          <div className='w-9'>

            <Link to='/' className=' '>
              <li className='cursor-pointer '>Home</li>
            </Link>
          </div>
          <Link to='/aboutme'>
            <li className='cursor-pointer'>About Me</li>
          </Link>
          <Link to='/project'>
            <li className='cursor-pointer'>Project</li>
          </Link>
          <Link to='/contact'>
            <li className='cursor-pointer'>Contact Us</li>
          </Link>
        </ul></div>}
    </div>
  );
};

export default Header;
