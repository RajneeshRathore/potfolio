import React from 'react'

function Header() {
  return (
    <div className='w-full mx-auto flex justify-between text-white font-sans px-3 py-4 bg-zinc-800'>
   <a href='./' className='text-xl font-bold  '>MR.RAJNEESH</a>
  <div className='flex gap-6'>
  <div className='mx-auto flex w-xl justify-around items-center'>
  <a href="">About</a>
   <a href="">Profile</a>
   <a href="">Contacts</a>
  </div>
  <button className=' bg-blue-500 shadow-lg shadow-blue-500/50  px-6 py-1 border-red-200 rounded-md'>Login</button>
  <button className='bg-zinc-500 shadow-lg shadow-zinc-500/50 px-4 py-1 rounded-md'>Signup</button>
  </div>
    </div>
  )
}

export default Header