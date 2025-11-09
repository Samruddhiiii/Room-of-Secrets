import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Page117 = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/page118", {
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

  const [text, setText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const panelText = "The mansion's tormented owner's spirit is finally at rest. The mystery surrounding his daughter's killer has been unraveled, and all the objects harboring negative energy have been consumed by fire. The mansion, the source of so much darkness, has also been reduced to ashes, setting you free. Remarkably, you are the sole survivor of this ordeal, and your escape stands as a testament to your strength and resourcefulness. You've emerged as the only one to conquer the sinister mansion. Congratulations on your remarkable achievement!"

  useEffect(() => {
    const interval = setInterval(() => {
      if (textIndex < panelText.length) {
        setText(panelText.substring(0, textIndex + 1));
        setTextIndex(textIndex + 1);
      } else {
        clearInterval(interval);
      }
    }, 30);

    return () => {
      clearInterval(interval);
    };
  }, [panelText, textIndex]);

  return (
    <>
      <div className={`fade-in-panel2 bg houseOnFire ${fadeIn ? "fade-in" : ""}`}>
        <div className="title" style={{fontSize:"6rem"}}>
        Escaped Successfully<br />
          <div className="sub-title" style={{textShadow:"2px 2px 2px black"}}>CONGRATULATIONS &nbsp;</div>
        </div>
        <p style={{margin:"0 5rem", alignSelf:"flex-start"}}>{text}</p>
        <button onClick={handleClick}>Next</button>
      </div>
    </>
  );
};

export default Page117;