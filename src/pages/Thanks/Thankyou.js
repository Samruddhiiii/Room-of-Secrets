import React, { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Thankyou = () => {
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(()=>{
      if(!location.state || !location.state.auth){
        navigate('/');
      }
    },[]);
  return (
    <>
    <div style={{position:'absolute' , top:'45%',left:'48%'}}>THANK YOU</div>
    </>
  )
}

export default Thankyou