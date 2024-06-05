import { styled } from "styled-components"

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
  width: 50%;
  border: 0;
  text-align: center;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button{
    -webkit-appearance: none;
    margin:0
  }

`

export const IncrementeDecrementeContainer = styled.div`

  width: 5rem;
  border-bottom: 2px solid ${props => props.theme["gray-500"]};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  button{
    background: transparent;
    border:0;
    color:  ${props => props.theme["gray-100"]};
    cursor: pointer;

    &:focus{
      box-shadow: none;

    }
    &:first-child:hover{
      color: ${props => props.theme["red-500"]};
    }
    &:hover{
      color: ${props => props.theme["green-500"]};
    }



  }
  
`