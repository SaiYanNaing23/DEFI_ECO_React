import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
const Navbar = (props) => {
    const [nav,setNav] = useState(false);
    const navHandler = () =>{
        setNav(!nav);
    }
  return (
    <div className='w-full h-[98px] bg-black'>
        <div className='flex justify-between m-auto max-w-[1240px] px-4 items-center h-full'>
            <div>
                <h1 className='text-[#00d8ff]'>Defi</h1>
            </div>
            <div className='hidden md:block'>
                <ul className='text-white flex '>
                    <li>Platform</li>
                    <li>Developer</li>
                    <li>Community</li>
                    <li>About</li>
                    <button className='ml-3 uppercase'>Use Defi</button>
                </ul>
            </div>
            {/* Hamburger Menu */}
            <div className='block md:hidden' onClick={navHandler}>
                {nav ? <AiOutlineClose className='text-white' size={30}></AiOutlineClose> : <AiOutlineMenu className='text-white' size={30}></AiOutlineMenu>}
            </div>

            {/* Mobile Menu */}
            <div className={nav? "w-full bg-black absolute left-0 top-[98px] text-white flex justify-center text-center duration-1000" : "absolute bottom-[100%]"}>
            <ul>
                    <li className='text-2xl'>Platform</li>
                    <li className='text-2xl'>Developer</li>
                    <li className='text-2xl'>Community</li>
                    <li className='text-2xl'>About</li>
                    <button className='m-8 uppercase'>Use Defi</button>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar;