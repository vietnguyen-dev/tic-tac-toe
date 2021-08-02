import styled from "styled-components";

const OuterDiv = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,.5);
  z-index: 1;
`;

const InnerDiv = styled.div`
    margin: 2% 4%;
    padding: 1% 2%;
    border-radius: 15px;
    background-color: white;
`

const CloseButton = styled.button`
  border-radius: 15px;
  text-align: right;
  padding: 1% 2%;
`;

const NameFormError = props =>{
    return(
        <OuterDiv>
            <InnerDiv>
                <h2>Names Must Be Different</h2>
                <CloseButton onClick={()=> props.click(false)}>Close</CloseButton>
            </InnerDiv>
        </OuterDiv>
    )
}

export default NameFormError;