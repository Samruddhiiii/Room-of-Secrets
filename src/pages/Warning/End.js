import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import cuLogo from "../../assets/cuLogo.webp"
// import tcpLogo from "../../assets/tcpLogo.webp"

const End = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/thankyou", {
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
      <div className="bg season2">
      <div style={{position:"fixed", right:"5px", top:"15px", zIndex:"201"}}>
          <img width="300px" src={cuLogo} alt="" />
        </div>
        <div style={{position:"fixed", right:"5px", bottom:"10px"}}>
        {/* <img width="300px" src={tcpLogo} alt="" /> */}
        </div>
        <div className="title" style={{fontSize:"6rem"}}>
        WHY SO SERIOUS?<br />
          <div className="sub-title" style={{marginTop:"4rem"}}>2024 &nbsp; </div>
        </div>
        {/* <p style={{margin:"0 5rem"}}>You're in an elevator filling with blood, and you have just 15 minutes to escape using four videos and a puzzle. If you can't unlock it in time, you'll suffocate and face a fatal outcome as the blood continues to rise.</p> */}
        <a href="https://forms.gle/LRaxpf1o9SvcT5bh6"><button style={{marginTop:"5rem", fontSize:"2rem"}}>GIVE FEEDBACK</button></a>
      </div>
    </>
  );
};

export default End;