import React from 'react'

const FriendsCard = () => {
  return (
    <div className='bg-white shadow-md flex flex-col items-center p-5 gap-3 rounded-md'>
        <img className='w-20 h-20 object-cover rounded-full ' src="https://images.unsplash.com/photo-1494790108377-be9c29b29330" alt="" />

        <h1>David kim</h1>
        <p>62d ago</p>
        
        <p className='badge badge-success'>Work</p>
        <p className='badge badge-error'>Almost Due</p>
    </div>
  )
}

export default FriendsCard