import { useQuiz } from '../hooks/useQuiz'

export function CardCategory ({ category, description, icon }) {
  const { startGame } = useQuiz()

  return (
    <>
      <article className='flex flex-col justify-between border p-4 rounded-md hover:scale-105 text-light-text dark:text-dark-text bg-white/30 border-white/40 dark:bg-black/30 dark:border-black/40 shadow-sm shadow-black dark:border-purple-800'>
        <section className='flex flex-col gap-10 h-[300px] lg:h-[280px] w-[240px] xl:w-[260px] 2xl:w-[300px]'>
          <div className='flex flex-col gap-4 items-center'>
            <div className='polygon flex justify-center items-center bg-purple-500 dark:bg-purple-700 text-2xl'>
              {icon}
            </div>

            <h3 className='text-2xl text-purple-600'>{category}</h3>
          </div>

          <p className='text-wrap text-xl w-11/12'>{description}</p>
        </section>

        <button className='text-lg md:text-xl border text-light-text dark:text-dark-text bg-purple-500 hover:bg-purple-600 dark:bg-purple-800 hover:dark:bg-purple-900 border-none p-2 px-4 md:p-3 md:px-5 rounded' onClick={() => startGame(category)}>Selecionar</button>
      </article>
    </>
  )
}
