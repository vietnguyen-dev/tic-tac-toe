import styled from 'styled-components';

const WinDiv = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
`;

const WinScreen = props =>{
    return(
        <WinDiv>
            <h3>{props.winner} Win!</h3>
            <button onClick={()=> props.reset(true)}>  PLAY AGAIN </button>
        </WinDiv>
    )
}

export default WinScreen;