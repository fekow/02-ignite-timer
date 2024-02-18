import { useContext } from 'react'
import { HistoryContainer, HistoryList, Status } from './styles'
import { CyclesContext } from '../../contexts/CycleContext'

export function History() {
  const { cycles } = useContext(CyclesContext)

  return (
    <HistoryContainer>
      <h1>Meu Histórico</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Inicio</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycles.map((cycle) => {
              return (
                <tr key={cycle.id}>
                  <td>{cycle.task}</td>
                  <td>{cycle.minutesAmount} minutos</td>
                  <td>{cycle.startDate.toLocaleDateString()}</td>
                  <td>
                    <Status
                      statusColor={
                        cycle.finishedDate
                          ? 'green'
                          : cycle.interruptedDate
                            ? 'red'
                            : 'yellow'
                      }
                    >
                      {cycle.finishedDate
                        ? 'Concluído'
                        : cycle.interruptedDate
                          ? 'Interrompido'
                          : 'Em andamento'}
                    </Status>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
