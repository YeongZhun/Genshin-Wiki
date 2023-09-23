import React from 'react'

function Talents({ talents_active, talents_passive, isDarkMode }) {
  return (
    <div className='-ml-5 w-11/12'>
    <div className=''>
      
      <div className={` ${isDarkMode ? 'bg-slate-700' : 'bg-orange-75'} p-4 rounded-t-3xl `}>
      <h2 className={`${isDarkMode ? 'text-amber-100' : 'text-gray-600'} font-semibold text-5xl mx-3 mb-3`}>Active Skills</h2>
        <div className='grid talent-xl:grid-cols-3 talent-l:grid-cols-3 talent-md:grid-cols-2 talent-sm:grid-cols-1 gap-4'>
          {talents_active.map((talent_active, index) => (
            <div key={index} className='border-2 border-gray-400 rounded-2xl '>
              <h3 className={`p-3 font-extrabold ${isDarkMode ? 'text-amber-50' : 'text-gray-800'} text-2xl`}>{talent_active.name}</h3>

              <div className='border-t-2 border-gray-300 p-3 overflow-y-scroll' style={{ maxHeight: '400px' }}>
                <p className={`${isDarkMode ? 'text-amber-50' : 'text-gray-800'} text-base h-auto whitespace-pre-line`} dangerouslySetInnerHTML={{ __html: talent_active.description }}></p>
              </div>
              <br />
            </div>
          ))}
        </div>
      </div>
    </div>

    <div>
      
      <div className={` ${isDarkMode ? 'bg-slate-700' : 'bg-orange-75'} p-4 rounded-b-3xl `}>
      <h2 className={`${isDarkMode ? 'text-amber-100' : 'text-gray-600'} font-semibold text-5xl mx-3 mb-3`}>Passive Skills</h2>
        <div className='grid talent-xl:grid-cols-3 talent-l:grid-cols-3 talent-md:grid-cols-2 talent-sm:grid-cols-1 gap-4'>
          {talents_passive.map((talent_passive, index) => (
            <div key={index} className='border-2 border-gray-400 rounded-2xl '>
              <h3 className={`p-3 font-extrabold ${isDarkMode ? 'text-amber-50' : 'text-gray-800'} text-2xl`}>{talent_passive.name}</h3>

              <div className='border-t-2 border-gray-300 p-3 overflow-y-scroll' style={{ maxHeight: '200px' }}>
                <p className={`${isDarkMode ? 'text-amber-50' : 'text-gray-800'} text-base h-auto whitespace-pre-line`} dangerouslySetInnerHTML={{ __html: talent_passive.description }}></p>
              </div>
              <br />
            </div>
          ))}
        </div>
      </div>
    </div>










    </div>
  )
}

export default Talents