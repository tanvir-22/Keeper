import React from 'react'

const StatCard = ({title,len}) => {
  return (
    <div className='p-10 flex flex-col items-center justify-center bg-white '>

        <h1 className='text-[#244D3f] text-3xl'>{len}</h1>
        <p className='text-[#64748B] '>{title}</p>
    </div>
  )
}

export default StatCard