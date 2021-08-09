import {useState, useEffect, Fragment} from 'react';

import styled from 'styled-components';

const SquareCard = styled.td`
  padding: 2% 4%;
  border-bottom: 3px solid black;
  border-right: 3px solid black;
  height: 250px;
  width: 250px;
  border-radius: 25px;
  background-color: aquamarine;
`;

const BigText = styled.p`
    font-size: 60px;
`

const Square = props =>{
  const [filled, setFilled] = useState(false)

    useEffect(()=>{
      setFilled(false);
    }, [props.endState])

    const setSquareFill = () =>{
      props.click();
      setFilled(true);
    }

    return (
      <>
        {filled ? (
          <SquareCard id={props.id}>
            <BigText>{props.character}</BigText>
          </SquareCard>
        ) : (
          <SquareCard id={props.id} onClick={setSquareFill}>
            <BigText>{props.character}</BigText>
          </SquareCard>
        )}
      </>
    );
}

export default Square;