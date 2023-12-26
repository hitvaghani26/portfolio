import React from 'react'
import Leftside from './Leftside'
import Main from './Main'
import NextPrev from '../components/NextPrev'
import Projects from '../components/Projects'

const MainPage = () => {
    return (
        <div className='w-full'>
            <div className="w-full bg-[#0f0e0d] py-12 text-white">
                <div className="header w-full  m-auto md:flex-row flex-col flex  justify-between items-center content-center">

                    <Leftside  />
                    <Main />
                </div>
            </div>
            <NextPrev prev="/contact" next="/aboutme"></NextPrev>
        </div>
    )
}

export default MainPage