import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Page11 = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/page115", {
      state: {
        auth: true,
      },
    });
  };
  const handleClick2 = () => {
    navigate("/", {
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
      <div className={`fade-in-panel2 bg warning ${fadeIn ? "fade-in" : ""}`}>
        <div className="title">
            Warning<br />
          <div className="sub-title">EXPLICIT &nbsp; CONTENT</div>
        </div>
        <p style={{margin:"0 5rem 3rem 5rem"}}>Not everyone is cut out for the next levels. You have the choice to prioritize your health and leave safely. But if you're determined to proceed, be prepared to risk it all and lose your health in one go. Choose one the options given below</p>
        <button onClick={handleClick} style={{paddingBottom:"1rem"}}> I'm willing to take risks, and I'll take full responsibility for the consequences</button>
        <button onClick={handleClick2} style={{paddingBottom:"1rem"}}> I'm content with my current score, so I plan to exit unharmed and in one piece</button>
      </div>
    </>
  );
};

export default Page11;