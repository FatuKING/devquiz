import { useQuiz } from '../hooks/useQuiz.js'
import { Chronometer } from './Chronometer.jsx'
import { Loading } from './Loading.jsx'

export function Question () {
  const { currentQuestion, loading, checkAnswer, isCorrect, selectedOption } = useQuiz()

  return (
    <>
      {loading
        ? <Loading />

        : <article className='relative w-2/3 h-96 text-light-text dark:text-dark-text'>
          <section className='flex justify-between items-center'>
            <h3 className='text-4xl font-semibold text-purple-500'>{currentQuestion.question}</h3>

            <Chronometer />
          </section>
          <section className='grid grid-cols-2 gap-6 pt-32'>
            {currentQuestion.options.map((option, index) => (
              <button 
              key={index} 
              onClick={() => checkAnswer(option)} 
              className={`rounded-xl p-2 h-16 text-xl 
                ${selectedOption === option && isCorrect === true ? 'bg-emerald-500 dark:bg-emerald-800' : ''}
                ${selectedOption === option && isCorrect === false ? 'bg-red-500 dark:bg-red-800' : ''}
                ${selectedOption !== option ? 'bg-black/10 border-black/20 dark:bg-white/10 border dark:border-white/20' : ''}`}>{option}</button>
            ))}
          </section>
          </article>}
    </>
  )
}
