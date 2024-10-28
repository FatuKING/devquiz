import { useQuiz } from '../hooks/useQuiz.js'
import { Loading } from './Loading.jsx'

export function Question () {
  const { currentQuestion, loading, nextQuiz, checkAnswer } = useQuiz()

  return (
    <>
      {loading
        ? <Loading />

        : <article className='relative w-2/3 h-96'>
          <h3 className='text-3xl'>{currentQuestion.question}</h3>
          <section className='grid grid-cols-2 gap-4 pt-40'>
            {currentQuestion.options.map((option, index) => (
              <button key={index} className='border border-white rounded p-2 text-xl' onClick={(e) => checkAnswer(e, option)}>{option}</button>
            ))}
          </section>

          <button className='absolute bottom-0 right-0 border p-2' onClick={() => nextQuiz()}>Siguiente</button>
          </article>}
    </>
  )
}
