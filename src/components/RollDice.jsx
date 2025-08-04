

import React, { useState } from 'react'
import Button from './Button'



const RollDice = () => {

  const [currentDice, setCurrentDice] = useState(0)

  const generateRandomNumber = (n)=>{
      return Math.floor(Math.random() * n)
  }

  const rollDice = ()=>{
    const randomNumber = generateRandomNumber(6)
    setCurrentDice(randomNumber)
  }

  return (
    <div className="flex flex-col items-center mt-12 gap-7">

    <div onClick={rollDice}>
      <img src={`/images/dice/dice_${currentDice}.png`} alt="" />
    </div>
    <p className='text-[24px]'>Click on Dice to roll</p>
    <Button text="Reset Score" isBlack={false}/>
    <Button text="Show Rules" isBlack={true}/>
    </div>
  )
}

export default RollDice
