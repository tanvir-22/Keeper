import React from 'react'
import { Link } from 'react-router'

const Error = () => {
  return(
    <div className='min-h-screen bg-[#244D3F] flex flex-col items-center justify-center p-8'>
      <div className='text-center max-w-md'>
        <p className='text-[120px] font-medium text-white opacity-15 leading-none tracking-tighter select-none'>404</p>
        <div className='-mt-10 relative z-10'>
         
          <h1 className='text-white text-2xl mt-10 font-medium mb-3'>Page not found</h1>
          <p className='text-white/60 text-sm leading-relaxed mb-8'>
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className='flex gap-3 justify-center'>
            <Link to='/' className='bg-white text-[#244D3F] px-6 py-2.5 rounded-lg text-sm font-medium'>Go home</Link>
          
          </div>
        </div>
      </div>
    </div>
  )
}


export default Error