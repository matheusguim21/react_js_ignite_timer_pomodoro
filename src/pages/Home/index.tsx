import { Play } from "@phosphor-icons/react";
import { CountDownContainer, FormContainer, HomeContainer, MinutesAmountInput, PlayButtton, Separator, TaskInput } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <form action="" >
       <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput type="text" id="task" placeholder="Dê um nome para o seu projeto" list="task-suggesttions" />

          <datalist id="task-suggesttions">

            <option value="Projeto 01"></option>
            <option value="Projeto 02"></option>
            <option value="Projeto 03"></option>
            <option value="Projeto 04"></option>
            <option value="Projeto 05"></option>
          </datalist>


          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmountInput type="number"  id="minutesAmount" step={5} min={5} max={60}  placeholder="00"/>
  
          <span>minutos.</span>
       </FormContainer>
  
          <CountDownContainer>
            <span>0</span>
            <span>0</span>
            <Separator>:</Separator>
            <span>0</span>
            <span>0</span>
          </CountDownContainer>
  
          <PlayButtton  type="submit" >
            <Play size={24}/>
            Começar
          </PlayButtton>
      </form>
    </HomeContainer>
  )
}
