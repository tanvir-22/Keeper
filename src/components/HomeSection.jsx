import React from 'react'
import StatCard from './StatCard'
import FriendsCard from './FriendsCard'
import {use} from 'react'
const HomeSection = ({friendsPromise}) => {
    const data = use(friendsPromise);
  console.log(data);

    const getLen = (statusName) => {
        let statCardLen = 0;
        data.forEach(item => {

            if (item.status == statusName) {
                statCardLen += 1
            }
        }
        )
        return statCardLen;
    }
 
    return (
        <div className='bg-[#f7fafc] py-10'>
            <div className='w-[80%] mx-auto '>
                <div className='grid grid-cols-4 gap-7 p-5'>
                    <StatCard title={"Total Friends"} len={data.length}/>
                    <StatCard title={"On Track"} len={getLen("on_track")}/>
                    <StatCard title={"Need Attention"} len={getLen("overdue")}/>
                    <StatCard title={"Interactions This Month"} len={getLen("almost due")}/>
                    
                </div>
                <div className='divider'>

                </div>

                <div className='grid grid-cols-4 gap-5'>
                   {
                     data.map((item)=>(
                        <FriendsCard item={item}/>
                    ))
                   }
                </div>
            </div>
        </div>
    )
}

export default HomeSection