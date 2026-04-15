import React from 'react'
import Graph from './Graph'
const Stat = () => {
  return (
    <div className='bg-[#f7fafc] py-6'>

        <div className='w-[70%] mx-auto'>
          <h1 className='text-3xl font-bold text-[#1F2937]'>Friendship Analytics</h1>

      <div className='bg-white p-7'>
        <h1 className='text-[#244D3F] text-xl'>By Interaction Type</h1>

          <Graph/>
      </div>
        </div>
    </div>
  )
}

export default Stat