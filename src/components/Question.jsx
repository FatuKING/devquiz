import { useQuiz } from '../hooks/useQuiz.js'
import { Loading } from './Loading.jsx'
import { FaArrowRight } from 'react-icons/fa'

export function Question () {
  const { currentQuestion, loading, nextQuiz, checkAnswer } = useQuiz()

  return (
    <>
      {loading
        ? <Loading />

        : <article className='relative w-2/3 h-96 text-light-text dark:text-dark-text'>
          <h3 className='text-3xl text-cyan-700 dark:text-cyan-400 font-semibold'>{currentQuestion.question}</h3>
          <section className='grid grid-cols-2 gap-6 pt-40 '>
            {currentQuestion.options.map((option, index) => (
              <button key={index} className='bg-slate-50/10 border border-slate-100/10 rounded-xl p-2 text-xl' onClick={(e) => checkAnswer(e, option)}>{option}</button>
            ))}
          </section>

          <button className='absolute bottom-0 right-0 border rounded p-2 font-semibold uppercase flex gap-2 items-center' onClick={() => nextQuiz()}>Siguiente  <FaArrowRight /></button>
          </article>}
    </>
  )
}
