import {useState} from 'react';
import Square from './Square';
import styled from 'styled-components';

const GameBoard = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
`;

const Board = props =>{
    let playerTurn = props.turn;
    // const [boardValue, setBoardValue] = useState([]);
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

    const checkWinState = () =>{
        console.log(playerTurn, boardValues[0][1], boardValues[1][1], boardValues[2][1]);
        if (boardValues[0][1] === "X" &&boardValues[1][1] === "X" &&boardValues[2][1] === "X") {
          props.winnerDeclare(playerTurn);
        }
    }

    const setValue = value =>{
        let updateValue = [value, playerTurn];
        let newArr = boardValues.map(i =>{
            if (i[0] === value) {
              return (i = updateValue);
            } else {
              return i;
            }
        })
        setBoardValues(newArr);
        checkWinState();
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
        {/* {console.log(boardValues)} */}
      </GameBoard>
    );
}

export default Board;