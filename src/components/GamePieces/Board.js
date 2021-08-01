import {useState} from 'react';
import Square from './Square';
import styled from 'styled-components';

const GameBoard = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
`;

const Board = props =>{
    let playerTurn = props.turn;
    const [playCount, setPlayCount] = useState(0);
    const [boardValues, setBoardValues] = useState([
        [1, ""],
        [2, ""],
        [3, ""],
        [4, ""],
        [5, ""],
        [6, ""],
        [7, ""],
        [8, ""],
        [9, ""]
    ]);

    const checkWinState = boardValues =>{
        //top row
        if (boardValues[0][1] === playerTurn && boardValues[1][1] === playerTurn && boardValues[2][1] === playerTurn) {
          props.winnerDeclare(playerTurn);
        } //middle row
        else if (boardValues[3][1] === playerTurn && boardValues[4][1] === playerTurn && boardValues[5][1] === playerTurn) {
          props.winnerDeclare(playerTurn);
        } //bottom row
        else if ( boardValues[6][1] === playerTurn && boardValues[7][1] === playerTurn && boardValues[8][1] === playerTurn) {
          props.winnerDeclare(playerTurn);
        } //left column
        else if ( boardValues[0][1] === playerTurn && boardValues[3][1] === playerTurn && boardValues[6][1] === playerTurn) {
          props.winnerDeclare(playerTurn);
        } //middle column
        else if ( boardValues[1][1] === playerTurn && boardValues[4][1] === playerTurn && boardValues[7][1] === playerTurn) {
          props.winnerDeclare(playerTurn);
        } // right column
        else if (boardValues[0][1] === playerTurn && boardValues[3][1] === playerTurn && boardValues[6][1] === playerTurn) {
          props.winnerDeclare(playerTurn);
        } // left top diagnol
        else if ( boardValues[0][1] === playerTurn && boardValues[4][1] === playerTurn && boardValues[8][1] === playerTurn) {
          props.winnerDeclare(playerTurn);
        } // right top diagnol
        else if ( boardValues[2][1] === playerTurn && boardValues[4][1] === playerTurn && boardValues[6][1] === playerTurn) {
          props.winnerDeclare(playerTurn);
        } else if (playCount === 7){
            props.winnerDeclare("tie");
        }else{
            console.log("no winner, keep playing")
        }        
    }

    const setValue = value =>{
        let newArr = boardValues.map(i =>{
            if (i[0] === value) {
              return i = [value, playerTurn];
            } else {
              return i;
            }
        })
        setBoardValues(newArr);
        setPlayCount(playCount + 1);
        checkWinState(newArr);
        props.changeTurn(playerTurn);
    }

    return (
      <GameBoard>
        {boardValues.map((value) => (
          <Square
            click={() => setValue(value[0])}
            key={value[0]}
            character={value[1]}
          />
        ))}
        {console.log(playCount)}
      </GameBoard>
    );
}

export default Board;