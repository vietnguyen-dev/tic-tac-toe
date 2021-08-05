import styled from 'styled-components';

const EndDiv = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: green;
`;

const PlayButton = styled.button`
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

const EndScreen = props =>{

    const GameState = () =>{
        if (props.ending !== 'tie'){
            return <h3>{props.ending} Win!</h3>;
        } else if (props.ending === "tie") {
          return <h3>It's a {`${props.ending}`}</h3>;
        }
    }

    return (
      <EndDiv>
        <GameState />
        <PlayButton onClick={() => props.playOver()}>
          PLAY AGAIN
        </PlayButton> <br />
        <PlayButton onClick={() => props.restart(true)}> 
          RESTART
        </PlayButton>
      </EndDiv>
    );
}

export default EndScreen;