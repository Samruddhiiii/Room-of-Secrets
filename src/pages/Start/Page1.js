import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import cuLogo from "../../assets/cuLogo.webp"
// import tcpLogo from "../../assets/tcpLogo.webp"
import { useScore } from '../../components/ScoreContext';

const Page1 = () => {
  const navigate = useNavigate();
  const { clearScore } = useScore();

  useEffect(() => {
    clearScore();
  }, []);

  const handleClick = () => {
    navigate("/page2", {
      state: {
        auth: true,
      },
    });
  };

  const [fadeIn, setFadeIn] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className={`fade-in-panel2 bg start ${fadeIn ? "fade-in" : ""}`}>
        <div style={{position:"fixed", right:"5px", top:"15px", zIndex:"101"}}>
          {/* <img width="300px" src={cuLogo} alt="" /> */}
        </div>
        <div style={{position:"fixed", right:"5px", bottom:"10px"}}>
        {/* <img width="300px" src={tcpLogo} alt="" /> */}
        </div>
        <div className="title">
          Virtual Escape<br />
          <div className="sub-title">The Cursed Mansion</div>
        </div>
        <button onClick={handleClick}>Play</button>
      </div>
    </>
  );
};

export default Page1;
