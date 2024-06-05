import styled from "styled-components";

export const HomeContainer = styled.main`
flex:1;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;



  form{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3.5rem;
  }

`



export const BaseCountdownButton = styled.button`

  display: flex;
  justify-content: center;
  align-items: center;


  color: ${props=> props.theme["gray-100"]};

  width: 100%;
  height: 4rem;
  gap: 0.5rem;
  border:0;
  border-radius:8px;
  cursor: pointer;



`

export const StartCountdownButton = styled(BaseCountdownButton)`

  


  background-color: ${props => props.theme["green-500"]};


  

  &:hover{
    background-color: ${props => props.theme["green-700"]};
  }
  &:disabled{
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(disabled):hover {
    background-color: ${props => props.theme["green-700"]};
  }


`

export const StopCountdownButton = styled(BaseCountdownButton)`

  

  background-color: ${props => props.theme["red-500"]};
 
  
  &:focus{
    box-shadow: 0 0 0 0.1rem ${(props) => props.theme.white};
  }

  &:disabled{
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(disabled):hover {
    background-color: ${props => props.theme["red-700"]};
  }


`

