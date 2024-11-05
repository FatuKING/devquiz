import { createPortal } from 'react-dom'
import { MdOutlineReplay } from 'react-icons/md'
import { FaClock, FaCircleInfo } from 'react-icons/fa6'
import { FaCheckCircle } from 'react-icons/fa'
import { IoIosPlay } from 'react-icons/io'
import { useThemes } from '../../hooks/useThemes'
import { useQuiz } from '../../hooks/useQuiz'

export function ModalGameOver () {
  const { darkMode } = useThemes()
  const { correctQuestion, currentCategory, points, time, setGameOver } = useQuiz()

  return createPortal(
    <>
      <main className={`${darkMode ? '' : 'dark'} w-screen h-screen absolute`}>
        <div className='w-full h-full bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-900 dark:to-slate-950 flex items-center justify-center'>
          <article className='grid grid-rows-4 grid-cols-4 gap-4'>
            <section className='row-start-1 row-end-4 col-span-4 gap-6 border flex flex-col justify-center items-center text-2xl p-4 rounded'>

              <h4 className='text-4xl'>Game Over</h4>

              <ul className='flex justify-around w-full text-2xl'>
                <li className='flex justify-between items-center  gap-2'>
                  <FaCircleInfo className='text-sky-600' />
                  <span>{currentCategory}</span>
                </li>

                <li className='flex justify-between items-center gap-2'>
                  <FaCheckCircle className='text-sky-600' />
                  <span>{correctQuestion}</span>
                </li>

                <li className='flex justify-between items-center gap-2'>
                  <FaClock className='text-sky-600' />
                  <span>{time}</span>
                </li>
              </ul>

              <ul className='flex flex-col justify-center items-center text-3xl'>
                <li>
                  Puntuación
                </li>

                <li>
                  {points}
                </li>
              </ul>

              <div className='flex gap-2 text-4xl'>
                <button className='bg-sky-600 rounded-lg p-1' onClick={() => setGameOver()}><MdOutlineReplay /></button>
                <button className='bg-sky-600 rounded-lg p-1'><IoIosPlay /></button>
              </div>
            </section>

            <form action='' className='border row-start-4 col-span-4 p-4 rounded text-2xl'>
              <label htmlFor='' className='col-span-4'>
                <input className='p-2 w-2/3 bg-transparent border border-r-0 focus:outline-none' type='text' placeholder='Nombre de usuarios' />
              </label>

              <button className='p-2 w-1/3 bg-sky-600 border border-sky-600' type='submit'>
                Registar
              </button>
            </form>
          </article>
        </div>
      </main>
    </>,
    document.getElementById('portals')

  )
}
