import React from 'react'
import {SiTailwindcss, SiReact} from 'react-icons/si'
import { BsGithub } from 'react-icons/bs'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='bottom-0 w-full  bg-orange-100 p-2 footer-lg:h-20 footer-md:h-32 footer-sm:h-64 flex flex-row items-center'>
      <div className='font-medium text-base p-1'>
      <p>This project is for me to gain familiarity with the MERN stack, and references Project Amber for the UI design, all credits to them.</p>
      <p>This website is not affliated or related to HoYoverse/miHoYo, and all assets used are property of their original owners.</p>
      </div>

      <div className='flex-grow'></div>
      <div className='p-1 mx-4'>
      <p className='font-semibold text-base'>Made with:</p>
      <div className='flex gap-2 justify-center'>
      <Link to='https://react.dev/'>
      <div><SiReact size={30}/></div>
      </Link>
      <Link to='https://tailwindcss.com/'>
      <div><SiTailwindcss size={30}/></div>
      </Link>
      </div>
      </div>

      <div className='p-1'>
      <p className='font-semibold text-base'>My Github:</p>
      <div className='flex gap-2 justify-center'>
      <Link to='https://github.com/YeongZhun'>
      <div><BsGithub size={30}/></div>
      </Link>
      </div>
      </div>
    </div>


  )
}

export default Footer