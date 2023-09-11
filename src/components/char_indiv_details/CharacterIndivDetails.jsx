import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { BiSolidShield } from 'react-icons/bi'
import { FaBook, FaHeart } from 'react-icons/fa'
import { RiSwordFill } from 'react-icons/ri'
import Footer from '../Footer'
import axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid'
import { PiPlayFill } from 'react-icons/pi'
import { IoTrashBinSharp } from 'react-icons/io5'




function CharacterIndivDetails({ character }) {

  //reminder that I can deconstruct arrays 
  // const { splash_art } = character



  const [isItemSelected, setIsItemSelected] = useState(localStorage.getItem("selectedTab") || "Profile")
  const [comments, setComments] = useState([])
  const [newComment, setNewComment] = useState('')
  const [isCommentsFetched, setIsCommentsFetched] = useState(false);
  const [commentUserName, setCommentUserName] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  //newComment and chatMessage is kinda the same. But chatMessage is to prevent the abnormal behavior
  //where the textbox writes in reverse due to the onInput handleInput. 
  //By separating and creating a new state for the input text, it resolves the issue.
  const [chatMessage, setChatMessage] = useState('');
  const [userIpAddress, setUserIpAddress] = useState('');

  const { talents, constellation } = character;
  const blockedWords = ['celestia', 'sus', 'scaramouche', 'deshret', 'fuck', 'cock', 'pussy', 'suck', 'mum', 'mom', 'god', 'paimon'];

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

  //GET existing comments or new comments every time it is added
  useEffect(() => {

    // Fetch user's IP address from the API when the component mounts
    const fetchUserIpAddress = async () => {
      try {
        const ipResponse = await axios.get('https://api.ipify.org?format=json');
        setUserIpAddress(ipResponse.data.ip);
      } catch (error) {
        console.error('Error fetching user IP address:', error);
      }
    };

    fetchUserIpAddress(); // Call the function to fetch the user's IP address
    console.log(userIpAddress);


    const fetchData = async () => {
      try {

        if (!isCommentsFetched) {
          await axios
            .get(`http://localhost:5000/api/getcomments/${character._id}`)
            .then((response) => {


              setComments(response.data);
              setIsCommentsFetched(true);
            })
        }
      }
      catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, [character._id, isCommentsFetched]);

  //POST comment
  const handleCommentSubmit = async (e) => {
    e.preventDefault();

    // Check if the new comment contains blocked words
    for (const blockedWord of blockedWords) {
      if (newComment.toLowerCase().includes(blockedWord)) {
        toast.error(<div>P.A.I.M.O.N: <br /> Error.. <br /> your comment contains forbidden knowledge. <br /> Initializing deletion..</div>)
        setChatMessage('');
        const div = document.getElementById('commentDiv');
        if (div) {
          div.innerHTML = '';
        }
        return; // Don't proceed with posting the comment
      }
    }

    try {
      const now = new Date();
      const formattedDate = `${now.toLocaleDateString()} ${now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
      const commentId = uuidv4();

      const response = await axios.post(`http://localhost:5000/api/comments`, {
        char_id: character._id,
        commentId,
        user: commentUserName,
        text: newComment,
        dateTime: formattedDate,
        ipAddress: userIpAddress,
      });

      console.log(response)
      const newCommentData = response.data
      console.log(newCommentData)

      // Clear the content of the div when setting newComment and chatMessage to empty
      const div = document.getElementById('commentDiv');
      if (div) {
        div.innerHTML = '';
      }

      setComments([...comments, newCommentData]);
      setChatMessage(''); // Clear chatbox after successfully posting a comment
      setNewComment('');
      setIsCommentsFetched(false);

    } catch (error) {
      if (error.response.status === 429) {
        toast.error('Rate limit exceeded. Please try again later in 1 minute.');
      }
      console.error('Error posting comment:', error);
    }
  };

  const handleCommentDelete = async (commentId, userIpAddress) => {
    try {
      await axios.delete(`http://localhost:5000/api/deletecomment/${commentId}/${userIpAddress}`);
      setComments((prevComments) => prevComments.filter((comment) => comment._id !== commentId));
    } catch (error) {
      console.error('Error deleting comments:', error);
    }
  };


  //This is for the comment box to adjust its height after a new line has been added (alt+enter)
  const handleInputHeight = (event) => {
    const target = event.target;
    target.style.height = 'auto';
    target.style.height = `${target.scrollHeight}px`;
  };

  //This is to handle multiple lines comment (alt+enter) by converting them into \n to be displayed as newlines
  const handleInputContent = (event) => {
    const target = event.target;
    //regex, / signals the start and end of regex. /g means global, not just the first word.
    const content = target.innerHTML.replace(/<div><br><\/div>/g, '\n');
    setNewComment(content);
  };

  const itemProfileSelectedFlexGrow = isItemSelected === "Profile" ? 'flex-grow' : '';
  const itemProfileSelectedFlexGrowReverse = isItemSelected === "Profile" ? '' : 'flex-grow';

  const itemProfileSelected = isItemSelected === "Profile" ? 'bg-orange-200' : '';

  const itemTalentSelected = isItemSelected === "Talent" ? 'bg-orange-200' : '';

  const itemConstellationSelected = isItemSelected === "Constellation" ? 'bg-orange-200' : '';

  const itemCommentsSelected = isItemSelected === "Comments" ? 'bg-orange-200' : '';

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
      <div className='char-md:sticky char-md:right-0 char-md:top-0  bg-orange-75 p-4  rounded-2xl border-gray-400 border-2 shadow-md w-150 char-sm:w-100 char-sm:ml-6 char-ssm:w-72 char-ssm:ml-6'>
        <p className='font-bold text-2xl text-gray-800 mb-2 mx-2'>Lvl. 90: </p>

        <div className='flex bg-gray-100/25 text-gray-800'>
          <div className='flex gap-1 text-xl font-semibold my-0.5 mx-2'>
            <FaHeart size={25} /> Base HP:
          </div>
          <div className='flex-grow'></div>
          <div className='flex text-xl font-semibold mx-2'>{character.hp}</div>
        </div>

        <div className='flex bg-orange-200/25 text-gray-800'>
          <div className='flex gap-1 text-xl font-semibold my-0.5 mx-2'>
            <RiSwordFill size={25} /> Base Atk:
          </div>
          <div className='flex-grow'></div>
          <div className='flex text-xl font-semibold mx-2'>{character.attack}</div>
        </div>

        <div className='flex bg-gray-100/25 text-gray-800'>
          <div className='flex gap-1 text-xl font-semibold my-0.5 mx-2'>
            <BiSolidShield size={25} /> Base Def:
          </div>
          <div className='flex-grow'></div>
          <div className='flex text-xl font-semibold mx-2'>{character.defence}</div>
        </div>

        <div className='flex bg-orange-200/25 text-gray-800'>
          <div className='flex gap-1 text-xl font-semibold my-0.5 mx-2'>
            <FaBook size={25} /> Base EM:
          </div>
          <div className='flex-grow'></div>
          <div className='flex text-xl font-semibold mx-2'>{character.elemental_mastery}</div>
        </div>

        <br />
        <br />

        <div className='flex bg-gray-100/25 text-gray-800'>
          <div className='flex gap-1 text-xl font-semibold my-0.5 mx-2'>
            Element:
          </div>
          <div className='flex-grow'></div>
          <div className='flex text-xl font-semibold mx-2'>{character.element}</div>
        </div>

        <div className='flex bg-orange-200/25 text-gray-800'>
          <div className='flex gap-1 text-xl font-semibold my-0.5 mx-2'>
            Constellation:
          </div>
          <div className='flex-grow'></div>
          <div className='flex text-xl font-semibold mx-2'>{character.constellation_name}</div>
        </div>

        <br />
        <br />

        <div className='flex bg-gray-100/25 text-gray-800'>
          <div className='flex gap-1 text-xl font-semibold my-0.5 mx-2'>
            VA (JP):
          </div>
          <div className='flex-grow'></div>
          <div className='flex text-xl font-semibold mx-2'>{character.voice}</div>
        </div>

        <div className='flex bg-orange-200/25 text-gray-800'>
          <div className='flex gap-1 text-xl font-semibold my-0.5 mx-2'>
            Birthday:
          </div>
          <div className='flex-grow'></div>
          <div className='flex text-xl font-semibold mx-2'>{character.birthday}</div>
        </div>

        <br />

        <div className='flex text-lg font-semibold m-2 text-gray-800'>{character.description}</div>


      </div>
    )
  } else if (isItemSelected === "Talent") {
    rightItemContent = (
      <div className=' bg-orange-75 p-4 rounded-2xl '>
        <div className='grid talent-xl:grid-cols-3 talent-l:grid-cols-3 talent-md:grid-cols-2 talent-sm:grid-cols-1 gap-4'>
          {talents.map((talent, index) => (
            <div key={index} className='border-2 border-gray-400 rounded-2xl '>
              <h3 className='p-3 font-extrabold text-gray-800 text-2xl'>{talent.name}</h3>

              <div className='border-t-2 border-gray-300 p-3 overflow-y-scroll'>
                <p className='text-gray-800 text-base h-100 whitespace-pre-line' dangerouslySetInnerHTML={{ __html: talent.description }}></p>
              </div>
              <br />
            </div>
          ))}
        </div>
      </div>
    )
  } else if (isItemSelected === "Constellation") {
    rightItemContent = (
      <div className=' bg-orange-75 p-4 rounded-2xl'>
        <div className='grid cons-2xl:grid-cols-3 cons-xl:grid-cols-3 cons-l:grid-cols-3 cons-md:grid-cols-3 cons-sm:grid-cols-3 
        cons-ssm:grid-cols-2 gap-4'>
          {constellation.map((constellation, index) => (
            <div key={index} className='border-2 border-gray-400 rounded-2xl 
            '>
              <h3 className='p-3 font-extrabold text-gray-800 text-2xl'>{constellation.name}</h3>

              <div className='border-t-2 border-gray-300 p-3 overflow-y-scroll'>
                <p className='text-gray-800 text-base h-100 whitespace-pre-line' dangerouslySetInnerHTML={{ __html: constellation.description }}></p>
              </div>
              <br />
            </div>
          ))}
        </div>
      </div>
    )
  } else if (isItemSelected === "Comments") {
    rightItemContent = (
      <div>
        <h2 className='text-gray-800 font-bold text-3xl mb-5'>Comment on what you like about the character!</h2>

        <div className='bg-orange-75 rounded-t-2xl shadow-lg comments-lg:w-250 comments-md:w-150 comments-sm:w-80 h-200 comments-sm:h-150 '>
          <div className='p-8 flex flex-col-reverse h-full'>
            <div className='overflow-y-auto flex-grow'>
              <ul className='flex flex-col gap-5'>
                {comments.map((comment) => (
                  <div className='my-3' key={comment._id}>
                    <div className='flex mb-1.5 mx-5'>
                      <li className='text-orange-400 text-lg font-bold font-gray-800'>
                        {comment.user}
                      </li>
                      <div className='flex-grow'></div>
                      <li className='mr-3.5'>{comment.dateTime}</li>
                    </div>
                    <li
                      className='leading-7 text-gray-800 font-medium mx-5'
                      key={comment._id}
                      dangerouslySetInnerHTML={{
                        __html: comment.text ? comment.text.replace(/\n/g, '<br />') : '',
                      }}
                    ></li>
                    {comment.ipAddress === userIpAddress && (
                      <button onClick={() => handleCommentDelete(comment._id, userIpAddress)} className='text-gray-900 mx-5'>
                        <IoTrashBinSharp />
                      </button>
                    )}

                  </div>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className='bg-orange-100 rounded-b-2xl shadow-lg p-4 comments-lg:w-250 comments-md:w-150 comments-sm:w-80 border-t-2 border-gray-300'>
          <form onSubmit={handleCommentSubmit}>
            <div className="flex flex-col ">
              <div className="flex  w-80  comments-sm:w-48 mb-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={commentUserName}
                  onChange={(e) => {
                    setCommentUserName(e.target.value);
                  }}
                  className="rounded-lg shadow-md text-amber-500 font-bold bg-orange-50 px-3 py-2 outline-none focus:ring focus:ring-opacity-50 flex-grow"
                  style={{ flex: 1 }}
                />
              </div>

              <div className="relative">
                <div
                  id="commentDiv" // Add an id to the div for easy targeting
                  contentEditable
                  placeholder="Add a comment"
                  onInput={(e) => {
                    handleInputContent(e);
                    setIsTyping(!!e.target.textContent.trim());
                    handleInputHeight(e);

                  }}
                  onBlur={(e) => {
                    handleInputContent(e);
                  }}
                  style={{
                    minHeight: '80px', // Adjust the minimum height as needed
                    maxHeight: '210px',
                    width: '100%', // Take up the full width
                    overflowY: 'auto',
                    resize: 'none', // Prevent resizing
                  }}
                  className={`rounded-md bg-orange-50 shadow-md px-3 py-2 outline-none focus:ring focus:ring-opacity-50 flex-grow ${isTyping ? 'border border-blue-500' : 'border border-gray-400'
                    }`}
                >
                  {chatMessage}
                </div>

                {isTyping && (
                  <button
                    type="submit"
                    className={`rounded-full w-8 h-8 absolute bottom-2 right-2 bg-blue-500 text-white transition-colors duration-300`}
                  >

                    <div className="w-8 h-8 bg-orange-300 text-orange-50 rounded-full flex items-center justify-center">
                      <PiPlayFill size={21} />
                    </div>
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>



      </div>
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
                  character.element === 'Pyro' ? 'bg-red-500' :
                    character.element === 'Hydro' ? 'bg-blue-500' :
                      character.element === 'Anemo' ? 'bg-emerald-400' :
                        character.element === 'Electro' ? 'bg-purple-700' :
                          character.element === 'Cryo' ? 'bg-cyan-400' :
                            character.element === 'Geo' ? 'bg-yellow-600' :
                              ''
                }`}>
                <div className='flex gap-1  '>
                  <img src={character.elementUrl}
                    className='w-11 h-11 ' />
                  <h1 className='font-extrabold text-5xl text-white'>{character.name}</h1>
                </div>

              </div>

              <div className='rounded-b-2xl shadow-md border-gray-400 border-r-2 border-b-2 -ml-10 pl-24 py-1 w-120 bg-orange-75 char-sm:w-96 char-ssm:w-100'>
                <p className={` font-bold text-lg
          ${character.element === 'Dendro' ? 'text-emerald-700' :
                    character.element === 'Pyro' ? 'text-red-500' :
                      character.element === 'Hydro' ? 'text-blue-500' :
                        character.element === 'Anemo' ? 'text-emerald-400' :
                          character.element === 'Electro' ? 'text-purple-700' :
                            character.element === 'Cryo' ? 'text-cyan-400' :
                              character.element === 'Geo' ? 'text-yellow-600' :
                                ''
                  }`}>{character.character_representation}</p>
                {character.rarity === '4' && (
                  <p className=''>⭐⭐⭐⭐</p>
                )}
                {character.rarity === '5' && (
                  <p className=''>⭐⭐⭐⭐⭐</p>
                )}
              </div>

            </div>

            <div className='mt-2 flex flex-col shadow-md rounded-2xl border-2 border-gray-400 p-2 w-102 ml-10 bg-orange-75 char-sm:w-80 char-sm:ml-6 char-ssm:w-80 char-ssm:ml-5'>
              <Link to={`/characters/${encodeURIComponent(character.name)}/Profile`}>
                <div onClick={handleMouseClickProfile} className={`p-2 rounded-2xl ${itemProfileSelected} `}>
                  <button className='font-bold text-3xl text-gray-700'>Profile</button>
                </div>
              </Link>

              <Link to={`/characters/${encodeURIComponent(character.name)}/Talent`}>
                <div onClick={handleMouseClickTalent} className={`p-2 rounded-2xl ${itemTalentSelected} `}>
                  <button className='font-bold text-3xl text-gray-700'>Talent</button>
                </div>
              </Link>

              <Link to={`/characters/${encodeURIComponent(character.name)}/Constellation`}>
                <div onClick={handleMouseClickConstellation} className={`p-2 rounded-2xl ${itemConstellationSelected} `}>
                  <button className='font-bold text-3xl text-gray-700'>Constellation</button>
                </div>
              </Link>

              <Link to={`/characters/${encodeURIComponent(character.name)}/Comments`}>
                <div onClick={handleMouseClickComments} className={`p-2 rounded-2xl ${itemCommentsSelected} `}>
                  <button className='font-bold text-3xl text-gray-700'>Comments</button>
                </div>
              </Link>

            </div>
          </div>
          <div className={` ${itemProfileSelectedFlexGrow}`}></div>

          <div className={` ${itemProfileSelectedFlexGrowReverse}`}>
            {rightItemContent}
          </div>
        </div>



      </div>

      <div className=''>
        <Footer />
      </div>
    </>
  )
}

export default CharacterIndivDetails