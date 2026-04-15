import React, { use, useContext } from 'react'
import FriendsCard from './FriendsCard'
import StatCard from './StatCard'
import { Bell, Archive, Trash, Phone, MessageSquareMore, Video } from 'lucide-react'
import { useLoaderData, useParams } from 'react-router'
import { ListContext } from '../Context/ListProvider'
const Details = () => {
    const data = useLoaderData();

    const { id } = useParams()

    const item = data.find((friend) => id == friend.id);

    const { ListArrayState, setListArrayState, handleListArray } = useContext(ListContext);
    const colorStatus = {
        "almost due": 'bg-[#f0ae43]',
        "on_track": 'bg-[#244d3f]',
        "overdue": 'bg-[#f04343]',
    }
    return (
        <div className='bg-[#f7fafc] py-5'>


            <div className='flex flex-col md:flex-row justify-center w-full  md:w-[80%] mx-auto  gap-5 p-6'>
                <div className='md:w-1/3 w-full'>
                    <div className=' bg-white shadow-md flex flex-col items-center p-5 gap-3 rounded-md'>
                        <img className='w-20 h-20 object-cover rounded-full ' src={item.picture} alt="" />

                        <h1>{item.name}</h1>
                        <p>{item.days_since_contact}d ago</p>



                        <div className='flex gap-3'>
                            {
                                item.tags.map((tag) => (
                                    <p className='badge badge-soft badge-success'>{tag}</p>
                                ))
                            }
                        </div>
                        <p className={` p-1 rounded-md text-white ${colorStatus[item.status]}`}>{item.status}</p>
                        <p className='text-center'>{item.bio}</p>
                        <p className='text-center'>{item.email}</p>
                    </div>

                    <div className='flex justify-center gap-2 bg-[white] p-5 rounded-md my-3'>
                        <Bell />
                        <p>Snooze 2 weeks</p>
                    </div>
                    <div className='flex justify-center gap-2 bg-[white] p-5 rounded-md my-3'>
                        <Archive />
                        <p>Archive</p>
                    </div>
                    <div className='gap-2 justify-center text-red-500 flex bg-[white] p-5 rounded-md my-3'>
                        <Trash />
                        <p>Delete</p>
                    </div>

                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 grid-rows-3'>
                    <div className='flex flex-col md:flex-row gap-4  md:col-span-3'>
                        <StatCard title={'Days Since Contact'} len={item.days_since_contact} />
                        <StatCard title={"Goal(Days)"} len={item.goal} />
                        <StatCard title={'Next Due'} len={item.next_due_date} />
                    </div>
                    <div className='bg-white col-span-3 justify-between  place-content-center items-center my-2 md:p-5'>
                        <div className='flex flex-col md:flex-row md:justify-between items-center text-[20px] '>
                            <h1  className='text-center'>Relationship Goal</h1>
                            <button className='btn py-1'>Edit</button>
                        </div>
                        <p className='text-[#64748B] text-center py-1'>Connect every <span className='font-semibold'>{item.goal} days</span></p>
                    </div>
                    <div className='bg-white my-2 col-span-3 p-4'>

                        <h1 className='text-[#244D3F] text-[20px] text-center py-2'>Quick Check-In</h1>
                        <div className=' flex flex-col md:flex-row items-center justify-around gap-4 '>
                            <div  >
                                <button className='flex flex-col  py-7 px-20 md:px-10 bg-[#f7fafc] cursor-pointer' onClick={() => { handleListArray(item, "Call") }}><Phone />
                                    Call
                                </button>
                            </div>
                            <div  >
                                <button className='flex flex-col  items-center py-7 px-20 md:px-10 bg-[#f7fafc] cursor-pointer' onClick={() => { handleListArray(item, "Text") }}><MessageSquareMore />
                                    Text
                                </button>
                            </div>
                            <div  >
                                <button className='flex flex-col  items-center py-7 px-20 md:px-10 bg-[#f7fafc] cursor-pointer' onClick={() => { handleListArray(item, "Video") }}><Video />Video
                                </button>
                            </div>
                        </div>


                    </div>


                </div>
            </div>
        </div>
    )
}

export default Details