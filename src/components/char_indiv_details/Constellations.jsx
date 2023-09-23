import React from 'react'

function Constellations({ constellation, isDarkMode }) {
  return (
    <div className={` ${isDarkMode ? 'bg-slate-700' : 'bg-orange-75'} p-4 rounded-2xl -ml-5 w-11/12`}>
    <div className='grid cons-2xl:grid-cols-3 cons-xl:grid-cols-3 cons-l:grid-cols-3 cons-md:grid-cols-3 cons-sm:grid-cols-3 
    cons-ssm:grid-cols-2 gap-4'>
      {constellation.map((constellation, index) => (
        <div key={index} className='border-2 border-gray-400 rounded-2xl 
        '>
          <h3 className={`p-3 font-extrabold ${isDarkMode ? 'text-amber-50' : 'text-gray-800'} text-2xl`}>{constellation.name}</h3>

          <div className='border-t-2 border-gray-300 p-3 overflow-y-scroll'>
            <p className={` ${isDarkMode ? 'text-amber-50' : 'text-gray-800'} text-base h-100 whitespace-pre-line`} dangerouslySetInnerHTML={{ __html: constellation.description }}></p>
          </div>
          <br />
        </div>
      ))}
    </div>
  </div>
  )
}

export default Constellations