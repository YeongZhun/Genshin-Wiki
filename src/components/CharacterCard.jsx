import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

function CharacterCard({ character }) {

  const rarityColor = character.rarity === '4' ? 'bg-gradient-to-br from-darker-purple/70 from-35%  via-lighter-purple/70 via-95% to-lighter-purple/60' :
    'bg-gradient-to-br from-darker-brown/70 from-35%  via-lighter-brown/60 via-95% to-lighter-brown/60';

    let textSizeClass = '';
    if (character.name.length > 10 && character.name.length <= 18) {
      textSizeClass = 'text-base';
    } else if (character.name.length > 18 && character.name.length <= 20) {
      textSizeClass = 'text-sm';
    } else if (character.name.length > 20) {
      textSizeClass = 'text-xs';
    } else {
      textSizeClass = 'text-xl';
    }

  return (
    <div className={`shadow-md rounded-3xl w-44 relative h-56
      hover:scale-110 hover:border hover:border-orange-400 border border-orange-200 ${rarityColor} overflow-hidden`}>
      <Link to={`/characters/${character._id}/Profile`}>
        <div className="absolute top-2 left-2">
          <img src={character.elementUrl} alt="Element" className="w-12 h-12" />
        </div>
        <div className=''>
          <button>
            <img src={character.avatarUrl} alt={character._id} className="object-cover rounded-3xl" />
          </button>
        </div>
        <div className=' -mt-9 z-10 relative'>
          <div>
            {/* conditional rendering to display 4 or 5 stars */}
            {character.rarity === '4' && (
              <p className='text-center text-yellow-400 justify-center flex drop-shadow-md '>
                <FaStar size={30} strokeWidth={10} stroke='orange' />
                <FaStar size={30} strokeWidth={10} stroke='orange' />
                <FaStar size={30} strokeWidth={10} stroke='orange' />
                <FaStar size={30} strokeWidth={10} stroke='orange' />
              </p>
            )}
            {character.rarity === '5' && (
              <p className='text-center text-yellow-400 justify-center flex drop-shadow-md '>
                <FaStar size={30} strokeWidth={10} stroke='orange' />
                <FaStar size={30} strokeWidth={10} stroke='orange' />
                <FaStar size={30} strokeWidth={10} stroke='orange' />
                <FaStar size={30} strokeWidth={10} stroke='orange' />
                <FaStar size={30} strokeWidth={10} stroke='orange' />
              </p>
            )}
          </div>
          <div className='bg-biege -mt-3 h-16 flex flex-col justify-center items-center'>
            <div className='-mb-1 pt-2.5 whitespace-normal'>
              <p className={` ${textSizeClass} text-center font-bold text-gray-700`}>{character.name}</p>
            </div>
            
            <div className='pb-1.5'>
            {character.element === 'Pyro' && (
              <p className="text-red-500 font-bold text-center">{character.element}</p>
            )}
            {character.element === 'Dendro' && (
              <p className="text-green-500 font-bold text-center">{character.element}</p>
            )}
            {character.element === 'Anemo' && (
              <p className="text-emerald-500 font-bold text-center">{character.element}</p>
            )}
            {character.element === 'Hydro' && (
              <p className="text-blue-500 font-bold text-center">{character.element}</p>
            )}
            {character.element === 'Cryo' && (
              <p className="text-cyan-400 font-bold text-center">{character.element}</p>
            )}
            {character.element === 'Geo' && (
              <p className="text-amber-600 font-bold text-center">{character.element}</p>
            )}
            {character.element === 'Electro' && (
              <p className="text-purple-500 font-bold text-center">{character.element}</p>
            )}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default CharacterCard;
