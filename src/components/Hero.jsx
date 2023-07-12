import React from 'react'
import HeroVideo from "../assets/video.mp4"
const Hero = () => {
  return (
    <div className='w-full h-[90vh] top-[90px]'>
        <video className='object-cover h-full w-full absolute -z-10' src={HeroVideo} loop muted autoPlay></video>
        <div className='flex justify-center h-[90%] items-center flex-col text-white'>
            <h1 className='mb-4 text-3xl tracking-wider'>Decentralized</h1>
            <h1 className='mb-4'><span className='text-[var(--primary-blue)]'>Trading </span>Protocol</h1>
            <p className='mb-4 text-xl'>Guaranteed liquidty trading for millions users and top Ethereum applications</p>
            <div className='mt-10'>
                <button className='mr-10 px-7 py-3'>Use Defi</button>
                <button className='px-10 py-3 bg-none border-2 border-[var(--primary-blue)]  text-[var(--primary-blue)]'>FAQ</button> 
            </div>
        </div>
        <div>
                <p className='font-bold text-center text-white tracking-wide'>Total Volume Secured: <span className='text-[var(--primary-blue)] '> $42,104,783,662.47 </span> </p>
            </div>
    </div>
  )
}

export default Hero;