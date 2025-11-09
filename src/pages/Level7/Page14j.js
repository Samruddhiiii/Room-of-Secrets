import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import audio from "../../assets/ghostj.mp3"
import { useScore } from "../../components/ScoreContext";
import { gameover } from "../Dead/gameover";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import burntPaper from "../../assets/burntPaper.webp";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 900,
  outline: "none",
};

const Page14j = () => {

  const { score, decreaseScore , isDead } = useScore();
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };


  const [hintVisible, setHintVisible] = useState(false);

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue === "what is the secret that binds this mansion to the spirit world?"|| inputValue === "what is the secret that binds this mansion to the spirit world") {
      setHintVisible(true);
    } else {
          toast.error("Incorrect Question. Please Try Again", {
      position: toast.POSITION.BOTTOM_RIGHT
    });
    }
  };

  const handleClick = () => {
    navigate("/page14k", {
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

  const [openHint, setOpenHint] = React.useState(false);

  const handleOpenHint = () => {
    decreaseScore(50);
    if(isDead){
      gameover(navigate);
    }
    setOpenHint(true);
  };

  const handleCloseHint = () => {
    setOpenHint(false);
  };

  return (
    <>
    <button onClick={handleOpenHint} style={{position:"absolute", bottom:"10%", left:"0"}}>Sacrifice My Blood</button>
    <Modal
            open={openHint}
            onClose={handleCloseHint}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-description">
                <img src={burntPaper} width="100%" alt="" />
                <p className="burntPaperText" style={{top:"30%", fontSize: "3rem", lineHeight:"36px" }}>
                Find "?" and move in reverse direction
                </p>
              </Typography>
            </Box>
          </Modal>
            <div className={`fade-in-panel2 bg finalj ${fadeIn ? "fade-in" : ""}`} style={{justifyContent:"start", alignItems:"start"}}>
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

export default Page14j;