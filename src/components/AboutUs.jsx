import React from 'react'

function AboutUs({ isDarkMode }) {
  return (
    <div className='min-h-screen p-2'>
    <h1 className={`text-5xl font-semibold mb-4 p-1 ${isDarkMode ? 'text-orange-200' : 'text-orange-300'} `}>About Me</h1>
    <div className={`font-medium border border-orange-200 w-4/5 rounded-md text-base p-1 ${isDarkMode ? 'text-white' : ''}`}>
    <p>Hello there, Project Fallen is just a personal project for me to familiarize with MERN stack.</p>
    <br/>
    <p>This project references Project Amber for the UI design, all credits to them.</p>
    <br/>
    <p>This website is not affliated or related to HoYoverse/miHoYo, and all assets used are property of their original owners.</p>
    </div>
    </div>
  )
}

export default AboutUs