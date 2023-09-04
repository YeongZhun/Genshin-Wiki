import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { BsPeopleFill } from 'react-icons/bs'

function SideBar({ isHovered }) {



  return (
    <>
      <div className='w-40 '>
        <Link to='/'>
          <button className={` bg-orange-200/95 rounded-xl mb-4 ${isHovered ? 'w-64' : ''} `}>
            <img src="https://res.cloudinary.com/dv0cc527o/image/upload/v1693643511/qiqi-fallen.gif"
              alt='Return to main page'
              className={`w-24 h-24 mx-8 mb-4 ${isHovered ? 'ml-20' : ''} `} />
          </button>
        </Link>

        <Link to='/characters'>
          <button className={` ml-10 flex flex-col items-center ${isHovered ? 'ml-24 hover:opacity-100' : ''} `}>
            <BsPeopleFill size={35} />
            <p className={`opacity-0 font-bold text-1xl ${isHovered ? 'group-hover:opacity-100' : ''} `}>Characters</p>
          </button>
        </Link>

      </div>
    </>
  )
}

export default SideBar