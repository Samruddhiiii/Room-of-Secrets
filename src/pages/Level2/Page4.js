import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { gameover } from "../Dead/gameover";
import { useScore } from "../../components/ScoreContext";

const Page4 = () => {
  const { score, decreaseScore , isDead } = useScore();
  const navigate = useNavigate();
  const location = useLocation();
  
  if(isDead){
    gameover(navigate);
  }
  const handleClick = () => {
    navigate("/page35", {
      state: {
        auth: true,
      },
    });
  };

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
      <div className={`fade-in-panel2 bg level2 ${fadeIn ? "fade-in" : ""}`}>
        <div className="title" style={{fontSize:"6rem"}}>
        Terror Trail<br />
          <div className="sub-title">LEVEL &nbsp; TWO</div>
        </div>

        <p style={{margin:"0 4rem"}}>Sketch the Map shown in the next Panel Carefully and Choose the Gate wisely : One door leads to the next room, the other returns you to the first room with blood sacrifice.</p>
        <button onClick={handleClick}>SEE MAP</button>
      </div>
    </>
  );
};

export default Page4;