import { useQuiz } from '../hooks/useQuiz'

export function BtnStar () {
  const { startGame } = useQuiz()

  return (
    <>
      <button className='text-3xl border border-white p-3 pl-5 pr-5 shadow shadow-white' onClick={() => startGame()}>Iniciar juego</button>
    </>
  )
}
