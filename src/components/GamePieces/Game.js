import { Fragment } from "react";
import SinglePlayer from "./SinglePlayer";
import TwoPlayer from "./TwoPlayer";

const Game = props => {
    const changeGameStatus = status => props.gameStateChange(status);

    return (
      <>
        {props.mode ? (
          <SinglePlayer />
        ) : (
          <TwoPlayer names={props.names} gameStateChange={changeGameStatus} />
        )}
      </>
    );
};

export default Game;
