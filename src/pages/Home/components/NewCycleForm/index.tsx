import { Minus, Plus } from '@phosphor-icons/react'
import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'
import { CyclesContext } from '../../../../contexts/CyclesContext'
import { FormContainer, IncrementeDecrementeContainer, MinutesAmountInput, TaskInput } from './styles'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register,getValues, setValue } = useFormContext()

  const handleUpdateMinutesAmountInput = (value:number)=>{

    
      const currentMinutesAmount = getValues('minutesAmount');
      console.log(currentMinutesAmount);
      if(currentMinutesAmount === Number.isNaN){
        setValue("minutesAmount", 0)
      }
      if (currentMinutesAmount < 5 && value === -5) {
        return;
      }
  
      if (currentMinutesAmount > 55 && value === 5) {
        return;
      }
  
      setValue('minutesAmount', currentMinutesAmount + value);
    

  }

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        type="text"
        id="task"
        placeholder="Dê um nome para o seu projeto"
        list="task-suggesttions"
        disabled={!!activeCycle}
        {...register('task')}
      />

      <datalist id="task-suggesttions">
        <option value="Projeto 01"></option>
        <option value="Projeto 02"></option>
        <option value="Projeto 03"></option>
        <option value="Projeto 04"></option>
        <option value="Projeto 05"></option>
      </datalist>

      <label htmlFor="minutesAmount">durante</label>
     <IncrementeDecrementeContainer>
        <button type='button'
        onClick={()=> handleUpdateMinutesAmountInput(-5)}
        
        >
          <Minus size={16}/>
        </button>
        <MinutesAmountInput
          type="number"
          id="minutesAmount"
          min={5}
          max={60}
          placeholder="00"
          disabled={!!activeCycle}
          {...register('minutesAmount', { valueAsNumber: true })}
        />
        <button
        type='button'
        onClick={()=> handleUpdateMinutesAmountInput(5)}
        >
          <Plus size={16}/>
        </button>
     </IncrementeDecrementeContainer>

      <span>minutos.</span>
    </FormContainer>
  )
}
