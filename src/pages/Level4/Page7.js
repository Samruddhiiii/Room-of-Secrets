import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useScore } from "../../components/ScoreContext";
import { gameover } from "../Dead/gameover";
const Page7 = () => {
  const { score, decreaseScore , isDead } = useScore();
  const navigate = useNavigate();
  if(isDead){
    gameover(navigate);
  }
  
  const handleClick = () => {
    navigate("/page8", {
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
      <div className={`fade-in-panel2 bg level4 ${fadeIn ? "fade-in" : ""}`}>
        <div className="title" style={{fontSize:"6rem"}}>
        THE ROOM OF HOPE<br />
          <div className="sub-title">LEVEL &nbsp; FOUR</div>
        </div>

        <p style={{margin:"0 4rem"}}>WHAT AWAITS YOU NEXT IS THE HOPE OF SUCCESSFUL ESCAPE !</p>
        <button onClick={handleClick}>PLAY</button>
      </div>
    </>
  );
};

export default Page7;