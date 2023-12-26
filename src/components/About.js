import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
    <div className='w-2/3 w-full md:mt-0 mt-2 h-full  md:ml-4  '>
      <div className='flex w-full h-full flex-col gap-5  '>
      
        <div className='w-full h-full rounded-2xl bg-gradient-to-br from-[#3B3734] to-[#0F0E0D] bg-gray-700 mx-auto md:py-6 px-6 hover:cursor-pointer'>
          <div className='text-3xl'>
          &lt; About Me /&gt;
          </div>
          <div className='aboutmesummery text-lg text-[#8c8c8c]'>
          Hello, I'm Hit Vaghani, a frontend developer with a passion for creating immersive web experiences that captivate and engage users. With a commitment to aesthetics and functionality, I transform ideas into stunning, interactive websites.
          </div>
          <div className='text-white text-xl mt-4'>Education</div>
          <div className='aboutmesummery text-lg text-[#8c8c8c]'>
            2020-2024
          </div>
          <div className='text-white text-bg'>
          Bachelor In Computer Engineering
          </div>
          <div className='text-white text-xl mt-4'>Skills</div>
          <div className='aboutmesummery text-lg text-[#8c8c8c]'>
            Html<br></br>
            Css<br></br>
            React.js <br></br>
            Node.js <br></br>

          </div>
          
        </div>
       
        
        
      </div>
      
    </div>
      
    </>
    )
}

export default About