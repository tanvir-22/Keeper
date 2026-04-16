import React, { useState } from 'react'
import Frame from '../../public/Frame.png'
import { House } from 'lucide-react';
import { Clock3 } from 'lucide-react';
import { ChartLine } from 'lucide-react';
import { NavLink } from 'react-router';
import { Menu } from 'lucide-react';
import { CircleX } from 'lucide-react';
const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked)
  }
  return (
    <div className="bg-base-100 shadow-sm">

      <div className="navbar   w-11/12 mx-auto">
        <div className="flex-1">
          <img src={Frame} alt="" />
        </div>
        <div className="flex-none">
          <ul className="hidden md:flex menu menu-horizontal px-1">
            <li className='font-semibold text-[#64748b] text-[16px]'>
              <NavLink to="/" className={({ isActive }) => `flex items-center ${isActive ? 'active' : ''}`}><House />Home</NavLink></li>
            <li className='font-semibold text-[#64748b] text-[16px]'>
              <NavLink to="/timeline" className={({ isActive }) => `flex items-center ${isActive ? 'active' : ''}`}><Clock3 />Timeline</NavLink></li>
            <li className='font-semibold text-[#64748b] text-[16px]'>
              <NavLink to="/stats" className={({ isActive }) => `flex items-center ${isActive ? 'active' : ''}`}><ChartLine />Stats</NavLink></li>

          </ul>
          {
            isClicked ? <CircleX onClick={handleClick} className='md:hidden cursor-pointer' /> : <><Menu onClick={handleClick} className='md:hidden cursor-pointer' />
            </>
          }
        </div>
      </div>



      {isClicked && <ul className=" md:flex w-1/2 mx-auto space-y-2   px-1">
        <li className='font-semibold text-[#64748b] text-[16px]'>
          <NavLink to="/" className={({ isActive }) => `flex items-center ${isActive ? 'active' : ''}`}><House />Home</NavLink></li>
        <li className='font-semibold text-[#64748b] text-[16px]'>
          <NavLink to="/timeline" className={({ isActive }) => `flex items-center ${isActive ? 'active' : ''}`}><Clock3 />Timeline</NavLink></li>
        <li className='font-semibold text-[#64748b] text-[16px]'>
          <NavLink to="/stats" className={({ isActive }) => `flex items-center ${isActive ? 'active' : ''}`}><ChartLine />Stats</NavLink></li>

      </ul>}
    </div>
  )
}

export default Navbar