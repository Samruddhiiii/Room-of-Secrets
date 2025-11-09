import React, { useState } from "react";
import sound_effect from "../assets/introaudio.mp3";

const IntroAudio = () => {
  const [notPlaying, setnotPlaying] = useState(true);
  const audioRef = React.createRef();
  const toggleAudio = () => {
    if (notPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    setnotPlaying(!notPlaying);
  };
  return (
    <div>
      <audio ref={audioRef} loop>
        <source src={sound_effect} />
      </audio>
      <div>
        <button onClick={toggleAudio}>
          {!notPlaying ? (
            <p>stop ■</p>
          ) : (
            <p>sound ▶</p>
          )}
        </button>
      </div>
    </div>
  );
};

export default IntroAudio;
