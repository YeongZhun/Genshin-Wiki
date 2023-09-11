
import './index.css'

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SideBar from './components/SideBar';
import CharacterGallery from './components/CharacterGallery';
import { useState, useEffect } from 'react';
import MainPage from './components/MainPage';
// import getCharacters from './server/BackendAPITest';

function App() {

  // const [chars, setChars] = useState([]);

  // useEffect(() => {
  //   // Make an API request to fetch data from your backend
  //   axios.get('http://localhost:3001/getCharacters') // Replace with your actual API endpoint
  //     .then((response) => {
  //       setChars(response.data); // Update state with the fetched data
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching data:', error);
  //     });
  // }, []);

  // const [characters, setCharacters] = useState([]);

  // const fetchCharacters = async () => {
  //   const characters = await getCharacters();
  //   setCharacters(characters);
  // };
  
  // useEffect(() => {
  //   fetchCharacters();
  // }, []);



  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  }

  const handleMouseLeave = () => {
    setIsHovered(false);
  }




  return (
    <>
      <Router>
      {/* <div className="App bg-genshin bg-no-repeat bg-cover bg-center flex font-sans"> */}
      <div className="App bg-orange-50 bg-no-repeat bg-cover bg-center flex font-nunito">

        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} 
           className={`flex-none bg-orange-100/95 transform transition-transform duration-300 group border-r-2 
            rounded-sm h-screen fixed ${isHovered ? ' w-64' : ''} `}>
          <SideBar isHovered={isHovered} />
        </div>

        
        <Routes>
          <Route path="/" element = {
            <div className='flex-grow ml-40'>
            <MainPage />
          
            <div></div>
            </div>
          }/>

          <Route path="/characters" element = {
            <div className='flex-grow ml-40'>
            <CharacterGallery />
            </div>
          }/>


        
        </Routes>

      </div>

      </Router>
    </>
  )
}

export default App
