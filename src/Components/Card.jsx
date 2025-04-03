import React from 'react'
import pic from '../assets/img1.avif'
function Card() {
  return (
   <div className='w-full h-full '>
     <img src={pic} alt="cover photo" className='w-full h-full rounded-t-full bg-cover'/>
   </div>
  )
}

export default Card