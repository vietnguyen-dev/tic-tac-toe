import {useState} from 'react';
import NameFormError from "./NameFormError";
import styled from 'styled-components';

const InputDiv = styled.div`
  margin-top: 2%;
  margin-bottom: 2%;
`
const PlayerLabel = styled.label`
  font-size: 20px;
`
const NameInput = styled.input`
  width: 30%;
  border-radius: 5px;

  &:active{
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

const PlayerNamesForm = props =>{
    const [p1Name, setp1Name] = useState("");
    const [p2Name, setp2Name] = useState("");
    const [errorModal, setErrorModal] = useState(false);

    const resetPlayerNames = ()=>{
      setp1Name("");
      setp2Name("");
    }

    const changep1Name = event =>{
      setp1Name(event.target.value);
    }

    const changep2Name = event =>{
      setp2Name(event.target.value);
    }

    const submitPlayerNames = event =>{
        event.preventDefault();
       if (p1Name === p2Name){
         setErrorModal(true)
         resetPlayerNames();
       } else {
          const data = {
            player1Name: p1Name,
            player2Name: p2Name,
          };
          props.submitPlayerData(data, false);
          resetPlayerNames();
        } 
    }

    const changeErrorModal = boolParam =>{
      setErrorModal(boolParam);
    }

    return (
      <div>
        <form onSubmit={submitPlayerNames}>
          <InputDiv>
            <PlayerLabel>Player 1 Name</PlayerLabel>
            <br />
            <NameInput
              value={p1Name}
              onChange={changep1Name}
              type="text"
            />
          </InputDiv>
          <InputDiv>
            <PlayerLabel>Player 2 Name</PlayerLabel>
            <br />
             <NameInput value={p2Name} onChange={changep2Name} type="text" />
          </InputDiv>
          <SubmitButton type="submit">Submit</SubmitButton>
        </form>
        {errorModal && <NameFormError click={changeErrorModal}/>}
      </div>
    );
}
export default PlayerNamesForm;