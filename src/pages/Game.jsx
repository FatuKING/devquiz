import { Navbar } from '../components/Navbar.jsx'
import { ModalGameOver } from '../components/Portals/ModalGameOver.jsx'
import { Question } from '../components/Question.jsx'
import { SelectCategory } from '../components/SelectCategory.jsx'
import { useQuiz } from '../hooks/useQuiz.js'

export function Game () {
  const { gameStarted, gameOver } = useQuiz()

  return (
    <>
      <main className='flex flex-col gap-10 lg:gap-0 lg:flex-row w-full h-full bg-gradient-to-r from-slate-100 to-slate-300 dark:from-slate-900 dark:to-slate-950'>
        <Navbar />
        <section className='flex justify-center items-center w-full'>
          <article className='flex justify-center items-center w-11/12 lg:w-3/4'>
            {gameStarted ? <Question /> : <SelectCategory />}
            {gameOver ? <ModalGameOver /> : null}
          </article>
        </section>
      </main>
    </>
  )
}
