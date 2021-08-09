import {useState} from 'react';
import OpenScreen from './OpenScreen';
import PlayerNamesForm from './PlayerNamesForm';
import styled from 'styled-components';

const MenuStartDiv = styled.div`
  margin: 5% 7%;
  padding: 3% 5%;
  background-color: grey;
  border-radius: 25px;
  box-shadow: 10px 10px 10px pink;
`;

const MenuStart = props =>{
  const [menuState, setMenuState] = useState(true);
  const [gameMode, setGameMode] = useState("");

    const getPlayerNames = (playerData, gameStateData) =>{
        props.getPlayerNames(playerData);
        props.gameStateChange(gameStateData);
    }

    const settingGameMode = mode =>{
      setGameMode(mode)
    }

    const settingMenuState = state =>{
      setMenuState(state);
    }

    return (
      <MenuStartDiv>
        {menuState ? (
          <OpenScreen setGame={settingGameMode} setMenu={settingMenuState} />
        ) : (
          <PlayerNamesForm
            setMenu={settingMenuState}
            gameStyle={gameMode}
            submitPlayerData={getPlayerNames}
          />
        )}
      </MenuStartDiv>
    );
}

export default MenuStart;