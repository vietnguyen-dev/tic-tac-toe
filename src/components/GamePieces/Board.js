import {useState} from 'react';
import Square from './Square';
import styled from 'styled-components';

const GameBoard = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
`;

const Board = props =>{
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

    const checkWinState = boardValues => {
      if (
       boardValues[0][1] === props.turn &&
       boardValues[1][1] === props.turn &&
       boardValues[2][1] === props.turn
     ) {
      endDeclare("win");
     } //middle row
     else if (
       boardValues[3][1] === props.turn &&
       boardValues[4][1] === props.turn &&
       boardValues[5][1] === props.turn
     ) {
       endDeclare("win");
     } //bottom row
     else if (
       boardValues[6][1] === props.turn &&
       boardValues[7][1] === props.turn &&
       boardValues[8][1] === props.turn
     ) {
       endDeclare("win");
     } //left column
     else if (
       boardValues[0][1] === props.turn &&
       boardValues[3][1] === props.turn &&
       boardValues[6][1] === props.turn
     ) {
       endDeclare("win");
     } //middle column
     else if (
       boardValues[1][1] === props.turn &&
       boardValues[4][1] === props.turn &&
       boardValues[7][1] === props.turn
     ) {
       endDeclare("win");
     } // right column
     else if (
       boardValues[0][1] === props.turn &&
       boardValues[3][1] === props.turn &&
       boardValues[6][1] === props.turn
     ) {
       endDeclare("win");
     } // left top diagnol
     else if (
       boardValues[0][1] === props.turn &&
       boardValues[4][1] === props.turn &&
       boardValues[8][1] === props.turn
     ) {
       endDeclare("win");
     } // right top diagnol
     else if (
       boardValues[2][1] === props.turn &&
       boardValues[4][1] === props.turn &&
       boardValues[6][1] === props.turn
     ) {
       endDeclare("win");
     } else if (playCount === 7) {
       endDeclare("tie");
     } else {
     }  
    }

    const endDeclare = endType =>{
      switch(endType){
        case "win":
          resetBoard()
          props.winnerDeclare(props.turn);
          break;
        case "tie":
           resetBoard();
         props.winnerDeclare("tie");
         break;
        default:
          console.error(endType);
          break;
      }
    }

    const setValue = value =>{
        let newArr = boardValues.map(i =>{
            if (i[0] === value) {
              return i = [value, props.turn];
            } else {
              return i;
            }
        })
        setBoardValues(newArr);
        checkWinState(newArr);
         setPlayCount(playCount + 1);
         props.changeTurn(props.turn);
    }

    const resetBoard = () =>{
      let newArr = boardValues.map((i) => {
          return i = [i[0], ""];
      });
      setBoardValues(newArr);
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
      </GameBoard>
    );
}

export default Board;