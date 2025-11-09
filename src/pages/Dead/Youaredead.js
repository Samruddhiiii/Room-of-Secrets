import React, { useEffect } from 'react'
import './Youaredead.css'
import { useLocation, useNavigate } from 'react-router-dom';

const Youaredead = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/end", {
      state: {
        auth: true,
      },
    });
  };

  // const location = useLocation();
  // useEffect(() => {
  //   if (!location.state || !location.state.auth) {
  //     navigate("/");
  //   }
  // }, []);
  return (
    <div className='dead'>
    <button onClick={handleClick}>Next</button>
    </div>
  )
}

export default Youaredead
