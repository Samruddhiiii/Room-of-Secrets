import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Page116 = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/page12", {
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
      <div className={`fade-in-panel2 bg lift ${fadeIn ? "fade-in" : ""}`}>
        <div className="title">
        Elevator of Doom<br />
          <div className="sub-title">PRE FINAL &nbsp; LEVEL</div>
        </div>
        <p style={{margin:"0 5rem"}}>You're in an elevator filling with blood, and you have just 15 minutes to escape using four videos and a puzzle. If you can't unlock it in time, you'll suffocate and face a fatal outcome as the blood continues to rise.</p>
        <button onClick={handleClick}>Play</button>
      </div>
    </>
  );
};

export default Page116;