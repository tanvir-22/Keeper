import React from 'react'
import StatCard from './StatCard'
import FriendsCard from './FriendsCard'

const HomeSection = () => {
    return (
        <div className='bg-[#f7fafc]'>
            <div className='w-[80%] mx-auto '>
                <div className='grid grid-cols-4 gap-7 p-5'>
                    <StatCard />
                    <StatCard />
                    <StatCard />
                    <StatCard />
                </div>
                <div className='divider'>

                </div>

                <div className='grid grid-cols-4 gap-5'>
                    <FriendsCard />
                    <FriendsCard />
                    <FriendsCard />
                    <FriendsCard />
                    <FriendsCard />
                    <FriendsCard />
                    <FriendsCard />
                    <FriendsCard />
                    <FriendsCard />
                    <FriendsCard />
                    <FriendsCard />
                    <FriendsCard />
                </div>
            </div>
        </div>
    )
}

export default HomeSection