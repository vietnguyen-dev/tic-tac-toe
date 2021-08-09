import {Fragment} from 'react';
import styled from "styled-components";
 
const StartButton = styled.button`
  margin-bottom: 5%;
  padding: 1% 3%;
  border-radius: 15px;
  border: 3px solid blue;
  color: blue;
  font-size: 25px;
  background-color: white;

  &:hover {
    border: 3px solid white;
    color: white;
    background-color: green;
  }
`;
const OpenScreen = props =>{
    return (
      <>
        <h1> React Tac Toe</h1>
        <StartButton
          onClick={() => {
            props.setMenu(false);
            props.setGame("Single");
          }}
        >
          Single Player
        </StartButton>{" "}
        <br />
        <StartButton
          onClick={() => {
            props.setMenu(false);
            props.setGame("Two Player");
          }}
        >
          Two Player
        </StartButton>
      </>
    );
}

export default OpenScreen;