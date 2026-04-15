import React, { use } from 'react'
import { Link } from 'react-router'

const FriendsCard = ({item}) => {
  const colorStatus = {
    "almost due": 'bg-[#f0ae43]',
    "on_track": 'bg-[#244d3f]',
    "overdue": 'bg-[#f04343]',
  }
  return (
    <Link to={`/friendsDetails/${item.id}`} className='bg-white shadow-md flex flex-col items-center p-5 gap-3 rounded-md'>
        <img className='w-20 h-20 object-cover rounded-full ' src={item.picture} alt="" />

        <h1>{item.name}</h1>
        <p>{item.days_since_contact}d ago</p>
        
        
        
       <div className='flex gap-3'>
         {
          item.tags.map((tag)=>(
            <p className='badge badge-soft badge-success'>{tag}</p>
          ))
        }
       </div>
       <p className={` p-1 rounded-md text-white ${colorStatus[item.status]}`}>{item.status}</p>
    </Link>
  )
}

export default FriendsCard