// import React from 'react'
// import ReactDom  from 'react-dom'


// const MODAL_STYLES = {
//   position: 'fixed',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   backgroundColor: '#FFF',
//   padding: '50px',
//   zIndex: 1000
// }

// const OVERLAY_STYLES = {
//   position: 'fixed',
//   top: 0,
//   left: 0,
//   right: 0,
//   bottom: 0,
//   backgroundColor: 'rgba(0, 0, 0 , 0.7)',
//   zIndex: 1000
// }

// function FilterModal({ open, children, onClose }) {

//   if (!open) return null

//   return ReactDom.createPortal(
//     <>
//     <div style={OVERLAY_STYLES} />
//     <div style={MODAL_STYLES}>
//       <button className='mx-auto p-5' onClick={onClose}>Close Modal</button>
//       {children}
//     </div>
//     </>,
//     document.getElementById('portal')
//   )
// }

// export default FilterModal

import React from 'react';
import ReactDOM from 'react-dom';
import {SlClose} from 'react-icons/sl'



function FilterModal({ open, onClose, setFilterRarity, setFilterWeapon, setFilterElement }) {
  if (!open) return null;

  const handleButtonClickResetAll = () => {
    setFilterWeapon('');
    setFilterElement('');
    setFilterRarity('');
  };

  //Weapon
  const handleButtonClickWeaponReset = () => {
    setFilterWeapon('');
  };

  const handleButtonClickWeaponSword = () => {
    setFilterWeapon('Sword');
  };

  const handleButtonClickWeaponBow = () => {
    setFilterWeapon('Bow');
  };

  const handleButtonClickWeaponCatalyst = () => {
    setFilterWeapon('Catalyst');
  };

  const handleButtonClickWeaponClaymore = () => {
    setFilterWeapon('Claymore');
  };

  const handleButtonClickWeaponPolearm = () => {
    setFilterWeapon('Polearm');
  };



  //Rarity
  const handleButtonClickRarityReset = () => {
    setFilterRarity('');
  };

  const handleButtonClickRarity4 = () => {
    setFilterRarity('4');
  };

  const handleButtonClickRarity5 = () => {
    setFilterRarity('5');
  };

  //Element
  const handleButtonClickElementReset = () => {
    setFilterElement('');
  }

  const handleButtonClickElementPyro = () => {
    setFilterElement('Pyro');
  }

  const handleButtonClickElementHydro = () => {
    setFilterElement('Hydro');
  }

  const handleButtonClickElementGeo = () => {
    setFilterElement('Geo');
  }

  const handleButtonClickElementCryo = () => {
    setFilterElement('Cryo');
  }

  const handleButtonClickElementDendro = () => {
    setFilterElement('Dendro');
  }

  const handleButtonClickElementElectro = () => {
    setFilterElement('Electro');
  }

  const handleButtonClickElementAnemo = () => {
    setFilterElement('Anemo');
  }


  return ReactDOM.createPortal(
    <>
      <div className="fixed inset-0 bg-black opacity-70 z-50" />
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-orange-100 p-8 z-50 rounded-md border-4 border-orange-300">
        <button className="absolute top-3 right-3" onClick={onClose}>
          <SlClose className='text-orange-400' size={25}/>
        </button>

        <div className='flex mb-6'>


        <button className='border-2 border-orange-200 rounded-md mr-2 px-1 font-semibold' 
            onClick={handleButtonClickResetAll}> Reset All
        </button>
        </div>


        <div className='flex mb-2'>
        <p className='font-bold pb-1 mr-1'>Rarity: </p>

        <button className='border-2 border-orange-200 rounded-md mr-2 px-1 font-medium' 
            onClick={handleButtonClickRarityReset}> Select All
        </button>
        </div>
        <div className='mb-8'>
        {/* <div className='grid grid-cols-7 gap-4 '> */}

          <button className='border-2 border-orange-200 rounded-md mr-2 px-1 font-medium' 
            onClick={handleButtonClickRarity4}>4⭐
          </button>
          <button className='border-2 border-orange-200 rounded-md mr-2 px-1 font-medium' 
            onClick={handleButtonClickRarity5}>5⭐
          </button>

        </div>

        <div className='flex mb-2'>
          <p className='font-bold pb-1 mr-1'>Element: </p>
          <button className='border-2 border-orange-200 rounded-md mr-2 px-1 font-medium'
            onClick={handleButtonClickElementReset}> Select All </button>

        </div>

          
          <div className='mb-8'>
          <button onClick={handleButtonClickElementPyro}>
            <div className='border-2 border-orange-200 rounded-md mr-2'>
            <img 
              src="https://res.cloudinary.com/dv0cc527o/image/upload/v1693642842/elements/pyro_xs1jsu.png"
              alt="Pyro Element"
              className='w-10 h-10'
            />
            </div>
          </button>

          <button onClick={handleButtonClickElementHydro}>
            <div className='border-2 border-orange-200 rounded-md mr-2'>
            <img 
              src="https://res.cloudinary.com/dv0cc527o/image/upload/v1693642842/elements/hydro_e5r2mv.png"
              alt="Hydro Element"
              className='w-10 h-10'
            />
            </div>
          </button>

          <button onClick={handleButtonClickElementAnemo}>
            <div className='border-2 border-orange-200 rounded-md mr-2'>
            <img 
              src="https://res.cloudinary.com/dv0cc527o/image/upload/v1693642842/elements/anemo_kzjde5.png"
              alt="Anemo Element"
              className='w-10 h-10'
            />
            </div>
          </button>

          <button onClick={handleButtonClickElementElectro}>
            <div className='border-2 border-orange-200 rounded-md mr-2'>
            <img 
              src="https://res.cloudinary.com/dv0cc527o/image/upload/v1693642842/elements/electro_cojft1.png"
              alt="Electro Element"
              className='w-10 h-10'
            />
            </div>
          </button>

          <button onClick={handleButtonClickElementDendro}>
            <div className='border-2 border-orange-200 rounded-md mr-2'>
            <img 
              src="https://res.cloudinary.com/dv0cc527o/image/upload/v1693642842/elements/dendro_tbqh2a.png"
              alt="Dendro Element"
              className='w-10 h-10'
            />
            </div>
          </button>

          <button onClick={handleButtonClickElementCryo}>
            <div className='border-2 border-orange-200 rounded-md mr-2'>
            <img 
              src="https://res.cloudinary.com/dv0cc527o/image/upload/v1693642842/elements/cryo_fnp2qx.png"
              alt="Cryo Element"
              className='w-10 h-10'
            />
            </div>
          </button>

          <button onClick={handleButtonClickElementGeo}>
            <div className='border-2 border-orange-200 rounded-md mr-2'>
            <img 
              src="https://res.cloudinary.com/dv0cc527o/image/upload/v1694101466/elements/geo.png"
              alt="Geo Element"
              className='w-10 h-10'
            />
            </div>
          </button>
        </div>

        <div className='flex mb-2'>
        <p className='font-bold pb-1 mr-1'>Weapon Type: </p>

        <button className='border-2 border-orange-200 rounded-md mr-2 px-1 font-medium' 
          onClick={handleButtonClickWeaponReset}
        > Select All
        </button>
        </div>

        <div>

        <button onClick={handleButtonClickWeaponSword}>
            <div className='border-2 border-orange-200 rounded-md mr-2'>
            <img 
              src="https://res.cloudinary.com/dv0cc527o/image/upload/v1693642843/weapon/Icon_Sword_qpea6f.webp"
              alt="Sword"
              className='w-10 h-10'
            />
            </div>
        </button>

        <button onClick={handleButtonClickWeaponBow}>
            <div className='border-2 border-orange-200 rounded-md mr-2'>
            <img 
              src="https://res.cloudinary.com/dv0cc527o/image/upload/v1693642842/weapon/Icon_Bow_ghw7ao.webp"
              alt="Bow"
              className='w-10 h-10'
            />
            </div>
        </button>
        
        <button onClick={handleButtonClickWeaponCatalyst}>
            <div className='border-2 border-orange-200 rounded-md mr-2'>
            <img 
              src="https://res.cloudinary.com/dv0cc527o/image/upload/v1693642842/weapon/Icon_Catalyst_jz01dh.webp"
              alt="Catalyst"
              className='w-10 h-10'
            />
            </div>
        </button>

        <button onClick={handleButtonClickWeaponClaymore}>
            <div className='border-2 border-orange-200 rounded-md mr-2'>
            <img 
              src="https://res.cloudinary.com/dv0cc527o/image/upload/v1693642842/weapon/Icon_Claymore_t9quc7.webp"
              alt="Claymore"
              className='w-10 h-10'
            />
            </div>
        </button>

        <button onClick={handleButtonClickWeaponPolearm}>
            <div className='border-2 border-orange-200 rounded-md mr-2'>
            <img 
              src="https://res.cloudinary.com/dv0cc527o/image/upload/v1693642842/weapon/Icon_Polearm_kj7jyq.webp"
              alt="Polearm"
              className='w-10 h-10'
            />
            </div>
        </button>        
        </div>
      </div>
    </>,
    document.getElementById('portal')
  );
}

export default FilterModal;
