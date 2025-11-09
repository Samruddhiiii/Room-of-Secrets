import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useScore } from "../../components/ScoreContext";
import { gameover } from "../Dead/gameover";
import "./styles.css"

export default function Page8() {
  const navigate = useNavigate();
  const location = useLocation();
  const { score, decreaseScore , isDead } = useScore();
  if(isDead){
    gameover(navigate);
  }


  useEffect(() => {
    if (!location.state || !location.state.auth) {
      navigate('/');
    }
  }, []);

  const handleClick = () => {
    navigate('/Gameroom', {
      state: {
        auth: true
      },
    });
  };

  return (
    <>
      <div className="page8-bg">
        <button className="page8-door-enter" onClick={handleClick}></button>
      </div>
    </>
  );
}
