import { useState } from "react";
import Board from "./Board";
import WinScreen from "../StartMenu/WinScreen";
const Game = props => {
    const [playerTurn, setPlayerTurn] = useState([props.names[0], "X"]);
    const [winner, setWinner] = useState("");

    const changeCurrentPlayer = turnValue =>{
      switch(turnValue){
        case "X":
          setPlayerTurn([props.names[1], "O"]);
          break;
        case "O":
          setPlayerTurn([props.names[0], "X"]);
          break;
        default:
          console.error(`playerTurn: ${playerTurn}`)
      }
    }

    const deciperWinner = character =>{
      switch(character){
        case "X":
          setWinner(props.names[0]);
          break;
        case "O":
         setWinner(props.names[1]);
          break;
        default: 
          console.error(`playerTurn: ${playerTurn}`)
      }
    }

    const resetGame = gameState =>{
      props.gameStateChange(gameState);
    }

  return (
    <div>
      <h3>{playerTurn[0]}'s Turn</h3>
      <Board turn={playerTurn[1]} changeTurn={changeCurrentPlayer} winnerDeclare={deciperWinner}/>
      {
        winner && <WinScreen winner={winner} reset={resetGame}/>
      }
    </div>
  );
};

export default Game;
