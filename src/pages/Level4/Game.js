import React, { useEffect, useState } from 'react';
import './Gameroom.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useScore } from "../../components/ScoreContext";
import Modal from "@mui/material/Modal";
import { gameover } from "../Dead/gameover";



function Game() {
  const { score, decreaseScore , isDead } = useScore();
  const navigate = useNavigate();
  const location = useLocation();
  if(isDead){
    gameover(navigate);
  }
  const [instructionsVisible, setInstructionsVisible] = useState(false);
 

  const [ischantpapervisible, setchantpapervisible] = useState(false);


  useEffect(()=>{
    if(!location.state || !location.state.auth){
      navigate('/');
    }
  },[]);

  const handleClick = () => {
    navigate('/Gameroom', {
        state: {
          auth: true
        },
      });
  };


  const restart = () => {
    if(isDead){
      gameover(navigate);
    }
    navigate('/Gameroom', {
        state: {
          auth: true
        },
      });
  };

  
  const [pathWidths, setPathWidths] = useState(
    // Initialize path widths as an array
    [
      { top: 570-60, left: 750-80, width: 65, height: 120 , type : 1,speed : 'fast' , no:'1'},
      { top: 432-60, left: 750-80, width: 65, height: 120 , type : 1,speed : 'fast' , no:'2'},
      { top: 570-60, left: 550-80, width: 200, height: 60 , type : 2,speed : 'slow', no:'3'},
      { top: 570-60, left: 815-80, width: 115, height: 60 , type : 1,speed : 'fast' , no:'4'},
      { top: 512-60, left: 605-80, width: 145, height: 40 , type : 2,speed : 'fast',no:'5'},
      { top: 280-60, left: 600-80, width: 50, height: 220 , type : 2,speed : 'fast',no:'6'},
      { top: 320-60, left: 650-80, width: 200, height: 50 , type : 2,speed : 'slow',no:'7'},
      { top: 530-60, left: 405-80, width: 200, height: 40 , type : 1,speed : 'fast',no:'8'},
      { top: 570-60, left: 405-80, width: 70, height: 60 , type : 2,speed : 'fast',no:'9'},
      { top: 330-60, left: 540-80, width: 60, height: 100 , type : 2,speed : 'fast',no:'10'},
      { top: 310-60, left: 480-80, width: 60, height: 120 , type : 2,speed : 'fast',no:'11'},
      { top: 432-60, left: 650-80, width: 100, height: 50 , type : 1,speed : 'fast',no:'12'},
      { top: 630-60, left: 325-80, width: 300, height: 50 , type : 2,speed : 'fast',no:'13'},
      { top: 440-60, left: 435-80, width: 165, height: 60 , type : 2,speed : 'fast',no:'14'},
      { top: 500-60, left: 435-80, width: 50, height: 30 , type : 1,speed : 'fast',no:'15'},
      { top: 480-60, left: 335-80, width: 50, height: 150 , type : 2,speed : 'fast',no:'16'},
      { top: 380-60, left: 335-80, width: 100, height: 100 , type : 2,speed : 'fast',no:'17'},
      { top: 310-60, left: 335-80, width: 50, height: 70 , type : 2,speed : 'fast',no:'18'},
      { top: 260-60, left: 335-80, width: 150, height: 50 , type : 2,speed : 'fast',no:'19'},
      { top: 280-60, left: 945-80, width: 70, height: 260 , type : 1,speed : 'slow',no:'20'},
      { top: 210-60, left: 795-80, width: 220, height: 70 , type : 1,speed : 'fast',no:'21'},
      { top: 280-60, left: 750-80, width: 100, height: 40 , type : 2,speed : 'slow',no:'22'},
      { top: 230-60, left: 650-80, width: 145, height: 50 , type : 2,speed : 'fast',no:'23'},
      { top: 215-60, left: 580-80, width: 70, height: 65 , type : 2,speed : 'fast',no:'24'},
      { top: 200-60, left: 455-80, width: 125, height: 50 , type : 2,speed : 'fast',no:'25'},
      { top: 370-60, left: 770-80, width: 175, height: 62 , type : 2,speed : 'fast',no:'26'},
    ]
  );
  //type 1 -- width short (right -  short)
  // type 2 -- height short (bottom - short)
  
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      if (!isGameOver) {
        const isCursorInPath = pathWidths.some((path) =>
          mouseX >= path.left &&
          mouseX <= path.left + path.width &&
          mouseY >= path.top &&
          mouseY <= path.top + path.height
        );
        if ((mouseX < 850 || mouseX > 1100 ||  mouseY < 480 || mouseY > 720) && (mouseX < 315 || mouseX > 375 || mouseY < 120 || mouseY > 200 ) && !isCursorInPath) {
          decreaseScore(10);
          setIsGameOver(true);
        }

        const updatedWidths = pathWidths.map((path) => {
          //modification in path positioning like path.left + 10 ... to adjust in all the systems
          if (
            mouseX >= path.left &&
            mouseX <= path.left + path.width &&
            mouseY >= path.top &&
            mouseY <= path.top + path.height
          ) {
           
            setTimeout(() => {
              let newWidth = path.width;
              let newHeight = path.height;
              if (path.type == 1) {
                newWidth-=1.5;
                if(path.speed == 'fast')  newWidth-=3;
              } else if(path.type == 2) {
                newHeight-=1.5;
                if(path.speed == 'fast')  newHeight-=3;
              }

              if (newWidth <= 0 || newHeight <= 0) {
                decreaseScore(10);
                setIsGameOver(true);
              }

              setPathWidths((prevPathWidths) =>
                prevPathWidths.map((p, index) =>
                  index === pathWidths.indexOf(path)
                    ? { ...p, width: newWidth, height: newHeight }
                    : p
                )
              );
            }, 30);
          }
          return path;
        });
        setPathWidths(updatedWidths);
      }

      setCursorX(mouseX);
      setCursorY(mouseY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isGameOver, pathWidths]);


  const chantpaper = () => {
    setchantpapervisible(!ischantpapervisible);
  };

  return (
    <div className="Game">
      <div className="start-point"></div>
      {isGameOver && (
        <div className="popup-container">
          <div className="game-over-popup">
            <h1>You have Lost blood , You need to Restart !</h1>
            <button onClick={restart}>RESTART</button>
          </div>
        </div>
      )}
    <div className="game-frame">
      {pathWidths.map((path, index) => (
        <div
          key={index}
          className={`path ${path.width > path.height ? 'path-horizontal-bg' : 'path-vertical-bg'}`}
          style={{
            width: path.width + 'px',
            height: path.height + 'px',
            marginTop: path.top + 'px',
            marginLeft: path.left + 'px',
          }}
        >
{/* {path.no} */}
        </div>
      ))}
    </div>
          
      <div className="cursor" style={{ left: cursorX + 'px', top: cursorY + 'px' }}></div>
      <button className="end-point" onClick={chantpaper}></button>
      <Modal open={ischantpapervisible} onClose={chantpaper}>
        <div className='chant'>
            <button onClick={handleClick} style={{marginLeft:'17%'}}>Remember The Chant!</button>
        </div>
     </Modal>
    </div>
  );
}

export default Game;
