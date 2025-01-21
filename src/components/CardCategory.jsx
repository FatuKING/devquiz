import { useQuiz } from '../hooks/useQuiz'

export function CardCategory ({ category, description, icon }) {
  const { startGame } = useQuiz()

  return (
    <>
      <article className='group flex p-4 rounded-xl border dark:border-dark-bgSecondary hover:scale-105 bg-light-bgSecondary dark:bg-dark-bgSecondary'>
        <section className='flex flex-col gap-4'>
          <div className='flex flex-row-reverse justify-between items-center'>
            <div className='group-hover:scale-105 transition-all duration-1000 text-4xl'>
              {icon}
            </div>

            <h3 className='text-2xl text-light-title dark:text-dark-title font-medium'>{category}</h3>
          </div>

          <p className='text-wrap text-lg w-11/12 text-light-paragraph dark:text-dark-paragraph'>{description}</p>

          <button className='text-lg md:text-xl border text-light-text dark:text-dark-text p-2 px-4 md:p-3 md:px-5 rounded' onClick={() => startGame(category)}>Selecionar</button>
        </section>
      </article>
    </>
  )
}
