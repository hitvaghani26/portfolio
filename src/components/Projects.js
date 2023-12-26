import React from 'react'
const Projects = () => {
  return (
    <div className='w-2/3 w-full h-full mt-2 md:mt-0  md:ml-4  '>
      <div className='flex w-full h-full flex-col gap-5  '>

        <div className='w-full h-full  rounded-2xl bg-gradient-to-br from-[#3B3734] to-[#0F0E0D] bg-gray-700 mx-auto py-6 px-6 hover:cursor-pointer'>
          <div className='text-3xl'>
            &lt; Projects  /&gt;
          </div>

          <div className='text-white text-xl mt-4'>movieZ</div>
          <div className='aboutmesummery text-lg text-[#8c8c8c]'>
            movieZ is a web-based application that leverages The Movie Database (TMDb) APIs to provide users with comprehensive information about movies, TV shows, and actors.  {" "}
            <a href='https://moviez-lemon.vercel.app/' target='_blank' className='underline bold'>
              Live
            </a>
            {" "}
            <a href='https://github.com/hitvaghani26/movieZ' target='_blank' className='underline bold'>
              github
            </a>
          </div>



        </div>



      </div>

    </div>
  )
}

export default Projects