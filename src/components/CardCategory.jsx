import { useQuiz } from '../hooks/useQuiz'

export function CardCategory ({ category, description, icon }) {
  const { startGame } = useQuiz()

  return (
    <>
      <article className='group flex flex-col justify-between p-4 rounded-xl border dark:border-dark-bgSecondary hover:scale-105 bg-light-bgSecondary dark:bg-dark-bgSecondary h-max-40'>
        <section className='flex flex-col gap-4 w-full'>
          <div className='flex flex-row-reverse justify-between items-center'>
            <div className='text-light-title dark:text-dark-title group-hover:text-light-button group-hover:dark:text-dark-button transition-all duration-700 text-4xl'>
              {icon}
            </div>

            <h3 className='text-2xl text-light-title dark:text-dark-title font-medium'>{category}</h3>
          </div>

          <p className='text-wrap text-lg text-light-paragraph dark:text-dark-paragraph pb-4'>{description}</p>
        </section>
        
        <button 
          className='text-lg text-light-title dark:text-dark-title group-hover:text-dark-title group-hover:bg-light-button group-hover:dark:bg-dark-button border border-light-button dark:border-dark-button text-light-text dark:text-dark-text p-2 px-4 rounded w-1/3 transition-all duration-700' 
          onClick={() => startGame(category)}>
            Selecionar</button>
      </article>
    </>
  )
}
