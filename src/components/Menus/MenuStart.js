import {useState} from 'react';
import PlayerNamesForm from './PlayerNamesForm';


const MenuStart = props =>{
    const [menuState, setMenuState] = useState(true);
   
    const menuStateChange = () =>{
        setMenuState(false)
    }

    const getPlayerNames = (playerData, gameStateData) =>{
        props.getPlayerNames(playerData);
        props.gameStateChange(gameStateData);
    }


    return (
      <div>
        {menuState ? (
          <button onClick={menuStateChange}>START</button>
        ) : (
          <PlayerNamesForm submitPlayerData={getPlayerNames} />
        )}
      </div>
    );
}

export default MenuStart;