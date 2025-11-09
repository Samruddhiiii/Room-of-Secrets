import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Page14h = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/page14i", {
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
  const panelText = "Everything is set. Now, it's time to summon the dark energy and have a talk with it using Ouija Board. The question you need to ask is hidden within a puzzle. Solve it, then go ahead and ask the negative spirit."

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
      <div className={`fade-in-panel2 bg finalh ${fadeIn ? "fade-in" : ""}`} style={{justifyContent:"start"}}>
        <p style={{margin:"5rem 5rem 3rem 5rem", alignSelf:"flex-start", textShadow:"2px 2px 5px black", fontSize:"1.5rem"}}>{text}</p>
        <button onClick={handleClick}>USE OUIJA BOARD</button>
      </div>
    </>
  );
};

export default Page14h;