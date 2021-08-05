import './App.css';
import {useState} from 'react';
import MenuStart from './components/Menus/MenuStart';
import Game from './components/GamePieces/Game';

function App() {
  const [gameState, setGameState] = useState(true);
  const [players, setPlayers] = useState([]);

  const changeGameState = gameStateInput =>{
    setGameState(gameStateInput);
  }

  const setTwoPlayerNames = playerNames =>{
      setPlayers([
        playerNames.player1Name,
        playerNames.player2Name
      ]);
  }

  return (
    <div className="App">
      {gameState ? (
        <MenuStart
          getPlayerNames={setTwoPlayerNames}
          gameStateChange={changeGameState}
        />
      ) : (
        <Game names={players} gameStateChange={changeGameState} />
      )}
    </div>
  );
}

export default App;
