import React, { useState, useEffect } from 'react';

function FullScreenButton() {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleFullScreen = () => {
    if (!isFullScreen) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen().catch((err) => {
          console.error('Error attempting to enable full-screen mode:', err);
        });
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  useEffect(() => {
    // Add an event listener for the fullscreenchange event to update the state
    document.addEventListener('fullscreenchange', handleFullscreenChange);

    return () => {
      // Clean up the event listener when the component unmounts
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  const handleFullscreenChange = () => {
    setIsFullScreen(document.fullscreenElement !== null);
  };

  return (
    <button style={{position:"absolute"}} className='full-screen' onClick={toggleFullScreen}>
      {isFullScreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
    </button>
  );
}

export default FullScreenButton;
