import React from 'react'
import Card from './Card'

function Profile() {
  return (
     <div className='w-full h-screen'>
        <div className='mx-auto flex h-screen w-full bg-zinc-300 py-16'>
      <div className='px-6 w-4/4 h-6/8'>
        <Card/>
      </div>
      <div>
       <p className='px-3 font-bold text-7xl '>Hi, i am Rajneesh.</p>
       <h1 className='px-4 my-4 font-bold text-5xl text-orange-300  py-3'>Full Stack Developer!</h1>
       <p className='px-4 text-wrap text-lg italic'>As a Full Stack Developer, I specialize in designing and building scalable web applications, seamlessly integrating both frontend and backend technologies. With expertise in modern frameworks like React, Node.js, and Express, I develop intuitive user interfaces while ensuring efficient database management using MongoDB and SQL. My passion lies in creating high-performance, secure, and user-friendly applications that solve real-world problems. Constantly staying updated with the latest industry trends, I strive to write clean, maintainable code and collaborate effectively within teams to deliver robust software solutions.</p>
       <button className='mt-2 ml-3 font-bold text-white bg-zinc-900 px-5 py-3 rounded-full'>view profile</button>
      </div>
    </div>
     </div>
  )
}

export default Profile