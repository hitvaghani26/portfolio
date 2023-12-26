import React from 'react'

const Contact = () => {

  return (
    
       <div className='w-2/3  w-full mt-2 md:mt-2 h-full  md:ml-4  '>
      <div className='flex  h-full flex-col gap-5  '>

        <div className='w-full h-full  rounded-2xl bg-gradient-to-br from-[#3B3734] to-[#0F0E0D] bg-gray-700 mx-auto py-6 px-6 hover:cursor-pointer'>
          <div className='text-3xl'>
            &lt; Contact  /&gt;
          </div>

          <div className='text-white text-xl mt-4'>Gmail</div>
          <div className='aboutmesummery mt-2 text-lg text-[#8c8c8c]'>
           <input type='email' className='w-5/6 px-3 rounded-md focus:outline-none'></input>
          
          </div>
          <div className='text-white text-xl mt-4'>Subject</div>
          <div className='aboutmesummery mt-2 text-lg text-[#8c8c8c]'>
           <input type='text' className='w-5/6 px-3 rounded-md focus:outline-none'></input>
          
          </div>
          <div className='text-white text-xl mt-4'>description</div>
          <div className='aboutmesummery mt-2 text-lg text-[#8c8c8c]'>
           <textarea type='text'  className='w-5/6 px-3 rounded-md focus:outline-none'></textarea>
          
          </div>
          <a target='_blank' href='https://mail.google.com/mail/u/0/#inbox?compose=CllgCJTNHnzBPDNGNdGczmrrkwtjftrHNkhgLMclkvxfWrDwKdWXlhmKDKVWpxdqVBhHpKXpGjB'>

          <p className='text-center mt-3 rounded-lg text-xl border-slate-400 border-2 inline-block mx-auto px-8 py-3'>Submit</p>
          </a>
          

        </div>



      </div>

    </div>
    
  )
}

export default Contact