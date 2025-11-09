import React, { useState, useEffect } from 'react';

const Panel1 = () => {
  const [text, setText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const panelText = "The next morning, you found yourself in good condition to leave the place on your own. You met up with your friends and family, sharing with them the harrowing experience you had endured. By that time, the mansion had been reduced to ashes, with the police cordoning off the area, prohibiting anyone from approaching it. You made your way to the hospital and underwent a week of bed rest to ensure a full recovery."; // Customize the text as needed

  useEffect(() => {
    const interval = setInterval(() => {
      if (textIndex < panelText.length) {
        setText(panelText.substring(0, textIndex + 1));
        setTextIndex(textIndex + 1);
      } else {
        clearInterval(interval);
      }
    }, 20); // Adjust the typing speed as needed (e.g., 50 milliseconds)

    return () => {
      clearInterval(interval);
    };
  }, [panelText, textIndex]);
  

  return (
    <div className={`typewriter-text fade-in ${text ? 'typing' : ''}`} style={{alignSelf:"flex-start", margin:"0 5rem", textShadow:"2px 2px 2px black"}}>{text}</div>
  );
}

export default Panel1;
