import { CountdownContainer, Separator } from './styles'
import { CyclesContext } from '../..'
import { useContext, useEffect } from 'react'
import { differenceInSeconds } from 'date-fns'

export function Countdown() {
  const {
    activeCycle,
    activeCycleId,
    markCurrentCycleAsFinished,
    amountSecondsPassed,
    setSecondsPassed,
  } = useContext(CyclesContext)

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0

  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondsAmount).padStart(2, '0')

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}:${seconds} - Ignite Timer`
    }
  }, [minutes, seconds, activeCycle])

  useEffect(() => {
    if (!activeCycle) {
      return
    }

    const interval = setInterval(() => {
      const secondsDifference = differenceInSeconds(
        new Date(),
        activeCycle.startDate,
      )
      if (secondsDifference >= totalSeconds) {
        markCurrentCycleAsFinished()
        clearInterval(interval)
        setSecondsPassed(totalSeconds)
      } else {
        setSecondsPassed(secondsDifference)
      }
    }, 1000)

    // Clear interval when the active cycle changes
    return () => clearInterval(interval)
  }, [
    activeCycle,
    totalSeconds,
    activeCycleId,
    markCurrentCycleAsFinished,
    setSecondsPassed,
  ])

  return (
    <CountdownContainer>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <Separator>:</Separator>
      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
    </CountdownContainer>
  )
}
