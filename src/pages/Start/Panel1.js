import React, { useState, useEffect } from 'react';

const Panel1 = () => {
  const [text, setText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const panelText = "Enter the chilling world of 'Virtual Escape: The Cursed Mansion,' but proceed with caution. This game is not for the faint of heart, as it contains explicit and disturbing imagery that will send shivers down your spine. Are you brave enough to face the horrors lurking within the haunted confines of this mansion?"; // Customize the text as needed

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
    <>
    <div className={`typewriter-text fade-in ${text ? 'typing' : ''}`}>{text}</div>
    </>
  );
}

export default Panel1;
