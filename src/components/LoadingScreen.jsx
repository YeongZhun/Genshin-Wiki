// import React, { useState, useEffect, useRef } from 'react';
// import '../loader-styles.scss';
// import initialLoadingVid from '../../public/Initial_Loading.mp4'; 

// // function LoadingScreen() {
// //   const videoRef = useRef(null); // Create a ref for the video element
// //   const [showInitialVideo, setShowInitialVideo] = useState(true);
// //   const [showLoadingScreen, setShowLoadingScreen] = useState(false);

// //   // Function to handle the transition from video to loading screen
// //   const handleVideoEnd = () => {
// //     setShowInitialVideo(false);
// //     setShowLoadingScreen(true);
// //   };

// //   // useEffect to add event listeners and set the video ref
// //   useEffect(() => {
// //     const videoElement = videoRef.current;

// //     if (videoElement) {
// //       videoElement.addEventListener('ended', handleVideoEnd);
// //     }

// //     return () => {
// //       if (videoElement) {
// //         videoElement.removeEventListener('ended', handleVideoEnd);
// //       }
// //     };
// //   }, []);

// //   return (
// //     <div>
// //       {showInitialVideo && (
// //         <div>
// //           {/* Use the imported video file and the video ref */}
// //           <video autoPlay controls ref={videoRef} onEnded={handleVideoEnd}>
// //             <source src={initialLoadingVid} type="mp4" />
// //             Your browser does not support the video tag.
// //           </video>
// //         </div>
// //       )}

// //       {showLoadingScreen && (
// //         <div className="loading-bar">
// //           {/* Your loading screen content */}
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // export default LoadingScreen;

// const LoadingScreen = () => {
//   const [isVideoPlaying, setIsVideoPlaying] = useState(true);
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     // Play the video for 5000ms (5 seconds)
//     const videoTimeout = setTimeout(() => {
//       setIsVideoPlaying(false); // Stop the video
//     }, 5000);

//     return () => {
//       clearTimeout(videoTimeout);
//     };
//   }, []);

//   const handleUserInteraction = () => {
//     if (!isLoading) {
//       // User interaction detected, start loading animation
//       setIsLoading(true);

//       // Simulate loading for demonstration purposes (adjust this as needed)
//       setTimeout(() => {
//         // Loading complete, show actual contents
//         setIsLoading(false);
//         console.log('Loading complete. Show actual contents.');
//       }, 3000); // Simulate loading for 3 seconds (adjust as needed)
//     }
//   };

//   return (
//     <div
//       className={`loading-screen ${isLoading ? 'loading' : ''}`}
//       onClick={handleUserInteraction}
//       onKeyDown={handleUserInteraction}
//       tabIndex="0"
//       style={{ width: '100vw', height: '100vh', overflow: 'hidden', position: 'relative' }}
//     >
//       {isVideoPlaying ? (
//         <video autoPlay loop muted style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
//           <source src="public/Initial_Loading.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//       ) : (
//         <img src="https://res.cloudinary.com/dv0cc527o/image/upload/v1694536253/Loading_Frame.jpg" alt="Frozen Frame" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
//       )}
//       {isLoading && <div className="loader">Loading...</div>}
//     </div>
//   );
// };

// export default LoadingScreen;


import React from 'react'
import '../loader-styles.scss'

function LoadingScreen() {



  return (
    <div className={`loading-bar`}>
      {/* Your loading screen content */}
    </div>
  );
}

export default LoadingScreen