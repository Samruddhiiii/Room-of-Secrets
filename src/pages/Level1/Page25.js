import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useScore } from "../../components/ScoreContext";
import { gameover } from "../Dead/gameover";
const Page25 = () => {
  const navigate = useNavigate();
  const { score, decreaseScore , isDead } = useScore();
  if(isDead){
    gameover(navigate);
  }
  const handleClick = () => {
    navigate("/page3", {
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
      <div className={`fade-in-panel2 bg level1 ${fadeIn ? "fade-in" : ""}`}>
        <div className="title">
            Haunting Room<br />
          <div className="sub-title">LEVEL &nbsp; ONE</div>
        </div>
        <p style={{margin:"0"}}>Find & Solve the Two hidden Puzzles To Escape The Room</p>
        <button onClick={handleClick}>Play</button>
      </div>
    </>
  );
};

export default Page25;