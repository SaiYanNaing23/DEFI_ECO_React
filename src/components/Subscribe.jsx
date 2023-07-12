import React from 'react'
// import SubBg from "../assets/subscribe.jpg"

const Subscribe = () => {
  return (
    <div className='w-max-[1240px] bg-black  text-white px-4 py-16 flex'>
        {/* <div className='relative object-cover'>
            <img src={SubBg} alt="" className='w-full object-cover '/>
        </div> */}
        <div className='mx-auto'>
        <h1>Join Our <span className='text-blue-400'>Defi</span>  Community</h1>
        <div className='mt-4'>
            <input type="email" className='rounded-full mr-6 py-2 px-10 focus:outline-none text-gray-800' placeholder='Your Email'/>
            <button>Sign Up</button>
        </div>
        <div className='mt-2'>
            <input type="checkbox" className='mr-3'/>
            <span className='text-sm'>Yes, I agree to recieve email community from DEFI.</span>
        </div>
        </div>
    </div>
  )
}

export default Subscribe;