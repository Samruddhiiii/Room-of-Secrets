import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import './RitualRoom.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import video from '../../assets/Images/firevideo.mp4';
import { useScore } from "../../components/ScoreContext";
import { gameover } from "../Dead/gameover";

const RitualRoom3 = () => {
  const { score, decreaseScore , isDead } = useScore();
  const navigate = useNavigate();
  if(isDead){
    gameover(navigate);
  }


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
    if (inputValue === "exorcise") {
      navigate("/page117", {
        state: {
          auth: true,
        },
      });
    } else {
        decreaseScore(-15);
        if(isDead){
          gameover(navigate);
        }
          toast.error("Incorrect Password. Please Try Again", {
      position: toast.POSITION.BOTTOM_RIGHT
    });
    }
  };

    const [text, setText] = useState('');
    const [textIndex, setTextIndex] = useState(0);
    const panelText = "Congratulations !!!, you have successfully summoned the holy fire !!! But Spirits are trying to escape, do not let them out of holy fire, so that the flames engulf and purify the entire mansion. To do this, arrange the first letters from all the codes of the cursed objects and form the word that will exorcise the evil spirits residing in the mansion."

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
    <div >
    <div className="ritual-room-bg3">
        <div style={{position:"absolute", top:"9%", margin:"0 5rem" }}>
            <div className={`typewriter-text fade-in ${text ? 'typing' : ''}  txt`} > {text} </div>
        </div>
        <form onSubmit={handleSubmit} style={{ position:"absolute", top:"70%", width:"30%" , left:'35%'}}>
                    <label style={{color:"white"}}>
                      <input
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        placeholder="********"
                        style={{
                          borderRadius: "0",
                          width: "60%",
                          letterSpacing:"15px",
                        }}
                      />
                    </label>
                    <button type="submit" style={{padding:'10px'}}> EXORCISE</button>
          </form>
    </div>
  </div>
  )
}

export default RitualRoom3
