import {useState} from 'react';

import styled from 'styled-components';

const SquareCard = styled.td`
    padding: 2% 4%;
    border: 1px solid black;
    height: 250px;
    width: 250px;
`

const BigText = styled.p`
    font-size: 60px;
`

const Square = props =>{
  const [filled, setFilled] = useState(false)
  // let elementId = props.id;
    // useEffect(()=>{

    //     document.getElementById(elementId).addEventListener("click", props.click);

    //   return () =>{
    //      document
    //        .getElementById(elementId)
    //        .removeEventListener("click", props.click);
    //   }
    // }, [props.children])

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