import styled from 'styled-components';

const SquareCard = styled.div`
    border: 1px solid black;
    height: 250px;
    width: 250px;
`

const BigText = styled.p`
    font-size: 60px;
`

const Square = props =>{
    return (
      <SquareCard onClick={props.click}>
        <BigText>{props.character}</BigText>
      </SquareCard>
    );
}

export default Square;