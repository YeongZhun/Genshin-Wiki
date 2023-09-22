import React from 'react'
import Footer from './Footer'
import ServerResetTimer1 from './ServerTimer'
import { useState, useEffect, useRef } from 'react'
import { HiOutlineChevronDoubleLeft, HiOutlineChevronDoubleRight } from 'react-icons/hi'

function MainPage({ isDarkMode }) {


  const [selectedTimezone, setSelectedTimezone] = useState('Asia')

  const [isLeftImageHover, setIsLeftImageHover] = useState(false)
  const [isRightImageHover, setIsRightImageHover] = useState(false)

  // These are for the auto images
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoSlidePaused, setIsAutoSlidePaused] = useState(false);

  const handleTimezoneChange = (timezone) => {
    setSelectedTimezone(timezone)
  }

  const handleImageLeftHover = isLeftImageHover ? 'text-amber-100' : 'text-amber-100/30';
  const handleImageRightHover = isRightImageHover ? 'text-amber-100' : 'text-amber-100/30';

  const handleMouseEnterImageLeft = () => {
    setIsLeftImageHover(true);
  }

  const handleMouseLeaveImageLeft = () => {
    setIsLeftImageHover(false);
  }

  const handleMouseEnterImageRight = () => {
    setIsRightImageHover(true);
  }

  const handleMouseLeaveImageRight = () => {
    setIsRightImageHover(false);
  }

  const images = [
    "https://res.cloudinary.com/dv0cc527o/image/upload/v1694344167/image-slider/OsmantusWine.jpg",
    "https://res.cloudinary.com/dv0cc527o/image/upload/v1695297848/GImontake/zxjwvb5b5fgpumorwgdk.avif",
    "https://res.cloudinary.com/dv0cc527o/image/upload/v1694342586/image-slider/Mondstatd.jpg",
    "https://res.cloudinary.com/dv0cc527o/image/upload/v1695297847/GImontake/qh7gle69rf2wwcpiytm2.jpg",
    "https://res.cloudinary.com/dv0cc527o/image/upload/v1695297846/GImontake/quwr0qyxyhbm0hbuxht1.jpg",
    "https://res.cloudinary.com/dv0cc527o/image/upload/v1694342570/image-slider/Liyue.png",
    "https://res.cloudinary.com/dv0cc527o/image/upload/v1695297847/GImontake/ft6nipadwuuvh0gjs6im.jpg",
    "https://res.cloudinary.com/dv0cc527o/image/upload/v1695297846/GImontake/eseter88uwnhzfhpvuak.webp",
    "https://res.cloudinary.com/dv0cc527o/image/upload/v1694342508/image-slider/Sumeru.jpg",
    "https://res.cloudinary.com/dv0cc527o/image/upload/v1695308691/GImontake/u4niijufwngfdpfdff6f.webp",
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

  const handleNavigation = (step) => {
    const newIndex = (currentIndex + step + images.length) % images.length;
    setCurrentIndex(newIndex);
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
      <div className='container  pl-8 pr-8 pb-8 pt-4 min-h-full min-w-full flex-grow'>
        <div className='flex flex-col gap-2'>
          <div className='flex items-center'>
            <img src="https://res.cloudinary.com/dv0cc527o/image/upload/v1694877738/wh7hmaqnvpraotfdt8ur.webp" className='mainpage-md:w-28 mainpage-header-md:w-12' />
            <h1 className={` text-6xl mainpage-header-md:text-3xl font-extrabold ${isDarkMode ? 'text-orange-200/90' : 'text-orange-300'} mainpage-md:whitespace-nowrap mainpage-sm:text-center`}>Project Fallen</h1>

            <img src="https://res.cloudinary.com/dv0cc527o/image/upload/v1694877737/owny6ex2sdp974a4tprg.webp" className='mainpage-md:w-32 mainpage-header-md:w-14' />
          </div>

          {/* <div className='flex mb-4 -mt-4 flex-wrap'>
            <img src="https://res.cloudinary.com/dv0cc527o/image/upload/v1694878104/kekadrvxyai6mre3enrz.webp" className='w-10 ' />
            <img src="https://res.cloudinary.com/dv0cc527o/image/upload/v1694878104/spw1ufvk38nrn68nbzel.webp" className='w-10 ' />
            <img src="https://res.cloudinary.com/dv0cc527o/image/upload/v1694878104/kekadrvxyai6mre3enrz.webp" className='w-10 ' />
            <img src="https://res.cloudinary.com/dv0cc527o/image/upload/v1694878104/spw1ufvk38nrn68nbzel.webp" className='w-10 ' />
            <img src="https://res.cloudinary.com/dv0cc527o/image/upload/v1694878104/kekadrvxyai6mre3enrz.webp" className='w-10 ' />
            <img src="https://res.cloudinary.com/dv0cc527o/image/upload/v1694878104/spw1ufvk38nrn68nbzel.webp" className='w-10 ' />
            <img src="https://res.cloudinary.com/dv0cc527o/image/upload/v1694878104/kekadrvxyai6mre3enrz.webp" className='w-10 ' />
            <img src="https://res.cloudinary.com/dv0cc527o/image/upload/v1694878104/spw1ufvk38nrn68nbzel.webp" className='w-10 ' />
            <img src="https://res.cloudinary.com/dv0cc527o/image/upload/v1694878104/kekadrvxyai6mre3enrz.webp" className='w-10 ' />
            <img src="https://res.cloudinary.com/dv0cc527o/image/upload/v1694878104/spw1ufvk38nrn68nbzel.webp" className='w-10 ' />
            <img src="https://res.cloudinary.com/dv0cc527o/image/upload/v1694878104/kekadrvxyai6mre3enrz.webp" className='w-10 ' />
            <img src="https://res.cloudinary.com/dv0cc527o/image/upload/v1694878104/spw1ufvk38nrn68nbzel.webp" className='w-10 ' />
            <img src="https://res.cloudinary.com/dv0cc527o/image/upload/v1694878104/kekadrvxyai6mre3enrz.webp" className='w-10 ' />
            <img src="https://res.cloudinary.com/dv0cc527o/image/upload/v1694878104/spw1ufvk38nrn68nbzel.webp" className='w-10 ' />
            <img src="https://res.cloudinary.com/dv0cc527o/image/upload/v1694878104/kekadrvxyai6mre3enrz.webp" className='w-10 ' />
            <img src="https://res.cloudinary.com/dv0cc527o/image/upload/v1694878104/spw1ufvk38nrn68nbzel.webp" className='w-10 ' />

          </div> */}

        </div>
        <p className={`font-semibold ${isDarkMode ? 'text-amber-100' : ''}`}>An ongoing project to compile your fallen journey in the Genshin Impact world!</p>
        <br />

        <div className='w-2/3 relative ' >
          <div className='image-container relative mainpage-image-md:w-185 mainpage-image-sm:w-120 mainpage-image-ssm:w-60' style={{ height: '300px' }}>
            <button
              className={`absolute left-0 top-0 bottom-0 ${handleImageLeftHover} 
                }`}
              onClick={() => handleNavigation(-1)}
              onMouseEnter={handleMouseEnterImageLeft}
              onMouseLeave={handleMouseLeaveImageLeft}
              onTouchEnd={handleMouseLeaveImageLeft}
            >
              <HiOutlineChevronDoubleLeft size={60} />
            </button>
            <img
              src={images[currentIndex]}
              className='rounded-md'
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            />
            <button
              className={`absolute right-0 top-0 bottom-0 ${handleImageRightHover} 
                }`}
              onMouseEnter={handleMouseEnterImageRight}
              onMouseLeave={handleMouseLeaveImageRight}
              onTouchEnd={handleMouseLeaveImageRight}
              onClick={() => handleNavigation(1)}
            >
              <HiOutlineChevronDoubleRight size={60} />
            </button>
            <div className='radio-buttons-container absolute bottom-0 left-0 right-0 text-center '>
              {images.map((_, index) => (
                <label key={index} className='mx-1 '>
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
          <p className={`text-lg italic mainpage-image-md:w-185 mainpage-image-sm:w-60 mt-1 ${isDarkMode ? 'text-amber-100' : ''}`}>"Osmanthus wine tastes the same as I remember... But where are those who share the memory?" - Zhongli</p>
        </div>





        <br />
        <h2 className={`text-4xl mb-2 font-medium ${isDarkMode ? 'text-orange-200/90' : 'text-orange-300'}`}>Server Reset</h2>

        <div className={`flex flex-col mainpage-image-md:w-185 mainpage-image-sm:w-120 mainpage-image-ssm:w-60 gap-0 rounded-md overflow-hidden border-2  
        ${isDarkMode ? 'text-amber-100 border-orange-200/90' : 'text-black border-orange-300'}`}>
          <div className='flex flex-row items-center'>
            <button onClick={() => handleTimezoneChange('Asia')} className={` border-2 ${isDarkMode ? 'border-orange-200/90' : 'border-orange-300'} text-center p-1 border-r-0  text-xl w-full ${selectedTimezone === 'Asia' ? isDarkMode ? 'bg-slate-600/60' : 'bg-orange-300/80' : isDarkMode ? 'bg-slate-500/80' : 'bg-orange-200/80'} `}>Asia</button>

            <button onClick={() => handleTimezoneChange('Europe')} className={` border-2 ${isDarkMode ? 'border-orange-200/90' : 'border-orange-300'} text-center p-1 border-r-0  text-xl w-full ${selectedTimezone === 'Europe' ? isDarkMode ? 'bg-slate-600/60' : 'bg-orange-300/80' : isDarkMode ? 'bg-slate-500/80' : 'bg-orange-200/80'} `}>Europe</button>

            <button onClick={() => handleTimezoneChange('America')} className={` border-2 ${isDarkMode ? 'border-orange-200/90' : 'border-orange-300'} text-center p-1 text-xl w-full ${selectedTimezone === 'America' ? isDarkMode ? 'bg-slate-600/60' : 'bg-orange-300/80' : isDarkMode ? 'bg-slate-500/80' : 'bg-orange-200/80'} `}>America</button>
          </div>

          <div className={`border-2 ${isDarkMode ? 'border-orange-200/90' : 'border-orange-300'} border-t-0 text-center w-full p-2 ${isDarkMode ? 'bg-slate-500' : 'bg-orange-100/80'}`}>
            <ServerResetTimer1 selectedTimezone={selectedTimezone} />
          </div>

          <div>

          </div>
        </div>
      </div>
      <div className='flex-none'>
        <Footer isDarkMode={isDarkMode} />
      </div>
    </div>
  )
}

export default MainPage