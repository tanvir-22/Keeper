import React from 'react'
import Facebook from '../../public/Facebook.png'
import insta from '../../public/Instagram.png'
import Twiter from '../../public/Twitter.png'
const Footer = () => {
  return (
    <div className='bg-[#244D3F]'>

        <div className='flex flex-col items-center p-10'>
            <h1 className='text-white text-3xl md:text-5xl font-bold py-2'>KeenKeeper</h1>
            <p className='text-white text-center'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
            <p className='text-white py-2'>Social Links</p>
            <div className='flex   gap-3'>
                <img src={Facebook} alt="" />
                <img src={insta} alt="" />
                <img src={Twiter} alt="" />
            </div>
            <div className='divider divider-primary-content'>

            </div>

            <div className='text-[#fafafa] flex flex-col md:flex-row gap-10 w-11/12 justify-between'>
                <p>© 2026 KeenKeeper. All rights reserved.</p>
                <div className='flex  gap-3' >
          
     
        
           <p>  Privacy Policy </p>
           <p>    Terms of Service   </p>
           <p>   Cookies</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer