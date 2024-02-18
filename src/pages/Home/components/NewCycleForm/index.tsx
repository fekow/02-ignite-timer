import { Cycle, NewCycleFormData } from '../..'
import { FormContainer, MinutesAmountInput, TaskInput } from './styles'
import { UseFormRegister } from 'react-hook-form'

interface NewCycleFormProps {
  register: UseFormRegister<NewCycleFormData>
  activeCycle?: Cycle
}

export function NewCycleForm({ register, activeCycle }: NewCycleFormProps) {
  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        list="task-suggestions"
        placeholder="Dê um nome para o seu projeto"
        id="task"
        disabled={!!activeCycle}
        {...register('task', { required: true })}
      />
      <datalist id="task-suggestions">
        <option value="Projeto 1" />
        <option value="Projeto 2" />
        <option value="Projeto 3" />
        <option value="banana" />
      </datalist>
      <label htmlFor="minutesAmount">Durante</label>
      <MinutesAmountInput
        placeholder="00"
        type="number"
        id="minutesAmount"
        disabled={!!activeCycle}
        step={5}
        min={1}
        max={60}
        {...register('minutesAmount', {
          required: true,
          valueAsNumber: true,
        })}
      />
      <span>minutos.</span>
    </FormContainer>
  )
}
