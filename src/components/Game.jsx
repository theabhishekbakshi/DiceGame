import React, { useState } from "react";
import Box from "./Box";
import RollDice from "./RollDice";
import Button from "./Button";
import Rules from "./Rules";

const Game = () => {
  const boxArray = [1, 2, 3, 4, 5, 6];
  const [selectedNumber, setselectedNumber] = useState();
  const [score, setScore] = useState(0);
  const [currentDice, setCurrentDice] = useState(1);
  const [errorMessage, setErrorMessage] = useState("");
  const [showRules, setShowRules] = useState(false);

  
  // const generateRandomNumber = (n) => {
  //   return Math.floor(Math.random() * 6) + 1;
  // };


const handleScore = (diceValue) => {
  if (selectedNumber === diceValue) {
    setScore((prev) => prev + diceValue);
  }
  setselectedNumber(undefined);
};


const rollDice = () => {
  if (!selectedNumber) {
    setErrorMessage("Please select a number first!");
    return;
  }

  setErrorMessage("");
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  setCurrentDice(randomNumber);

  handleScore(randomNumber);
};



const resetGame = () => {
  setScore(0);
  setselectedNumber(undefined);
  setCurrentDice(1);
  setErrorMessage("");
};






  return (
    <div className="w-[100vw]">
      <div className="w-[90vw] m-auto mt-[30px] flex justify-between">
        <div className="flex flex-col items-center">
          <h1 className="text-[100px]">{score}</h1>
          <p className="text-[24px] font-medium">Total Score</p>
        </div>
        
        <div className="w-[40%] flex flex-col justify-between">
          {errorMessage && (
            <p className="text-red-500 text-lg font-semibold items-end">{errorMessage}</p>
          )}
          <div className="flex md:justify-between justify-around flex-wrap">
            {boxArray.map((value, i) => (
              <Box
                onClick={() => setselectedNumber(value)}
                isSelected={value === selectedNumber}
                key={i}
                num={value}
              />
            ))}
          </div>
          <p className="self-end text-[24px] font-bold">Select Number</p>
          
        </div>
      </div>

      <div className={`flex flex-col items-center ${showRules ? "md:mt-[-50px] mt-[0px] mb-2" : "mt-12"} gap-7`}>
        <div onClick={rollDice}>
          <img src={`/images/dice/dice_${currentDice}.png`} alt="" />
        </div>
        <p className="text-[24px]">Click on Dice to roll</p>
        <Button toggle={resetGame} text="Reset Score" isBlack={false} />
        <Button  text={showRules ? "Hide Rules" : "Show Rules"} toggle={() => setShowRules(!showRules)} isBlack={true} />
        {showRules && <Rules />}
      </div>
    </div>
  );
};

export default Game;
