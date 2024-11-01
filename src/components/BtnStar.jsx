import { useQuiz } from '../hooks/useQuiz'

export function BtnStar () {
  const { startGame } = useQuiz()

  return (
    <>
      <button className='text-3xl border text-light-text dark:text-dark-text border-black dark:border-white p-3 px-5' onClick={() => startGame()}>Iniciar juego</button>
    </>
  )
}
