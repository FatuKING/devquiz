export function TextBlock ({ title, text }) {
  return (
    <>
      <article className='flex flex-col gap-8'>
        <h2 className='text-4xl font-bold text-light-accent dark:text-purple-500'>{title}</h2>

        <p className='text-2xl text-light-text dark:text-dark-text w-4/5 font-semibold'>{text}</p>
      </article>

    </>
  )
}
