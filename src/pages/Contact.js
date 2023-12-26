import React from 'react'
import Leftside from './Leftside'
import Main from './Main'
import NextPrev from '../components/NextPrev'
import ContacT from "../components/Contact"
const Contact = () => {
  return (
    <div>
       <div className="w-full bg-[#0f0e0d] py-12 text-white">
                <div className="header w-full  m-auto md:flex justify-between items-center content-center">
                    <Leftside />
                    <ContacT />
                </div>
            </div>
            <NextPrev prev="/project" next="/"></NextPrev>

    </div>
  )
}

export default Contact