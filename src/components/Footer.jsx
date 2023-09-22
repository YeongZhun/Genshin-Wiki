import React from 'react'
import {SiTailwindcss, SiReact} from 'react-icons/si'
import { BsGithub } from 'react-icons/bs'
import { Link } from 'react-router-dom'


function Footer({isDarkMode}) {
  return (
    <div className={`bottom-0 w-full  ${isDarkMode ? 'bg-slate-800 border-gray-500/70' : 'bg-orange-100 border-gray-300'} p-4 footer-lg:h-20 footer-md:h-32 footer-sm:h-44 flex flex-row items-center border-t-2  `}>
      <Link to='/AboutUs'>
      <div className={`font-semibold underline text-base p-1 ${isDarkMode ? 'text-white' : ''}`}>
      About Me!
      </div>
      </Link>
      <div className='flex-grow'></div>
      <div className={`p-1 mx-4 ${isDarkMode ? 'text-white' : ''}`}>
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

      <div className={`p-1 ${isDarkMode ? 'text-white' : ''}`}>
      <p className='font-semibold text-base'>My Github:</p>
      <div className='flex gap-2 justify-center'>
      <Link to='https://github.com/YeongZhun/Genshin-Wiki'>
      <div><BsGithub size={30}/></div>
      </Link>
      </div>
      </div>
    </div>


  )
}

export default Footer