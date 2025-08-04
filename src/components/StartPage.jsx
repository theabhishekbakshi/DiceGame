
import React from 'react'
import Button from './Button'


const StartPage = ({ toggle }) => {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="md:w-[80vw] w-[100vw]  md:h-[70vh] flex h-full ">
        <div className="img md:h-[100%] h-[50%] w-[50%] flex items-center">
          <img src="/images/Game Page/dices 1.png" alt="" />
        </div>
        <div className="w-[50%]  flex justify-center self-center md:items-center mr-2">
          <div className=" h-[33%]  w-full flex flex-col justify-between items-end">
            <h1 className="text-9xl font-bold">DICE GAME</h1>
            <Button toggle={toggle} text="Play Now" isBlack={true}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StartPage
