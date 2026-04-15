import React from 'react'
import hand from '../../public/hndshake.jpg'
const TimeLine = () => {
  return (
   <div className='bg-[#f7fafc]'>
 <div className='mx-auto w-[80%] '>

        <div>
            <h1>TimeLine</h1>
            <div className="dropdown dropdown-center">
  <div tabIndex={0} role="button" className="btn m-1">Filter timeline  ⬇</div>
  <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
        </div>


        <div className='flex bg-white shadow-md p-3 my-3'>
            <img className='w-20 h-20' src={hand} alt="" />
            <div>
                <p>Meetup with Tom bekar</p>
                <p>{Date.now()}</p>
            </div>
        </div>
    </div>
   </div>
  )
}

export default TimeLine