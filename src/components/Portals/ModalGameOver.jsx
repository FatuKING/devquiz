import { createPortal } from 'react-dom'
import { useThemes } from '../../hooks/useThemes'
import { useQuiz } from '../../hooks/useQuiz'

export function ModalGameOver () {
  const { darkMode } = useThemes()
  const { correctQuestion, currentCategory, time, resetGame } = useQuiz()

  const usedTime = (300 - time)
  const prueba = 1 - ((usedTime / 60) / 10)
  const points = Math.ceil(correctQuestion * 50000 * prueba)

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
      <main className={`${darkMode ? '' : 'dark'} w-screen h-screen absolute`}>
        <div className='w-full h-full bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-900 dark:to-slate-950 flex items-center justify-center text-light-text dark:text-dark-text'>
          <article className='flex flex-col'>
            <section className='flex flex-col gap-8 items-center text-2xl p-4 rounded'>

              <h4 className='text-5xl'>Game Over</h4>

              <ul className='flex gap-8 w-full text-3xl'>
                <li className='flex gap-2'>
                  Categoria:
                  <span className='text-purple-500'>{currentCategory}</span>
                </li>

                <li className='flex gap-2'>
                  Aciertos:
                  <span className={styleSuccesses}>{correctQuestion}</span>
                </li>

                <li className='flex gap-2'>
                  Tiempo:
                  <span className={styleTime}>{`${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`}</span>
                </li>
              </ul>

              <ul className='flex flex-col justify-center items-center text-3xl'>
                <li>
                  Puntuación
                </li>

                <li className='text-5xl'>
                  {points}
                </li>
              </ul>
            </section>

            <form action='' className='text-2xl pt-4'>
              <label htmlFor='' className='col-span-4'>
                <input className='p-2 w-2/3 bg-white/30 dark:bg-black/30 focus:outline-none' type='text' placeholder='Nombre de usuarios' />
              </label>

              <button className='p-2 w-1/3 uppercase bg-purple-700' type='submit'>
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
