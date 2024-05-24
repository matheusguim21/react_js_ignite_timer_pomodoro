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

export const FormContainer = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center; 
gap: 0.5rem;
color: ${props =>props.theme["gray-100"]};
font-size: 1.125rem;
font-weight: bold;
flex-wrap: wrap;




`
export const CountDownContainer = styled.div`

font-family: 'Roboto Mono', monospace;
font-size: 10rem;
font-weight: bold;
color: ${props => props.theme['gray-100']};



display: flex;
justify-content: center;
align-items: center;
gap: 1rem;


span{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 12.375rem;
  text-align: center;
  background-color: ${props => props.theme["gray-700"]};
  border-radius: 8px;
  width: 8rem;
}


`

export const Separator = styled.div`
  
  padding: 2rem 0;

  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;

  align-items: center;

  color: ${props =>props.theme["green-500"]};
  background-color: transparent;

`

const BaseInput = styled.input`

background-color: transparent;
height: 2.5rem;
border:0;
border-bottom: 2px solid ${props => props.theme["gray-500"]};

font-weight: bold;

font-size: 1rem;
padding: 0  0.5rem;


color: ${props => props.theme["gray-100"]};
&:focus{
  box-shadow: none;
  border-color: ${props => props.theme["green-500"]};

}


&::placeholder{
  box-shadow: none;
  border-color: ${props => props.theme["green-500"]};
}

`

export const TaskInput  = styled(BaseInput)`
flex: 1;
&::-webkit-calendar-picker-indicator{
  display: none  !important;
 
}


`

export const  MinutesAmountInput = styled(BaseInput)`

  width: 4rem;
  text-align: center;

`


export const PlayButtton = styled.button`

  display: flex;
  justify-content: center;
  align-items: center;


  background-color: ${props => props.theme["green-500"]};
  color: ${props=> props.theme["gray-100"]};

  width: 100%;
  height: 4rem;
  gap: 0.5rem;
  border:0;
  border-radius:8px;
  cursor: pointer;

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

