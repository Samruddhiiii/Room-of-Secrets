import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import './RitualRoom.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useScore } from "../../components/ScoreContext";
import { gameover } from "../Dead/gameover";

const RitualRoom2 = () => {
  const { score, decreaseScore , isDead } = useScore();
  const navigate = useNavigate();
  if(isDead){
    gameover(navigate);
  }

    const handleClick = () => {
        navigate("/page15", {
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

      const [inputValue, setInputValue] = useState("");
      const handleInputChange = (e) => {
        setInputValue(e.target.value);
      };
      
      const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue == "ignis arde!" || inputValue == "ignis arde") {
          navigate("/RitualRoom3", {
            state: {
              auth: true,
            },
          });
        } else {
              toast.error("YOU ARE LOSING BLOOD ! RECALL THE CORRECT CHANT!", {
          position: toast.POSITION.BOTTOM_RIGHT
        });
        }
      };

  return (
    <div className="ritual-room-bg2">
          <form onSubmit={handleSubmit} style={{position:'absolute' ,display:'flex',flexDirection:'column', top:"25rem" , left:"55rem"}} >
                    <label style={{color:"white" , display:'flex' , flexDirection:'column' , padding:'1rem'}}>
                    SAY CHANT TO SUMMON HOLY FIRE! 
                      <input
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        placeholder="**********"
                        style={{
                            marginTop:'15px',
                          borderRadius: "0",
                          padding:'10px',
                          letterSpacing:"15px"
                        }}
                      />
                    </label>
                    <button type="submit">Summon Holy Fire</button>
           </form>
    </div>
  )
}

export default RitualRoom2
