export function TextBlock ({ title, text }) {
  return (
    <>
      <article className='flex flex-col gap-8'>
        <h2 className='text-3xl font-semibold text-light-accent dark:text-dark-accent'>{title}</h2>

        <p className='text-xl text-light-text dark:text-dark-text w-4/5 font-semibold'>{text}</p>
      </article>

    </>
  )
}
