import { createPortal } from 'react-dom'
import { useThemes } from '../../hooks/useThemes'
import { useQuiz } from '../../hooks/useQuiz'
import { FaArrowLeft } from "react-icons/fa"

export function ModalGameOver () {
  const { darkMode } = useThemes()
  const { correctQuestion, currentCategory, time, resetGame } = useQuiz()

  const usedTime = 300 - time
  const bonusTime = time * 25
  const bonusHit = correctQuestion * 5000
  const penalty = (20 - correctQuestion) * 500 
  const points = bonusTime + bonusHit - penalty

  const minutos = Math.floor(usedTime / 60)
  const segundos = usedTime % 60

  const styleSuccesses = correctQuestion < 6 ? 'text-red-500' : correctQuestion > 15 ? 'text-esmerald-500' : 'text-yellow-500'

  const styleTime = usedTime > 150
    ? 'text-red-500'
    : usedTime > 240
      ? 'text-yellow-500'
      : 'text-emerald-500'

  return createPortal(
    <>
      <main className={`${darkMode ? '' : 'dark'} w-screen h-screen absolute `}>
        <div className='w-full h-full text-light-title dark:text-dark-title bg-light-background dark:bg-dark-background flex items-center justify-center text-light-text dark:text-dark-text'>
          <article className='flex flex-col bg-light-bgSecondary dark:bg-dark-bgSecondary p-4 rounded-lg gap-4 w-1/4'>
            <section className='flex flex-col gap-8 items-center text-2xl p-4 rounded relative'>
        
              <button onClick={resetGame} className='absolute left-4 top-6 text-lg'>  
              <FaArrowLeft></FaArrowLeft>
              </button>

              <h4 className='text-3xl'>Game Over</h4>

              <ul className='flex flex-col gap-4 w-full text-lg 2xl:text-xl text-light-paragraph dark:text-dark-paragraph'>
                <li className='flex justify-between'>
                  Categoría:
                  <span className='text-light-button dark:text-dark-button'>{currentCategory}</span>
                </li>

                <li className='flex justify-between'>
                  Aciertos:
                  <span className={styleSuccesses}>{correctQuestion}</span>
                </li>

                <li className='flex justify-between'>
                  Tiempo:
                  <span className={styleTime}>{`${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`}</span>
                </li>
              </ul>

              <ul className='flex flex-col justify-center items-center gap-2'>
                <li className='text-light-paragraph dark:text-dark-paragraph text-lg 2xl:text-xl font-medium'>
                  Puntuación
                </li>

                <li className='text-5xl font-semibold'>
                  {points > 0 ? points.toLocaleString('es-ES') : 0}
                </li>
              </ul>
            </section>

            <form action='' className='flex flex-col gap-3 w-full'>
              <label htmlFor='' className=''>
                <input className='p-3 bg-light-background dark:bg-dark-background focus:outline-none rounded w-full' type='text' placeholder='Nombre de usuarios' />
              </label>

              <button className='p-3 uppercase bg-light-button dark:bg-dark-button text-light-buttonText dark:text-dark-buttonText rounded' type='submit'>
                Registar
              </button>
            </form>
          </article>
        </div>
      </main>
    </>,
    document.body

  )
}
