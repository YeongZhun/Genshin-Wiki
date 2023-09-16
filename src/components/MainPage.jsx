import React from 'react'
import Footer from './Footer'
import ServerResetTimer1 from './ServerTimer'
import { useState, useEffect, useRef } from 'react'


function MainPage() {


  const [selectedTimezone, setSelectedTimezone] = useState('Asia')

  // These are for the auto images
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoSlidePaused, setIsAutoSlidePaused] = useState(false);

  const handleTimezoneChange = (timezone) => {
    setSelectedTimezone(timezone)
  }

  const images = [
    "https://res.cloudinary.com/dv0cc527o/image/upload/v1694344167/image-slider/OsmantusWine.jpg",
    "https://res.cloudinary.com/dv0cc527o/image/upload/v1694342586/image-slider/Mondstatd.jpg",
    "https://res.cloudinary.com/dv0cc527o/image/upload/v1694342570/image-slider/Liyue.png",
    "https://res.cloudinary.com/dv0cc527o/image/upload/v1694342512/image-slider/Inazuma.jpg",
    "https://res.cloudinary.com/dv0cc527o/image/upload/v1694342508/image-slider/Sumeru.jpg",
    "https://res.cloudinary.com/dv0cc527o/image/upload/v1694342506/image-slider/Fontaine.webp"
  ]

  // Define a ref to hold the interval ID for auto-sliding
  const autoSlideIntervalRef = useRef();

  // Function to move to the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleRadioButtonChange = (index) => {
    setCurrentIndex(index);
    setIsAutoSlidePaused(true);

    // Reset the auto slide interval after 5 seconds
    setTimeout(() => {
      setIsAutoSlidePaused(false);
    }, 5000);
  };

  useEffect(() => {
    // Start auto-sliding with a 5-second interval (adjust as needed)
    // We use useRef because we dont want to re-render every 5 sec when image change
    autoSlideIntervalRef.current = setInterval(() => {
      if (!isAutoSlidePaused) {
        nextImage()
      }
    }, 5000);

    // Clear the interval when the component unmounts
    return () => {
      clearInterval(autoSlideIntervalRef.current);
    };
  }, [isAutoSlidePaused]);

  return (
    <div className='flex flex-col min-h-screen'>
      <div className='container  p-8 min-h-full min-w-full flex-grow'>
        <div className='flex items-center gap-4'>
          <img src="https://res.cloudinary.com/dv0cc527o/image/upload/v1693719993/RilakummaFlipped.png" className='w-12 mb-8' />
          <h1 className="text-5xl font-semibold mb-4 text-amber-500 mainpage-md:whitespace-nowrap mainpage-sm:text-center">Project Fallen</h1>

          <img src="https://res.cloudinary.com/dv0cc527o/image/upload/v1693719633/Rilakumma.png" className='w-12 mb-8' />
        </div>
        <p className='font-semibold'>An ongoing project to compile your journey in the Genshin Impact world!</p>
        <br />

        <div className='w-2/3 relative ' >
          <div className='image-container relative mainpage-image-md:w-150 mainpage-image-sm:w-120 mainpage-image-ssm:w-80'>
            <img src={images[currentIndex]} className='rounded-md ' />
            <div className='radio-buttons-container absolute bottom-0 left-0 right-0 text-center'>
              {images.map((_, index) => (
                <label key={index} className='mx-1'>
                  <input
                    type='radio'
                    name='imageRadio'
                    value={index}
                    checked={index === currentIndex}
                    onChange={() => handleRadioButtonChange(index)}
                  />
                  <span className={`radio-button-dot ${index === currentIndex ? 'active' : ''}`}></span>
                </label>
              ))}
            </div>
          </div>
          <p className='text-lg italic mainpage-image-md:w-150 mainpage-image-sm:w-80 mt-1'>"Osmanthus wine tastes the same as I remember... But where are those who share the memory?" - Zhongli</p>
        </div>





        <br />
        <h2 className='text-4xl mb-2 font-medium text-amber-500'>Server Reset</h2>

        <div className='flex flex-col w-80 gap-0 rounded-md overflow-hidden border-2 border-orange-300'>
          <div className='flex flex-row items-center'>
            <button onClick={() => handleTimezoneChange('Asia')} className={` border-2 border-orange-300 text-center p-1 border-r-0  text-2xl w-full ${selectedTimezone === 'Asia' ? 'bg-orange-300/80' : 'bg-orange-200/80'} `}>Asia</button>
            <button onClick={() => handleTimezoneChange('Europe')} className={` border-2 border-orange-300 text-center p-1 border-r-0  text-2xl w-full ${selectedTimezone === 'Europe' ? 'bg-orange-300/80' : 'bg-orange-200/80'} `}>Europe</button>
            <button onClick={() => handleTimezoneChange('America')} className={` border-2 border-orange-300 text-center p-1 text-2xl w-full ${selectedTimezone === 'America' ? 'bg-orange-300/80' : 'bg-orange-200/80'} `}>America</button>
          </div>

          <div className='border-2 border-orange-300 border-t-0 text-center w-full p-2 bg-orange-100/80'>
            <ServerResetTimer1 selectedTimezone={selectedTimezone} />
          </div>

          <div>

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