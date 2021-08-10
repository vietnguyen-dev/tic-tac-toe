import { useState, useEffect, Fragment } from "react";
import Board from "./Board";
import EndScreen from "../Menus/EndScreen";

const SinglePlayer = (props) => {
  const [playerTurn, setPlayerTurn] = useState([props.names, "X"]);
  const [endState, setEndState] = useState("");

  useEffect(()=>{
      console.log("hello")
  }, []);

  const getTwoRandNum = () =>{
    let num1 = Math.floor(Math.random() * 3);
    let num2 = Math.floor(Math.random() * 3);
    return [num1, num2];
  }

  const changeCurrentPlayer = (turnValue) => {
    switch (turnValue) {
      case "X":
        setPlayerTurn([props.names[1], "O"]);
        break;
      case "O":
        setPlayerTurn([props.names[0], "X"]);
        break;
      default:
        console.error(`playerTurn: ${playerTurn}`);
    }
  };

  const deciperWinner = (character) => {
    switch (character) {
      case "X":
        setEndState(props.names[0]);
        break;
      case "O":
        setEndState(props.names[1]);
        break;
      case character:
        setEndState(character);
        break;
      default:
        console.error(`playerTurn: ${playerTurn}`);
    }
  };

  const startOver = (gameState) => {
    props.gameStateChange(gameState);
  };

  const playAgain = () => {
    setEndState("");
  };

  return (
    <>
      <h3>{playerTurn[0]}'s Turn</h3>
      <Board
        endingStatus={endState}
        turn={playerTurn[1]}
        changeTurn={changeCurrentPlayer}
        winnerDeclare={deciperWinner}
      />
      {endState && (
        <EndScreen ending={endState} restart={startOver} playOver={playAgain} />
      )}
    </>
  );
};

export default SinglePlayer;
