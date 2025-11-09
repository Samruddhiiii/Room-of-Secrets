import React, { useState, useEffect } from 'react';

const Panel4 = () => {
  const [text, setText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const panelText = "And The horror mansion's never-ending loop went on and on."; // Customize the text as needed

  useEffect(() => {
    const interval = setInterval(() => {
      if (textIndex < panelText.length) {
        setText(panelText.substring(0, textIndex + 1));
        setTextIndex(textIndex + 1);
      } else {
        clearInterval(interval);
      }
    }, 50); // Adjust the typing speed as needed (e.g., 50 milliseconds)

    return () => {
      clearInterval(interval);
    };
  }, [panelText, textIndex]);
  

  return (
    <div className={`typewriter-text fade-in ${text ? 'typing' : ''}`} style={{margin:"0 5rem", textShadow:"2px 2px 2px black"}}>{text}</div>
  );
}

export default Panel4;