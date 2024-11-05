import { useEffect } from 'react'
import { useQuiz } from '../hooks/useQuiz'
import { fireworkEffect } from '../logic/fireworkEffect'

export function Chronometer () {
  const { time, setTime, setGameOver } = useQuiz()

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((time) => {
        if (time <= 1) {
          clearInterval(interval)
          setGameOver()
          fireworkEffect()
          console.log('¡El tiempo ha terminado!')
          return 0
        }
        return time - 1
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [setTime])

  const minutos = Math.floor(time / 60)
  const segundos = time % 60

  return (
    <div className='text-3xl'>
      {`${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`}
    </div>
  )
}
