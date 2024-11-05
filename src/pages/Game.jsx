import { BtnStar } from '../components/BtnStar.jsx'
import { Navbar } from '../components/Navbar.jsx'
import { ModalGameOver } from '../components/Portals/modalGameOver.jsx'
import { Question } from '../components/Question.jsx'
import { useQuiz } from '../hooks/useQuiz.js'

export function Game () {
  const { gameStarted, gameOver } = useQuiz()

  return (
    <>
      <main className='flex w-full h-full bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-900 dark:to-slate-950'>
        <Navbar />
        <section className='flex justify-center items-center w-full'>

          {gameStarted ? <Question /> : <BtnStar />}
          {gameOver ? <ModalGameOver /> : null}
        </section>
      </main>
    </>
  )
}
