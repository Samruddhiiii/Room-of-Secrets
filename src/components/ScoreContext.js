// ScoreContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';


const ScoreContext = createContext();

export const useScore = () => {
  return useContext(ScoreContext);
};

export const ScoreProvider = ({ children }) => {
  const [score, setScore] = useState(500);
  const [isDead, setIsDead] = useState(false);

  // Load the score from local storage when the component mounts
  useEffect(() => {
    const storedScore = localStorage.getItem('score');
    if (storedScore) {
      setScore(parseInt(storedScore));
    }
  }, []);

  const increaseScore = (amount) => {
    setScore(score + amount);
    localStorage.setItem('score', score + amount); 
  };
 
  const decreaseScore = (amount) => {
    setScore(score - amount);  
    if(score - amount <= 0 ){
      setIsDead(true);
    }
    localStorage.setItem('score', score - amount); 
  };

  const clearScore = () => {
    localStorage.removeItem('score'); 
    setScore(500); 
    setIsDead(false); 
  };

  return (
    <ScoreContext.Provider value={{ score, increaseScore, decreaseScore , isDead , clearScore}}>
      {children}
    </ScoreContext.Provider>
  );
};
