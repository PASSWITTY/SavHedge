import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import logo from "../assets/logo.svg";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-1 text-black'>
      <div className='flex '>
        <img src={logo} alt="logo" className='h-25 w-11'/>
        <h1 className='w-full text-3xl font-bold font-signature text-[#a67c00]'>SAVHEDGE.</h1>
      </div>
      
      <ul className='hidden md:flex'>
        <li className='p-4'>Home</li>
        <li className='p-4'>Careers</li>
        <li className='p-4'>About</li>
        <li className='p-4'>Contact</li>
        <button className=' text-white w-fit px-6 py-2 mr-2 my-2 flex items-center rounded-md bg-[#7BA276]'>Sign In</button>
        <button className=' text-white w-fit px-6 py-2 my-2 flex items-center rounded-md bg-[#013745]'>Sign Up</button>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r bg-red-200 ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <div className='flex '>
          <img src={logo} alt="logo" className='h-25 w-11'/>
          <h1 className='w-full text-3xl font-bold font-signature text-[#a67c00]'>SAVHEDGE.</h1>
        </div>
        <li className='p-4 '>Home</li>
        <li className='p-4 '>Resources</li>
        <li className='p-4 '>About</li>
        <li className='p-4 '>Contact</li>
        <button className=' text-white w-fit px-6 py-2 my-2 ml-2 flex items-center rounded-md bg-[#7BA276]'>Sign In</button>
        <button className=' text-white w-fit px-6 py-2 my-2 ml-2 flex items-center rounded-md bg-[#013745]'>Sign Up</button>
      </ul>

    </div>
  );
};

export default Navbar;