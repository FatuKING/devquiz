import { useQuiz } from '../hooks/useQuiz'

export function BtnStar () {
  const { startGame } = useQuiz()

  return (
    <>
      <button className='text-3xl border text-light-text dark:text-dark-text border-black dark:border-white p-3 pl-5 pr-5 shadow shadow-black dark:shadow-white hover:scale-105 hover:border-cyan-700 hover:dark:border-cyan-400 hover:shadow-cyan-700 hover:dark:shadow-cyan-400' onClick={() => startGame()}>Iniciar juego</button>
    </>
  )
}
