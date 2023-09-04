import React from 'react'
import Footer from './Footer'
import ServerResetTimer1 from './ServerTimer'
import {useState} from 'react'

function MainPage() {

  const [selectedTimezone, setSelectedTimezone] = useState('Asia')

  const handleTimezoneChange = (timezone) => {
    setSelectedTimezone(timezone)
  }

  return (
    <div className='flex flex-col min-h-screen'>
    <div className='container  p-8 min-h-full min-w-full flex-grow'>
      <div className='flex items-center gap-4'>
      <img src="https://res.cloudinary.com/dv0cc527o/image/upload/v1693719993/RilakummaFlipped.png" className='w-12 mb-8' />
      <h1 className="text-5xl font-semibold mb-4 text-amber-500 whitespace-nowrap">Project Fallen Kuma</h1>
      <img src="https://res.cloudinary.com/dv0cc527o/image/upload/v1693719633/Rilakumma.png" className='w-12 mb-8' />
      </div>
      <p className='font-semibold'>An ongoing project to compile your journey in the Genshin Impact world!</p>
      <br/>
      <div className='w-2/3'>
      <img src="https://res.cloudinary.com/dv0cc527o/image/upload/v1693720497/GenshinWallpaper2.jpg" className='rounded-md' />
      <p className='text-lg italic '>"Don't lose faith in that which you have lost. In this new world, you will never be alone. Where you leave your footprints, and where you have yet to stride — your new world will unfold before you.
Welcome to a new world." - Genshin Impact </p>
      </div>
      <br/>
      <h2 className='text-4xl mb-2 font-medium'>Server Reset</h2>

      <div className='flex flex-col w-80 gap-0 rounded-md overflow-hidden border-2 border-orange-300'>
      <div className='flex flex-row items-center'>
        <button onClick={() => handleTimezoneChange('Asia')} className={` border-2 border-orange-300 text-center p-1 border-r-0  text-2xl w-full ${selectedTimezone === 'Asia' ? 'bg-orange-300/80' : 'bg-orange-200/80'} `}>Asia</button>
        <button onClick={() => handleTimezoneChange('Europe')} className={` border-2 border-orange-300 text-center p-1 border-r-0  text-2xl w-full ${selectedTimezone === 'Europe' ? 'bg-orange-300/80' : 'bg-orange-200/80'} `}>Europe</button>
        <button onClick={() => handleTimezoneChange('America')} className={` border-2 border-orange-300 text-center p-1 text-2xl w-full ${selectedTimezone === 'America' ? 'bg-orange-300/80' : 'bg-orange-200/80'} `}>America</button>
      </div>
      
      <div className='border-2 border-orange-300 border-t-0 text-center w-full p-2 bg-orange-100/80'>
      <ServerResetTimer1  selectedTimezone={selectedTimezone} />
      </div>
      </div>
    </div>



    <div className='flex-none'>
      <Footer />
    </div>
    </div>
  )
}

export default MainPage