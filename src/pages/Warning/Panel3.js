import React, { useState, useEffect } from 'react';

const Panel3 = () => {
  const [text, setText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const panelText = "In the same place, a creepy haunted mansion appeared out of nowhere. People who tried to check it out ended up dead, with their bodies torn apart. Some folks claimed they could hear strange, spooky sounds coming from the mansion, as if it was trying to lure them inside."; // Customize the text as needed

  useEffect(() => {
    const interval = setInterval(() => {
      if (textIndex < panelText.length) {
        setText(panelText.substring(0, textIndex + 1));
        setTextIndex(textIndex + 1);
      } else {
        clearInterval(interval);
      }
    }, 100); // Adjust the typing speed as needed (e.g., 50 milliseconds)

    return () => {
      clearInterval(interval);
    };
  }, [panelText, textIndex]);
  

  return (
    <div className={`typewriter-text fade-in ${text ? 'typing' : ''}`} style={{margin:"0 5rem", textShadow:"2px 2px 2px black"}}>{text}</div>
  );
}

export default Panel3;