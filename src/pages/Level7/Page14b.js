import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Page14b = () => {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue === "s72x") {
      navigate("/page14c", {
        state: {
          auth: true,
        },
      });
    } else {
          toast.error("Incorrect Password. Please Try Again", {
      position: toast.POSITION.BOTTOM_RIGHT
    });
    }
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
      <div className={` bg finalb`} style={{justifyContent:"start"}}>
        {/* <p style={{margin:"0 5rem 3rem 5rem", alignSelf:"flex-start", textShadow:"2px 2px 5px black", fontSize:"1.5rem"}}>{text}</p> */}
        <form onSubmit={handleSubmit} style={{marginTop:"5rem"}}>
                    <label style={{color:"white"}}>
                    place DOWSY PENDULUM ON THE TABLE. <br />
                      <input
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        placeholder="****"
                        style={{
                          borderRadius: "0",
                          width: "180px",
                        //   marginLeft: "5rem",
                          letterSpacing:"15px"
                        }}
                      />
                    </label>
                    <button type="submit">place</button>
                  </form>
      </div>
    </>
  );
};

export default Page14b;