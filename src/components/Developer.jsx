import React from 'react';
import TerminalImg from "../assets/terminal.png"

const Developer = () => {
  return (
    <div className='w-full bg-black text-white'>
        <div className='max-w-[1240px] mx-auto px-4 py-16 lg:flex gap-10 '>
        <div >
        <h1 className='mb-4'>Superpowers for DEFI developers.</h1>
          <p>
            Checkout the <span className='text-blue-400'>documentation</span> , the quick start or a guide below to
            integrate your project with thousands of tokens and billions of
            liquidity.
          </p>
        </div>
        <div className='flex justify-center py-12 lg:py-0'>
            <img className='max-w-[240px] shadow-lg shadow-cyan-500/50 lg:max-w-[500px] ' src={TerminalImg} alt="" />
        </div>
        </div>

    </div>
  )
}

export default Developer;