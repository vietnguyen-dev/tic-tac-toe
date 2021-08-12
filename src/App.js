import './App.css';
import { useState } from 'react';
import MenuStart from './components/Menus/MenuStart';
import Game from './components/GamePieces/Game';

function App() {
  const [gameState, setGameState] = useState(true);
  const [players, setPlayers] = useState();
  const [gameMode, setGameMode] = useState();

  const changeGameState = gameStateInput => setGameState(gameStateInput);

  const setPlayerNames = playerNames => 
    setPlayers([ playerNames.player1Name, playerNames.player2Name ]);

  const setPlayerName = playerName => setPlayers([playerName.player1Name, "Computer"]);

  const setGameStyle = gameStyle => setGameMode(gameStyle);

  return (
    <div className="App">
      {gameState ? (
        <MenuStart
          getPlayerNames={setPlayerNames}
          getPlayerName={setPlayerName}
          gameStateChange={changeGameState}
          getGameStyle={setGameStyle}
        />
      ) : (
        <Game names={players} mode={gameMode} gameStateChange={changeGameState} />
      )}
    </div>
  );
}

export default App;
