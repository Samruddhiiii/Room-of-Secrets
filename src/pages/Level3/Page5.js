import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useScore } from "../../components/ScoreContext";
import { gameover } from "../Dead/gameover";
const Page5 = () => {
  const { score, decreaseScore , isDead } = useScore();
  const navigate = useNavigate();
  if(isDead){
    gameover(navigate);
  }
  
  const handleClick = () => {
    navigate("/page6", {
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
      <div className={`fade-in-panel2 bg level3 ${fadeIn ? "fade-in" : ""}`}>
        <div className="title" style={{fontSize:"6rem"}}>
        Paranormal Pursuit<br />
          <div className="sub-title">LEVEL &nbsp; THREE</div>
        </div>

        <p style={{margin:"0 4rem"}}>Discover the Clues hidden in two parts to unveil the killer's name, solve them to escape</p>
        <button onClick={handleClick}>PLAY</button>
      </div>
    </>
  );
};

export default Page5;