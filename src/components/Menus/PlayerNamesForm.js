import {useState, useRef} from 'react';
import NameFormError from "./NameFormError";
import styled from 'styled-components';
import TwoPlayerForm from './TwoPlayerForm';
import SinglePlayerForm from './SinglePlayerForm';

const BackButton = styled.button`
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
    // const [p1Name, setp1Name] = useState("");
    // const [p2Name, setp2Name] = useState("");

    const p1Name = useRef();
    const p2Name = useRef();
    const [errorModal, setErrorModal] = useState(false);

    const resetPlayerNames = ()=>{
      p1Name.current.value = "";
      if (props.gameStyle === "Two Player"){
         p2Name.current.value = "";
      }
    }

    // const changep1Name = event =>{
    //   setp1Name(event.target.value);
    // }

    // const changep2Name = event =>{
    //   setp2Name(event.target.value);
    // }

    const submitPlayerNames = event =>{
        event.preventDefault();
        switch (props.gameStyle) {
          case true:
             if (p1Name.current.value === "") {
              setErrorModal(true);
              resetPlayerNames();
            } else {
              const data = {
                player1Name: p1Name.current.value
              };
              props.submitPlayerData(data, false);
              props.getGameStyle(props.gameStyle);
              resetPlayerNames();
            } 
            break;
          case false:
            if (p1Name.current.value === p2Name.current.value) {
              setErrorModal(true);
              resetPlayerNames();
            } else {
              const data = {
                player1Name: p1Name.current.value,
                player2Name: p2Name.current.value,
              };
              props.submitPlayersData(data, false);
              props.getGameStyle(props.gameStyle);
              resetPlayerNames();
            } 
            break;
          default:
            console.error(props.gameStyle);
            break;
        } 
    }

    const changeErrorModal = boolParam =>{
      setErrorModal(boolParam);
    }
    
    const backClick = () =>{
       switch (props.gameStyle) {
         case true:
             p1Name.current.value = "";
             props.setMenu(true);
           break;
         case false:
             p1Name.current.value = "";
             p2Name.current.value = "";
             props.setMenu(true);
           break;
         default:
           console.error(props.gameStyle);
           break;
       }
    }

    const ProperForm = () =>{
      if (props.gameStyle === true){
        return (
          <SinglePlayerForm
            gameType={props.gameStyle}
            player1={p1Name}
            submitNames={submitPlayerNames}
          />
        );
      } else if (props.gameStyle === false) {
        return (
              <TwoPlayerForm
                gameType={props.gameStyle}
                player1={p1Name}
                player2={p2Name}
                submitNames={submitPlayerNames}
              />
            );
      }
    }

    return (
      <>
        <BackButton onClick={backClick}>{"back"}</BackButton>
        <ProperForm />
        ;{errorModal && <NameFormError click={changeErrorModal} />}
      </>
    );
}
export default PlayerNamesForm;