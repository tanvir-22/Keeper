import React from 'react'
import { Plus } from 'lucide-react'
const Banner = () => {
  return (
   <div className='bg-[#f7fafc] h-full'>
     <div className=' py-15 w-11/12 mx-auto flex justify-center items-center flex-col'>

        <h1 className='text-bold text-5xl text-[#1F2937]'>Friends to keep close in your life</h1>
        <p className='py-5 text-center text-[#64748b]'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
relationships that matter most.</p>
        <button className='flex px-4 py-2 gap-1 rounded-md text-white bg-[#244D3f]'><Plus/> Add a Friend</button>
    </div>
   </div>
  )
}

export default Banner