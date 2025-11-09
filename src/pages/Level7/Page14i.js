import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import audio from "../../assets/ghosti.mp3"

const Page14i = () => {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const [hintVisible, setHintVisible] = useState(false);

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue === "what is the consequence of failing to escape this mansion?" || inputValue === "what is the consequence of failing to escape this mansion") {
      setHintVisible(true);
    } else {
          toast.error("Incorrect Question. Please Try Again", {
      position: toast.POSITION.BOTTOM_RIGHT
    });
    }
  };

  const handleClick = () => {
    navigate("/page14j", {
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
      <div className={`fade-in-panel2 bg finali ${fadeIn ? "fade-in" : ""}`} style={{justifyContent:"start", alignItems:"start"}}>
        {/* <p style={{margin:"0 5rem 3rem 5rem", alignSelf:"flex-start", textShadow:"2px 2px 5px black", fontSize:"1.5rem"}}>{text}</p> */}
        <div>
                  {!hintVisible && (
                            <form onSubmit={handleSubmit} style={{margin:"5rem 10rem", width:"2000px"}}>
                            <label>
                            <br />
                              <input
                                type="text"
                                value={inputValue}
                                onChange={handleInputChange}
                                placeholder="Enter Question Here"
                                style={{
                                  borderRadius: "0",
                                  width: "30%",
                                  height:"50px"
                                //   marginLeft: "5rem",
                                //   letterSpacing:"15px"
                                }}
                              />
                            </label>
                            <button type="submit">ASK</button>
                </form>
                  )}
                  {hintVisible && (
                    <div className={`fade-in-panel2 ${fadeIn ? "fade-in" : ""}`} style={{margin:"5rem 10rem", width:"2000px"}}>
                      <audio src={audio} controls></audio>
                      <br />
                      <button onClick={handleClick}>NEXT</button>
                      </div>
                  )}
                </div>


      </div>
    </>
  );
};

export default Page14i;