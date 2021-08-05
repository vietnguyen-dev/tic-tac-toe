import {useState} from 'react';
import Square from './Square';
import styled from 'styled-components';

const GameBoard = styled.table`
    background-color: aquamarine;
    margin: auto;
`;

const Board = props =>{
    const [playCount, setPlayCount] = useState(0);
    const [boardValues, setBoardValues] = useState([
      [
        [1, ""], [2, ""], [3, ""]
      ],
      [
        [4, ""], [5, ""], [6, ""]
      ],
      [ 
        [7, ""], [8, ""], [9, ""]
      ]
    ]);

    const checkWinState = boardValues => {
     //top row
      if (
        boardValues[0][0][1] === props.turn &&
        boardValues[0][1][1] === props.turn &&
        boardValues[0][2][1] === props.turn
      ) {
        endDeclare("win");
      } //middle row
      else if (
        boardValues[1][0][1] === props.turn &&
        boardValues[1][1][1] === props.turn &&
        boardValues[1][2][1] === props.turn
      ) {
        endDeclare("win");
      } //bottom row
      else if (
        boardValues[2][0][1] === props.turn &&
        boardValues[2][1][1] === props.turn &&
        boardValues[2][2][1] === props.turn
      ) {
        endDeclare("win");
      } //left column
      else if (
        boardValues[0][0][1] === props.turn &&
        boardValues[1][0][1] === props.turn &&
        boardValues[2][0][1] === props.turn
      ) {
        endDeclare("win");
      } //middle column
      else if (
        boardValues[0][1][1] === props.turn &&
        boardValues[1][1][1] === props.turn &&
        boardValues[2][1][1] === props.turn
      ) {
        endDeclare("win");
      } // right column
      else if (
        boardValues[0][2][1] === props.turn &&
        boardValues[1][2][1] === props.turn &&
        boardValues[2][2][1] === props.turn
      ) {
        endDeclare("win");
      } // left top diagnol
      else if (
        boardValues[0][0][1] === props.turn &&
        boardValues[1][1][1] === props.turn &&
        boardValues[2][2][1] === props.turn
      ) {
        endDeclare("win");
      } // right top diagnol
      else if (
        boardValues[0][2][1] === props.turn &&
        boardValues[1][1][1] === props.turn &&
        boardValues[2][0][1] === props.turn
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

    const setValue = (value, row) =>{
      console.log(value, row)
       // i is each index in array
        let newArr = boardValues[row].map(i => { 
            if (i[0] === value) {
              return i = [value, props.turn];
            } else {
              return i;
            }
        });
        
        //arr is each array in boardValues
        let newFullArr = boardValues.map(arr =>{
          if ( arr === boardValues[row]){
            return newArr;
          } else {
            return arr;
          }
        });

        setBoardValues(newFullArr);
        checkWinState(newFullArr);
         setPlayCount(playCount + 1);
         props.changeTurn(props.turn);
    }

    //properly do this??
    const resetBoard = () =>{
      // i is each array
      let newArr = boardValues.map((i) =>{
        if (boardValues.findIndex(i) === 0){
          return [[1, ""], [2, ''], [3, '']];
        } else if (boardValues.findIndex(i) === 1){
          return [[4, ""], [5, ''], [6, '']];
        } else if (boardValues.findIndex(i) === 2){
          return [[1, ""], [2, ''], [3, '']];
        }
      })
    setBoardValues(newArr);
  }

    return (
      <GameBoard>
        <tbody>
          <tr>
            {boardValues[0].map((value) => (
              <Square
                click={() => setValue(value[0], 0)}
                key={value[0]}
                character={value[1]}
                id={`square${value[0]}`}
              />
            ))}
          </tr>
          <tr>
            {boardValues[1].map((value) => (
              <Square
                click={() => setValue(value[0], 1)}
                key={value[0]}
                character={value[1]}
                id={`square${value[0]}`}
              />
            ))}
          </tr>
          <tr>
            {boardValues[2].map((value) => (
              <Square
                click={() => setValue(value[0], 2)}
                key={value[0]}
                character={value[1]}
                id={`square${value[0]}`}
              />
            ))}
          </tr>
        </tbody>
      </GameBoard>
    );
}

export default Board;