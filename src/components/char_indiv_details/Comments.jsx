import React from 'react'
import { PiPlayFill } from 'react-icons/pi'
import { IoTrashBinSharp } from 'react-icons/io5'
import { MdEditNote } from 'react-icons/md'
import axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid'

import { useState, useEffect } from 'react'

function Comments({ character }) {
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

  const [editingCommentId, setEditingCommentId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);


  const blockedWords = import.meta.env.VITE_blockedWords.split(',');

  const backendURL = import.meta.env.VITE_BACKEND_URL

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
    // console.log(userIpAddress);


    const fetchData = async () => {
      try {

        if (!isCommentsFetched) {
          await axios
            .get(`${backendURL}/api/getcomments/${character._id}`)
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
      const formattedDate = `${now.getDate().toString().padStart(2, '0')}/${(now.getMonth() + 1).toString().padStart(2, '0')}/${now.getFullYear()} ${now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
      const commentId = uuidv4();

      const response = await axios.post(`${backendURL}/api/comments`, {
        char_id: character._id,
        commentId,
        user: commentUserName,
        text: newComment,
        dateTime: formattedDate,
        ipAddress: userIpAddress,
        isEditing: false,
      });

      // console.log(response)
      const newCommentData = response.data
      // console.log(newCommentData)

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
      await axios.delete(`${backendURL}/api/deletecomment/${commentId}/${userIpAddress}`);
      setComments((prevComments) => prevComments.filter((comment) => comment._id !== commentId));
    } catch (error) {
      console.error('Error deleting comments:', error);
    }
  };

  // const handleCommentEdit = (commentId) => {
  //   setComments((prevComments) =>
  //     prevComments.map((comment) =>
  //       comment._id === commentId ? { ...comment, isEditing: !comment.isEditing } : comment
  //     )
  //   );
  //   // Force a re-render to show the input field
  //   setIsCommentsFetched(false);
  // };

  const handleCommentEdit = (commentId) => {
    const updatedComments = comments.map((comment) => {
      if (comment._id === commentId) {
        // Initialize comment.updatedText with comment.text
        return { ...comment, updatedText: comment.text };
      }
      return comment;
    });
    setComments(updatedComments);
    setEditingCommentId(commentId);
    setIsEditing(true);
  };


  const handleUpdateComment = async (comment) => {
    // console.log('Before update:', comment);

 // Check if comment.updatedText is empty and handle it accordingly
  if (!comment.updatedText.trim()) {
    // Handle the case where the textarea is empty
    // Here, im returning without updating
    return;
  }

    for (const blockedWord of blockedWords) {
      if (comment.updatedText.toLowerCase().includes(blockedWord)) {
        toast.error(
          <div>
            P.A.I.M.O.N: <br /> Error.. <br /> your comment contains forbidden knowledge. <br /> Initializing deletion..
          </div>
        );
        return; // Don't proceed with updating the comment
      }
    }


    try {
      const response = await axios.put(
        `${backendURL}/api/updatecomment/${comment._id}/${userIpAddress}`,
        {
          newText: comment.updatedText,
          ipAddress: userIpAddress,
        }
      );
      // console.log(response);
      comment.text = comment.updatedText;

      setComments((prevComments) =>
        prevComments.map((c) =>
          c._id === comment._id ? { ...c, text: comment.updatedText } : c
        )
      );

      // Clear editing state after successful update
      setEditingCommentId(null);
      setIsEditing(false);

      setIsCommentsFetched(false);
      // console.log('After update:', comment);
    } catch (error) {
      console.error('Error updating comment:', error)
    }
  };

  //This is for the comment box to adjust its height after a new line has been added (alt+enter)
  const handleInputHeight = (event) => {
    const target = event.target;
    target.style.height = 'auto';
    target.style.height = `${target.scrollHeight}px`;
  };

  // This is to handle multiple lines comment (alt+enter) by converting them into \n to be displayed as newlines
  const handleInputContent = (event) => {
    const target = event.target;
    // regex, / signals the start and end of regex. /g means global, not just the first word.
    const content = target.innerHTML.replace(/<div><br><\/div>/g, '\n');
    // Check if the content is empty or just a single <br> tag and set it to empty string
    setNewComment(content.trim() === '' || content.trim() === '<br>' ? '' : content);
  };


  return (
    <div>
      <h2 className='text-gray-800 font-bold text-3xl mb-5'>Comment on what you like about the character!</h2>

      <div className='bg-orange-75 rounded-t-2xl shadow-lg comments-lg:w-250 comments-md:w-150 comments-sm:w-150 h-200 comments-sm:h-150 '>
        <div className='p-8 flex flex-col-reverse h-full'>
          <div className='overflow-y-auto flex-grow'>
            <ul className='flex flex-col gap-5'>

              {comments.map((comment) => (
                <div className='my-3' key={comment._id}>
                  <div className='flex mb-1.5 mx-5 comments-sm:flex-col'>
                    <li className='text-orange-400 text-lg font-bold font-gray-800'>
                      {comment.user}
                    </li>
                    <div className='flex-grow'></div>
                    <li className='mr-3.5'>{comment.dateTime}</li>
                  </div>

                  {editingCommentId === comment._id ? (
                    <div>
                      <textarea
                        value={comment.updatedText || comment.text}
                        onChange={(e) => {
                          // Update the updatedText property in the comment object
                          const updatedComments = comments.map((c) => {
                            if (c._id === comment._id) {
                              return { ...c, updatedText: e.target.value };
                            }
                            return c;
                          });
                          setComments(updatedComments);
                        }}
                        style={{ width: '300px', height: '100px', resize: 'none' }}
                        className='rounded -my-1.5'
                      />
                      <div className='my-1.5'>
                        <button onClick={() => setEditingCommentId(null)} className='text-white rounded px-2 bg-red-400'>
                          X
                        </button>
                        <button
                          onClick={() => {
                            handleUpdateComment(comment);
                            setEditingCommentId(null); // Exit edit mode
                          }}
                          className='bg-blue-500 text-white rounded px-2 mx-1 '
                        >
                          Update
                        </button>
                      </div>
                    </div>
                  ) : (

                    <div>

                      <li
                        className='leading-7 text-gray-800 font-medium mx-5'
                        key={comment._id}
                        dangerouslySetInnerHTML={{
                          __html: comment.text ? comment.text.replace(/\n/g, '<br />') : '',
                        }}
                      ></li>
                      {comment.ipAddress === userIpAddress && (
                        <>
                          <button onClick={() => handleCommentEdit(comment._id)} className='text-gray-900 ml-5'>
                            <MdEditNote size={20} />
                          </button>

                          <button onClick={() => handleCommentDelete(comment._id, userIpAddress)} className='text-gray-900 ml-1.5'>
                            <IoTrashBinSharp size={16} />
                          </button>
                        </>
                      )}
                    </div>
                  )}
                </div>
              ))}

            </ul>
          </div>
        </div>
      </div>

      <div className='bg-orange-100 rounded-b-2xl shadow-lg p-4 comments-lg:w-250 comments-md:w-150 comments-sm:w-150 border-t-2 border-gray-300'>
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

export default Comments
