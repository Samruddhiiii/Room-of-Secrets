import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import './RitualRoom.css'
import { useScore } from "../../components/ScoreContext";
import { gameover } from "../Dead/gameover";

const RitualRoom1 = () => {

  const { score, decreaseScore , isDead } = useScore();
  const navigate = useNavigate();
  if(isDead){
    gameover(navigate);
  }

    const handleClick = () => {
        navigate("/page14", {
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

  return (
    <div className="ritual-room-bg1">
      <div className="ritual-room-table" onClick={handleClick}>
      </div>
    </div>
  )
}

export default RitualRoom1
