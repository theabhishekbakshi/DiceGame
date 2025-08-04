
import React, { useState } from "react";
import Game from "./components/Game";
import StartPage from "./components/StartPage";

function App() {

  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGameStart = () =>{
    setIsGameStarted((!isGameStarted))
  }

  return (
    <>
    {isGameStarted ? <Game/> : <StartPage toggle={toggleGameStart}/>}
    </>
  );
}

export default App;
