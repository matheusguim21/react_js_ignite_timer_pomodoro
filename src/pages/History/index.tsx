import { Trash } from '@phosphor-icons/react'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useContext } from 'react'
import { CyclesContext } from '../../contexts/CyclesContext'
import { ClearHistoryContainer, HistoryContainer, HistoryList, Status } from './styles'

export function History() {
  const { cycles, clearHistory } = useContext(CyclesContext)

  
  function handleClearHistory(){
    clearHistory()
    
  }
  

  return (
    <HistoryContainer>
      <div>
        <h1>Meu Histórico</h1>
        <ClearHistoryContainer
        onClick={handleClearHistory}
        >
          <span>Limpar Histórico</span>
          <Trash size={20}/>
        </ClearHistoryContainer>
      </div>

      <HistoryList>
        <table>
          <thead>
            <th>Tarefa</th>
            <th>Duração</th>
            <th>Início</th>
            <th>Status</th>
          </thead>
          <tbody>
            {cycles.map((cycle) => (
              <tr key={cycle.id}>
                <td>{cycle.task}</td>
                <td>
                  {`${cycle.minutesAmount}    
                  ${cycle.minutesAmount <= 1 ? 'minuto' : 'minutos'}`}
                </td>
                <td>
                  {formatDistanceToNow(new Date(cycle.startDate), {
                    addSuffix: true,
                    locale: ptBR,
                  })}
                </td>
                <td>
                  {cycle.finishedDate ? (
                    <Status statusColor="green">Conclúido</Status>
                  ) : cycle.interruptedDate ? (
                    <Status statusColor="red">Interrompido</Status>
                  ) : (
                    <Status statusColor="yellow">Em andamento</Status>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
