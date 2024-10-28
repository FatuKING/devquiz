import { BtnStar } from '../components/BtnStar.jsx'
import { Navbar } from '../components/Navbar.jsx'
import { Question } from '../components/Question.jsx'
import { useQuiz } from '../hooks/useQuiz.js'

export function Game () {
  const { gameStarted } = useQuiz()

  return (
    <>
      <main className='flex w-full h-full bg-gradient-to-r from-slate-300 to-slate-400 dark:from-slate-800 dark:to-slate-900'>
        <Navbar />
        <section className='flex justify-center items-center w-full'>
          {gameStarted ? null : <BtnStar />}

          {gameStarted ? <Question /> : null}
        </section>
      </main>
    </>
  )
}
