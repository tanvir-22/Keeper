import React from 'react'
import Frame from '../../public/Frame.png'
import { House } from 'lucide-react';
import { Clock3 } from 'lucide-react';
import { ChartLine } from 'lucide-react';
const Navbar = () => {
  return (
    <div className="bg-base-100 shadow-sm">

        <div className="navbar   w-11/12 mx-auto">
  <div className="flex-1">
   <img src={Frame} alt="" />
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li className='font-semibold text-[#64748b] text-[16px]'><a className='flex items-center'><House/>Home</a></li>
      <li className='font-semibold text-[#64748b] text-[16px]'><a className='flex items-center'><Clock3/>Timeline</a></li>
      <li className='font-semibold text-[#64748b] text-[16px]'><a className='flex items-center'><ChartLine />Stats</a></li>
     
    </ul>
  </div>
</div>
    </div>
  )
}

export default Navbar