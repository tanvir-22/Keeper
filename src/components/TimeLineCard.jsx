import React from 'react'
import call from '../../public/call.png'
import text from '../../public/text.png'
import video from '../../public/video.png'
const TimeLineCard = ({item}) => {
    let x ;
     if(item.action=="Call"){
        x = call;
     }else if(item.action=="Text"){
        x = text;
     }else if(item.action=='Video'){
        x = video;
     }
     const date = new Date();
  return (
        <div className='flex gap-4 bg-white shadow-md p-3 my-3'>
            <img className='w-10 h-10' src={x} alt="" />
            <div>
                <p>{item.action} with {item.name}</p>
                <p>{date.toLocaleDateString('en-GB')}</p>
            </div>
        </div>
    
  )
}

export default TimeLineCard