import React, { useState, useEffect } from 'react';

const Panel2 = () => {
  const [text, setText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const panelText = "Upon entering the Mansion, you start with a health score of 500. Wrong choices will lead to a deduction of your blood units. To receive hints, you must sacrifice 50 units of your blood by clicking sacrifice my blood button. To escape this mansion successfully, you must complete all the levels, and your final health score will determine your performance. Please ensure that your browser's zoom is set to 100% to proceed. All the passwords are in lower cases. Ensure you play in full-screen mode with background music . Remember, you chose to embark on this journey, so now, it's up to you to prove your mettle and strive to escape alive."; // Customize the text as needed

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
    <p>Read the instructions carefully !!!</p>
    <div className={`typewriter-text fade-in ${text ? 'typing' : ''}`}>{text}</div>
    </>
  );
}

export default Panel2;
