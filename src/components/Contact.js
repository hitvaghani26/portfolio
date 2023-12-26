import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
const Contact = () => {
  const [showmessage, setshowmessage] = useState(false);
  const form = useRef();

  function messagehandel(){
      setshowmessage(true)
      setTimeout(() => {
        setshowmessage(false)
      }, 6000);
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_YOUR_SERVICE_ID, process.env.REACT_APP_YOUR_TEMPLATE_ID, form.current, process.env.REACT_APP_YOUR_PUBLIC_KEY)
      .then((result) => {
        // console.log(typeof result.text);
        if(result.text == "OK"){
          // console.log("hello");
          messagehandel()
        }
      }, (error) => {
        console.log(error.text);
      });
  };
  return (

    <div className='w-2/3  w-full mt-2 md:mt-2 h-full  md:ml-4  '>
      <div className='flex  h-full flex-col gap-5  '>
        <form ref={form} onSubmit={sendEmail}>


          <div className='w-full h-full  rounded-2xl bg-gradient-to-br from-[#3B3734] to-[#0F0E0D] bg-gray-700 mx-auto py-6 px-6 hover:cursor-pointer'>
            <div className='text-3xl'>
              &lt; Contact  /&gt;
            </div>

            <div className='text-white text-xl mt-4'>Gmail</div>
            <div className='aboutmesummery mt-2 text-lg text-[#8c8c8c]'>
              <input type="email" name="user_email" className='w-5/6 px-3 rounded-md focus:outline-none'></input>

            </div>
            <div className='text-white text-xl mt-4'>Name</div>
            <div className='aboutmesummery mt-2 text-lg text-[#8c8c8c]'>
              <input type="text" name="user_name" className='w-5/6 px-3 rounded-md focus:outline-none'></input>

            </div>
            <div className='text-white text-xl mt-4'>message</div>
            <div className='aboutmesummery mt-2 text-lg text-[#8c8c8c]'>
              <textarea name="message" className='w-5/6 px-3 rounded-md focus:outline-none'></textarea>
              {showmessage && <p className='text-white'> messages sent
                </p>}
            </div>
            <input type="submit" value="Send" className='text-center mt-3 rounded-lg text-xl border-slate-400 border-2 inline-block mx-auto px-8 py-3' />

              {/* <p className='text-center mt-3 rounded-lg text-xl border-slate-400 border-2 inline-block mx-auto px-8 py-3'>Submit</p> */}
           

      </div>
        </form>



    </div>

    </div >

  )
}

export default Contact