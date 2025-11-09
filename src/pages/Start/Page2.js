import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Panel1 from './Panel1';
import Panel2 from './Panel2';
import Panel3 from './Panel3';


const Page2 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentPanel, setCurrentPanel] = useState(1);

  useEffect(() => {
    if (!location.state || !location.state.auth) {
      navigate('/');
    }
  }, [location.state, navigate]);

  const handleNextClick = () => {
    if (currentPanel < 3) {
      setCurrentPanel(currentPanel + 1);
    } else {
      navigate('/page25', {
        state: {
          auth: true,
        },
      });
    }
  };
  const [fadeIn, setFadeIn] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`fade-in-panel2 bg start ${fadeIn ? 'fade-in' : ''}`}>
      <div className='title' style={{marginBottom:"7rem"}}>VIRTUAL ESCAPE</div>
      <div className='desc' style={{ padding:"0rem 10rem 2rem 10rem", alignSelf:"flex-start"}}>
      {currentPanel === 1 && <Panel1 />}
      {currentPanel === 2 && <Panel2 />}
      {currentPanel === 3 && <Panel3 />}
      </div>
      <button onClick={handleNextClick}>Next</button>
    </div>
  );
};

export default Page2;