import { BtnStar } from '../components/BtnStar.jsx'
import { Navbar } from '../components/Navbar.jsx'
import { Question } from '../components/Question.jsx'
import { useQuiz } from '../hooks/useQuiz.js'

export function Game () {
  const { gameStarted } = useQuiz()

  return (
    <>
      <Navbar />
      <main className='flex w-full h-full bg-light-background dark:bg-dark-background'>
        <section className='flex justify-center items-center w-full'>
          {gameStarted ? null : <BtnStar />}

          {gameStarted ? <Question /> : null}
        </section>
      </main>
    </>
  )
}
