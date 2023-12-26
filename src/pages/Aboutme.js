import React from 'react'
import Leftside from './Leftside'
import Main from './Main'
import NextPrev from '../components/NextPrev'
import About from "../components/About"
const Aboutme = () => {
  return (
    <>
    <div>
       <div className="w-full h-full bg-[#0f0e0d] py-12 text-white">
                <div className="header h-full lg:w-[1280px]  m-auto md:flex justify-between items-center content-center">
                    <Leftside />
                    <About></About>
                </div>
            </div>
    </div>
     <NextPrev prev="/" next="/project"></NextPrev>
    </>
  )
}

export default Aboutme