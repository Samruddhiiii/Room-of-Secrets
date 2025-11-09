import React, { useEffect, useState } from 'react';
import './Gameroom.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useScore } from "../../components/ScoreContext";
import Modal from "@mui/material/Modal";
import { gameover } from "../Dead/gameover";


function Gameroom() {
  const { score, decreaseScore , isDead } = useScore();
  const navigate = useNavigate();
  const location = useLocation();
  if(isDead){
    gameover(navigate);
  }
  const [instructionsVisible, setInstructionsVisible] = useState(false);
 

  useEffect(()=>{
    if(!location.state || !location.state.auth){
      navigate('/');
    }
  },[]);

  const handleClick = () => {
    navigate('/Page11', {
        state: {
          auth: true
        },
      });
  };

  const play = () => {
    navigate('/Game', {
      state: {
        auth: true
      },
    });
  }


  const toggleInstructions = () => {
    decreaseScore(10);
    if(isDead){
      gameover(navigate);
    }
    setInstructionsVisible(!instructionsVisible);
  };

  return (
    <div className="Gameroom">
      <button className="playgame" onClick={play}>PLAY</button>
      
      <button className='instructions-btn' onClick={toggleInstructions}>
        </button>
        <Modal open={instructionsVisible} onClose={toggleInstructions}>
          <div className="instructions-bg">
            <div className="instructions">
            <div>
                1. If you want to escape the mansion, you need to end the ritual to send the spirits to their world!
              </div>
              <div>
                2. Now you need to find the chant which summons holy fire!
              </div>
              <br />
              <div>-- For User? --</div>
              <div style={{fontSize:"1.3rem", color:"#880808"}}>IMP : Make Sure Your Browser Zoom is Set to 100%. To adjust it, press (ctrl and +) or (ctrl + -). Ensure that you are Playing on Full Screen Only.</div>
              <div>
                1. Your Cursor Represents Your Hand!
              </div>
              <div>
                2. As you click Play on the wall craft game, your game will start ! Keep your hand in place until you make a plan to reach the Ending Point !
              </div>
              <div>
                3. You need to follow the specific path on the craft with youir palm ! 
              </div>
              <div>
                4. The paths will start narrowing and shortening as you move your palm over the path!
              </div>
              <div>
                5. If you think you need rest or you can't follow as they narrow or shortens too quickly, just stop , and the  path will stop shortening and narrowing , but be careful !
              </div>
              <div>
                6. Do not be too fast or too slow!
              </div>
              <div>
                7. As soon as you collect the chant, enter the next room through the door ! 
              </div>
            </div>
          </div>
        </Modal>
        <button className='escape-game-room' onClick={handleClick}></button>
    </div>
  );
}

export default Gameroom;
