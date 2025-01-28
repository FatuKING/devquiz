import { useQuiz } from '../hooks/useQuiz.js'
import { Chronometer } from './Chronometer.jsx'
import { Loading } from './Loading.jsx'

export function Question () {
  const { currentQuestion, loading, checkAnswer, isCorrect, selectedOption, indexCurrentQuestion } = useQuiz()

  return (
    <>
      {loading
        ? <Loading />

        : <article className='w-full flex flex-col gap-20 2xl:gap-40'>
          <section className='flex justify-between items-center'>
            <h3 className='text-2xl 2xl:text-3xl font-semibold text-light-title dark:text-dark-title'><span className='text-3xl 2xl:text-4xl text-light-buttonText dark:text-dark-buttonText bg-light-button dark:bg-dark-button px-2 rounded-full'>{indexCurrentQuestion + 1}</span> {currentQuestion.question}</h3>

            <Chronometer />
          </section>
          <section className='grid grid-cols-2 gap-6'>
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => checkAnswer(option)}
                className={`flex justify-center items-center rounded-full p-2 h-16 text-lg font-medium 
                ${selectedOption === option && isCorrect === true ? 'bg-emerald-500 dark:bg-emerald-800' : ''}
                ${selectedOption === option && isCorrect === false ? 'bg-red-500 dark:bg-red-800' : ''}
                ${selectedOption !== option ? 'bg-light-bgSecondary dark:bg-dark-bgSecondary focus:outline-none text-light-paragraph dark:text-dark-buttonText hover:font-semibold hover:border border-light-button dark:border-dark-button' : ''}`}
              >{option}
              </button>
            ))}
          </section>
          </article>}
    </>
  )
}
