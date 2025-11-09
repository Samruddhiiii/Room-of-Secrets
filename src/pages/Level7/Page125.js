import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useScore } from "../../components/ScoreContext";
import { gameover } from "../Dead/gameover";

const Page125 = () => {
  const navigate = useNavigate();
  const { score, decreaseScore , isDead } = useScore();
  if(isDead){
    gameover(navigate);
  }
  const handleClick = () => {
    navigate("/page13", {
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

  return (
    <>
      <div className={`fade-in-panel2 bg level6 ${fadeIn ? "fade-in" : ""}`}>
        <div className="title" style={{fontSize:"6rem"}}>
        THE Exorcism Chronicles<br />
          <div className="sub-title">FINAL &nbsp; LEVEL</div>
        </div>

        <p style={{margin:"0 4rem"}}>Find All the Cursed Objects and then Climb the Stairs to Start the Ritual!</p>
        <button onClick={handleClick}>PLAY</button>
      </div>
    </>
  );
};

export default Page125;