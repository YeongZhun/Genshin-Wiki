// import React from 'react'
// import { useState } from 'react';
// import CharacterCard from './CharacterCard';
// import FilterBar from './FilterBar';
// import SearchBar from './SearchBar';
// import characters from '../data/GS-data';
// import FilterModal from './FilterModal';
// import { RiFilterFill } from 'react-icons/ri'
// import Footer from './Footer';



// function CharacterGallery({ chars }) {



//   const [filterRarity, setFilterRarity] = useState('')
//   const [filterWeapon, setFilterWeapon] = useState('')
//   const [filterElement, setFilterElement] = useState('')

//   const [isOpen, setIsOpen] = useState(false)
//   const closeModal = () => setIsOpen(false)

//   // const [selectedElement, setSelectedElement] = useState('');
//   const [searchTerm, setSearchTerm] = useState('');

//   const filteredCharacters = characters.filter(
//     (character) =>
//       // (!selectedElement || character.element === selectedElement) &&
//       (!searchTerm || character.name.toLowerCase().includes(searchTerm.toLowerCase())) &&
//       (!filterRarity || character.rarity === filterRarity) &&
//       (!filterWeapon || character.weapon === filterWeapon) &&
//       (!filterElement || character.element === filterElement)
//   );

//   const element = [...new Set(characters.map((character) => character.element))];

//   return (
//     <div className='flex flex-col min-h-screen'>

//     <div className="container  p-8 min-h-full min-w-full flex-grow  ">
//       <h1 className="text-5xl font-semibold mb-4 text-orange-400">Genshin Characters</h1>

//       <div>
//         <button className='p-3 flex rounded-md bg-orange-100/75 text-1xl font-bold text-center border border-orange-100
//           hover:border-orange-300 ' onClick={() => setIsOpen(true)}>
//           <RiFilterFill size={25} /> 
//           <span>Filter</span>

//         </button>
//         <FilterModal open={isOpen} onClose={closeModal} setFilterRarity={setFilterRarity} setFilterWeapon={setFilterWeapon} 
//           setFilterElement={setFilterElement}
//         />
//       </div>

//       {/* <FilterBar
//         element={element}
//         selectedElement={selectedElement}
//         onElementChange={(e) => setSelectedElement(e.target.value)}
//       /> */}
//       <SearchBar
//         searchTerm={searchTerm}
//         onSearchChange={(e) => setSearchTerm(e.target.value)}
//       />
//       <div className=' '>
//         <div className="grid  ssm:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 
//           3xl:grid-cols-8 4xl:grid-cols-11 5xl:grid-cols-12 6xl:grid-cols-13 7xl:grid-cols-14 8xl:grid-cols-15 gap-x-14 gap-y-8">

//           {filteredCharacters.map((character) => (
//             <CharacterCard key={character.id} character={character} />
//           ))}
//         </div>
//       </div>

//     </div>

//       <div className='flex-none'>
//       <Footer />
//       </div>
//     </div>
//   );
// }

// export default CharacterGallery

import React from 'react';
import { useState } from 'react';
import CharacterCard from './CharacterCard';
import SearchBar from './SearchBar';
import FilterModal from './FilterModal';
import { RiFilterFill } from 'react-icons/ri';
import Footer from './Footer';

function CharacterGallery({ chars }) {


  const [filterRarity, setFilterRarity] = useState('');
  const [filterWeapon, setFilterWeapon] = useState('');
  const [filterElement, setFilterElement] = useState('');

  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);

  const [searchTerm, setSearchTerm] = useState('');

  const filteredCharacters = chars.filter(
    (character) =>
      (!searchTerm || character.name.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (!filterRarity || character.rarity === filterRarity) &&
      (!filterWeapon || character.weapon === filterWeapon) &&
      (!filterElement || character.element === filterElement)
  );

  return (
    <>
      <div className=' min-h-screen'>
        <div className="container  p-8 char-gallery-sm:p-2 char-gallery-sm:my-2 min-h-full min-w-full flex-grow  ">
          <h1 className="text-5xl font-semibold mb-4 text-orange-400">Genshin Characters</h1>
          <div>
            <button className='p-3 flex rounded-md bg-orange-100/75 text-1xl font-bold text-center border border-orange-100
            hover:border-orange-300 ' onClick={() => setIsOpen(true)}>
              <RiFilterFill size={25} />
              <span>Filter</span>
            </button>
            <FilterModal
              open={isOpen}
              onClose={closeModal}
              setFilterRarity={setFilterRarity}
              setFilterWeapon={setFilterWeapon}
              setFilterElement={setFilterElement}
            />
          </div>
          <SearchBar
            searchTerm={searchTerm}
            onSearchChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className=' '>
            <div className="grid  ssm:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6
            3xl:grid-cols-8 4xl:grid-cols-11 5xl:grid-cols-12 6xl:grid-cols-13 7xl:grid-cols-14 8xl:grid-cols-15 gap-x-14 gap-y-8">
              {filteredCharacters.map((character) => (
                <CharacterCard key={character._id} character={character} />
              ))}
            </div>
          </div>
        </div>

      </div>
      <div className=''>
        <Footer />
      </div>
    </>
  );
}

export default CharacterGallery;
