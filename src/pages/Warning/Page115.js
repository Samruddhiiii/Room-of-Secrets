import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Page115 = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/page116", {
      state: {
        auth: true,
      },
    });
  };

  const location = useLocation();
  useEffect(() => {
    if (!location.state || !location.state.auth) {
      navigate("/");
    }
  }, []);

  const [fadeIn, setFadeIn] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 150);
    return () => clearTimeout(timer);
  }, []);

  const [text, setText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const panelText = "Moving forward, you came across a strange sight – lifeless bodies and a trail of blood leading to an elevator. Little did you know, your next mission awaited inside that very elevator. Brace yourself for the unexpected adventure ahead. Your boldness is truly commendable, and you're bound to find enjoyment in the challenges that lie ahead."

  useEffect(() => {
    const interval = setInterval(() => {
      if (textIndex < panelText.length) {
        setText(panelText.substring(0, textIndex + 1));
        setTextIndex(textIndex + 1);
      } else {
        clearInterval(interval);
      }
    }, 30); // Adjust the typing speed as needed (e.g., 50 milliseconds)

    return () => {
      clearInterval(interval);
    };
  }, [panelText, textIndex]);

  return (
    <>
      <div className={`fade-in-panel2 bg warning ${fadeIn ? "fade-in" : ""}`}>
        <p style={{margin:"0 5rem 3rem 5rem", alignSelf:"flex-start", color:"#ff0000b7", textShadow:"2px 2px 5px black", fontSize:"1.5rem"}}>{text}</p>
        <button onClick={handleClick} style={{paddingBottom:"1rem"}}>NEXT</button>
      </div>
    </>
  );
};

export default Page115;