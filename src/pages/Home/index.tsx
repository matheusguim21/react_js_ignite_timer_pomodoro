import { zodResolver } from "@hookform/resolvers/zod";
import { HandPalm, Play } from "@phosphor-icons/react";
import { differenceInSeconds } from "date-fns";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { CountDownContainer, FormContainer, HomeContainer, MinutesAmountInput, Separator, StartCountdownButton, StopCountdownButton, TaskInput } from "./styles";

export function Home() {

  const [cycles, setCycles]= useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId]= useState<string | null>('')

  const [amountSecondsPast, setAmountSecondsPassed] = useState(0)

  
  interface Cycle{
    id: string;
    task:string;
    minutesAmount:number;
    startDate:Date;
    interruptDate?:Date
    finishedDate?:Date
  }


  const newCycleValidationSchema = z.object({
    task: z.string().min(1, "Informe a tarefa"),
    minutesAmount: z.number().min(5).max(60)
  })
  
  type NewCycleFormData = z.infer<typeof newCycleValidationSchema>
  
  function handleCreateNewCycle(data:NewCycleFormData){
    console.log("Dados do formulário", data);

    const id = String(new Date().getTime())
    const newCycle: Cycle ={
      id,
      task:data.task,
      minutesAmount:data.minutesAmount,
      startDate: new Date()
    }
    setCycles((prevState) => [...prevState, newCycle])

    setActiveCycleId(id)
    setAmountSecondsPassed(0)
    
    reset()
    
  } 
  function handleInterruptedCycle(){

    
    setCycles(
      state => 
      
      state.map((cycle)=>{
        if(cycle.id === activeCycleId){
          return {...cycle, interruptDate: new Date()}
        }else{
          return cycle
        }
      })
    )
    setActiveCycleId(null)
    
  }
  
  
  const { register, handleSubmit, watch, reset} = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleValidationSchema),
    defaultValues:{
      minutesAmount:0,
      task:''
    }
  });
  
  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  const totalSeconds = activeCycle? activeCycle.minutesAmount * 60: 0
  const currentSeconds = activeCycle? totalSeconds - amountSecondsPast: 0

  const minutesAmount = Math.floor(currentSeconds /60) ;

  const secondsAmount = currentSeconds % 60; 


  const minutes = String(minutesAmount).padStart(2, "0")
  const seconds = String(secondsAmount).padStart(2, "0")
  
  const task = watch("task")
  const isSubmitDisabled = !task;
  
  
  console.log(cycles);
  

  useEffect(()=>{
    let interval:number;
    if(activeCycle){


      interval = setInterval(()=>{
        const secondsDifference = differenceInSeconds(new Date(), activeCycle.startDate)
        
        if(secondsDifference >= totalSeconds){
          setCycles(
            state =>
      
            state.map((cycle)=>{
              if(cycle.id === activeCycleId){
                return {...cycle, finishedDate: new Date()}
              }else{
                return cycle
              }
            })
          )
          clearInterval(interval)
      
        }else{

        setAmountSecondsPassed(secondsDifference)
        }

      }, 1000)
    }
    if(!activeCycle){
      document.title = "Ignite Timer"
    }
    

   

    return ()=> {
      clearInterval(interval)
    }
  }, [activeCycle, totalSeconds, activeCycleId])
  
  useEffect(()=>{

    if(activeCycle){
      document.title = `${minutes}:${seconds}`
    }
    

  },[minutes,seconds])

  return (
    <HomeContainer>
      <form action="" onSubmit={handleSubmit(handleCreateNewCycle)} >
       <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput 
          type="text" 
          id="task" 
          placeholder="Dê um nome para o seu projeto" 
          list="task-suggesttions"
          disabled={!!activeCycle}

          {...register("task")}
          />

          <datalist id="task-suggesttions">

            <option value="Projeto 01"></option>
            <option value="Projeto 02"></option>
            <option value="Projeto 03"></option>
            <option value="Projeto 04"></option>
            <option value="Projeto 05"></option>


          </datalist>


          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmountInput 
          type="number"  
          id="minutesAmount" 
          step={5} min={5} max={60}  
          placeholder="00"
          disabled={!!activeCycle}
          {...register("minutesAmount", {valueAsNumber:true})}
          />
  
          <span>minutos.</span>
       </FormContainer>
  
          <CountDownContainer>
            <span>{minutes[0]}</span>
            <span>{minutes[1]}</span>
            <Separator>:</Separator>
            <span>{seconds[0]}</span>
            <span>{seconds[1]}</span>
          </CountDownContainer>
  
          { activeCycle ?(
            <StopCountdownButton type="button" 
            onClick={handleInterruptedCycle} >
                <HandPalm size={24}/>
                Interromper
            </StopCountdownButton>
          )
            :(
            <StartCountdownButton  type="submit" disabled={isSubmitDisabled} >
            <Play size={24}/>
            Começar
          </StartCountdownButton>
        )}
      </form>
    </HomeContainer>
  )
}
