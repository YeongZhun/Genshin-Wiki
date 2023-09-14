import React from 'react'
import { Link } from 'react-router-dom';

function CharacterCard({ character }) {

  const handleClickCharIndiv = () => {
    alert("Hi")
  }

  return (
    <div className="bg-orange-100/75 p-2.5 rounded-md shadow-md w-44 
      hover:scale-110 hover:border-4 hover:border-orange-300 border border-orange-200">
      <Link to={`/characters/${character.name}/Profile`}>
      <button>
      <img src={character.avatarUrl} alt={character.name} className=" object-cover mb-2 rounded-lg" />
      <h3 className="text-lg text-center font-semibold">{character.name}</h3>
      
      {/* conditional rendering to display 4 or 5 stars */}
      {character.rarity === '4' && (
        <p className='text-center'>⭐⭐⭐⭐</p>
      )}
      {character.rarity === '5' && (
        <p className='text-center'>⭐⭐⭐⭐⭐</p>
      )}

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

      </button>
      </Link>
    </div>
  );
}

export default CharacterCard