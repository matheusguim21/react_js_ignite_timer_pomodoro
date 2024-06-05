import { differenceInSeconds } from 'date-fns'
import { ReactNode, createContext, useEffect, useReducer, useState } from 'react'
import {
  addNewCycleAction,
  clearHistoryAction,
  interruptCurrentCycleAction,
  markCUrrentCycleAsFinishedAction,
} from '../reducers/cycles/actions'
import { Cycle, CyclesReducer } from '../reducers/cycles/reducer'

interface CreateCycleData {
  task: string
  minutesAmount: number
}

interface CyclesContexType {
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  amountSecondsPassed: number
  cycles: Cycle[]
  maskCurrentCycleAsFinished: () => void
  setSecondsPassed: (seconds: number) => void
  interruptedCycle: () => void
  clearHistory: () => void
  createNewCycle: (cycle: CreateCycleData) => void
}

interface CyclesContextProviderProps {
  children: ReactNode
}

export const CyclesContext = createContext({} as CyclesContexType)

export function CyclesContextProvider({
  children,
}: CyclesContextProviderProps) {
  const [cyclesState, dispatch] = useReducer(
    CyclesReducer,

    {
      cycles: [],
      activeCycleId: null,
    },
    (initialState)=>{
      const storedStateAsJSON = localStorage.getItem("@ignite-timer:cycles-state-1.0.0")

      if(storedStateAsJSON){
        return JSON.parse(storedStateAsJSON)
      }
      return initialState
    }
  )
  const { cycles, activeCycleId } = cyclesState
  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(()=>{

    if(activeCycle){
      return differenceInSeconds(new Date(),new Date(activeCycle.startDate) )
    }

    return 0
  })


  function maskCurrentCycleAsFinished() {
    dispatch(markCUrrentCycleAsFinishedAction())

    // setCycles((state) =>
    //   state.map((cycle) => {
    //     if (cycle.id === activeCycleId) {
    //       return { ...cycle, finishedDate: new Date() }
    //     } else {
    //       return cycle
    //     }
    //   }),
    // )
  }
  function setSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds)
  }

  function createNewCycle(data: CreateCycleData) {
    console.log('Dados do formulário', data)

    const id = String(new Date().getTime())
    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    }

    dispatch(addNewCycleAction(newCycle))

    setAmountSecondsPassed(0)
  }

  function interruptedCycle() {
    
    dispatch(interruptCurrentCycleAction())
  }

  function clearHistory() {
    
    dispatch(clearHistoryAction())
  }


  useEffect(()=>{
    const stateJSON = JSON.stringify(cyclesState)
    localStorage.setItem("@ignite-timer:cycles-state-1.0.0", stateJSON)

  },[cyclesState])

  return (
    <CyclesContext.Provider
      value={{
        cycles,
        activeCycle,
        activeCycleId,
        amountSecondsPassed,
        maskCurrentCycleAsFinished,
        setSecondsPassed,
        createNewCycle,
        interruptedCycle,
        clearHistory
      }}
    >
      {children}
    </CyclesContext.Provider>
  )
}
