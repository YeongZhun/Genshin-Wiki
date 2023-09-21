
import './index.css'

import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import SideBar from './components/SideBar';
import CharacterGallery from './components/CharacterGallery';
import { useState, useEffect } from 'react';
import MainPage from './components/MainPage';
import axios from 'axios'
import CharacterIndivDetails from './components/char_indiv_details/CharacterIndivDetails';
import LoadingScreen from './components/LoadingScreen';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  //Read that it is unsafe, but for testing purposes first
  const backendURL = import.meta.env.VITE_BACKEND_URL

  const [chars, setChars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const savedDarkMode = localStorage.getItem('darkMode');
  const [isDarkMode, setIsDarkMode] = useState(savedDarkMode === 'true');

  const toggleDarkMode = () => {
    // Update the state
    setIsDarkMode(!isDarkMode);
  };

  // Effect to save the dark mode preference to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('darkMode', isDarkMode);
  }, [isDarkMode]);



  const location = useLocation();
  // const navigate = useNavigate();

  useEffect(() => {

    setIsLoading(true);

    axios
      .get(`${backendURL}/api/data`)
      .then((response) => {
        setChars(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });

    // Simulate a loading delay with setTimeout
    // setTimeout(() => {
    //   axios
    //     .get('http://localhost:5000/api/data')
    //     .then((response) => {
    //       setChars(response.data);
    //       setIsLoading(false);
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //       setIsLoading(false);
    //     });
    // }, 7500); // Adjust the duration as needed

  }, [location.pathname]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  }

  const handleMouseLeave = () => {
    setIsHovered(false);
  }

  return (

    <>
      <ToastContainer />

      {/* <div className="App bg-genshin bg-no-repeat bg-cover bg-center flex font-sans"> */}
      <div className={`App ${isDarkMode ? 'bg-dark-mode-bg' : 'bg-orange-50'} bg-no-repeat bg-cover bg-center flex font-nunito`}>

        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
          className={`flex-none ${isDarkMode ? 'bg-slate-800 border-gray-500/70' : 'bg-orange-100 border-gray-300'} transform transition-transform duration-300 group border-r-2 z-30 
             rounded-sm h-screen fixed ${isHovered ? ' w-64' : ''} `}>
          <SideBar isHovered={isHovered} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} toggleDarkMode={toggleDarkMode} />
        </div>


        <Routes>
          <Route path="/" element={
            <div className='flex-grow ml-20'>
              {isLoading ? (
                <div className="loading-container">
                  <LoadingScreen isDarkMode={isDarkMode} />
                </div>
              ) : (
                <MainPage isDarkMode={isDarkMode} />
              )}



            </div>
          } />

          <Route path="/characters" element={
            <div className='flex-grow ml-20'>
              {isLoading ? (
                <div className="loading-container">
                  <LoadingScreen isDarkMode={isDarkMode} />
                </div>
              ) : (
                <CharacterGallery chars={chars} isDarkMode={isDarkMode} />
              )}

            </div>
          } />

          {chars.map((character) => (
            <Route
              key={character._id}
              path={`/characters/${encodeURIComponent(character._id)}/Profile`}
              element={
                <div className="flex-grow ml-20">
                  {isLoading ? (
                    <div className="loading-container">
                      <LoadingScreen isDarkMode={isDarkMode} />
                    </div>
                  ) : (
                    <CharacterIndivDetails character={character} isDarkMode={isDarkMode} />
                  )}

                </div>
              }
            />
          ))}

          {chars.map((character) => (
            <Route
              key={character._id}
              path={`/characters/${encodeURIComponent(character._id)}/Talent`}
              element={
                <div className="flex-grow ml-20">
                  {/* {isLoading ? (
                      <div className="loading-container">
                        <LoadingScreen isDarkMode={isDarkMode} />
                      </div>
                    ) : (
                      <CharacterIndivDetails character={character} />
                    )} */}
                  <CharacterIndivDetails character={character} isDarkMode={isDarkMode} />
                </div>
              }
            />
          ))}

          {chars.map((character) => (
            <Route
              key={character._id}
              path={`/characters/${encodeURIComponent(character._id)}/Constellation`}
              element={
                <div className="flex-grow ml-20">
                  {/* {isLoading ? (
                      <div className="loading-container">
                        <LoadingScreen isDarkMode={isDarkMode} />
                      </div>
                    ) : (
                      <CharacterIndivDetails character={character} />
                    )} */}
                  <CharacterIndivDetails character={character} isDarkMode={isDarkMode} />
                </div>
              }
            />
          ))}

          {chars.map((character) => (
            <Route
              key={character._id}
              path={`/characters/${encodeURIComponent(character._id)}/Comments`}
              element={
                <div className="flex-grow ml-20">
                  {isLoading ? (
                    <div className="loading-container">
                      <LoadingScreen isDarkMode={isDarkMode} />
                    </div>
                  ) : (
                    <CharacterIndivDetails character={character} isDarkMode={isDarkMode} />
                  )}
                  {/* <CharacterIndivDetails character={character} /> */}
                </div>
              }
            />
          ))}


        </Routes>


      </div>

    </>

  )
}

export default App
