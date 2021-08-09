import styled from "styled-components";

const InputDiv = styled.div`
  margin-top: 2%;
  margin-bottom: 2%;
`;
const PlayerLabel = styled.label`
  font-size: 20px;
`;
const NameInput = styled.input`
  width: 30%;
  border-radius: 5px;

  &:active {
    border: 2px solid blue;
  }
`;

const SubmitButton = styled.button`
  padding: 1% 3%;
  border-radius: 15px;
  border: 3px solid blue;
  color: blue;
  font-size: 20px;
  background-color: white;

  &:hover {
    border: 3px solid white;
    color: white;
    background-color: green;
  }
`;

const TwoPlayerForm = props =>{
    return (
      <form onSubmit={props.submitNames}>
        <h1>{props.gameType} Player Mode</h1>
        <InputDiv>
          <PlayerLabel>Player 1 Name</PlayerLabel>
          <br />
          <NameInput ref={props.player1} type="text" />
        </InputDiv>
        <InputDiv>
          <PlayerLabel>Player 2 Name</PlayerLabel>
          <br />
          <NameInput ref={props.player2} type="text" />
        </InputDiv>
        <SubmitButton type="submit">Submit</SubmitButton>
      </form>
    );
}

export default TwoPlayerForm;