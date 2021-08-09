import {useState} from 'react';
import PlayerNamesForm from './PlayerNamesForm';
import styled from 'styled-components';

const MenuStartDiv = styled.div`
  margin: 5% 7%;
  padding: 3% 5%;
  background-color: grey;
  border-radius: 25px;
  box-shadow: 10px 10px 10px pink;
`;

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

const MenuStart = props =>{
  const [menuState, setMenuState] = useState(true);
  const [gameMode, setGameMode] = useState("");

    const OpenScreen = () =>{
      return (
        <div>
          <h1> React Tac Toe</h1>
          <StartButton
            onClick={() => {
              setMenuState(false);
              setGameMode('single');
            }}
          >
            Single Player
          </StartButton> <br/>
          <StartButton
            onClick={() => {
              setMenuState(false);
              setGameMode("two-player");
            }}
          >
            Two Player
          </StartButton>
        </div>
      );
    }

    const getPlayerNames = (playerData, gameStateData) =>{
        props.getPlayerNames(playerData);
        props.gameStateChange(gameStateData);
    }

    return (
      <MenuStartDiv>
        {menuState ? 
         <OpenScreen/>
         : 
          <PlayerNamesForm gameStyle={gameMode} submitPlayerData={getPlayerNames} />
        }
       </MenuStartDiv>
    );
}

export default MenuStart;