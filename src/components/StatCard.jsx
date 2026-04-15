import React from 'react'

const StatCard = ({title,len}) => {
  return (
    <div className='p-10 flex flex-col items-center justify-center bg-white '>

        <h1>{len}</h1>
        <p>{title}</p>
    </div>
  )
}

export default StatCard