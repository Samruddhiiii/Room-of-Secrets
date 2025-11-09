import React, { useState, useEffect } from 'react';

const Panel3 = () => {
  const [text, setText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const panelText = "You're all set, so get ready for a chilling journey into the cursed mansion."; // Customize the text as needed
  useEffect(() => {
    const interval = setInterval(() => {
      if (textIndex < panelText.length) {
        setText(panelText.substring(0, textIndex + 1));
        setTextIndex(textIndex + 1);
      } else {
        clearInterval(interval);
      }
    }, 20);
    return () => {
      clearInterval(interval);
    };
  }, [panelText, textIndex]);

  return (
    <>
    {/* Read the instructions carefully !!! */}
    <div className={`typewriter-text fade-in ${text ? 'typing' : ''}`}>{text}</div>
    </>
  );
}

export default Panel3;
