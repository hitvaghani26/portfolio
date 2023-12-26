import React from 'react'
import Leftside from './Leftside'
import Main from './Main'
import NextPrev from '../components/NextPrev'
import Projects from '../components/Projects'


const Project = () => {
  return (
    <div>
       <div className="w-full bg-[#0f0e0d] py-12 text-white">
                <div className="header lg:w-[1280px]  m-auto md:flex justify-between items-center content-center">
                    <Leftside />
                    <Projects />
                </div>
            </div>
            <NextPrev prev="/aboutme" next="/contact"></NextPrev>

    </div>
  )
}

export default Project