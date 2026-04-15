import React, { useContext, useEffect, useState } from 'react'
import { ListContext } from '../Context/ListProvider'
import TimeLineCard from '../components/TimeLineCard'
import { ChevronDown } from 'lucide-react'
const TimePage = () => {
    const {ListArrayState} = useContext(ListContext)

    const [filterTimeLineList,setFilterTimeLineList] = useState(ListArrayState);
    const [filter,setFilter] = useState();
    useEffect(()=>{
        if(filter){
           
                const filteredArray = ListArrayState.filter((item)=>item.action==filter);
                setFilterTimeLineList(filteredArray);
           
            
        }
    },[filter,ListArrayState])
    return (
        <>
            <div className='bg-[#f7fafc] py-5'>
                <div className='mx-auto w-[80%] '>

                    <div>
                        <h1 className='font-bold text-3xl'>TimeLine</h1>
                        <div className="dropdown dropdown-right mt-2 pb-15">
                            <div tabIndex={0} role="button" className="btn m-1">Filter timeline  <ChevronDown/></div>
                            <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                <li ><button onClick={()=>{setFilter("Call")}}>Call</button></li>
                                <li ><button onClick={()=>{setFilter("Text")}}>Text</button></li>
                                <li ><button onClick={()=>{setFilter("Video")}}>Video</button></li>
                            </ul>
                        </div>
                    </div>

                    {
                        filterTimeLineList.length>0 ? filterTimeLineList.map((item)=><TimeLineCard item = {item}/>): <div>
                            <h1 className='text-5xl text-center py-6'>No Time Line Found</h1>
                            </div>  
                    }


                </div>
            </div>
        </>
    )
}

export default TimePage