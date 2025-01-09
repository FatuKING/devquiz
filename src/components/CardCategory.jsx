import { useQuiz } from '../hooks/useQuiz'

export function CardCategory ({ category, description, icon }) {
  const { startGame } = useQuiz()

  return (
    <>
      <article className='flex flex-col justify-between p-4 rounded-md hover:scale-105 bg-light-bgSecondary dark:bg-dark-bgSecondary'>
        <section className='flex flex-col gap-4 h-[300px] lg:h-[280px] w-[240px] xl:w-[260px] 2xl:w-[300px]'>
          <div className='flex flex-col gap-6'>
            <div className='text-5xl'>
              {icon}
            </div>

            <h3 className='text-xl text-light-title dark:text-dark-title font-medium'>{category}</h3>
          </div>

          <p className='text-wrap text-lg w-11/12 text-light-paragraph dark:text-dark-paragraph'>{description}</p>
        </section>

        <button className='text-lg md:text-xl border text-light-text dark:text-dark-text bg-light-button dark:bg-dark-button border-none p-2 px-4 md:p-3 md:px-5 rounded' onClick={() => startGame(category)}>Selecionar</button>
      </article>
    </>
  )
}
