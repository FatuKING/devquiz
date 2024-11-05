import { useQuiz } from '../hooks/useQuiz.js'
import { Chronometer } from './Chronometer.jsx'
import { Loading } from './Loading.jsx'
import { FaArrowRight } from 'react-icons/fa'

export function Question () {
  const { currentQuestion, loading, nextQuiz, checkAnswer } = useQuiz()

  return (
    <>
      {loading
        ? <Loading />

        : <article className='relative w-2/3 h-96 text-light-text dark:text-dark-text'>
          <section className='flex justify-between items-center'>
            <h3 className='text-3xl font-semibold'>{currentQuestion.question}</h3>

            <Chronometer />
          </section>
          <section className='grid grid-cols-2 gap-6 pt-32 '>
            {currentQuestion.options.map((option, index) => (
              <button key={index} className='bg-slate-500/20 border-slate-400 dark:bg-transparent border dark:border-slate-400 rounded-xl p-2 text-xl' onClick={(e) => checkAnswer(e, option)}>{option}</button>
            ))}
          </section>

          <button className='absolute bottom-0 right-0 rounded p-2 pl-3 pr-3 font-semibold uppercase flex gap-2 items-center dark:bg-purple-800 hover:dark:bg-purple-800/90' onClick={() => nextQuiz()}>Siguiente  <FaArrowRight /></button>
          </article>}
    </>
  )
}
