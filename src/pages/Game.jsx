import { Footer } from '../components/Footer.jsx'
import { Navbar } from '../components/Navbar.jsx'
import { ModalGameOver } from '../components/Portals/ModalGameOver.jsx'
import { Question } from '../components/Question.jsx'
import { SelectCategory } from '../components/SelectCategory.jsx'
import { useQuiz } from '../hooks/useQuiz.js'

export function Game () {
  const { gameStarted, gameOver } = useQuiz()

  return (
    <>
      <main className='flex flex-col gap-10 w-full h-full bg-light-background dark:bg-dark-background'>
        <Navbar />
        <section className='flex justify-center items-center w-full'>
          <article className='flex justify-center items-center w-11/12'>
            {gameStarted ? <Question /> : <SelectCategory />}
            {gameOver ? <ModalGameOver /> : null}
          </article>
        </section>
        <Footer />
      </main>
    </>
  )
}
