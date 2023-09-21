import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Footer from '../Footer'
import Talents from './Talents'
import Constellations from './Constellations'
import Profile from './Profile'
import Comments from './Comments'
import { FaStar } from 'react-icons/fa';

function CharacterIndivDetails({ character, isDarkMode }) {

  //reminder that I can deconstruct arrays 
  // const { splash_art } = character

  const [isItemSelected, setIsItemSelected] = useState(localStorage.getItem("selectedTab") || "Profile")
  const { talents_active, talents_passive, constellation } = character;

  useEffect(() => {
    // Check the URL and set the isItemSelected state accordingly
    const currentPath = window.location.pathname;
    if (currentPath.endsWith("Profile")) {
      setIsItemSelected("Profile");

    } else if (currentPath.endsWith("Talent")) {
      setIsItemSelected("Talent");

    } else if (currentPath.endsWith("Constellation")) {
      setIsItemSelected("Constellation");

    } else if (currentPath.endsWith("Comments")) {
      setIsItemSelected("Comments");

    }
  }, []);

  const itemProfileSelectedFlexGrow = isItemSelected === "Profile" ? 'flex-grow' : '';
  const itemProfileSelectedFlexGrowReverse = isItemSelected === "Profile" ? '' : 'flex-grow';

  const itemProfileSelected = isItemSelected === "Profile" ? isDarkMode ? 'bg-orange-200/80' : 'bg-orange-200' : '';

  const itemTalentSelected = isItemSelected === "Talent" ? isDarkMode ? 'bg-orange-200/80' : 'bg-orange-200' : '';

  const itemConstellationSelected = isItemSelected === "Constellation" ? isDarkMode ? 'bg-orange-200/80' : 'bg-orange-200' : '';

  const itemCommentsSelected = isItemSelected === "Comments" ? isDarkMode ? 'bg-orange-200/80' : 'bg-orange-200' : '';

  let char_repr_text_size = '';
  if (character.character_representation.length > 30) {
    char_repr_text_size = 'text-xl';
  } else {
    char_repr_text_size = 'text-2xl';
  }

  // let textSizeClass = '';
  // if (character.name.length > 10 && character.name.length <= 18) {
  //   textSizeClass = 'text-base';
  // } else if (character.name.length > 18 && character.name.length <= 20) {
  //   textSizeClass = 'text-sm';
  // } else if (character.name.length > 20) {
  //   textSizeClass = 'text-xs';
  // } else {
  //   textSizeClass = 'text-2xl';
  // }

  const bgStyle = {
    backgroundImage: `url(${character.splash_art})`,
  }

  //These are for retaining the last clicked data in storage so when I refresh, it doesnt go back to Profile.
  const handleMouseClickProfile = () => {
    setIsItemSelected("Profile")
    localStorage.setItem("selectedTab", "Profile")
  }

  const handleMouseClickTalent = () => {
    setIsItemSelected("Talent")
    localStorage.setItem("selectedTab", "Talent")
  }

  const handleMouseClickConstellation = () => {
    setIsItemSelected("Constellation")
    localStorage.setItem("selectedTab", "Constellation")
  }

  const handleMouseClickComments = () => {
    setIsItemSelected("Comments")
    localStorage.setItem("selectedTab", "Comments")
  }

  let rightItemContent;
  if (isItemSelected === "Profile") {
    rightItemContent = (
      <Profile character={character} isDarkMode={isDarkMode}/>
    )
  } else if (isItemSelected === "Talent") {
    rightItemContent = (
      <Talents talents_active={talents_active} talents_passive={talents_passive} isDarkMode={isDarkMode}/>
    )
  } else if (isItemSelected === "Constellation") {
    rightItemContent = (
      <Constellations constellation={constellation} isDarkMode={isDarkMode}/>
    )
  } else if (isItemSelected === "Comments") {
    rightItemContent = (
      <Comments character={character} isDarkMode={isDarkMode}/>
    )
  }

  return (
    <>
      <div className='min-h-screen  bg-no-repeat bg-center bg-fixed ' style={bgStyle} >

        <div className='flex gap-4 char-sm:flex-col char-ssm:flex-col my-8 mx-8 char-ssm:mx-6'>
          <div>
            <div className='flex flex-col  '>
              <div className={`rounded-t-2xl shadow-md border-gray-400 border-r-2 border-t-2 border-b-2 gap-2 flex flex-col -ml-10 pl-10  py-1 w-120 char-sm:w-96 char-ssm:w-100
        ${character.element === 'Dendro' ? 'bg-emerald-700' :
                  character.element === 'Pyro' ? 'bg-pyro' :
                    character.element === 'Hydro' ? 'bg-blue-400' :
                      character.element === 'Anemo' ? 'bg-anemo' :
                        character.element === 'Electro' ? 'bg-electro' :
                          character.element === 'Cryo' ? 'bg-cryo' :
                            character.element === 'Geo' ? 'bg-yellow-600' :
                              ''
                }`}>
                <div className='flex gap-1 items-center '>
                  <img src={character.elementUrl}
                    className='w-11 h-11 ' />
                  <h1 className={`font-extrabold text-5xl ${isDarkMode ? 'text-amber-50' : 'text-white'} `}>{character.name}</h1>
                </div>

              </div>

              <div className={`rounded-b-2xl shadow-md border-gray-400 border-r-2 border-b-2 -ml-10 pl-22px py-1 w-120 ${isDarkMode ? 'bg-slate-700' : 'bg-orange-75'}  char-sm:w-96 char-ssm:w-100`}>
                <p className={` font-bold ${char_repr_text_size}
          ${character.element === 'Dendro' ? isDarkMode ? 'text-emerald-500' : 'text-emerald-700' :
                    character.element === 'Pyro' ? 'text-pyro' :
                      character.element === 'Hydro' ? 'text-blue-400' :
                        character.element === 'Anemo' ? 'text-anemo' :
                          character.element === 'Electro' ? 'text-electro' :
                            character.element === 'Cryo' ? 'text-cryo' :
                              character.element === 'Geo' ? 'text-yellow-600' :
                                ''
                  }`}>{character.character_representation}</p>
                {character.rarity === '4' && (
                  <p className='text-center text-yellow-400 flex drop-shadow-md '>
                    <FaStar size={30} strokeWidth={10} stroke='orange' />
                    <FaStar size={30} strokeWidth={10} stroke='orange' />
                    <FaStar size={30} strokeWidth={10} stroke='orange' />
                    <FaStar size={30} strokeWidth={10} stroke='orange' />
                  </p>
                )}
                {character.rarity === '5' && (
                  <p className='text-center text-yellow-400 flex drop-shadow-md '>
                    <FaStar size={30} strokeWidth={10} stroke='orange' />
                    <FaStar size={30} strokeWidth={10} stroke='orange' />
                    <FaStar size={30} strokeWidth={10} stroke='orange' />
                    <FaStar size={30} strokeWidth={10} stroke='orange' />
                    <FaStar size={30} strokeWidth={10} stroke='orange' />
                  </p>
                )}
              </div>

            </div>

            <div className={`mt-2 flex flex-col shadow-md rounded-2xl border-2 border-gray-400 p-2 w-102 ml-10 ${isDarkMode ? 'bg-slate-700' : 'bg-orange-75'} char-sm:w-80 char-sm:ml-6 char-ssm:w-80 char-ssm:ml-5`}>
              <Link to={`/characters/${encodeURIComponent(character._id)}/Profile`}>
                <div onClick={handleMouseClickProfile} className={`p-2 rounded-2xl ${itemProfileSelected} `}>
                  <button className={`font-bold text-3xl ${isDarkMode ? 'text-amber-100'  : 'text-gray-700'} `}>Profile</button>
                </div>
              </Link>

              <Link to={`/characters/${encodeURIComponent(character._id)}/Talent`}>
                <div onClick={handleMouseClickTalent} className={`p-2 rounded-2xl ${itemTalentSelected} `}>
                  <button className={`font-bold text-3xl  ${isDarkMode ? 'text-amber-100'  : 'text-gray-700'}`}>Talent</button>
                </div>
              </Link>

              <Link to={`/characters/${encodeURIComponent(character._id)}/Constellation`}>
                <div onClick={handleMouseClickConstellation} className={`p-2 rounded-2xl ${itemConstellationSelected} `}>
                  <button className={`font-bold text-3xl  ${isDarkMode ? 'text-amber-100'  : 'text-gray-700'}`}>Constellation</button>
                </div>
              </Link>

              <Link to={`/characters/${encodeURIComponent(character._id)}/Comments`}>
                <div onClick={handleMouseClickComments} className={`p-2 rounded-2xl ${itemCommentsSelected} `}>
                  <button className={`font-bold text-3xl ${isDarkMode ? 'text-amber-100'  : 'text-gray-700'}`}>Comments</button>
                </div>
              </Link>

            </div>
          </div>
          <div className={` ${itemProfileSelectedFlexGrow}`}></div>
          <div className={` ${itemProfileSelectedFlexGrowReverse} `}>
            {rightItemContent}
          </div>
        </div>
      </div>

      <div>
        <Footer isDarkMode={isDarkMode}/>
      </div>
    </>
  )
}

export default CharacterIndivDetails