import { useQuiz } from '../hooks/useQuiz'

export function SelectCategory ({ category, description }) {
  const { startGame } = useQuiz()

  return (
    <>
      <article className='flex flex-col justify-between border h-80 w-80 rounded-md p-6 hover:scale-105 text-light-text dark:text-dark-text bg-white/30 border-white/40 dark:bg-black/30 dark:border-black/40 shadow-sm shadow-black dark:border-purple-800'>
        <section className='flex flex-col gap-8'>
          <h3 className='text-2xl text-purple-600'>{category}</h3>

          <p className='text-xl'>{description}</p>
        </section>

        <button className='text-xl border text-light-text dark:text-dark-text bg-purple-500 hover:bg-purple-600 dark:bg-purple-800 hover:dark:bg-purple-900 border-none p-3 px-5 rounded' onClick={() => startGame(category)}>Selecionar</button>
      </article>
    </>
  )
}