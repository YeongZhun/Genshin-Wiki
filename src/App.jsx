
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
  console.log(backendURL)

  const backendURL2 = process.env.VITE_BACKEND_URL
  console.log(backendURL2)
  

  const [chars, setChars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
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
      <div className="App bg-orange-50 bg-no-repeat bg-cover bg-center flex font-nunito">

        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
          className={`flex-none bg-orange-100 transform transition-transform duration-300 group border-r-2 z-30
            border-gray-300 rounded-sm h-screen fixed ${isHovered ? ' w-64' : ''} `}>
          <SideBar isHovered={isHovered} />
        </div>


        <Routes>
          <Route path="/" element={
            <div className='flex-grow ml-20'>
              {isLoading ? (
                <div className="loading-container">
                  <LoadingScreen />
                </div>
              ) : (
                <MainPage />
              )}



            </div>
          } />

          <Route path="/characters" element={
            <div className='flex-grow ml-20'>
              {isLoading ? (
                <div className="loading-container">
                  <LoadingScreen />
                </div>
              ) : (
                <CharacterGallery chars={chars} />
              )}

            </div>
          } />

          {chars.map((character) => (
            <Route
              key={character._id}
              path={`/characters/${encodeURIComponent(character.name)}/Profile`}
              element={
                <div className="flex-grow ml-20">
                  {isLoading ? (
                    <div className="loading-container">
                      <LoadingScreen />
                    </div>
                  ) : (
                    <CharacterIndivDetails character={character} />
                  )}

                </div>
              }
            />
          ))}

          {chars.map((character) => (
            <Route
              key={character._id}
              path={`/characters/${encodeURIComponent(character.name)}/Talent`}
              element={
                <div className="flex-grow ml-20">
                  {/* {isLoading ? (
                      <div className="loading-container">
                        <LoadingScreen />
                      </div>
                    ) : (
                      <CharacterIndivDetails character={character} />
                    )} */}
                  <CharacterIndivDetails character={character} />
                </div>
              }
            />
          ))}

          {chars.map((character) => (
            <Route
              key={character._id}
              path={`/characters/${encodeURIComponent(character.name)}/Constellation`}
              element={
                <div className="flex-grow ml-20">
                  {/* {isLoading ? (
                      <div className="loading-container">
                        <LoadingScreen />
                      </div>
                    ) : (
                      <CharacterIndivDetails character={character} />
                    )} */}
                  <CharacterIndivDetails character={character} />
                </div>
              }
            />
          ))}

          {chars.map((character) => (
            <Route
              key={character._id}
              path={`/characters/${encodeURIComponent(character.name)}/Comments`}
              element={
                <div className="flex-grow ml-20">
                  {isLoading ? (
                      <div className="loading-container">
                        <LoadingScreen />
                      </div>
                    ) : (
                      <CharacterIndivDetails character={character} />
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
