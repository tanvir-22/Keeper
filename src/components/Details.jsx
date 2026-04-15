import React from 'react'
import FriendsCard from './FriendsCard'
import StatCard from './StatCard'
import { Bell,Archive,Trash,Phone,MessageSquareMore ,Video} from 'lucide-react'
const Details = () => {
  return (
    <div className='bg-[#f7fafc] py-5'>


        <div className='flex justify-center  w-[80%] mx-auto  gap-5 p-6'>
            <div className='w-1/3'>
                <FriendsCard/>
                    
                    <div className='flex gap-2 bg-[white] p-5 rounded-md my-3'>
                        <Bell/>
                        <p>Snooze 2 weeks</p>
                    </div>
                    <div className='flex gap-2 bg-[white] p-5 rounded-md my-3'>
                        <Archive/>
                        <p>Archive</p>
                    </div>
                    <div className='gap-2 text-red-500 flex bg-[white] p-5 rounded-md my-3'>
                        <Trash/>
                        <p>Snooze 2 weeks</p>
                    </div>

            </div>
           <div className='grid grid-cols-3 grid-rows-3'>
             <div className='flex gap-4  col-span-3'>
                <StatCard/>
                <StatCard/>
                <StatCard/>
            </div>
            <div className='bg-white col-span-3 my-2 p-4'>
                <div className='flex justify-between text-[20px] py-2'>
                    <h1 >Relationship Goal</h1>
                    <button className='btn '>Edit</button>
                </div>
                <p className='text-[#64748B]'>Connect every <span className='font-semibold'>30 days</span></p>
            </div>
            <div className='bg-white my-2 col-span-3 p-4'>
                
                    <h1 className='text-[#244D3F] text-[20px] '>Quick Check-In</h1>
                    <div className='flex items-center justify-around gap-4 '>
                        <div className='py-7 px-10 bg-[#f7fafc]' ><button><Phone/>Call</button></div>
                        <div className='py-7 px-10 bg-[#f7fafc]' ><button><MessageSquareMore/>Text</button></div>
                        <div className='py-7 px-10 bg-[#f7fafc]' ><button><Video/>Video</button></div>
                    </div>
               
               
            </div>


           </div>
        </div>
    </div>
  )
}

export default Details