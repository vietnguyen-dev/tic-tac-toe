import styled from 'styled-components';

const EndDiv = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
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
        <button onClick={() => props.playAgain(true)}> PLAY AGAIN </button>
        {/* <button onClick={() => props.reset(true)}> RESET </button> */}
      </EndDiv>
    );
}

export default EndScreen;