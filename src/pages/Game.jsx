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
        <section className='flex justify-center items-center lg:w-full'>

          {gameStarted
            ? <Question />
            : <div className='flex flex-col gap-20'>
              <h3 className='text-3xl text-purple-600'>Elija una categoría para comenzar</h3>
              <div className='flex gap-20'>
                <SelectCategory category='Ciencia de datos' description='Descubre el poder de los datos' />
                <SelectCategory category='Programación' description='Desafía tu lógica y habilidades de codificación' />
                <SelectCategory category='Diseño web' description='Explora los fundamentos del diseño web' />
              </div>
            </div>}
          {gameOver ? <ModalGameOver /> : null}
        </section>
      </main>
    </>
  )
}
