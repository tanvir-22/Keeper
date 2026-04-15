import React, { use } from 'react'
import FriendsCard from './FriendsCard'
import StatCard from './StatCard'
import { Bell,Archive,Trash,Phone,MessageSquareMore ,Video} from 'lucide-react'
import { useLoaderData, useParams } from 'react-router'
const Details = () => {
    const data = useLoaderData();
        console.log(useLoaderData());
    const {id} = useParams()
        console.log(data);
        console.log(id);
    const item = data.find((friend)=>id==friend.id);
  return (
    <div className='bg-[#f7fafc] py-5'>


        <div className='flex justify-center  w-[80%] mx-auto  gap-5 p-6'>
            <div className='w-1/3'>
                 <div  className='bg-white shadow-md flex flex-col items-center p-5 gap-3 rounded-md'>
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
       <p>{item.status}</p>
       <p>{item.bio}</p>
       <p>{item.email}</p>
    </div>
                    
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
                <StatCard title={'Days Since Contact'} len={item.days_since_contact}/>
                <StatCard title={"Goal(Days)"} len={item.goal}/>
                <StatCard title={'Next Due'} len={item.next_due_date}/>
            </div>
            <div className='bg-white col-span-3 my-2 p-5'>
                <div className='flex justify-between items-center text-[20px] '>
                    <h1  >Relationship Goal</h1>
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