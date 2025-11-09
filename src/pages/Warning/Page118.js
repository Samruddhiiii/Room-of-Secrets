import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Panel1 from './Panel1';
import Panel2 from './Panel2';
import Panel3 from './Panel3';
import Panel4 from './Panel4';

const Page118 = () => {
  const navigate = useNavigate();

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

  const [currentPanel, setCurrentPanel] = useState(1);
  const handleNextClick = () => {
    if (currentPanel < 4) {
      setCurrentPanel(currentPanel + 1);
    } else {
      navigate('/end', {
        state: {
          auth: true,
        },
      });
    }
  };

  return (
    <>
      <div className={`fade-in-panel2 bg morning ${fadeIn ? "fade-in" : ""}`}>
        <div className="title" style={{fontSize:"6rem"}}>
        Escaped Successfully<br />
          <div className="sub-title" style={{textShadow:"2px 2px 2px black"}}>CONGRATULATIONS &nbsp;</div>
        </div>
        {currentPanel === 1 && <Panel1 />}
      {currentPanel === 2 && <Panel2 />}
      {currentPanel === 3 && <Panel3 />}
      {currentPanel === 4 && <Panel4 />}
        <button onClick={handleNextClick}>Next</button>
      </div>
    </>
  );
};

export default Page118;