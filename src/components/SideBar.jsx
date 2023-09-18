import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { BsPeopleFill } from 'react-icons/bs'


function SideBar({ isHovered }) {

  const [isHomeHovered, setIsHomeHovered] = useState(false)
  const [isCharacterBarHovered, setIsCharacterBarHovered] = useState(false)

  const hoverClassHome = isHomeHovered ? 'bg-orange-300/95' : '';
  const hoverClassCharBar = isCharacterBarHovered ? 'bg-orange-300/95' : '';

  const handleMouseEnterHome = () => {
    setIsHomeHovered(true);
  }

  const handleMouseLeaveHome = () => {
    setIsHomeHovered(false);
  }

  const handleMouseEnterCharacterBar = () => {
    setIsCharacterBarHovered(true);
  }

  const handleMouseLeaveCharacterBar = () => {
    setIsCharacterBarHovered(false);
  }

  return (
    <>
      <div className='w-20'>
        <Link to='/'>
          <div className='-mb-2'>
            <button className={` bg-orange-200 rounded-xl ${isHovered ? 'w-64 -ml-0.5' : ''} ${hoverClassHome}`}
              onMouseEnter={handleMouseEnterHome} onMouseLeave={handleMouseLeaveHome}
              onTouchEnd={handleMouseLeaveHome}>
              <img src="https://res.cloudinary.com/dv0cc527o/image/upload/v1693643511/qiqi-fallen.gif"
                alt='Return to main page'
                className={`w-16 h-16 mx-2 mb-2 ${isHovered ? 'ml-24' : ''} `} />
            </button>
          </div>
        </Link>

        <Link to='/characters'>

          <button className={` flex flex-col items-center py-2 ${isHovered ? 'w-64 hover:opacity-100' : ''} ${hoverClassCharBar} `}
            onMouseEnter={handleMouseEnterCharacterBar} onMouseLeave={handleMouseLeaveCharacterBar} 
            onTouchEnd={handleMouseLeaveCharacterBar}>
            
            <BsPeopleFill size={36} />
            <p className={`opacity-0 font-bold text-1xl ${isHovered ? 'group-hover:opacity-100' : ''} `}>Characters</p>
          </button>

        </Link>

      </div>
    </>
  )
}

export default SideBar