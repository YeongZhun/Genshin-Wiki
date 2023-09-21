import React from 'react'
import { BiSolidShield } from 'react-icons/bi'
import { FaBook, FaHeart } from 'react-icons/fa'
import { RiSwordFill } from 'react-icons/ri'

function Profile({ character, isDarkMode }) {

  return (
    <div className={`char-md:sticky char-md:right-0 char-md:top-0 ${isDarkMode ? 'bg-slate-700' : 'bg-orange-75'} p-4  rounded-2xl border-gray-400 border-2 shadow-md w-150 char-sm:w-100 char-sm:ml-6 char-ssm:w-72 char-ssm:ml-6`}>
    <p className={`font-bold text-2xl ${isDarkMode ? 'text-amber-50' : 'text-gray-800'} mb-2 mx-2`}>Lvl. 90: </p>

    <div className={`flex ${isDarkMode ? 'bg-gray-500/50 text-amber-50' : 'bg-amber-50 text-gray-800'}`}>
      <div className='flex gap-1 text-xl font-semibold my-0.5 mx-2'>
        <FaHeart size={25} color="white"/> Base HP:
      </div>
      <div className='flex-grow'></div>
      <div className='flex text-xl font-semibold mx-2'>{character.hp}</div>
    </div>

    <div className={`flex ${isDarkMode ? 'bg-slate-100/10 text-amber-50' : 'bg-orange-100 text-gray-800'}`}>
      <div className='flex gap-1 text-xl font-semibold my-0.5 mx-2'>
        <RiSwordFill size={25} /> Base Atk:
      </div>
      <div className='flex-grow'></div>
      <div className='flex text-xl font-semibold mx-2'>{character.attack}</div>
    </div>

    <div className={`flex ${isDarkMode ? 'bg-gray-500/50 text-amber-50' : 'bg-amber-50 text-gray-800'}`}>
      <div className='flex gap-1 text-xl font-semibold my-0.5 mx-2'>
        <BiSolidShield size={25} /> Base Def:
      </div>
      <div className='flex-grow'></div>
      <div className='flex text-xl font-semibold mx-2'>{character.defence}</div>
    </div>

    <div className={`flex ${isDarkMode ? 'bg-slate-100/10 text-amber-50' : 'bg-orange-100 text-gray-800'}`}>
      <div className='flex gap-1 text-xl font-semibold my-0.5 mx-2'>
        <FaBook size={25} /> Base EM:
      </div>
      <div className='flex-grow'></div>
      <div className='flex text-xl font-semibold mx-2'>{character.elemental_mastery}</div>
    </div>

    <br />
    <br />

    <div className={`flex ${isDarkMode ? 'bg-gray-500/50 text-amber-50' : 'bg-amber-50 text-gray-800'}`}>
      <div className='flex gap-1 text-xl font-semibold my-0.5 mx-2'>
        Element:
      </div>
      <div className='flex-grow'></div>
      <div className='flex text-xl font-semibold mx-2'>{character.element}</div>
    </div>

    <div className={`flex ${isDarkMode ? 'bg-slate-100/10 text-amber-50' : 'bg-orange-100 text-gray-800'}`}>
      <div className='flex gap-1 text-xl font-semibold my-0.5 mx-2'>
        Constellation:
      </div>
      <div className='flex-grow'></div>
      <div className='flex text-xl font-semibold mx-2'>{character.constellation_name}</div>
    </div>

    <br />
    <br />

    <div className={`flex ${isDarkMode ? 'bg-gray-500/50 text-amber-50' : 'bg-amber-50 text-gray-800'}`}>
      <div className='flex gap-1 text-xl font-semibold my-0.5 mx-2'>
        VA (JP):
      </div>
      <div className='flex-grow'></div>
      <div className='flex text-xl font-semibold mx-2'>{character.voice}</div>
    </div>

    <div className={`flex ${isDarkMode ? 'bg-slate-100/10 text-amber-50' : 'bg-orange-100 text-gray-800'}`}>
      <div className='flex gap-1 text-xl font-semibold my-0.5 mx-2'>
        Birthday:
      </div>
      <div className='flex-grow'></div>
      <div className='flex text-xl font-semibold mx-2'>{character.birthday}</div>
    </div>

    <br />

    <div className={`flex text-lg font-semibold m-2 ${isDarkMode ? 'text-amber-50' : 'text-gray-800'}`}>{character.description}</div>


  </div>
  )
}

export default Profile